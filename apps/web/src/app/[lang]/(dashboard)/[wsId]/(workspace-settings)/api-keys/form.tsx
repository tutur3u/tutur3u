import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { WorkspaceApiKey } from '@/types/primitives/WorkspaceApiKey';
import { Button } from '@/components/ui/button';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  data: WorkspaceApiKey;
  submitLabel?: string;
  onSubmit: (values: z.infer<typeof FormSchema>) => void;
}

const FormSchema = z.object({
  name: z.string().min(1),
  value: z.string().optional(),
});

export const ApiConfigFormSchema = FormSchema;

export default function ApiKeyForm({ data, submitLabel, onSubmit }: Props) {
  const { t } = useTranslation('ws-api-keys');

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    values: {
      name: data.name || '',
      value: data.value || undefined,
    },
  });

  const isDirty = form.formState.isDirty;
  const isValid = form.formState.isValid;
  const isSubmitting = form.formState.isSubmitting;

  const disabled = !isDirty || !isValid || isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('name')}</FormLabel>
              <FormControl>
                <Input placeholder="Name" autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {data?.value && (
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('value')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Value"
                    autoComplete="off"
                    {...field}
                    disabled
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button type="submit" className="w-full" disabled={disabled}>
          {submitLabel}
        </Button>
      </form>
    </Form>
  );
}
