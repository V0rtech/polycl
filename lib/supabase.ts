import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://pfdpyzthqjyybpetmzfw.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_N68cKTasS5yH5x73zHPDzg_StmRPbxv'

// Helper to create client only when needed and check for missing vars
export const getSupabaseClient = () => {
  // If env vars are set, they take precedence, otherwise use the hardcoded fallback
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://pfdpyzthqjyybpetmzfw.supabase.co'
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_N68cKTasS5yH5x73zHPDzg_StmRPbxv'
  
  if (!url || !key) {
    throw new Error('Missing Supabase environment variables')
  }
  return createClient(url, key)
}

// Fallback for build time if needed
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://pfdpyzthqjyybpetmzfw.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_N68cKTasS5yH5x73zHPDzg_StmRPbxv'
)
