-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Pages table
CREATE TABLE pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content JSONB DEFAULT '{}',
  meta_title TEXT,
  meta_description TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  published_at TIMESTAMPTZ
);

-- Navigation table
CREATE TABLE navigation (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  label TEXT NOT NULL,
  path TEXT NOT NULL,
  parent_id UUID REFERENCES navigation(id) ON DELETE CASCADE,
  "order" INTEGER NOT NULL DEFAULT 0,
  is_visible BOOLEAN DEFAULT true
);

-- Media table
CREATE TABLE media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  filename TEXT NOT NULL,
  url TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('image', 'document', 'video')),
  size BIGINT NOT NULL,
  alt_text TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Design settings table
CREATE TABLE design_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT UNIQUE NOT NULL,
  value TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('color', 'typography', 'layout', 'branding')),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Form submissions table
CREATE TABLE form_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  form_type TEXT NOT NULL,
  page_source TEXT NOT NULL,
  data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Categories table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tags table
CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Page categories junction table
CREATE TABLE page_categories (
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (page_id, category_id)
);

-- Page tags junction table
CREATE TABLE page_tags (
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (page_id, tag_id)
);

-- Create indexes for better query performance
CREATE INDEX idx_pages_slug ON pages(slug);
CREATE INDEX idx_pages_status ON pages(status);
CREATE INDEX idx_navigation_order ON navigation("order");
CREATE INDEX idx_media_type ON media(type);
CREATE INDEX idx_form_submissions_form_type ON form_submissions(form_type);
CREATE INDEX idx_form_submissions_created_at ON form_submissions(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE navigation ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE design_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;

-- Public read access for published pages
CREATE POLICY "Public can view published pages"
  ON pages FOR SELECT
  USING (status = 'published');

-- Public read access for navigation
CREATE POLICY "Public can view visible navigation"
  ON navigation FOR SELECT
  USING (is_visible = true);

-- Public read access for media
CREATE POLICY "Public can view media"
  ON media FOR SELECT
  TO public
  USING (true);

-- Public read access for design settings
CREATE POLICY "Public can view design settings"
  ON design_settings FOR SELECT
  TO public
  USING (true);

-- Public can submit forms
CREATE POLICY "Public can insert form submissions"
  ON form_submissions FOR INSERT
  TO public
  WITH CHECK (true);

-- Admin policies (authenticated users with admin role can do everything)
-- Note: You'll need to set up custom claims or use Supabase auth.users metadata
CREATE POLICY "Admins can do everything on pages"
  ON pages FOR ALL
  TO authenticated
  USING (
    (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  );

CREATE POLICY "Admins can do everything on navigation"
  ON navigation FOR ALL
  TO authenticated
  USING (
    (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  );

CREATE POLICY "Admins can do everything on media"
  ON media FOR ALL
  TO authenticated
  USING (
    (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  );

CREATE POLICY "Admins can do everything on design_settings"
  ON design_settings FOR ALL
  TO authenticated
  USING (
    (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  );

CREATE POLICY "Admins can view and delete form submissions"
  ON form_submissions FOR ALL
  TO authenticated
  USING (
    (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  );

CREATE POLICY "Admins can do everything on categories"
  ON categories FOR ALL
  TO authenticated
  USING (
    (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  );

CREATE POLICY "Admins can do everything on tags"
  ON tags FOR ALL
  TO authenticated
  USING (
    (auth.jwt() -> 'user_metadata' ->> 'role') = 'admin'
  );

-- Insert default design settings
INSERT INTO design_settings (key, value, category) VALUES
  ('primary_color', '#2563eb', 'color'),
  ('secondary_color', '#7c3aed', 'color'),
  ('accent_color', '#059669', 'color'),
  ('font_family', 'Inter', 'typography'),
  ('heading_font', 'Inter', 'typography'),
  ('logo_url', '', 'branding'),
  ('site_title', 'Geo-Mining & Environmental Consultancy', 'branding'),
  ('facebook_url', '', 'branding'),
  ('twitter_url', '', 'branding'),
  ('linkedin_url', '', 'branding'),
  ('instagram_url', '', 'branding');
