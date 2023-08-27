import { ReactElement, useEffect, useState } from 'react';
import HeaderX from '../../../components/metadata/HeaderX';
import { PageWithLayoutProps } from '../../../types/PageWithLayoutProps';
import { enforceHasWorkspaces } from '../../../utils/serverless/enforce-has-workspaces';
import { useSegments } from '../../../hooks/useSegments';
import { useWorkspaces } from '../../../hooks/useWorkspaces';
import NestedLayout from '../../../components/layouts/NestedLayout';
import PaginationIndicator from '../../../components/pagination/PaginationIndicator';
import { Accordion, Divider } from '@mantine/core';
import PaginationSelector from '../../../components/selectors/PaginationSelector';
import ModeSelector, { Mode } from '../../../components/selectors/ModeSelector';
import { useLocalStorage } from '@mantine/hooks';
import AuditLogCard from '../../../components/cards/AuditLogCard';
import useSWR from 'swr';
import OperationMultiSelector from '../../../components/selectors/OperationMultiSelector';
import WorkspaceMemberMultiSelector from '../../../components/selectors/WorkspaceMemberMultiSelector';
import { AuditLog } from '../../../types/primitives/AuditLog';
import useTranslation from 'next-translate/useTranslation';

export const getServerSideProps = enforceHasWorkspaces;

const WorkspaceActivitiesPage: PageWithLayoutProps = () => {
  const { t } = useTranslation('workspace-tabs');

  const { setRootSegment } = useSegments();
  const { ws, wsId } = useWorkspaces();

  const activitiesLabel = t('activities');
  const loadingLabel = t('common:loading');

  useEffect(() => {
    setRootSegment([
      {
        content: ws?.name ?? loadingLabel,
        href: `/${wsId}`,
      },
      { content: activitiesLabel, href: `/${wsId}/activities` },
    ]);

    return () => setRootSegment([]);
  }, [ws, wsId, loadingLabel, activitiesLabel, setRootSegment]);

  const [activePage, setPage] = useState(1);

  const [ops, setOps] = useState<string[]>([]);
  const [userIds, setUserIds] = useState<string[]>([]);

  const [itemsPerPage, setItemsPerPage] = useLocalStorage({
    key: 'activities-items-per-page',
    defaultValue: 15,
  });

  const apiPath = ws?.id
    ? `/api/workspaces/${ws?.id}/activities?ops=${
        ops.length > 0 ? ops.join(',') : ''
      }&userIds=${
        userIds.length > 0 ? userIds.join(',') : ''
      }&page=${activePage}&itemsPerPage=${itemsPerPage}`
    : null;

  const { data: logsData } = useSWR<{ data: AuditLog[]; count: number }>(
    apiPath
  );

  const [mode, setMode] = useLocalStorage<Mode>({
    key: 'activities-mode',
    defaultValue: 'list',
  });

  const [selectedLog, setSelectedLog] = useState<string | null>(null);

  return (
    <>
      <HeaderX label={activitiesLabel} />

      {ws?.id && (
        <>
          <div className="rounded-lg border border-zinc-300 bg-zinc-500/5 p-4 dark:border-zinc-800/80 dark:bg-zinc-900">
            <h1 className="text-2xl font-bold">{activitiesLabel}</h1>
            <p className="text-zinc-700 dark:text-zinc-400">
              {t('ws-activities:description')}
            </p>
          </div>
          <Divider className="my-4" />
        </>
      )}

      <div className="flex min-h-full w-full flex-col ">
        <div className="grid items-end gap-4 md:grid-cols-2 xl:grid-cols-4">
          <ModeSelector mode={mode} setMode={setMode} />
          <PaginationSelector
            items={itemsPerPage}
            setItems={(size) => {
              setPage(1);
              setItemsPerPage(size);
            }}
          />
          <OperationMultiSelector ops={ops} setOps={setOps} />
          <WorkspaceMemberMultiSelector
            userIds={userIds}
            setUserIds={setUserIds}
          />
        </div>

        <Divider className="mt-4" variant="dashed" />
        <PaginationIndicator
          activePage={activePage}
          setActivePage={setPage}
          itemsPerPage={itemsPerPage}
          totalItems={logsData?.count}
        />

        <Accordion
          value={selectedLog}
          onChange={setSelectedLog}
          className={`grid gap-2 ${
            mode === 'grid' && 'md:grid-cols-2 xl:grid-cols-4'
          }`}
          variant="contained"
          classNames={{
            content:
              'border-t dark:border-zinc-300/10 border-zinc-500/10 dark:bg-zinc-900 dark:bg-zinc-500/5 pt-4 rounded-b',
            control:
              'rounded dark:bg-zinc-800/70 transition dark:hover:bg-zinc-800/70 hover:bg-zinc-100',
            item: 'rounded',
          }}
        >
          {logsData &&
            logsData.data?.map((log) => (
              <AuditLogCard
                data={log}
                key={`log-${log.id}`}
                isExpanded={selectedLog === `log-${log.id}`}
              />
            ))}
        </Accordion>
      </div>
    </>
  );
};

WorkspaceActivitiesPage.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout mode="workspace">{page}</NestedLayout>;
};

export default WorkspaceActivitiesPage;