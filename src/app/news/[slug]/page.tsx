import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  ArrowLeft,
  Share2,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getNewsPost, getAllNewsPosts } from '@/lib/data';

interface NewsPageProps {
  params: {
    slug: string;
  };
}

// 静的パラメータ生成
export async function generateStaticParams() {
  const posts = await getAllNewsPosts();
  return posts.map((post) => ({
    slug: post.slug,
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
      images: [post.image],
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
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-brand-sage text-white">
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
                  <Clock className="w-4 h-4" />
                  <span>読了時間: {post.readingTime}分</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                {post.excerpt}
              </p>
            </motion.header>
            
            {/* アイキャッチ画像 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-12"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            
            {/* 記事本文 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="prose prose-lg max-w-none mb-12"
            >
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </motion.div>
          </div>
        </div>
      </article>
      
      {/* 関連記事 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              関連記事
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              同じカテゴリーの他の記事もご覧ください
            </p>
          </motion.div>
          
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