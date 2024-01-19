import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lcbdwqmmcmbjafecnosw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjYmR3cW1tY21iamFmZWNub3N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwOTUyMTUsImV4cCI6MjAxNjY3MTIxNX0.Qafwvms5PP7UvC9_6AwTa4lRAjGSyQUjn7rOQvosaHU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
