'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, Users, Award, Heart, Target, Lightbulb, HardHat } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const companyInfo = {
  name: '株式会社調和プランニング',
  established: '2010年',
  representative: '代表取締役 田中 太郎',
  address: '〒XXX-XXXX 東京都XXX区XXX',
  phone: '03-XXXX-XXXX',
  email: 'info@chowa-planning.com',
  employees: '15名',
  capital: '1,000万円',
  business: [
    '建築設計・監理',
    'リノベーション設計',
    '都市計画・まちづくりコンサルティング',
    '建築コンサルティング',
    '環境配慮型建築の企画・設計'
  ]
};

const philosophy = [
  {
    icon: Heart,
    title: '誠実さ',
    description: 'お客様との信頼関係を最も大切にし、約束を守り、透明性のあるコミュニケーションを心がけています。',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Target,
    title: '品質へのこだわり',
    description: '妥協のない品質管理と、細部まで行き届いた設計・施工監理で、長く愛される建築を創造します。',
    color: 'text-brand-forest',
    bgColor: 'bg-brand-forest/10',
  },
  {
    icon: Lightbulb,
    title: '革新と伝統の調和',
    description: '最新の技術と伝統的な知恵を融合させ、時代に適応しながらも普遍的な価値を持つ建築を目指します。',
    color: 'text-brand-sky',
    bgColor: 'bg-brand-sky/10',
  },
];

const achievements = [
  {
    icon: HardHat,
    number: '150+',
    label: '完成プロジェクト',
    description: '住宅から公共建築まで',
  },
  {
    icon: Users,
    number: '500+',
    label: '満足いただいたお客様',
    description: 'リピート率85%',
  },
  {
    icon: Award,
    number: '12',
    label: '受賞歴',
    description: '建築関連賞を受賞',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-steel text-white relative overflow-hidden">
        {/* 建築グリッドパターン */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="about-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#about-grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              会社概要
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-white/90 drop-shadow-md">
              確かな技術力と豊富な経験で、建設業界をリードする企業として、
              <br className="hidden md:block" />
              お客様の信頼にお応えし、安全で高品質な建設サービスを提供します。
            </p>
            <div className="flex justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-accent hover:bg-brand-accent/90 text-white transition-all duration-300 px-8 py-6 text-lg rounded-xl shadow-lg border-2 border-brand-accent/20"
              >
                <Link href="/projects">実績を見る</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-primary transition-all duration-300 px-8 py-6 text-lg rounded-xl"
              >
                <Link href="/contact">お問い合わせ</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* 実績・数字 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-forest mb-6">
              数字で見る調和プランニング
            </h2>
            <p className="text-lg text-brand-stone max-w-2xl mx-auto">
              これまでの歩みと実績を数字でご紹介します。
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-brand-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-brand-forest" />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-brand-forest mb-2">
                        {achievement.number}
                      </div>
                      <div className="text-xl font-semibold text-brand-stone mb-2">
                        {achievement.label}
                      </div>
                      <div className="text-brand-stone/70">
                        {achievement.description}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* 企業理念 */}
      <section className="py-16 md:py-24 bg-brand-natural/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-forest mb-6">
              私たちの理念
            </h2>
            <p className="text-lg text-brand-stone max-w-3xl mx-auto leading-relaxed">
              調和プランニングが大切にする価値観と、
              <br className="hidden md:block" />
              建築を通じて実現したい社会への想いをご紹介します。
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                        <Icon className={`w-8 h-8 ${item.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-brand-forest mb-4">
                        {item.title}
                      </h3>
                      <p className="text-brand-stone leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* 会社概要 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-forest mb-6">
              会社概要
            </h2>
            <p className="text-lg text-brand-stone max-w-2xl mx-auto">
              調和プランニングの基本情報をご紹介します。
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-brand-forest mb-2">会社名</h3>
                        <p className="text-brand-stone">{companyInfo.name}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-forest mb-2">設立</h3>
                        <p className="text-brand-stone">{companyInfo.established}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-forest mb-2">代表者</h3>
                        <p className="text-brand-stone">{companyInfo.representative}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-forest mb-2">従業員数</h3>
                        <p className="text-brand-stone">{companyInfo.employees}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-forest mb-2">資本金</h3>
                        <p className="text-brand-stone">{companyInfo.capital}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-brand-forest mb-2">所在地</h3>
                        <p className="text-brand-stone">{companyInfo.address}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-forest mb-2">電話番号</h3>
                        <p className="text-brand-stone">{companyInfo.phone}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-forest mb-2">メールアドレス</h3>
                        <p className="text-brand-stone">{companyInfo.email}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-forest mb-2">事業内容</h3>
                        <ul className="text-brand-stone space-y-1">
                          {companyInfo.business.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-brand-forest rounded-full flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-forest text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              一緒に理想の空間を創りませんか？
            </h2>
            <p className="text-xl text-brand-natural mb-8 max-w-2xl mx-auto">
              お客様の想いを形にする建築パートナーとして、
              <br className="hidden md:block" />
              私たちにお任せください。
            </p>
            <div className="flex justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-forest hover:bg-brand-natural transition-all duration-300 px-8 py-6 text-lg rounded-2xl shadow-lg"
              >
                <Link href="/contact">お問い合わせ</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-forest transition-all duration-300 px-8 py-6 text-lg rounded-2xl"
              >
                <Link href="/projects">実績を見る</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}