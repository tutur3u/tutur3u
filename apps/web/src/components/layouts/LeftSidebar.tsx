import {
  HomeIcon,
  Cog6ToothIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  BuildingOffice2Icon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
  XMarkIcon,
  BellIcon,
} from '@heroicons/react/24/outline';

import SidebarLink from './SidebarLink';
import Logo from '../common/Logo';
import { SidebarProps } from '../../types/SidebarProps';
import { useAppearance } from '../../hooks/useAppearance';
import { Avatar, Divider, Popover, Tooltip } from '@mantine/core';
import { useUser } from '../../hooks/useUser';
import { useWorkspaces } from '../../hooks/useWorkspaces';
import { getInitials } from '../../utils/name-helper';
import { useState } from 'react';
import SidebarButton from './SidebarButton';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSessionContext } from '@supabase/auth-helpers-react';
import WorkspaceSelector from '../selectors/WorkspaceSelector';
import useTranslation from 'next-translate/useTranslation';
import CreateNewButton from './sidebar/CreateNewButton';
import SidebarLinkList from './sidebar/SidebarLinkList';
import SidebarTeamList from './sidebar/SidebarTeamList';

function LeftSidebar({ className }: SidebarProps) {
  const router = useRouter();

  const { sidebar, toggleSidebar } = useAppearance();
  const { supabaseClient } = useSessionContext();
  const { user } = useUser();

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    router.push('/');
  };

  const { ws, workspaceInvites, members } = useWorkspaces();

  const [userPopover, setUserPopover] = useState(false);

  const { t } = useTranslation('sidebar-tabs');

  const invite = t('invite');
  const moreMembers = t('more-members');

  const home = t('home');
  const notifications = t('notifications');

  const collapseSidebar = t('collapse-sidebar');
  const expandSidebar = t('expand-sidebar');

  const settings = t('common:settings');
  const logout = t('common:logout');

  return (
    <>
      <div
        className={`group fixed left-0 top-0 z-20 flex h-full items-start justify-start bg-zinc-900 transition-all duration-300 ${className}`}
      >
        <div
          className={`flex h-full w-16 flex-col border-r border-zinc-800/80 pb-2 pt-4 ${
            sidebar === 'open' && sidebar === 'open'
              ? 'w-full opacity-100 md:w-64'
              : 'pointer-events-none opacity-0 md:pointer-events-auto md:static md:opacity-100'
          } transition-all`}
        >
          <div className="relative mx-4 mb-2 flex items-center justify-between pb-1">
            <Logo
              alwaysShowLabel={sidebar === 'open'}
              showLabel={sidebar !== 'closed'}
            />

            <button
              className="rounded-lg bg-zinc-800 p-1.5 transition hover:bg-zinc-700 md:hidden"
              onClick={toggleSidebar}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          <Divider className="my-2" />

          {ws?.id && (
            <>
              <div className="mx-2">
                <Tooltip
                  label={
                    <div>
                      <div className="font-semibold">
                        {ws.name || 'Unnamed Workspace'}
                      </div>
                      <div className="text-xs font-semibold">
                        {members?.length || 0}{' '}
                        {(members?.length || 0) <= 1 ? 'member' : 'members'}
                      </div>
                    </div>
                  }
                  position="right"
                  offset={16}
                  disabled={sidebar === 'open'}
                >
                  <div className="rounded border border-zinc-700/50 bg-zinc-800/50 p-2 transition">
                    <div className="">
                      <div
                        className={`mb-1 flex ${
                          sidebar === 'closed'
                            ? 'items-center justify-center'
                            : 'justify-between gap-2 font-semibold'
                        }`}
                      >
                        <Link
                          href={`/${ws.id}`}
                          className="line-clamp-1 text-zinc-300 transition hover:text-zinc-100"
                        >
                          {sidebar === 'closed' ? (
                            <BuildingOffice2Icon className="w-5" />
                          ) : (
                            ws?.name || 'Unnamed Workspace'
                          )}
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Tooltip.Group>
                        <Avatar.Group
                          spacing="sm"
                          color="blue"
                          className={sidebar === 'closed' ? 'hidden' : ''}
                        >
                          {members &&
                            members.slice(0, 3).map((member) => (
                              <Tooltip
                                key={member.id}
                                label={
                                  <div className="font-semibold">
                                    <div>
                                      {member?.display_name || member?.email}
                                    </div>
                                    {member?.handle && (
                                      <div className="text-blue-300">
                                        @{member.handle}
                                      </div>
                                    )}
                                  </div>
                                }
                                color="#182a3d"
                              >
                                <Avatar color="blue" radius="xl">
                                  {getInitials(
                                    member?.display_name || member?.email
                                  )}
                                </Avatar>
                              </Tooltip>
                            ))}
                          {(members?.length || 0) > 3 && (
                            <Tooltip
                              label={
                                <div className="font-semibold">
                                  {(members?.length || 0) - 3} {moreMembers}
                                </div>
                              }
                              color="#182a3d"
                            >
                              <Avatar color="blue" radius="xl">
                                +{(members?.length || 0) - 3}
                              </Avatar>
                            </Tooltip>
                          )}
                        </Avatar.Group>
                      </Tooltip.Group>

                      {sidebar === 'closed' || (
                        <Link
                          href={`/${ws.id}/members`}
                          className="flex items-center gap-1 rounded-full bg-purple-300/10 px-4 py-0.5 font-semibold text-purple-300 transition hover:bg-purple-300/20"
                        >
                          <div>{invite}</div>
                          <UserPlusIcon className="w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </Tooltip>

                <Divider variant="dashed" className="my-2" />
              </div>

              <CreateNewButton
                sidebarOpened={sidebar === 'open'}
                hasWorkspace={!!ws?.id}
              />

              <Divider className="mt-2" />

              <div className="scrollbar-none my-2 h-full overflow-auto">
                {ws?.preset && (
                  <SidebarLinkList
                    wsId={ws.id}
                    wsPreset={ws.preset}
                    sidebarOpened={sidebar === 'open'}
                  />
                )}

                <Divider />

                <SidebarTeamList
                  wsId={ws.id}
                  sidebarOpened={sidebar === 'open'}
                />
              </div>
            </>
          )}

          {ws ? (
            <div className={`m-2 ${ws || 'h-full'}`}>
              <SidebarLink
                href={`/${ws.id}/notifications`}
                onClick={() => setUserPopover(false)}
                activeIcon={<BellIcon className="w-5" />}
                label={notifications}
                showTooltip={sidebar === 'closed'}
                trailingIcon={
                  <div
                    className={`flex aspect-square h-6 items-center justify-center rounded-lg bg-red-300/20 text-sm text-red-300 ${
                      (workspaceInvites?.length || 0) === 0 ? 'opacity-0' : ''
                    }`}
                  >
                    {(workspaceInvites?.length || 0) > 9
                      ? '9+'
                      : workspaceInvites?.length || 0}
                  </div>
                }
              />
            </div>
          ) : (
            <div className={`mx-2 h-full`}>
              <SidebarLink
                href={`/onboarding`}
                onClick={() => setUserPopover(false)}
                activeIcon={<HomeIcon className="w-5" />}
                label={home}
                showTooltip={sidebar === 'closed'}
              />
            </div>
          )}

          <Divider className="mb-2 hidden md:block" />

          <div className="mx-2 hidden md:block">
            <SidebarButton
              onClick={toggleSidebar}
              label={sidebar === 'closed' ? expandSidebar : collapseSidebar}
              activeIcon={
                sidebar === 'closed' ? (
                  <ChevronRightIcon className="w-5" />
                ) : (
                  <ChevronLeftIcon className="w-5" />
                )
              }
              showLabel={sidebar === 'open'}
              showTooltip={sidebar === 'closed'}
              className="w-full"
            />
          </div>

          {ws?.id && (
            <>
              <Divider className="my-2" variant="dashed" />
              <div className="mx-2 flex items-center justify-center gap-2">
                {sidebar === 'open' && (
                  <WorkspaceSelector className="w-full md:w-auto" />
                )}

                <Popover
                  opened={userPopover}
                  onChange={setUserPopover}
                  width={200}
                  offset={8}
                  position="top-start"
                >
                  <Popover.Target>
                    <Tooltip
                      label={
                        <div className="font-semibold">
                          <div>{user?.display_name || user?.email}</div>
                          {user?.handle && (
                            <div className="text-blue-300">@{user.handle}</div>
                          )}
                        </div>
                      }
                      disabled={userPopover}
                      offset={sidebar === 'closed' ? 20 : 16}
                      position="right"
                      color="#182a3d"
                    >
                      <Avatar
                        color="blue"
                        className={`cursor-pointer hover:bg-blue-500/10 ${
                          userPopover ? 'bg-blue-500/10' : ''
                        }`}
                        onClick={() => setUserPopover((o) => !o)}
                      >
                        {getInitials(user?.display_name || user?.email)}
                      </Avatar>
                    </Tooltip>
                  </Popover.Target>

                  <Popover.Dropdown className="grid gap-1 p-1">
                    {sidebar !== 'open' && (
                      <>
                        <WorkspaceSelector
                          showLabel
                          className="mx-2 mb-2"
                          onChange={() => setUserPopover(false)}
                        />
                        <Divider variant="dashed" />
                      </>
                    )}

                    <SidebarLink
                      href="/settings"
                      onClick={() => setUserPopover(false)}
                      activeIcon={<Cog6ToothIcon className="w-5" />}
                      label={settings}
                      defaultActive={false}
                      left
                    />

                    <Divider variant="dashed" />
                    <SidebarButton
                      onClick={() => {
                        setUserPopover(false);
                        handleLogout();
                      }}
                      activeIcon={<ArrowRightOnRectangleIcon className="w-5" />}
                      label={logout}
                      left
                    />
                  </Popover.Dropdown>
                </Popover>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default LeftSidebar;
