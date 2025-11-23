'use client';

import { motion } from 'framer-motion';
import { CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedButton, CTAButton } from '@/components/ui/animated-button';
import { AnimatedCard } from '@/components/ui/animated-card';
import { SectionTransition, StaggerContainer, StaggerItem } from '@/components/ui/page-transition';
import Link from 'next/link';
import { NewsPost } from '@/lib/data';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

interface NewsGridProps {
  news: NewsPost[];
  showAll?: boolean;
  title?: string;
  description?: string;
}

const NewsGrid = ({
  news,
  showAll = false,
  title = "最新情報",
  description = "調和プランニングの最新のお知らせや活動をご紹介します。"
}: NewsGridProps) => {
  const displayNews = showAll ? news : news.slice(0, 3);

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'yyyy年M月d日', { locale: ja });
    } catch {
      return dateString;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'news':
        return 'bg-brand-sky text-white';
      case 'project':
        return 'bg-brand-stone text-white';
      case 'award':
        return 'bg-brand-steel text-white';
      case 'event':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'news': return 'お知らせ';
      case 'project': return 'プロジェクト';
      case 'award': return '受賞';
      case 'event': return 'イベント';
      default: return category;
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-brand-concrete/30 to-brand-natural/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <SectionTransition>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-forest mb-4 sm:mb-6 px-4 sm:px-0">
              {title}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-brand-stone to-brand-steel mx-auto rounded-full mb-6"
            />
            <p className="text-base sm:text-lg md:text-xl text-brand-steel max-w-3xl mx-auto leading-relaxed font-medium px-4 sm:px-0">
              {description}
            </p>
          </div>
        </SectionTransition>

        {/* ニュースグリッド */}
        {displayNews.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {displayNews.map((post) => (
              <StaggerItem key={post.id}>
                <AnimatedCard
                  variant="hover-lift"
                  className="h-full group cursor-pointer"
                  onClick={() => window.location.href = `/news/${post.id}`}
                >
                  <CardContent className="p-4 sm:p-6">
                    {/* カテゴリと日付 */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge className={getCategoryColor(post.category)}>
                          {getCategoryLabel(post.category)}
                        </Badge>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: -5 }}
                        className="flex items-center gap-1 text-sm text-brand-steel transition-colors group-hover:text-brand-forest"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </motion.div>
                    </div>

                    {/* タイトル */}
                    <h3 className="text-lg sm:text-xl font-bold text-brand-forest mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* 概要 */}
                    <p className="text-sm sm:text-base text-brand-steel mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* 詳細リンク */}
                    <Link href={`/news/${post.id}`} onClick={(e) => e.stopPropagation()}>
                      <AnimatedButton
                        variant="ghost"
                        className="w-full justify-between text-brand-steel hover:bg-brand-steel/10 font-medium"
                        icon={<ArrowRight className="w-4 h-4" />}
                        iconPosition="right"
                      >
                        詳細を読む
                      </AnimatedButton>
                    </Link>

                    {/* ホバー時のオーバーレイアイコン */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-brand-stone/90 rounded-full p-2"
                      >
                        <ExternalLink className="h-4 w-4 text-white" />
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          /* ニュースがない場合 */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-12 sm:py-16"
          >
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg max-w-md mx-auto mx-4 sm:mx-auto">
              <div className="w-16 h-16 bg-brand-concrete rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-brand-steel" />
              </div>
              <h3 className="text-xl font-bold text-brand-stone mb-4">
                お知らせはありません
              </h3>
              <p className="text-brand-steel">
                現在表示できるお知らせがありません。
                <br />
                新しい情報が入り次第、こちらでお知らせいたします。
              </p>
            </div>
          </motion.div>
        )}

        {/* 全て見るボタン */}
        {!showAll && news.length > 3 && (
          <SectionTransition delay={0.4}>
            <div className="text-center mt-8 sm:mt-12">
              <Link href="/news">
                <CTAButton
                  variant="primary"
                  size="lg"
                  className="bg-brand-stone hover:bg-brand-stone/90 text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl font-semibold"
                  icon={<ArrowRight className="h-5 w-5" />}
                  iconPosition="right"
                >
                  すべてのお知らせを見る
                </CTAButton>
              </Link>
            </div>
          </SectionTransition>
        )}
      </div>
    </section>
  );
};

export default NewsGrid;