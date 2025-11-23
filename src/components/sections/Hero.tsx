'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CTAButton } from '@/components/ui/animated-button';
import Link from 'next/link';


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-primary">
      {/* 背景画像・グラデーション */}
      <div className="absolute inset-0 overflow-hidden">
        {/* ベースグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary to-brand-dark" />

        {/* 抽象的な建築的背景（プレースホルダー） */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        </div>

        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent opacity-80" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* キャッチコピー */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
            >
              <span className="block mb-2">時を超えて受け継がれる</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-yellow-200 to-brand-accent">
                本物の価値を築く
              </span>
            </motion.h1>

            {/* サブタイトル */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl md:text-2xl text-brand-stone mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            >
              私たちは、建築の力で人々の暮らしと街の未来を豊かにします。
              <br className="hidden md:block" />
              確かな技術と洗練されたデザインで、あなたの想いを形に。
            </motion.p>

            {/* CTA ボタン */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/contact">
                <CTAButton
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto min-w-[200px] bg-brand-accent hover:bg-brand-warning text-brand-primary font-bold tracking-wide shadow-xl shadow-brand-accent/20"
                >
                  お問い合わせ
                  <ArrowRight className="ml-2 h-5 w-5" />
                </CTAButton>
              </Link>

              <Link href="/projects">
                <CTAButton
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto min-w-[200px] border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-medium tracking-wide"
                >
                  実績を見る
                </CTAButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/50 uppercase tracking-widest">Scroll</span>
          <motion.div
            className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0"
            animate={{ scaleY: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;