'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useChat } from 'ai/react';
import { PaperAirplaneIcon } from '@heroicons/react/20/solid';
import { useEffect } from 'react';

const FormSchema = z.object({
  prompt: z.string().min(1).max(2048),
});

export default function ChatForm() {
  const { input, setInput, handleSubmit } = useChat({ id: 'default' });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const prompt = form.watch('prompt');

  useEffect(() => {
    setInput(prompt);
  }, [prompt, setInput]);

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-xl items-end gap-2"
      >
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  {...field}
                  value={input}
                  placeholder="Type your prompt here..."
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={
            !form.formState.isValid || form.formState.isSubmitting || !input
          }
        >
          <PaperAirplaneIcon className="h-5 w-5" />
        </Button>
      </form>
    </Form>
  );
}