import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ylpvmhncopqdjotlvkyj.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlscHZtaG5jb3BxZGpvdGx2a3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5OTk2NDksImV4cCI6MjA2NTU3NTY0OX0.5x5l6y_5yweeJOeHKvAp2mjDnF--fHJ91jH2Bwb99mY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
