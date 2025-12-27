// Database Types for Supabase
// These types match the schema defined in supabase-schema.sql

export interface Project {
    id: string;
    title: string;
    description: string;
    long_description?: string;
    image_url?: string;
    demo_url?: string;
    github_url?: string;
    technologies: string[];
    category?: string;
    featured: boolean;
    order_index: number;
    created_at: string;
    updated_at: string;
}

export interface Skill {
    id: string;
    name: string;
    category: string;
    proficiency: number; // 0-100
    icon_name?: string;
    order_index: number;
    created_at: string;
}

export interface Experience {
    id: string;
    title: string;
    company: string;
    company_url?: string;
    location?: string;
    start_date: string;
    end_date?: string;
    description?: string;
    responsibilities: string[];
    technologies: string[];
    type: 'work' | 'volunteer' | 'freelance';
    order_index: number;
    created_at: string;
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    field_of_study?: string;
    location?: string;
    start_date: string;
    end_date?: string;
    gpa?: string;
    description?: string;
    achievements: string[];
    order_index: number;
    created_at: string;
}

export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    subject?: string;
    message: string;
    phone?: string;
    read: boolean;
    archived: boolean;
    created_at: string;
}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt?: string;
    content: string;
    cover_image?: string;
    author: string;
    published: boolean;
    tags: string[];
    view_count: number;
    created_at: string;
    updated_at: string;
    published_at?: string;
}

export interface Certification {
    id: string;
    name: string;
    issuing_organization: string;
    issue_date: string;
    expiration_date?: string;
    credential_id?: string;
    credential_url?: string;
    description?: string;
    order_index: number;
    created_at: string;
}

export interface Testimonial {
    id: string;
    name: string;
    position?: string;
    company?: string;
    avatar_url?: string;
    content: string;
    rating?: number; // 1-5
    featured: boolean;
    approved: boolean;
    order_index: number;
    created_at: string;
}

// Database helper type for inserts (omits auto-generated fields)
export type NewProject = Omit<Project, 'id' | 'created_at' | 'updated_at'>;
export type NewSkill = Omit<Skill, 'id' | 'created_at'>;
export type NewExperience = Omit<Experience, 'id' | 'created_at'>;
export type NewEducation = Omit<Education, 'id' | 'created_at'>;
export type NewContactMessage = Omit<ContactMessage, 'id' | 'created_at' | 'read' | 'archived'>;
export type NewBlogPost = Omit<BlogPost, 'id' | 'created_at' | 'updated_at' | 'view_count'>;
export type NewCertification = Omit<Certification, 'id' | 'created_at'>;
export type NewTestimonial = Omit<Testimonial, 'id' | 'created_at' | 'approved'>;
