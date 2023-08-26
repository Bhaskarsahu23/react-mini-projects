import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://zrsjfukvwepvkxqccbyc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpyc2pmdWt2d2Vwdmt4cWNjYnljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0NDMyOTEsImV4cCI6MjAwODAxOTI5MX0.METs1VYfmZUBkLA1XPCWh_YAW4oMXRAPfSSo5gQoDOA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
