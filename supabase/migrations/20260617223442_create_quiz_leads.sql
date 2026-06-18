CREATE TABLE quiz_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  goal text,
  budget text,
  available_time text,
  interest text,
  income_goal text,
  recommended_result text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quiz_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_quiz_leads" ON quiz_leads FOR INSERT
  TO anon WITH CHECK (true);

CREATE POLICY "select_quiz_leads" ON quiz_leads FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "update_quiz_leads" ON quiz_leads FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "delete_quiz_leads" ON quiz_leads FOR DELETE
  TO authenticated USING (true);
