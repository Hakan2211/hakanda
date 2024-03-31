'use client';

import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormMessage,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { sendEmail } from '../../actions/sendEmail';
import { toast } from 'sonner';

const ContactFormSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

function ContactForm() {
  const form = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  });

  const handleSubmit = async (values) => {
    sendEmail(values);
    form.reset();
    toast('Email was sent!');
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel className="text-[var(--text-color-primary-600)]">
                Email
              </FormLabel>
              <FormControl>
                <Input placeholder="Type your email" {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel className="text-[var(--text-color-primary-600)]">
                Message
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="relative mt-6 z-10 bg-[var(--text-color-primary-100)] text-yellow-600 hover:bg-[var(--text-color-primary-200)] transition-bg duration-300 ease-in-out"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
