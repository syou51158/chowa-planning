'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, Building2, Users, Award } from 'lucide-react';
import { CTAButton } from '@/components/ui/animated-button';
import { SectionTransition, StaggerContainer, StaggerItem } from '@/components/ui/page-transition';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const stats = [
    { icon: Building2, label: '完成プロジェクト', value: '500+' },
    { icon: Users, label: '満足いただいたお客様', value: '1,200+' },
    { icon: Award, label: '業界経験年数', value: '25+' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-forest to-brand-forest/80">
      {/* 建築業界らしい背景デザイン */}
      <div className="absolute inset-0 overflow-hidden">
        {/* メイングラデーション - 深いブルーベース */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-steel" />
        
        {/* 建築的な幾何学パターン */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* 建築グリッドパターン */}
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        
        {/* 建設機械のシルエット風装飾 */}
        <div className="absolute inset-0">
          {/* 建設機械アイコン装飾 */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.05, 0.15, 0.05],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </motion.div>
          ))}
          
          {/* 建築ツールアイコン装飾 */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`tool-${i}`}
              className="absolute opacity-8"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.05, 0.12, 0.05],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3ZM17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74C8.5 8.3 9.74 4.16 13.09 2.44C16.44 .72 20.58 1.96 22.3 5.31C24.02 8.66 22.78 12.8 19.43 14.52C18.5 15 17.5 15.2 16.5 15.1L19.61 18.21L17.5 20.32L14.39 17.21C14.39 16.3 14.50 15.3 17.5 10.1Z"/>
              </svg>
            </motion.div>
          ))}
        </div>
        
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          {/* メインタイトル */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-4 sm:px-0"
          >
            <span className="text-white drop-shadow-lg">
              建築・土木で
            </span>
            <br />
            <span className="bg-gradient-to-r from-brand-accent to-brand-warning bg-clip-text text-transparent drop-shadow-lg">
              未来を築く
            </span>
          </motion.h1>
          
          {/* サブタイトル */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto font-medium px-4 sm:px-0 drop-shadow-md"
          >
            確かな技術力と豊富な経験で、住宅から大型建築まで、
            <br className="hidden md:block" />
            お客様の理想を形にする総合建設会社です。
          </motion.p>
          
          {/* CTA ボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <CTAButton
              href="/contact"
              variant="gradient"
              size="lg"
              className="w-full sm:w-auto bg-brand-accent hover:bg-brand-warning text-white transition-all duration-300 px-8 py-6 text-lg rounded-xl shadow-xl font-semibold"
            >
              無料相談のご依頼
              <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
            
            <CTAButton
              href="/projects"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-brand-primary transition-all duration-300 px-8 py-6 text-lg rounded-xl font-semibold"
            >
              実績を見る
            </CTAButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 px-4 sm:px-0"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon className="h-8 w-8 text-brand-forest mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/90 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-brand-natural px-4 sm:px-0"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">03-1234-5678</span>
            </motion.div>
            <div className="hidden sm:block w-px h-6 bg-brand-natural/50" />
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Mail className="h-5 w-5 text-brand-accent" />
              <span className="font-medium">info@chowa-planning.co.jp</span>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* 装飾的な要素 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center cursor-pointer hover:border-white transition-colors"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;