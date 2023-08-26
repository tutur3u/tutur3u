'use client';

import React, { ReactElement } from 'react';
import useSWR from 'swr';
import NestedLayout from '../../../../components/layouts/NestedLayout';
import HeaderX from '../../../../components/metadata/HeaderX';
import { Divider } from '@mantine/core';
import { PlusIcon } from '@heroicons/react/24/solid';
import { openModal } from '@mantine/modals';
import BoardEditForm from '../../../../components/forms/BoardEditForm';
import { TaskBoard } from '../../../../types/primitives/TaskBoard';
import { showNotification } from '@mantine/notifications';
import Link from 'next/link';
import { useWorkspaces } from '../../../../hooks/useWorkspaces';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/navigation';

const WorkspaceBoardsPage = () => {
  const router = useRouter();
  const { ws } = useWorkspaces();

  const { t } = useTranslation();

  const tasksLabel = t('sidebar-tabs:tasks');

  const { data: boards } = useSWR<TaskBoard[]>(
    ws ? `/api/workspaces/${ws.id}/boards` : null
  );

  const createBoard = async ({
    wsId,
    board,
  }: {
    wsId: string;
    board: TaskBoard;
  }) => {
    if (!ws) return;
    const res = await fetch(`/api/workspaces/${wsId}/boards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: board.name,
      }),
    });

    if (!res.ok) {
      showNotification({
        title: 'Error',
        message: 'An error occurred while creating the document.',
        color: 'red',
      });
      return;
    }

    const { id } = await res.json();
    router.push(`/${wsId}/boards/${id}`);
  };

  const showBoardEditForm = () => {
    if (!ws) return;

    openModal({
      title: <div className="font-semibold">Create new board</div>,
      centered: true,
      children: (
        <BoardEditForm
          onSubmit={(board) => createBoard({ wsId: ws.id, board })}
        />
      ),
    });
  };

  return (
    <>
      <HeaderX label={`${tasksLabel} – ${ws?.name || 'Untitled Workspace'}`} />

      <div className="rounded-lg border border-zinc-300 bg-zinc-500/5 p-4 dark:border-zinc-800/80 dark:bg-zinc-900">
        <h1 className="text-2xl font-bold">
          Boards{' '}
          <span className="rounded-lg bg-purple-300/20 px-2 text-lg text-purple-300">
            {boards?.length || 0}
          </span>
        </h1>
        <p className="text-zinc-700 dark:text-zinc-400">
          A great way to organize your tasks into different categories and
          easily track their progress.
        </p>
      </div>

      <Divider className="my-4" />

      <button
        onClick={showBoardEditForm}
        className="flex items-center gap-1 rounded bg-blue-300/20 px-4 py-2 font-semibold text-blue-300 transition hover:bg-blue-300/10"
      >
        New board <PlusIcon className="h-4 w-4" />
      </button>

      <div className="mb-8 mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {ws?.id &&
          boards &&
          boards?.map((board) => (
            <Link
              href={`/${ws.id}/boards/${board.id}`}
              key={board.id}
              className="relative rounded-lg border border-zinc-800/80 bg-zinc-900 p-4 transition hover:bg-zinc-800/80"
            >
              <p className="line-clamp-1 font-semibold lg:text-lg xl:text-xl">
                {board.name || 'Untitled Document'}
              </p>
            </Link>
          ))}
      </div>
    </>
  );
};

WorkspaceBoardsPage.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};

export default WorkspaceBoardsPage;