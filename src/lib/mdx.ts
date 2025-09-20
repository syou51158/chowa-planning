import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project, NewsPost } from './types';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getProjects(): Promise<Project[]> {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  
  const filenames = fs.readdirSync(projectsDirectory);
  const projects = filenames
    .filter(name => name.endsWith('.mdx'))
    .map(name => {
      const filePath = path.join(projectsDirectory, name);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        ...data,
        slug: name.replace(/\.mdx$/, ''),
      } as Project;
    })
    .sort((a, b) => b.year - a.year);
  
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(contentDirectory, 'projects', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      ...data,
      slug,
      content,
    } as Project & { content: string };
  } catch {
    return null;
  }
}

export async function getNews(): Promise<NewsPost[]> {
  const newsDirectory = path.join(contentDirectory, 'news');
  
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }
  
  const filenames = fs.readdirSync(newsDirectory);
  const posts = filenames
    .filter(name => name.endsWith('.mdx'))
    .map(name => {
      const filePath = path.join(newsDirectory, name);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        ...data,
        slug: name.replace(/\.mdx$/, ''),
        content,
      } as NewsPost & { content: string };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return posts;
}

export async function getNewsBySlug(slug: string): Promise<NewsPost | null> {
  try {
    const filePath = path.join(contentDirectory, 'news', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      ...data,
      slug,
      content,
    } as NewsPost & { content: string };
  } catch {
    return null;
  }
}

export function getProjectCategories(): string[] {
  // プロジェクトのカテゴリを取得
  return ['住宅', '公共空間', '商業施設', 'オフィス', 'その他'];
}

export function getProjectYears(): number[] {
  // プロジェクトの年度を取得
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 10 }, (_, i) => currentYear - i);
}