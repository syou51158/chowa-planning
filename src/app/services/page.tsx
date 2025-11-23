'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import {
  Home,
  HardHat,
  MapPin,
  Lightbulb,
  TreePine,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,

} from 'lucide-react';
import Link from 'next/link';


const services = [
  {
    id: 'residential',
    icon: Home,
    title: '住宅設計',
    subtitle: 'Residential Design',
    description: '家族の暮らしに寄り添う、快適で美しい住まいを設計します。',
    features: [
      '新築住宅の設計・監理',
      'リノベーション設計',
      '二世帯住宅の設計',
      'バリアフリー住宅',
      '省エネ住宅設計'
    ],
    process: [
      'ヒアリング・現地調査',
      '基本設計・プレゼンテーション',
      '実施設計・確認申請',
      '工事監理・竣工検査'
    ],
    price: '設計料：工事費の8-12%',
    duration: '6-12ヶ月',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'commercial',
    icon: HardHat,
    title: '商業・公共建築',
    subtitle: 'Commercial & Public Architecture',
    description: '機能性と美しさを両立した、地域に愛される建築を創造します。',
    features: [
      'オフィスビル設計',
      '店舗・商業施設設計',
      '公共施設設計',
      '医療・福祉施設設計',
      '教育施設設計'
    ],
    process: [
      '企画・基本構想',
      '基本設計・合意形成',
      '実施設計・申請業務',
      '工事監理・アフターケア'
    ],
    price: '設計料：工事費の6-10%',
    duration: '12-24ヶ月',
    color: 'text-brand-forest',
    bgColor: 'bg-brand-forest/10',
    borderColor: 'border-brand-forest/20'
  },
  {
    id: 'urban-planning',
    icon: MapPin,
    title: '都市計画・まちづくり',
    subtitle: 'Urban Planning',
    description: '持続可能で魅力的な都市空間の創造をサポートします。',
    features: [
      '都市計画策定支援',
      'まちづくり計画',
      '景観計画・ガイドライン',
      '地区計画策定',
      '再開発計画支援'
    ],
    process: [
      '現況調査・分析',
      '計画策定・住民参加',
      '合意形成・調整',
      '実施・モニタリング'
    ],
    price: '業務内容により個別見積',
    duration: '6-18ヶ月',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    id: 'consulting',
    icon: Lightbulb,
    title: '建築コンサルティング',
    subtitle: 'Architectural Consulting',
    description: '建築に関する様々な課題解決をサポートします。',
    features: [
      '建築企画・事業計画',
      '設計監修・技術指導',
      '建築法規チェック',
      '既存建物調査・診断',
      'プロジェクトマネジメント'
    ],
    process: [
      '課題整理・分析',
      '解決策の提案',
      '実施支援・指導',
      'フォローアップ'
    ],
    price: '時間単価：15,000円〜',
    duration: '1-6ヶ月',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    id: 'sustainable',
    icon: TreePine,
    title: '環境配慮型建築',
    subtitle: 'Sustainable Architecture',
    description: '地球環境に配慮した、持続可能な建築を提案します。',
    features: [
      'ZEH・ZEB設計',
      'LCCM住宅設計',
      '自然エネルギー活用',
      'グリーンビルディング',
      'カーボンニュートラル建築'
    ],
    process: [
      '環境性能目標設定',
      '省エネ・創エネ計画',
      '環境シミュレーション',
      '性能検証・認証取得'
    ],
    price: '通常設計料+環境設計料',
    duration: '8-15ヶ月',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  }
];

const advantages = [
  {
    icon: Users,
    title: '豊富な経験',
    description: '15年以上の実績と150以上のプロジェクト経験'
  },
  {
    icon: Clock,
    title: 'スピード対応',
    description: '迅速な提案と効率的なプロジェクト進行'
  },
  {
    icon: CheckCircle,
    title: '品質保証',
    description: '徹底した品質管理と充実したアフターサービス'
  },
  {
    icon: Star,
    title: '顧客満足度',
    description: 'お客様満足度95%、リピート率85%の実績'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-steel text-white relative overflow-hidden">
        {/* 建築グリッドパターン */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="services-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#services-grid)" />
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
              建設サービス一覧
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-white/90 drop-shadow-md">
              住宅建築から大型土木工事まで、総合建設会社として
              <br className="hidden md:block" />
              あらゆる建設ニーズにお応えします。
            </p>
            <div className="flex justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-accent hover:bg-brand-warning text-white transition-all duration-300 px-8 py-6 text-lg rounded-xl shadow-xl font-semibold"
              >
                <Link href="/contact">無料相談を申し込む</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-primary transition-all duration-300 px-8 py-6 text-lg rounded-xl font-semibold"
              >
                <Link href="/projects">実績を見る</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* サービス一覧 */}
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
              提供サービス
            </h2>
            <p className="text-lg text-brand-stone max-w-3xl mx-auto leading-relaxed">
              調和プランニングでは、お客様の多様なニーズにお応えするため、
              <br className="hidden md:block" />
              幅広い建築サービスを提供しています。
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`border-2 ${service.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden`}>
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-3 gap-0">
                        {/* サービス概要 */}
                        <div className={`${service.bgColor} p-8 lg:p-12`}>
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`w-12 h-12 ${service.bgColor} border-2 ${service.borderColor} rounded-xl flex items-center justify-center`}>
                              <Icon className={`w-6 h-6 ${service.color}`} />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-brand-forest">
                                {service.title}
                              </h3>
                              <p className="text-sm text-brand-stone">
                                {service.subtitle}
                              </p>
                            </div>
                          </div>
                          <p className="text-brand-stone leading-relaxed mb-6">
                            {service.description}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-brand-stone">
                              <Clock className="w-4 h-4" />
                              <span>期間：{service.duration}</span>
                            </div>
                            <div className="text-sm font-semibold text-brand-forest">
                              {service.price}
                            </div>
                          </div>
                        </div>

                        {/* 特徴・サービス内容 */}
                        <div className="p-8 lg:p-12 bg-white">
                          <h4 className="text-lg font-semibold text-brand-forest mb-4">
                            サービス内容
                          </h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-brand-stone">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* プロセス */}
                        <div className="p-8 lg:p-12 bg-gray-50">
                          <h4 className="text-lg font-semibold text-brand-forest mb-4">
                            進行プロセス
                          </h4>
                          <div className="space-y-4">
                            {service.process.map((step, stepIndex) => (
                              <div key={stepIndex} className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-brand-forest text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                                  {stepIndex + 1}
                                </div>
                                <span className="text-brand-stone">{step}</span>
                              </div>
                            ))}
                          </div>
                          <Button
                            asChild
                            className="w-full mt-6 bg-brand-forest hover:bg-brand-forest/90 text-white rounded-xl"
                          >
                            <Link href="/contact">
                              このサービスについて相談する
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
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
              調和プランニングが選ばれる理由
            </h2>
            <p className="text-lg text-brand-stone max-w-2xl mx-auto">
              お客様に選ばれ続ける理由をご紹介します。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-brand-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-brand-forest" />
                      </div>
                      <h3 className="text-xl font-bold text-brand-forest mb-4">
                        {advantage.title}
                      </h3>
                      <p className="text-brand-stone leading-relaxed">
                        {advantage.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
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
              まずはお気軽にご相談ください
            </h2>
            <p className="text-xl text-brand-natural mb-8 max-w-2xl mx-auto">
              どんな小さなご相談でも、お客様の理想を実現するため、
              <br className="hidden md:block" />
              私たちが全力でサポートいたします。
            </p>
            <div className="flex justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-forest hover:bg-brand-natural transition-all duration-300 px-8 py-6 text-lg rounded-2xl shadow-lg"
              >
                <Link href="/contact">無料相談を申し込む</Link>
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