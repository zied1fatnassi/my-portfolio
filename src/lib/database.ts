import { supabase } from './supabase';
import type {
    Project,
    Skill,
    Experience,
    Education,
    ContactMessage,
    NewContactMessage,
    BlogPost
} from '@/types/database';

// ============================================
// PROJECTS
// ============================================
export async function getProjects(options: { featured?: boolean; limit?: number } = {}) {
    let query = supabase
        .from('projects')
        .select('*')
        .order('order_index', { ascending: true });

    if (options.featured) {
        query = query.eq('featured', true);
    }

    if (options.limit) {
        query = query.limit(options.limit);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data as Project[];
}

export async function getProjectBySlug(slug: string) {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error) throw error;
    return data as Project;
}

// ============================================
// SKILLS
// ============================================
export async function getSkills(category?: string) {
    let query = supabase
        .from('skills')
        .select('*')
        .order('order_index', { ascending: true });

    if (category) {
        query = query.eq('category', category);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data as Skill[];
}

export async function getSkillsByCategory() {
    const skills = await getSkills();

    // Group skills by category
    const grouped = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);

    return grouped;
}

// ============================================
// EXPERIENCE
// ============================================
export async function getExperience(type?: 'work' | 'volunteer' | 'freelance') {
    let query = supabase
        .from('experience')
        .select('*')
        .order('start_date', { ascending: false });

    if (type) {
        query = query.eq('type', type);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data as Experience[];
}

// ============================================
// EDUCATION
// ============================================
export async function getEducation() {
    const { data, error } = await supabase
        .from('education')
        .select('*')
        .order('start_date', { ascending: false });

    if (error) throw error;
    return data as Education[];
}

// ============================================
// CONTACT MESSAGES
// ============================================
export async function submitContactMessage(message: NewContactMessage) {
    const { error } = await supabase
        .from('contact_messages')
        .insert(message);

    if (error) throw error;
}

// ============================================
// BLOG POSTS
// ============================================
export async function getBlogPosts(options: { published?: boolean; limit?: number } = {}) {
    let query = supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

    if (options.published !== undefined) {
        query = query.eq('published', options.published);
    }

    if (options.limit) {
        query = query.limit(options.limit);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data as BlogPost[];
}

export async function getBlogPostBySlug(slug: string) {
    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

    if (error) throw error;

    // Increment view count
    await supabase.rpc('increment_view_count', { post_id: data.id });

    return data as BlogPost;
}

// ============================================
// CERTIFICATIONS
// ============================================
export async function getCertifications() {
    const { data, error } = await supabase
        .from('certifications')
        .select('*')
        .order('issue_date', { ascending: false });

    if (error) throw error;
    return data;
}

// ============================================
// TESTIMONIALS
// ============================================
export async function getTestimonials(featured?: boolean) {
    let query = supabase
        .from('testimonials')
        .select('*')
        .eq('approved', true)
        .order('order_index', { ascending: true });

    if (featured) {
        query = query.eq('featured', true);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data;
}
