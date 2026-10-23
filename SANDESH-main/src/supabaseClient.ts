import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * Supabase Client Configuration
 *
 * To connect to your Supabase project:
 * 1. Create a project at https://supabase.com
 * 2. In your Project Settings -> API, copy your Project URL and Anon Public Key.
 * 3. Add them to your .env.local file:
 *    NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
 *    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
 *
 * If credentials are not provided or remain as default placeholders,
 * the application automatically operates in offline / mock mode with full UI functionality.
 */

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.EXPO_PUBLIC_SUPABASE_URL ||
  '';

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  '';

// Check if valid credentials are provided (ignoring empty or placeholder values)
export const isSupabaseConfigured: boolean = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl !== 'https://your-project-id.supabase.co' &&
  !supabaseUrl.includes('placeholder') &&
  !supabaseUrl.includes('your-project')
);

// Fallback dummy client instance to avoid import-time breakage when unconfigured
export const supabase: SupabaseClient = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://placeholder.supabase.co', 'placeholder-anon-key');

