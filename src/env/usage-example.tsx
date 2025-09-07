// Mailchimp Usage Example
// This file demonstrates how to integrate Mailchimp in your components

import { useState } from 'react';
import { subscribeToNewsletter, pingMailchimp } from './mailchimp';

/**
 * Example React component that uses Mailchimp integration
 */
export const MailchimpExampleComponent = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Subscribe to newsletter using our utility function
      const response = await subscribeToNewsletter(email, firstName);
      setResult(response);
    } catch (error) {
      setResult({ 
        success: false, 
        message: 'An error occurred while subscribing' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const checkConnection = async () => {
    setIsLoading(true);
    try {
      const isConnected = await pingMailchimp();
      setResult({
        success: isConnected,
        message: isConnected 
          ? 'Successfully connected to Mailchimp!' 
          : 'Failed to connect to Mailchimp'
      });
    } catch (error) {
      setResult({ 
        success: false, 
        message: 'An error occurred while checking connection' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Newsletter Signup</h2>
      
      <form onSubmit={handleSubscribe} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name (optional)
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john@example.com"
          />
        </div>
        
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
          
          <button
            type="button"
            onClick={checkConnection}
            disabled={isLoading}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50"
          >
            Test
          </button>
        </div>
      </form>
      
      {result && (
        <div className={`mt-4 p-3 rounded-md ${result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {result.message}
        </div>
      )}
      
      <div className="mt-6 text-sm text-gray-500">
        <p className="mb-2">Environment Setup:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Copy <code>.env.local.example</code> to <code>.env.local</code></li>
          <li>Add your Mailchimp API credentials</li>
          <li>Never commit <code>.env.local</code> to version control</li>
        </ul>
      </div>
    </div>
  );
};

export default MailchimpExampleComponent;