'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from '@/components/ui/custom/tables/data-table-column-header';
import moment from 'moment';
import { UserGroup } from '@/types/primitives/UserGroup';
import { Translate } from 'next-translate';

export const getUserReportColumns = (t: Translate): ColumnDef<UserGroup>[] => [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('id')} />
    ),
    cell: ({ row }) => <div className="line-clamp-1">{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'user_id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('user_id')} />
    ),
    cell: ({ row }) => (
      <div className="line-clamp-1">{row.getValue('user_id')}</div>
    ),
  },
  {
    accessorKey: 'user_name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('user_name')} />
    ),
    cell: ({ row }) => (
      <div className="min-w-[8rem]">{row.getValue('user_name') || '-'}</div>
    ),
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('title')} />
    ),
    cell: ({ row }) => (
      <div className="min-w-[8rem]">{row.getValue('title') || '-'}</div>
    ),
  },
  {
    accessorKey: 'content',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('content')} />
    ),
    cell: ({ row }) => (
      <div className="line-clamp-2 min-w-[8rem] whitespace-pre-wrap">
        {row.getValue('content') || '-'}
      </div>
    ),
  },
  {
    accessorKey: 'feedback',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('feedback')} />
    ),
    cell: ({ row }) => (
      <div className="line-clamp-2 min-w-[8rem] whitespace-pre-wrap">
        {row.getValue('feedback') || '-'}
      </div>
    ),
  },
  {
    accessorKey: 'creator_name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('creator_name')} />
    ),
    cell: ({ row }) => (
      <div className="min-w-[8rem]">{row.getValue('creator_name') || '-'}</div>
    ),
  },
  {
    accessorKey: 'updated_at',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('updated_at')} />
    ),
    cell: ({ row }) => (
      <div>
        {row.getValue('updated_at')
          ? moment(row.getValue('updated_at')).format('DD/MM/YYYY, HH:mm:ss')
          : '-'}
      </div>
    ),
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={t('created_at')} />
    ),
    cell: ({ row }) => (
      <div>
        {row.getValue('created_at')
          ? moment(row.getValue('created_at')).format('DD/MM/YYYY, HH:mm:ss')
          : '-'}
      </div>
    ),
  },
  //   {
  //     id: 'actions',
  //     cell: ({ row }) => <SecretRowActions row={row} />,
  //   },
];
