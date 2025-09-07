// ==============================================
// WARNING: SECURITY RISK
// ==============================================
// This file handles newsletter subscriptions directly from the client-side.
// This is NOT recommended for production applications as it exposes your API keys.
// Anyone can view your API keys by inspecting the browser's network requests or source code.
//
// For a production environment, you should create a backend API endpoint to handle
// newsletter subscriptions. The client would make a request to your backend, and your
// backend would then securely communicate with the email service provider.
//
// The provided guide was for a Next.js application, which supports backend API routes.
// This project is a Vite-based React application, which is frontend-only.
// The code has been adapted to work in this environment, but please be aware of the risks.
// ==============================================

import mailchimp from '@mailchimp/mailchimp_marketing';

// Mailchimp Service
class MailchimpService {
  constructor() {
    // This exposes your API key to the client-side.
    mailchimp.setConfig({
      apiKey: import.meta.env.VITE_MAILCHIMP_API_KEY,
      server: import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX,
    });
  }

  async subscribe(email: string, firstName = '', lastName = '') {
    try {
      const response = await mailchimp.lists.addListMember(import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID, {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      });
      return { success: true, data: response };
    } catch (error: any) {
      if (error.response?.body?.title === 'Member Exists') {
        return { success: false, error: 'Email is already subscribed', code: 'ALREADY_SUBSCRIBED' };
      }
      return { success: false, error: error.message };
    }
  }
}

// ConvertKit Service
class ConvertKitService {
  private apiKey: string;
  private formId: string;

  constructor() {
    // This exposes your API key to the client-side.
    this.apiKey = import.meta.env.VITE_CONVERTKIT_API_KEY;
    this.formId = import.meta.env.VITE_CONVERTKIT_FORM_ID;
  }

  async subscribe(email: string, firstName = '') {
    try {
      const response = await fetch(`https://api.convertkit.com/v3/forms/${this.formId}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: this.apiKey,
          email,
          first_name: firstName,
        }),
      });

      const data = await response.json();
      return response.ok ? { success: true, data } : { success: false, error: data.message || 'Subscription failed' };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}

// Resend Service
class ResendService {
  private apiKey: string;

  constructor() {
    // This exposes your API key to the client-side.
    this.apiKey = import.meta.env.VITE_RESEND_API_KEY;
  }

  async subscribe(email: string, firstName = '') {
    try {
      // Resend doesn't have a browser SDK, so this part is tricky.
      // The original guide used the 'resend' npm package which is for Node.js.
      // To make this work on the client, you would need to use their HTTP API directly.
      // However, this is highly insecure as it exposes your API key.
      
      // The following is a conceptual adaptation and is NOT SECURE.
      // It attempts to mimic the original guide's functionality.
      
      console.warn("ResendService: Using Resend from the client-side is highly insecure and not recommended.");

      // This is a placeholder for the welcome email logic.
      // In a real-world scenario, this should be handled by a backend server.
      console.log(`Sending welcome email to ${email}`);
      
      // This is a placeholder for the admin notification logic.
      console.log(`Notifying admin at ${import.meta.env.VITE_ADMIN_EMAIL} about new subscriber: ${email}`);

      return { success: true, message: 'Subscription successful (simulation)' };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}

// Email Service Factory
export function createEmailService() {
  const service = import.meta.env.VITE_EMAIL_SERVICE;
  
  switch (service) {
    case 'mailchimp': return new MailchimpService();
    case 'convertkit': return new ConvertKitService();
    case 'resend': return new ResendService();
    default: throw new Error('No email service configured. Make sure VITE_EMAIL_SERVICE is set in your .env file.');
  }
}
