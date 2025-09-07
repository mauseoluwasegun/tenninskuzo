// Mailchimp Service Test Utility
// This file demonstrates how to use the Mailchimp service

import { 
  initMailchimp, 
  subscribeToNewsletter, 
  pingMailchimp,
  getAudienceInfo
} from './mailchimp';

/**
 * Test the Mailchimp integration
 */
export const testMailchimpIntegration = async () => {
  console.log('Testing Mailchimp integration...');
  
  // Initialize the service
  const mailchimp = initMailchimp();
  
  // Test connection
  const isConnected = await pingMailchimp();
  console.log('Mailchimp connection:', isConnected ? 'SUCCESS' : 'FAILED');
  
  if (isConnected) {
    // Test getting audience info
    try {
      const audienceInfo = await getAudienceInfo();
      console.log('Audience info:', audienceInfo);
    } catch (error) {
      console.error('Error getting audience info:', error);
    }
  }
  
  return isConnected;
};

/**
 * Test newsletter subscription
 * @param email - Test email address
 * @param firstName - Test first name
 * @param lastName - Test last name
 */
export const testNewsletterSubscription = async (
  email: string,
  firstName?: string,
  lastName?: string
) => {
  console.log(`Testing newsletter subscription for ${email}...`);
  
  try {
    const result = await subscribeToNewsletter(email, firstName, lastName);
    console.log('Subscription result:', result);
    return result;
  } catch (error) {
    console.error('Subscription error:', error);
    return { success: false, message: 'Subscription failed', error };
  }
};

// Test file to demonstrate Mailchimp integration usage
import { subscribeToNewsletter, pingMailchimp, getAudienceInfo } from './mailchimp';

// Example usage
const testMailchimp = async () => {
  try {
    // Test connection
    const isConnected = await pingMailchimp();
    console.log('Mailchimp connection:', isConnected ? 'Successful' : 'Failed');
    
    // Test subscription (uncomment to test)
    // const subscriptionResult = await subscribeToNewsletter(
    //   'test@example.com',
    //   'Test',
    //   'User'
    // );
    // console.log('Subscription result:', subscriptionResult);
    
    // Test audience info (uncomment to test)
    // const audienceInfo = await getAudienceInfo();
    // console.log('Audience info:', audienceInfo);
  } catch (error) {
    console.error('Error testing Mailchimp integration:', error);
  }
};

// Run the test
testMailchimp();

export { testMailchimp };

// Example usage:
// testMailchimpIntegration();
// testNewsletterSubscription('test@example.com', 'Test', 'User');