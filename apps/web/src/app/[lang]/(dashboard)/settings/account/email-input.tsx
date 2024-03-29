'use client';

import { InputField } from '@/components/ui/custom/input-field';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { Check, Loader2 } from 'lucide-react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
  oldEmail?: string;
  newEmail?: string | null;
}

const FormSchema = z.object({
  email: z.string().email(),
});

export default function EmailInput({ oldEmail, newEmail }: Props) {
  const router = useRouter();
  const { t } = useTranslation('settings-account');

  const newEmailLabel = t('new-email');
  const currentEmailLabel = t('current-email');
  const changeEmailDescription = t('change-email-description');

  const [saving, setSaving] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: oldEmail || '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setSaving(true);

    const res = await fetch('/api/auth/email', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: data.email }),
    });

    if (res.ok) {
      toast({
        title:
          data.email !== oldEmail
            ? 'Email update initiated'
            : 'Reverted change',
        description:
          data.email !== oldEmail
            ? 'Confirmation emails have been sent to both emails.'
            : 'Email change has been reverted.',
      });

      router.refresh();
    } else {
      toast({
        title: 'An error occurred',
        description: 'Please try again.',
      });
    }

    form.reset();
    setSaving(false);
  }

  const email = form.watch('email');

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <div className="flex items-end gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <InputField
                    id="email"
                    placeholder="example@tuturuuu.com"
                    label={
                      newEmail
                        ? oldEmail === email
                          ? currentEmailLabel
                          : newEmailLabel
                        : undefined
                    }
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="icon"
            onClick={form.handleSubmit(onSubmit)}
            disabled={!oldEmail || oldEmail === email || saving}
          >
            {saving ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Check className="h-5 w-5" />
            )}
          </Button>
        </div>

        {newEmail && (
          <div className="grid gap-2">
            <InputField
              id="new_email"
              label={newEmailLabel}
              value={newEmail}
              disabled
            />

            <FormDescription className="md:max-w-[31rem]">
              {changeEmailDescription}
            </FormDescription>
          </div>
        )}
      </form>
    </Form>
  );
}
