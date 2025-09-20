'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Leaf, Map } from 'lucide-react';

const services = [
  {
    icon: CheckCircle,
    title: '誠実な監理',
    description: '納まり・安全・コストのバランスを最後まで検査。現場の細部まで目を配り、品質と安全性を確保しながら、お客様の予算内で最適な解決策を提案します。',
    color: 'text-emerald-600',
    bgColor: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
    iconBg: 'bg-emerald-500',
  },
  {
    icon: Leaf,
    title: '自然素材と持続可能性',
    description: '地域資源や更新容易な素材を活用。環境負荷を最小限に抑えながら、長期的な視点で建物の価値を維持し、次世代に引き継げる空間づくりを心がけています。',
    color: 'text-blue-600',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    iconBg: 'bg-blue-500',
  },
  {
    icon: Map,
    title: 'まち文脈の読み解き',
    description: '歴史・風土・動線から「らしさ」を解釈。その土地固有の文化や環境を深く理解し、地域に根ざした建築を通じて、まち全体の魅力向上に貢献します。',
    color: 'text-slate-600',
    bgColor: 'bg-gradient-to-br from-slate-50 to-slate-100',
    iconBg: 'bg-slate-500',
  },
];

const Services = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            私たちの強み
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            調和プランニングが大切にする3つの価値観。
            <br className="hidden md:block" />
            これらを軸に、お客様の想いを形にします。
          </p>
        </motion.div>
        
        {/* サービスカード */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className={`h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden ${service.bgColor} group-hover:scale-105`}>
                  <CardContent className="p-10 text-center relative">
                    {/* 背景装飾 */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <div className={`w-full h-full rounded-full ${service.iconBg}`} />
                    </div>
                    
                    {/* アイコン */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${service.iconBg} mb-8 shadow-lg relative z-10`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    {/* タイトル */}
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 relative z-10">
                      {service.title}
                    </h3>
                    
                    {/* 説明 */}
                    <p className="text-slate-600 leading-relaxed text-base relative z-10">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        {/* 追加情報 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-100 to-blue-50 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto shadow-xl border border-slate-200">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              すべては「調和」のために
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              私たちは単なる建築会社ではありません。人と自然、建物と環境、
              <br className="hidden md:block" />
              そして地域とお客様の想いを調和させる、パートナーでありたいと考えています。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;