import useTranslation from 'next-translate/useTranslation';
import GradientHeadline from '../gradient-headline';

export default async function TermsPage() {
  const { t } = useTranslation('common');

  return (
    <div className="flex h-full w-full items-center justify-center text-2xl font-bold lg:text-4xl xl:text-5xl">
      <GradientHeadline>{t('coming-soon')} ✨</GradientHeadline>
    </div>
  );
}