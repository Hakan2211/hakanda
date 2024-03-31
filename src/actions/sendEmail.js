'use server';

import React from 'react';
import { validateString, getErrorMessage } from '@/lib/utils';
import { Resend } from 'resend';
import ReceiveEmail from '@/components/ContactForm/receiveEmail';

const resend = new Resend(process.env.RESEND_API);

export const sendEmail = async (values) => {
  const senderEmail = values.email;
  const message = values.message;

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid email',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'hakanda3d@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail,
      react: React.createElement(ReceiveEmail, {
        senderEmail: senderEmail,
        message: message,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
