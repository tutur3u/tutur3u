import { Tabs, TabsList } from '@/components/ui/tabs';
import TabNavigation from './tab-navigation';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  value?: string;
}

export default function MemberTabs({ value }: Props) {
  const { t } = useTranslation('ws-members');

  const allLabel = t('all');
  const joinedLabel = t('joined');
  const invitedLabel = t('invited');

  return (
    <Tabs value={value} defaultValue="all">
      <TabsList>
        <TabNavigation value="all" label={allLabel} />
        <TabNavigation value="joined" label={joinedLabel} />
        <TabNavigation value="invited" label={invitedLabel} />
      </TabsList>
    </Tabs>
  );
}
