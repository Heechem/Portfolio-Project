'use server';
import { getErrorMessage, validateString } from '@/lib/utils';
import { error } from 'console';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData: FormData) => {
  const senderEmail = FormData.get('senderEmail');
  const message = FormData.get('message');

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }

  if (!validateString(message, 50)) {
    return {
      error: 'Invalid message email',
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: 'ContactPortfolio <onboarding@resend.dev>',
      to: 'hichempeter@gmail.com',
      subject: 'Message from portfolio',
      reply_to: senderEmail as string,
      // text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
