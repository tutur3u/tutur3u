import StatisticCard from '@/components/cards/StatisticCard';
import { verifyHasSecrets } from '@/lib/workspace-helper';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import useTranslation from 'next-translate/useTranslation';
import { cookies } from 'next/headers';

export default async function UnitsStatistics({
  wsId,
  redirect = false,
}: {
  wsId: string;
  redirect?: boolean;
}) {
  const supabase = createServerComponentClient({ cookies });
  const { t } = useTranslation();

  const enabled = await verifyHasSecrets(wsId, ['ENABLE_INVENTORY'],
    redirect ? `/${wsId}` : undefined);

  const { count: units } = enabled
    ? await supabase
        .from('inventory_units')
        .select('*', {
          count: 'exact',
          head: true,
        })
        .eq('ws_id', wsId)
    : { count: 0 };

  if (!enabled) return null;

  return (
    <StatisticCard
      title={t('workspace-inventory-tabs:units')}
      value={units}
      href={`/${wsId}/inventory/units`}
    />
  );
}
