// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qifrpkevypzvebcbtlwn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpZnJwa2V2eXB6dmViY2J0bHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMjk1OTQsImV4cCI6MjA1OTgwNTU5NH0.FOTU8Zi0muE5cKO0uYscoXfpF49j0epgiPyloqlgqWg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);