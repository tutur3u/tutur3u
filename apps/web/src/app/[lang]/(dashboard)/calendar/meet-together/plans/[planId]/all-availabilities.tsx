'use client';

import DatePlanner from './date-planner';
import useTranslation from 'next-translate/useTranslation';
import { MeetTogetherPlan } from '@/types/primitives/MeetTogetherPlan';
import { Timeblock } from '@/types/primitives/Timeblock';
import { useTimeBlocking } from './time-blocking-provider';

export default function AllAvailabilities({
  plan,
  timeblocks,
}: {
  plan: MeetTogetherPlan;
  timeblocks: Timeblock[];
}) {
  const { t } = useTranslation('meet-together-plan-details');
  const { planUsers, filteredUserIds } = useTimeBlocking();

  const totalUserCount =
    filteredUserIds.length === 0 ? planUsers.length : filteredUserIds.length;

  return (
    <div className="grid gap-2 text-center">
      <div className="font-semibold">{t('everyone_availability')}</div>

      <div className="flex items-center justify-center gap-2 text-sm">
        <div>
          0/{totalUserCount} {t('available')}
        </div>
        <div className="border-foreground/50 flex h-4 w-32 border">
          {Array.from({ length: totalUserCount + 1 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: `calc(100% / ${totalUserCount})`,
              }}
              className={`h-full ${
                i < totalUserCount ? 'border-foreground/50 border-r' : ''
              }`}
            >
              <div
                className={`h-full w-full ${
                  i === 0 ? 'bg-foreground/10' : 'bg-green-500/70'
                }`}
                style={{
                  opacity: i === 0 ? 1 : i / totalUserCount,
                }}
              />
            </div>
          ))}
        </div>

        <div>
          {totalUserCount}/{totalUserCount} {t('available')}
        </div>
      </div>

      <DatePlanner
        timeblocks={timeblocks}
        dates={plan.dates}
        start={plan.start_time}
        end={plan.end_time}
      />
    </div>
  );
}
