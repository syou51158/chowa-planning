import ProjectsGrid from '@/components/sections/ProjectsGrid';
import { getProjects, getProjectCategories, getProjectYears } from '@/lib/mdx';
import { generateSEO } from '@/lib/seo';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
// import { motion } from 'framer-motion'; // サーバーコンポーネントでは使用不可
import { Building, Calendar, Filter } from 'lucide-react';
import Link from 'next/link';

export const metadata = generateSEO({
  title: '実績一覧',
  description: '調和プランニングがこれまでに手がけたプロジェクトの一覧です。住宅、商業施設、公共建築など、様々な建築実績をご覧いただけます。',
  path: '/projects',
});

interface ProjectsPageProps {
  searchParams: Promise<{
    category?: string;
    year?: string;
  }>;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const resolvedSearchParams = await searchParams;
  const projects = await getProjects();
  const categories = await getProjectCategories();
  const years = await getProjectYears();
  
  // フィルタリング
  let filteredProjects = projects;
  
  if (resolvedSearchParams.category) {
    filteredProjects = filteredProjects.filter(
      project => project.category === resolvedSearchParams.category
    );
  }
  
  if (resolvedSearchParams.year) {
    filteredProjects = filteredProjects.filter(
      project => project.year.toString() === resolvedSearchParams.year
    );
  }
  
  const currentCategory = resolvedSearchParams.category;
  const currentYear = resolvedSearchParams.year;
  
  return (
    <div className="min-h-screen bg-brand-natural/30">
      {/* ページヘッダー */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-steel text-white relative overflow-hidden">
        {/* 建築グリッドパターン */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="projects-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#projects-grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              建設実績一覧
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              確かな技術力で手がけた数々のプロジェクトをご紹介します。
              <br className="hidden md:block" />
              住宅から大型建築まで、お客様の信頼にお応えしてきた実績をご覧ください。
            </p>
          </div>
        </div>
      </section>
      
      {/* 統計情報 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg rounded-xl bg-brand-primary text-white">
              <CardContent className="p-6 text-center">
                <Building className="w-8 h-8 mx-auto mb-3 text-brand-accent" />
                <div className="text-3xl font-bold mb-2">{projects.length}</div>
                <div className="text-white/90 font-medium">総建設プロジェクト</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg rounded-xl bg-brand-secondary text-white">
              <CardContent className="p-6 text-center">
                <Filter className="w-8 h-8 mx-auto mb-3 text-brand-accent" />
                <div className="text-3xl font-bold mb-2">{categories.length}</div>
                <div className="text-white/90 font-medium">建設カテゴリ</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg rounded-xl bg-brand-steel text-white">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-3 text-brand-accent" />
                <div className="text-3xl font-bold mb-2">{years.length}</div>
                <div className="text-white/90 font-medium">建設業界実績年数</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* フィルター */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {/* 全て表示 */}
            <Button
              asChild
              variant={!currentCategory && !currentYear ? "default" : "outline"}
              className={`rounded-full ${
                !currentCategory && !currentYear 
                  ? "bg-brand-forest text-white" 
                  : "border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-white"
              }`}
            >
              <Link href="/projects">すべて</Link>
            </Button>
            
            {/* カテゴリフィルター */}
            {categories.map((category) => (
              <Button
                key={category}
                asChild
                variant={currentCategory === category ? "default" : "outline"}
                className={`rounded-full ${
                  currentCategory === category 
                    ? "bg-brand-forest text-white" 
                    : "border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-white"
                }`}
              >
                <Link 
                  href={`/projects?category=${encodeURIComponent(category)}${
                    currentYear ? `&year=${currentYear}` : ''
                  }`}
                >
                  {category}
                </Link>
              </Button>
            ))}
            
            {/* 年度フィルター */}
            {years.slice(0, 5).map((year) => (
              <Button
                key={year}
                asChild
                variant={currentYear === year.toString() ? "default" : "outline"}
                className={`rounded-full ${
                  currentYear === year.toString() 
                    ? "bg-brand-sky text-white" 
                    : "border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white"
                }`}
              >
                <Link 
                  href={`/projects?year=${year}${
                    currentCategory ? `&category=${encodeURIComponent(currentCategory)}` : ''
                  }`}
                >
                  {year}年
                </Link>
              </Button>
            ))}
          </div>
          
          {/* 現在のフィルター表示 */}
          {(currentCategory || currentYear) && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-brand-natural/50 rounded-full px-4 py-2">
                <Filter className="w-4 h-4 text-brand-stone" />
                <span className="text-brand-stone">
                  {currentCategory && (
                    <Badge className="bg-brand-forest text-white mr-2">
                      {currentCategory}
                    </Badge>
                  )}
                  {currentYear && (
                    <Badge className="bg-brand-sky text-white">
                      {currentYear}年
                    </Badge>
                  )}
                  で絞り込み中 ({filteredProjects.length}件)
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* プロジェクト一覧 */}
      <ProjectsGrid 
        projects={filteredProjects}
        showAll={true}
        title={filteredProjects.length > 0 ? "" : "該当するプロジェクトがありません"}
        description={filteredProjects.length > 0 ? "" : "別の条件で検索してみてください。"}
      />
    </div>
  );
}