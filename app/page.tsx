import LoginPage from "./login/page";

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ihlafdvyuimjarbctenc.supabase.co' || ''
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey )

export default function Home() {
  return <LoginPage />;
}
