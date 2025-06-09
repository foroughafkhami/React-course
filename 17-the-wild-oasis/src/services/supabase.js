import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hsjazofuntavqermolhp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzamF6b2Z1bnRhdnFlcm1vbGhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMzQ4OTUsImV4cCI6MjA2NDcxMDg5NX0.vvJNXQnkMw-Ugrhv10dSmgV3oemSyOzo7cIFOhWT5_Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
