import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Calendar,
  ArrowLeft,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getNewsPost, getNews } from '@/lib/data';

interface NewsPageProps {
  params: {
    slug: string;
  };
}

// 静的パラメータ生成
export async function generateStaticParams() {
  const posts = await getNews();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

// メタデータ生成
export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const post = await getNewsPost(params.slug);

  if (!post) {
    return {
      title: 'ニュースが見つかりません - 調和プランニング',
    };
  }

  return {
    title: `${post.title} - 調和プランニング`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} - 調和プランニング`,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function NewsPage({ params }: NewsPageProps) {
  const post = await getNewsPost(params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/news">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                ニュース一覧に戻る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 記事ヘッダー */}
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-brand-accent text-white">
                  {post.category}
                </Badge>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>著者: {post.author}</span>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                {post.excerpt}
              </p>
            </header>

            {/* アイキャッチ画像 */}
            {post.image && (
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-12">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* 記事本文 */}
            <div className="prose prose-lg max-w-none mb-12">
              <div className="whitespace-pre-wrap">{post.content}</div>
            </div>
          </div>
        </div>
      </article>

      {/* 関連記事 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              関連記事
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              同じカテゴリーの他の記事もご覧ください
            </p>
          </div>

          <div className="text-center">
            <Link href={`/news?category=${post.category}`}>
              <Button variant="outline" size="lg">
                {post.category}の他の記事を見る
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}