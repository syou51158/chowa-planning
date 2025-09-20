import NewsGrid from '@/components/sections/NewsGrid';
import { getNews } from '@/lib/mdx';
import { generateSEO } from '@/lib/seo';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Newspaper, Calendar, Filter } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

export const metadata = generateSEO({
  title: 'お知らせ一覧',
  description: '調和プランニングの最新のお知らせ、プロジェクト情報、メディア掲載情報などをご覧いただけます。',
  path: '/news',
});

interface NewsPageProps {
  searchParams: Promise<{
    category?: string;
    year?: string;
  }>;
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const resolvedSearchParams = await searchParams;
  const news = await getNews();
  
  // カテゴリと年度の一覧を取得
  const categories = Array.from(new Set(news.map(post => post.category)));
  const years = Array.from(new Set(news.map(post => {
    try {
      return new Date(post.date).getFullYear();
    } catch {
      return new Date().getFullYear();
    }
  }))).sort((a, b) => b - a);
  
  // フィルタリング
  let filteredNews = news;
  
  if (resolvedSearchParams.category) {
    filteredNews = filteredNews.filter(
      post => post.category === resolvedSearchParams.category
    );
  }
  
  if (resolvedSearchParams.year) {
    filteredNews = filteredNews.filter(post => {
      try {
        return new Date(post.date).getFullYear().toString() === resolvedSearchParams.year;
      } catch {
        return false;
      }
    });
  }
  
  const currentCategory = resolvedSearchParams.category;
  const currentYear = resolvedSearchParams.year;
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'お知らせ':
        return 'bg-brand-sky text-white';
      case 'プロジェクト':
        return 'bg-brand-forest text-white';
      case 'メディア':
        return 'bg-brand-stone text-white';
      case 'イベント':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };
  
  return (
    <div className="min-h-screen bg-brand-natural/30">
      {/* ページヘッダー */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-steel text-white relative overflow-hidden">
        {/* 建築グリッドパターン */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="news-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#news-grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              建設ニュース
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              建設業界の最新情報と当社の取り組みをお届けします。
              <br className="hidden md:block" />
              プロジェクトの進捗状況や技術革新など、重要な情報を発信しています。
            </p>
          </div>
        </div>
      </section>
      
      {/* 統計情報 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div
            className="grid md:grid-cols-3 gap-6"
          >
            <Card className="border-0 shadow-lg rounded-2xl bg-brand-forest text-white">
              <CardContent className="p-6 text-center">
                <Newspaper className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">{news.length}</div>
                <div className="text-brand-natural">総記事数</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg rounded-2xl bg-brand-sky text-white">
              <CardContent className="p-6 text-center">
                <Filter className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">{categories.length}</div>
                <div className="text-white/90">カテゴリ数</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg rounded-2xl bg-brand-stone text-white">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">
                  {news.length > 0 ? format(new Date(news[0].date), 'M月', { locale: ja }) : '-'}
                </div>
                <div className="text-white/90">最新更新</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* フィルター */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div
            className="flex flex-wrap gap-4 items-center justify-center"
          >
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
              <Link href="/news">すべて</Link>
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
                  href={`/news?category=${encodeURIComponent(category)}${
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
                  href={`/news?year=${year}${
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
            <div
              className="mt-6 text-center"
            >
              <div className="inline-flex items-center gap-2 bg-brand-natural/50 rounded-full px-4 py-2">
                <Filter className="w-4 h-4 text-brand-stone" />
                <span className="text-brand-stone">
                  {currentCategory && (
                    <Badge className={"bg-brand-forest text-white mr-2"}>
                      {currentCategory}
                    </Badge>
                  )}
                  {currentYear && (
                    <Badge className="bg-brand-sky text-white">
                      {currentYear}年
                    </Badge>
                  )}
                  で絞り込み中 ({filteredNews.length}件)
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* ニュース一覧 */}
      <NewsGrid 
        news={filteredNews}
        showAll={true}
        title={filteredNews.length > 0 ? "" : "該当するお知らせがありません"}
        description={filteredNews.length > 0 ? "" : "別の条件で検索してみてください。"}
      />
    </div>
  );
}