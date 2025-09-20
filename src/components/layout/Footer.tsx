'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const navigation = {
  services: [
    { name: '住宅設計', href: '/services#residential' },
    { name: '商業・公共建築', href: '/services#commercial' },
    { name: '都市計画・まちづくり', href: '/services#urban-planning' },
    { name: '建築コンサルティング', href: '/services#consulting' },
    { name: '環境配慮型建築', href: '/services#sustainable' },
  ],
  company: [
    { name: '会社概要', href: '/about' },
    { name: '実績一覧', href: '/projects' },
    { name: 'お知らせ', href: '/news' },
    { name: 'お問い合わせ', href: '/contact' },
  ],
  legal: [
    { name: 'プライバシーポリシー', href: '/privacy' },
    { name: '利用規約', href: '/terms' },
    { name: 'サイトマップ', href: '/sitemap' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

const contactInfo = {
  address: '〒XXX-XXXX 東京都XXX区XXX',
  phone: '03-XXXX-XXXX',
  email: 'info@chowa-planning.com',
  hours: '平日 9:00-18:00（土日祝日は要予約）',
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-primary text-white relative overflow-hidden" style={{ backgroundColor: '#1E3A8A', color: 'white' }}>
      {/* 強制的にダーク背景を適用してコントラストを確保 */}
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white rounded-full -translate-y-32" />
      </div>

      <div className="relative">
        {/* メインフッター */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* 会社情報 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">調和プランニング</h3>
                  <p className="text-white/80 text-sm">建築設計事務所</p>
                </div>
              </div>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                誠実な監理、自然素材と持続可能性、まち文脈の読み解きを大切にする建築設計事務所です。
              </p>
              
              {/* 連絡先情報 */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 text-white/70 flex-shrink-0" />
                  <span className="text-sm text-white/90">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-white/70 flex-shrink-0" />
                  <span className="text-sm text-white/90">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-white/70 flex-shrink-0" />
                  <span className="text-sm text-white/90">{contactInfo.email}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 mt-1 text-white/70 flex-shrink-0" />
                  <span className="text-sm text-white/90">{contactInfo.hours}</span>
                </div>
              </div>
            </motion.div>

            {/* サービス */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">サービス</h4>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-white/90 hover:text-white transition-colors duration-300 text-sm block py-1 hover:translate-x-1 transform transition-transform"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 会社案内 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">会社案内</h4>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-white/90 hover:text-white transition-colors duration-300 text-sm block py-1 hover:translate-x-1 transform transition-transform"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* お問い合わせ・SNS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">お問い合わせ</h4>
              
              <Link href="/contact">
                <Button className="w-full bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-brand-forest transition-all duration-300 rounded-xl mb-6">
                  <Phone className="w-4 h-4 mr-2" />
                  お問い合わせ
                </Button>
              </Link>
              
              {/* SNSリンク */}
              <div>
                <h5 className="text-sm font-medium mb-4 text-white/90">フォローする</h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:text-brand-forest transition-all duration-300"
                        aria-label={social.name}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* フッター下部 */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center md:justify-start space-x-6 text-sm text-white/90"
            >
              {navigation.legal.map((item, index) => (
                <span key={item.name} className="flex items-center">
                  <Link 
                    href={item.href}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                  {index < navigation.legal.length - 1 && (
                    <span className="ml-6 text-white/40">|</span>
                  )}
                </span>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <p className="text-sm text-white/90">
                © 2024 株式会社調和プランニング. All rights reserved.
              </p>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="p-2 rounded-xl bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-brand-forest transition-all duration-300"
                aria-label="ページトップへ戻る"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}