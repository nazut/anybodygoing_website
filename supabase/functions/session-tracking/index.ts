// Follow this setup guide to integrate the Deno runtime into your application:
// https://deno.land/manual/examples/supabase_oauth

import { serve } from "https://deno.land/std@0.131.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SessionData {
  id?: string;
  user_agent?: string;
  timezone?: string;
  locale?: string;
  screen_size?: string;
  platform?: string;
  referrer?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  
  try {
    // Get the method
    const { method } = req;
    
    // Get client IP
    const clientIp = req.headers.get('x-forwarded-for') || 
                     req.headers.get('CF-Connecting-IP') || 
                     req.headers.get('X-Real-IP') || 
                     '0.0.0.0';
                     
    if (method === "POST") {
      // Get the session data from the request
      const sessionData: SessionData = await req.json();
      
      // Create Supabase client
      const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
      const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
      const supabase = createClient(supabaseUrl, supabaseServiceKey);
      
      // Create a new session or update existing one
      if (sessionData.id) {
        // Update existing session
        const { data, error } = await supabase
          .from('sessions')
          .update({
            ip_address: clientIp,
            ...sessionData,
            last_seen_at: new Date().toISOString()
          })
          .eq('id', sessionData.id)
          .select('id');
          
        if (error) throw error;
        
        return new Response(
          JSON.stringify({ success: true, id: data?.[0]?.id }),
          { 
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 200 
          }
        );
      } else {
        // Create new session
        const { data, error } = await supabase
          .from('sessions')
          .insert([{
            ip_address: clientIp,
            ...sessionData,
            created_at: new Date().toISOString(),
            last_seen_at: new Date().toISOString()
          }])
          .select('id')
          .single();
          
        if (error) throw error;
        
        return new Response(
          JSON.stringify({ success: true, id: data?.id }),
          { 
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 201 
          }
        );
      }
    }
    
    // Method not allowed
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 405 
      }
    );
    
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400 
      }
    );
  }
}); 