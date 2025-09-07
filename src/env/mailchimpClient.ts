import mailchimp from '@mailchimp/mailchimp_marketing';

// Configure Mailchimp client
mailchimp.setConfig({
  apiKey: import.meta.env.VITE_MAILCHIMP_API_KEY,
  server: import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX,
});

export default mailchimp;