// Example usage of Mailchimp service
import MailchimpService from './mailchimpService';

// Initialize the service
const mailchimp = new MailchimpService();

// Example function to subscribe a user
export const subscribeUser = async (email: string, firstName?: string, lastName?: string) => {
  const result = await mailchimp.subscribeToNewsletter({
    email,
    firstName,
    lastName,
  });
  
  return result;
};

// Example function to check if Mailchimp API is accessible
export const checkMailchimpConnection = async () => {
  const isConnected = await mailchimp.ping();
  return isConnected;
};

// Usage example:
/*
subscribeUser('user@example.com', 'John', 'Doe')
  .then(result => {
    console.log(result.message);
  })
  .catch(error => {
    console.error('Subscription failed:', error);
  });
*/