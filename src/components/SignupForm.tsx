import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { CheckCircle, Loader2 } from 'lucide-react';

// Create a single supabase client for the browser
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setErrorMessage('Please enter your email address');
      return;
    }

    setStatus('loading');
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ 
          email,
          subscribed_to_updates: true // Set based on checkbox value
        }]);

      if (error) throw error;
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error saving email:', error);
      setStatus('error');
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <section id="signup" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Waitlist</h2>
            <p className="text-xl text-gray-600">
              Be the first to know when we launch and get early access to connect with others at your favorite events.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={status === 'loading' || status === 'success'}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    status === 'error' ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  required
                />
                {status === 'error' && (
                  <p className="mt-1 text-red-500 text-sm">{errorMessage}</p>
                )}
              </div>

              <div className="flex items-center">
                <input
                  id="updates"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="updates" className="ml-2 block text-sm text-gray-700">
                  I want to receive updates and news via email
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-medium text-lg 
                          hover:bg-purple-700 transition-colors shadow-md flex items-center justify-center
                          ${status === 'success' ? 'bg-green-600 hover:bg-green-600' : ''}`}
              >
                {status === 'loading' && (
                  <Loader2 size={20} className="mr-2 animate-spin" />
                )}
                {status === 'success' && (
                  <CheckCircle size={20} className="mr-2" />
                )}
                {status === 'idle' && 'Join Waitlist'}
                {status === 'loading' && 'Signing Up...'}
                {status === 'error' && 'Try Again'}
                {status === 'success' && 'Thanks for Joining!'}
              </button>
            </form>

            {status === 'success' && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-center">
                  You've been added to our waitlist! We'll notify you when we launch.
                </p>
              </div>
            )}

            <div className="mt-6 text-center text-sm text-gray-500">
              By signing up, you agree to our{' '}
              <a href="#" className="text-purple-600 hover:underline">Terms of Service</a> and{' '}
              <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;