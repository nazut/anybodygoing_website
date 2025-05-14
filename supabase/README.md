# Supabase Configuration

This directory contains the Supabase configuration files including migrations and edge functions for the AnybodyGoing platform.

## Migrations

The migrations directory contains SQL scripts that define the database schema:

- `20250520000000_event_and_sessions_tables.sql` - Creates the event_submissions and sessions tables

## Edge Functions

The functions directory contains Supabase Edge Functions:

- `session-tracking` - Captures session data including IP address for analytics

## Environment Variables

Required environment variables:

```
# Supabase credentials (for frontend)
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key

# For Edge Functions
SUPABASE_URL=your-project-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Deployment

### Migrations

1. Navigate to the Supabase dashboard
2. Go to the SQL Editor
3. Create a new query
4. Copy and paste the contents of a migration file
5. Run the query

### Edge Functions

Deploy the edge function using the Supabase CLI:

```bash
supabase functions deploy session-tracking
```

Or manually via the Supabase dashboard:

1. Navigate to the Supabase dashboard
2. Go to Edge Functions
3. Create a new function named "session-tracking"
4. Copy and paste the content of the function file
5. Deploy the function 