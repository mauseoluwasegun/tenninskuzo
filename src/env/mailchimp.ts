// Mailchimp Integration Utilities
import MailchimpService from './mailchimpService';
import { validateEnv } from './index';

// Initialize Mailchimp service
let mailchimpService: MailchimpService | null = null;

/**
 * Initialize the Mailchimp service
 * @returns The MailchimpService instance
 */
export const initMailchimp = (): MailchimpService => {
  if (!mailchimpService) {
    // Validate environment variables
    const envErrors = validateEnv();
    if (envErrors.length > 0) {
      console.warn('Mailchimp environment validation errors:', envErrors);
    }
    
    mailchimpService = new MailchimpService();
  }
  
  return mailchimpService;
};

/**
 * Subscribe to the newsletter
 * @param email - The user's email address
 * @param firstName - The user's first name (optional)
 * @param lastName - The user's last name (optional)
 * @returns A promise that resolves to the subscription result
 */
export const subscribeToNewsletter = async (
  email: string,
  firstName?: string,
  lastName?: string
) => {
  const service = initMailchimp();
  return await service.subscribe(email, firstName, lastName);
};

/**
 * Check if Mailchimp API is reachable
 * @returns A promise that resolves to a boolean indicating connection status
 */
export const pingMailchimp = async (): Promise<boolean> => {
  const service = initMailchimp();
  return await service.ping();
};

// Export the service class for direct instantiation if needed
export { default as MailchimpService } from './mailchimpService';