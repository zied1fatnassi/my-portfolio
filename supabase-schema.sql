-- ============================================
-- PORTFOLIO DATABASE SCHEMA
-- ============================================
-- This schema includes all tables needed for a complete portfolio website
-- Run this SQL in your Supabase SQL Editor

-- ============================================
-- 1. PROJECTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    long_description TEXT,
    image_url TEXT,
    demo_url TEXT,
    github_url TEXT,
    technologies JSONB DEFAULT '[]'::jsonb, -- Array of tech stack items
    category VARCHAR(100), -- e.g., 'Web App', 'Mobile', 'AI/ML'
    featured BOOLEAN DEFAULT false,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 2. SKILLS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS skills (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL, -- e.g., 'Frontend', 'Backend', 'Tools'
    proficiency INTEGER CHECK (proficiency >= 0 AND proficiency <= 100), -- 0-100
    icon_name VARCHAR(100), -- Icon identifier
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 3. EXPERIENCE TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS experience (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    company_url TEXT,
    location VARCHAR(255),
    start_date DATE NOT NULL,
    end_date DATE, -- NULL if currently working
    description TEXT,
    responsibilities JSONB DEFAULT '[]'::jsonb, -- Array of responsibility items
    technologies JSONB DEFAULT '[]'::jsonb, -- Array of technologies used
    type VARCHAR(50) DEFAULT 'work', -- 'work', 'volunteer', 'freelance'
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 4. EDUCATION TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS education (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    institution VARCHAR(255) NOT NULL,
    degree VARCHAR(255) NOT NULL,
    field_of_study VARCHAR(255),
    location VARCHAR(255),
    start_date DATE NOT NULL,
    end_date DATE,
    gpa VARCHAR(20),
    description TEXT,
    achievements JSONB DEFAULT '[]'::jsonb, -- Array of achievements
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 5. CONTACT MESSAGES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(500),
    message TEXT NOT NULL,
    phone VARCHAR(50),
    read BOOLEAN DEFAULT false,
    archived BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 6. BLOG POSTS TABLE (Optional)
-- ============================================
CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT NOT NULL,
    cover_image TEXT,
    author VARCHAR(255) DEFAULT 'Your Name',
    published BOOLEAN DEFAULT false,
    tags JSONB DEFAULT '[]'::jsonb, -- Array of tags
    view_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    published_at TIMESTAMP WITH TIME ZONE
);

-- ============================================
-- 7. CERTIFICATIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS certifications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    issuing_organization VARCHAR(255) NOT NULL,
    issue_date DATE NOT NULL,
    expiration_date DATE,
    credential_id VARCHAR(255),
    credential_url TEXT,
    description TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- 8. TESTIMONIALS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS testimonials (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255),
    company VARCHAR(255),
    avatar_url TEXT,
    content TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    featured BOOLEAN DEFAULT false,
    approved BOOLEAN DEFAULT false,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- INDEXES for better query performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category);
CREATE INDEX IF NOT EXISTS idx_experience_type ON experience(type);
CREATE INDEX IF NOT EXISTS idx_contact_read ON contact_messages(read);
CREATE INDEX IF NOT EXISTS idx_blog_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(approved);

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS on all tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Public read access for portfolio data
CREATE POLICY "Public can view projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public can view skills" ON skills FOR SELECT USING (true);
CREATE POLICY "Public can view experience" ON experience FOR SELECT USING (true);
CREATE POLICY "Public can view education" ON education FOR SELECT USING (true);
CREATE POLICY "Public can view published blog posts" ON blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Public can view certifications" ON certifications FOR SELECT USING (true);
CREATE POLICY "Public can view approved testimonials" ON testimonials FOR SELECT USING (approved = true);

-- Public can insert contact messages
CREATE POLICY "Public can insert contact messages" ON contact_messages 
    FOR INSERT WITH CHECK (true);

-- Only authenticated users (you) can modify data
-- You'll need to set up authentication for admin access

-- ============================================
-- FUNCTIONS for automatic timestamp updates
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply timestamp triggers
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================

-- Sample Projects
INSERT INTO projects (title, description, technologies, category, featured, demo_url, github_url)
VALUES 
('AI Chat Application', 'Real-time chat app with AI-powered responses', 
 '["Next.js", "TypeScript", "OpenAI", "Supabase"]'::jsonb, 
 'Web App', true, 
 'https://demo.example.com', 'https://github.com/yourusername/project'),
('Portfolio Website', 'Modern portfolio built with Next.js and Tailwind', 
 '["Next.js", "Tailwind CSS", "Framer Motion"]'::jsonb, 
 'Web App', true, 
 'https://yourportfolio.com', 'https://github.com/yourusername/portfolio');

-- Sample Skills
INSERT INTO skills (name, category, proficiency, order_index)
VALUES 
('React', 'Frontend', 95, 1),
('Next.js', 'Frontend', 90, 2),
('TypeScript', 'Frontend', 85, 3),
('Node.js', 'Backend', 80, 4),
('Python', 'Backend', 75, 5),
('PostgreSQL', 'Database', 85, 6),
('Tailwind CSS', 'Frontend', 90, 7),
('Git', 'Tools', 90, 8);

-- Sample Experience
INSERT INTO experience (title, company, start_date, description, type)
VALUES 
('GDSC Leader', 'Google Developer Student Clubs', '2024-01-01', 
 'Leading the GDSC chapter, organizing events and workshops', 'volunteer');

-- Sample Education
INSERT INTO education (institution, degree, field_of_study, start_date)
VALUES 
('Your University', 'Bachelor of Science', 'Computer Science', '2021-09-01');
