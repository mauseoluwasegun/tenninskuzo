// Mailchimp Integration Demo
// This file demonstrates how to use the existing Mailchimp integration in the project

import { useNewsletter } from '@/hooks/useNewsletter';

/**
 * Example component that uses the newsletter hook
 */
export const NewsletterDemo = () => {
  const { subscribe, isLoading, isSubscribed } = useNewsletter();
  
  const handleSubscribe = async (email: string, firstName?: string) => {
    const result = await subscribe(email, firstName);
    return result;
  };
  
  return {
    handleSubscribe,
    isLoading,
    isSubscribed
  };
};

/**
 * Direct Mailchimp service usage example
 * This is for demonstration purposes only - the newsletter hook is the preferred approach
 */
export const directMailchimpDemo = async (email: string, firstName?: string, lastName?: string) => {
  try {
    // This would use the existing email service
    // Note: In the current implementation, this exposes API keys to the client
    // A better approach would be to use a backend API endpoint
    
    console.log('To subscribe to Mailchimp, use the useNewsletter hook in your components');
    console.log('Example usage:', { email, firstName, lastName });
    
    return {
      success: true,
      message: 'Demo: Would subscribe user to Mailchimp'
    };
  } catch (error) {
    console.error('Mailchimp demo error:', error);
    return {
      success: false,
      message: 'Demo: Error occurred'
    };
  }
};

// Export types for better TypeScript support
export type NewsletterResult = {
  success: boolean;
  message?: string;
  error?: string;
};

export type NewsletterHook = {
  subscribe: (email: string, firstName?: string) => Promise<{ success: boolean; error?: string }>;
  isLoading: boolean;
  isSubscribed: boolean;
  reset: () => void;
};