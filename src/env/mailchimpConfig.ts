// Mailchimp Configuration
const mailchimpConfig = {
  apiKey: import.meta.env.VITE_MAILCHIMP_API_KEY || '',
  serverPrefix: import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX || 'us1',
  listId: import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID || '',
};

export default mailchimpConfig;