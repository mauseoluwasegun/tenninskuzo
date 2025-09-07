import { useState } from 'react';
import toast from 'react-hot-toast';
import { createEmailService } from '@/lib/newsletter/emailServices';

export function useNewsletter() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const subscribe = async (email: string, firstName = '') => {
    setIsLoading(true);

    // Email validation
    const emailRegex = /^[^"s@]+@[^"s@]+\.["s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email format');
      setIsLoading(false);
      return { success: false, error: 'Invalid email format' };
    }

    try {
      // WARNING: This is calling the email service directly from the client-side,
      // which is a security risk as it can expose API keys.
      // In a production app, this should be a fetch call to your own backend API.
      const emailService = createEmailService();
      const result = await emailService.subscribe(email, firstName);

      if (result.success) {
        setIsSubscribed(true);
        toast.success('🎾 Welcome to the Tennis Family!', {
          duration: 5000,
          style: { background: '#10b981', color: 'white', fontWeight: '600' },
        });
        return { success: true };
      }
      else {
        const message = result.code === 'ALREADY_SUBSCRIBED' 
          ? "You're already part of our tennis family! 🎾"
          : result.error || 'Something went wrong. Please try again.';
        toast.error(message);
        return { success: false, error: result.error };
      }
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      toast.error('An unexpected error occurred. Please try again later.');
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setIsSubscribed(false);
  };

  return { subscribe, isLoading, isSubscribed, reset };
}
