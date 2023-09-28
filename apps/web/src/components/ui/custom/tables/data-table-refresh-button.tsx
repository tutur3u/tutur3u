'use client';

import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function DataTableRefreshButton() {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      size="sm"
      className="ml-auto hidden h-8 lg:flex"
      onClick={() => router.refresh()}
    >
      <RefreshCcw className="mr-2 h-4 w-4" />
      Refresh
    </Button>
  );
}
