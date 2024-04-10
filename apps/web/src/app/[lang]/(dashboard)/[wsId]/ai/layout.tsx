import { Navigation, NavLink } from '@/components/navigation';
import { getCurrentUser } from '@/lib/user-helper';
import { getWorkspace } from '@/lib/workspace-helper';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

export const dynamic = 'force-dynamic';

interface LayoutProps {
  params: {
    wsId: string;
  };
  children: React.ReactNode;
}

export default async function Layout({
  children,
  params: { wsId },
}: LayoutProps) {
  const { t } = useTranslation('workspace-ai-layout');

  const workspace = await getWorkspace(wsId);
  const user = await getCurrentUser();

  const navLinks: NavLink[] = [
    {
      name: t('overview'),
      href: `/${wsId}/ai`,
      matchExact: true,
    },
    {
      name: t('prompts'),
      href: `/${wsId}/ai/prompts`,
      // disabled: true,
    },
    {
      name: t('workflows'),
      href: `/${wsId}/ai/workflows`,
    },
    {
      name: t('pipelines'),
      href: `/${wsId}/ai/pipelines`,
      // disabled: true,
    },
  ];

  return (
    <div>
      <div className="scrollbar-none mb-4 flex gap-1 overflow-x-auto font-semibold">
        <Navigation
          currentWsId={wsId}
          currentRole={workspace?.role}
          currentUser={user}
          navLinks={navLinks}
        />
      </div>
      {children}
    </div>
  );
}
