'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Home, 
  HardHat, 
  Users, 
  Hammer, 
  Phone,
  Newspaper,
  Building2
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'ホーム', href: '/', icon: Home },
  { name: 'サービス', href: '/services', icon: HardHat },
  { name: '実績', href: '/projects', icon: Hammer },
  { name: '会社概要', href: '/about', icon: Users },
  { name: 'お知らせ', href: '/news', icon: Newspaper },
  { name: 'お問い合わせ', href: '/contact', icon: Phone },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-200/50'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* ロゴ */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-brand-forest to-brand-sage rounded-xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-forest to-brand-sage rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className={cn(
                  'text-lg md:text-xl font-bold transition-colors duration-300 text-brand-forest'
                )}>
                  調和プランニング
                </h1>
                <p className={cn(
                  'text-xs md:text-sm transition-colors duration-300 text-brand-stone'
                )}>
                  建築設計事務所
                </p>
              </div>
            </Link>

            {/* デスクトップナビゲーション */}
            <nav className="hidden lg:flex items-center gap-1 flex-nowrap whitespace-nowrap overflow-x-auto lg:overflow-visible">
               {navigation.map((item) => {
                 const Icon = item.icon;
                 const isActive = pathname === item.href || 
                   (item.href !== '/' && pathname.startsWith(item.href));
                 
                 return (
                   <Link key={item.name} href={item.href}>
                     <motion.div
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className={cn(
                         'relative px-3 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 group text-brand-forest hover:bg-brand-sage/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage/50',
                         isActive && 'bg-brand-sage/20 text-brand-forest ring-1 ring-brand-sage/30 after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-brand-forest after:to-brand-sage'
                       )}
                     >
                       <Icon className="w-4 h-4" />
                       <span className="font-medium">{item.name}</span>
                     </motion.div>
                   </Link>
                 );
               })}
            </nav>



            {/* モバイルメニューボタン */}
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                'lg:hidden p-2 rounded-xl transition-colors duration-300 text-brand-forest hover:bg-brand-forest/10'
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* オーバーレイ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* メニューパネル */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 sm:w-80 max-w-[85vw] bg-white shadow-2xl z-[60] lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* ヘッダー */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-forest to-brand-sage rounded-xl flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-brand-forest">調和プランニング</h2>
                      <p className="text-sm text-brand-stone">建築設計事務所</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 rounded-xl text-brand-forest hover:bg-brand-forest/10"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                {/* ナビゲーション */}
                <nav className="flex-1 p-4 sm:p-6">
                  <div className="space-y-2">
                    {navigation.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href || 
                        (item.href !== '/' && pathname.startsWith(item.href));
                      
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link href={item.href}>
                            <div className={cn(
                              'flex items-center gap-3 p-4 rounded-xl transition-all duration-300 group text-brand-forest hover:bg-brand-sage/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage/50',
                              isActive && 'bg-brand-sage/20 ring-1 ring-brand-sage/40'
                            )}>
                              <Icon className="w-5 h-5" />
                              <span className="font-medium">{item.name}</span>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                {/* フッター */}
                <div className="p-4 sm:p-6 border-t border-gray-200">
                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-brand-forest to-brand-sage text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                      <Phone className="w-4 h-4 mr-2" />
                      お問い合わせ
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* スペーサー */}
      <div className="h-14 sm:h-16 md:h-20" />
    </>
  );
}