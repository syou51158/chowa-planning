import { createClient } from '@supabase/supabase-js';
import { ContactFormData, InquiryRecord } from './types';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function saveInquiry(data: ContactFormData): Promise<InquiryRecord | null> {
  if (!supabase) {
    console.log('Supabase not configured, skipping database save');
    // 開発環境用のダミーレスポンス
    return {
      ...data,
      id: `dummy-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
  }

  try {
    const { data: inquiry, error } = await supabase
      .from('inquiries')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          budget_range: data.budgetRange,
          timeframe: data.timeframe,
          source: data.source || 'website',
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return null;
    }

    return {
      id: inquiry.id,
      name: inquiry.name,
      email: inquiry.email,
      phone: inquiry.phone,
      message: inquiry.message,
      budgetRange: inquiry.budget_range,
      timeframe: inquiry.timeframe,
      source: inquiry.source,
      createdAt: inquiry.created_at,
    };
  } catch (error) {
    console.error('Failed to save inquiry:', error);
    return null;
  }
}

// Supabaseテーブル作成用のSQL（参考）
/*
CREATE TABLE inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  budget_range TEXT,
  timeframe TEXT,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) を有効にする
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- 管理者のみアクセス可能なポリシー
CREATE POLICY "Admin can view inquiries" ON inquiries
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Anyone can insert inquiries" ON inquiries
  FOR INSERT WITH CHECK (true);
*/