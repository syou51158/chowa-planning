import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import NewsGrid from '@/components/sections/NewsGrid';
import Contact from '@/components/sections/Contact';
import { getProjects, getNews } from '@/lib/mdx';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'ホーム',
  description: '調和プランニングは、誠実な監理、自然素材と持続可能性、まち文脈の読み解きを大切にする建築設計事務所です。',
  path: '/',
});

export default async function HomePage() {
  // プロジェクトとニュースのデータを取得
  const projects = await getProjects();
  const news = await getNews();

  return (
    <>
      {/* ヒーローセクション */}
      <Hero />
      
      {/* サービス・強みセクション */}
      <Services />
      
      {/* 主要実績セクション */}
      <ProjectsGrid 
        projects={projects} 
        showAll={false}
        title="主要実績"
        description="これまでに手がけた代表的なプロジェクトをご紹介します。地域の文脈を読み解き、持続可能な建築を通じて、お客様の想いを形にしてきました。"
      />
      
      {/* 最新情報セクション */}
      <NewsGrid 
        news={news} 
        showAll={false}
        title="最新情報"
        description="調和プランニングの最新のお知らせや活動をご紹介します。"
      />
      
      {/* お問い合わせセクション */}
      <Contact />
    </>
  );
}
