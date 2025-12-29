-- ============================================
-- FIX FOR CONTACT FORM RLS ERROR
-- ============================================
-- Error: permission denied for table contact_messages
-- This SQL will fix the Row Level Security policy

-- First, drop any existing policies on contact_messages
DROP POLICY IF EXISTS "Public can insert contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Enable insert for public" ON contact_messages;
DROP POLICY IF EXISTS "Allow public inserts" ON contact_messages;

-- Create the correct INSERT policy
CREATE POLICY "Enable insert for authenticated and anon users" 
ON contact_messages 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Verify RLS is enabled
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Optional: Add a SELECT policy so you can view messages in dashboard
CREATE POLICY "Enable select for authenticated users only" 
ON contact_messages 
FOR SELECT 
TO authenticated
USING (true);
