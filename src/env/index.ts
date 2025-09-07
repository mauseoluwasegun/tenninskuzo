// Environment Configuration
// This file exports all environment variables with proper typing and validation

interface EnvConfig {
  // Mailchimp Configuration
  MAILCHIMP_API_KEY: string;
  MAILCHIMP_SERVER_PREFIX: string;
  MAILCHIMP_AUDIENCE_ID: string;
  
  // Application Configuration
  APP_NAME: string;
  APP_ENV: 'development' | 'production' | 'test';
  
  // API Configuration
  API_BASE_URL: string;
}

// Load environment variables with fallbacks
const config: EnvConfig = {
  // Mailchimp Configuration
  MAILCHIMP_API_KEY: import.meta.env.VITE_MAILCHIMP_API_KEY || '',
  MAILCHIMP_SERVER_PREFIX: import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX || 'us1',
  MAILCHIMP_AUDIENCE_ID: import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID || '',
  
  // Application Configuration
  APP_NAME: import.meta.env.VITE_APP_NAME || 'KUZO Tennis Academy',
  APP_ENV: (import.meta.env.VITE_APP_ENV as 'development' | 'production' | 'test') || 'development',
  
  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || '/api',
};

// Validate required environment variables
export const validateEnv = (): string[] => {
  const errors: string[] = [];
  
  if (!config.MAILCHIMP_API_KEY) {
    errors.push('VITE_MAILCHIMP_API_KEY is required');
  }
  
  if (!config.MAILCHIMP_AUDIENCE_ID) {
    errors.push('VITE_MAILCHIMP_AUDIENCE_ID is required');
  }
  
  return errors;
};

export default config;