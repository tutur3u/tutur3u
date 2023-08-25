'use client';

import { Navigation } from './navigation';

interface LayoutProps {
  params: {
    wsId?: string;
  };
  children: React.ReactNode;
}

export default function Layout({ children, params: { wsId } }: LayoutProps) {
  const navLinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'AI',
      href: '/ai',
    },
    {
      name: 'Workspace',
      href: `/${wsId}`,
    },
    {
      name: 'Members',
      href: `/${wsId}/members`,
    },
    {
      name: 'Activities',
      href: `/${wsId}/activities`,
    },
    {
      name: 'Settings',
      href: `/${wsId}/settings`,
    },
  ];

  return (
    <div>
      <div className="flex gap-4 p-4 font-semibold md:px-8 lg:px-16 xl:px-32">
        <Navigation navLinks={navLinks} />
      </div>

      <div className="p-4 md:p-8 lg:p-16 xl:px-32">{children}</div>
    </div>
  );
}
