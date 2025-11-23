export type Project = {
  title: string;
  slug: string;
  year: number;
  category: string;
  location?: string;
  hero: string;
  gallery: string[];
  problem: string;
  approach: string;
  result: string;
  partners: string[];
};

export type NewsPost = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
};

export type Partner = {
  name: string;
  logo: string;
  website?: string;
  description?: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  inquiryType?: string;
  message: string;
  budgetRange?: string;
  timeframe?: string;
  source?: string;
};

export type InquiryRecord = ContactFormData & {
  id: string;
  createdAt: string;
};