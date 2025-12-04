
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tmxrivmyvmjtenhoxudm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRteHJpdm15dm1qdGVuaG94dWRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNjY5NDUsImV4cCI6MjA3OTY0Mjk0NX0.WrXlkZ4sHj_IpzdSDV-2x1oIovbt1u56anjJVcQUeTg';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;