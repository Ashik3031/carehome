import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const SERVICE_ID = 'SERVICE_ID';
const PUBLIC_KEY = 'PUBLIC_KEY';

interface EmailParams {
  name: string;
  email: string;
  phone: string;
  [key: string]: string;
}

export async function sendEmail(templateId: string, params: EmailParams) {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      templateId,
      params,
      PUBLIC_KEY
    );

    if (response.status === 200) {
      toast.success("We'll get back to you shortly.");
      return true;
    }

    return false;
  } catch (error) {
    console.error('Email error:', error);
    toast.error('Something went wrong. Please try WhatsApp or email us directly.');
    return false;
  }
}
