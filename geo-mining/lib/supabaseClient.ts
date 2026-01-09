import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables are not set');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Page {
  id: string;
  title: string;
  slug: string;
  content: any; // JSON content
  meta_title: string | null;
  meta_description: string | null;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  parent_id: string | null;
  order: number;
  is_visible: boolean;
}

export interface Media {
  id: string;
  filename: string;
  url: string;
  type: 'image' | 'document' | 'video';
  size: number;
  alt_text: string | null;
  created_at: string;
}

export interface DesignSetting {
  id: string;
  key: string;
  value: string;
  category: 'color' | 'typography' | 'layout' | 'branding';
  updated_at: string;
}

export interface FormSubmission {
  id: string;
  form_type: string;
  page_source: string;
  data: any; // JSON data
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}
