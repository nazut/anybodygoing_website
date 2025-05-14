import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { CheckCircle, Loader2 } from 'lucide-react';

// Create a single supabase client for the browser
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Session tracking helper
const getSessionId = (): string | null => {
  return localStorage.getItem('session_id');
};

interface SignupFormProps {
  variant?: 'full' | 'compact';
  title?: string;
  description?: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ 
  variant = 'full', 
  title = 'Join Our Waitlist',
  description = 'Be the first to know when we launch and get early access to connect with others at your favorite events.'
}) => {
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
          subscribed_to_updates: true
        }]);

      if (error) throw error;
      
      // Update session to track waitlist signup
      const sessionId = getSessionId();
      if (sessionId) {
        await supabase
          .from('sessions')
          .update({
            joined_waitlist: true,
            waitlist_email: email
          })
          .eq('id', sessionId);
      }
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error saving email:', error);
      setStatus('error');
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  if (variant === 'compact') {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            disabled={status === 'loading' || status === 'success'}
            className={`flex-1 px-4 py-3 rounded-lg border ${
              status === 'error' ? 'border-red-300' : 'border-transparent'
            } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/90`}
            required
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={`px-6 py-3 rounded-lg font-medium text-white flex items-center justify-center
                      ${status === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'} 
                      transition-colors shadow-md`}
          >
            {status === 'loading' && <Loader2 size={20} className="mr-2 animate-spin" />}
            {status === 'success' && <CheckCircle size={20} className="mr-2" />}
            {status === 'idle' && 'Join Waitlist'}
            {status === 'loading' && 'Signing Up...'}
            {status === 'error' && 'Try Again'}
            {status === 'success' && 'Thanks!'}
          </button>
        </form>
        {status === 'error' && (
          <p className="mt-2 text-red-200 text-sm">{errorMessage}</p>
        )}
        {status === 'success' && (
          <p className="mt-2 text-green-200 text-sm">You've been added to our waitlist!</p>
        )}
      </div>
    );
  }

  return (
    <section id="signup" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-xl text-gray-600">
              {description}
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