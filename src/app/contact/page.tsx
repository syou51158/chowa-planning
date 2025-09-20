'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle,
  HardHat
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const contactInfo = {
  address: '〒XXX-XXXX 東京都XXX区XXX',
  phone: '03-XXXX-XXXX',
  email: 'info@chowa-planning.com',
  hours: '平日 9:00-18:00（土日祝日は要予約）'
};

const serviceTypes = [
  { value: 'residential', label: '住宅設計' },
  { value: 'commercial', label: '商業・公共建築' },
  { value: 'urban-planning', label: '都市計画・まちづくり' },
  { value: 'consulting', label: '建築コンサルティング' },
  { value: 'sustainable', label: '環境配慮型建築' },
  { value: 'other', label: 'その他' }
];

const budgetRanges = [
  { value: 'under-1000', label: '1,000万円未満' },
  { value: '1000-3000', label: '1,000万円〜3,000万円' },
  { value: '3000-5000', label: '3,000万円〜5,000万円' },
  { value: '5000-10000', label: '5,000万円〜1億円' },
  { value: 'over-10000', label: '1億円以上' },
  { value: 'undecided', label: '未定' }
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  budget: string;
  timeline: string;
  location: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    budget: '',
    timeline: '',
    location: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success('お問い合わせを送信しました。ありがとうございます。');
        // フォームをリセット
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          serviceType: '',
          budget: '',
          timeline: '',
          location: '',
          message: ''
        });
      } else {
        throw new Error('送信に失敗しました');
      }
    } catch (error) {
      toast.error('送信に失敗しました。しばらく時間をおいて再度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-steel text-white relative overflow-hidden">
        {/* 建築グリッドパターン */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="contact-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#contact-grid)" />
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
              お問い合わせ
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-white/90 drop-shadow-md">
              建設プロジェクトのご相談やお見積もりなど、お気軽にお問い合わせください。
              <br className="hidden md:block" />
              経験豊富な専門スタッフが迅速かつ丁寧にご対応いたします。
            </p>
          </motion.div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* お問い合わせフォーム */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8 md:p-12">
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-forest mb-4">
                      お問い合わせフォーム
                    </h2>
                    <p className="text-brand-stone leading-relaxed">
                      下記フォームにご記入いただき、送信ボタンを押してください。
                      <br />
                      通常、1-2営業日以内にご返信いたします。
                    </p>
                  </div>
                  
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        <div>
                          <h3 className="font-semibold text-green-800">送信完了</h3>
                          <p className="text-green-700">お問い合わせありがとうございます。1-2営業日以内にご返信いたします。</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-brand-forest font-semibold">
                          お名前 <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className="rounded-xl border-gray-300 focus:border-brand-forest focus:ring-brand-forest"
                          placeholder="山田 太郎"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-brand-forest font-semibold">
                          メールアドレス <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="rounded-xl border-gray-300 focus:border-brand-forest focus:ring-brand-forest"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-brand-forest font-semibold">
                          電話番号
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="rounded-xl border-gray-300 focus:border-brand-forest focus:ring-brand-forest"
                          placeholder="03-1234-5678"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-brand-forest font-semibold">
                          会社名・団体名
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="rounded-xl border-gray-300 focus:border-brand-forest focus:ring-brand-forest"
                          placeholder="株式会社○○"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-brand-forest font-semibold">
                          ご相談内容 <span className="text-red-500">*</span>
                        </Label>
                        <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                          <SelectTrigger className="rounded-xl border-gray-300 focus:border-brand-forest focus:ring-brand-forest">
                            <SelectValue placeholder="サービスを選択してください" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceTypes.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-brand-forest font-semibold">
                          ご予算
                        </Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger className="rounded-xl border-gray-300 focus:border-brand-forest focus:ring-brand-forest">
                            <SelectValue placeholder="予算を選択してください" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((budget) => (
                              <SelectItem key={budget.value} value={budget.value}>
                                {budget.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="timeline" className="text-brand-forest font-semibold">
                          希望スケジュール
                        </Label>
                        <Input
                          id="timeline"
                          type="text"
                          value={formData.timeline}
                          onChange={(e) => handleInputChange('timeline', e.target.value)}
                          className="rounded-xl border-gray-300 focus:border-brand-forest focus:ring-brand-forest"
                          placeholder="2024年春頃開始希望"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-brand-forest font-semibold">
                          建設予定地・所在地
                        </Label>
                        <Input
                          id="location"
                          type="text"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="rounded-xl border-gray-300 focus:border-brand-forest focus:ring-brand-forest"
                          placeholder="東京都○○区"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-brand-forest font-semibold">
                        詳細・ご要望 <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        rows={6}
                        className="rounded-xl border-gray-300 focus:border-brand-forest focus:ring-brand-forest resize-none"
                        placeholder="ご相談内容やご要望について、できるだけ詳しくお聞かせください。

例：
・新築住宅を検討しており、自然素材を使った家を建てたい
・既存の店舗をリノベーションして、カフェを開業したい
・環境に配慮したオフィスビルの設計を依頼したい"
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting || !formData.name || !formData.email || !formData.serviceType || !formData.message}
                        className="w-full bg-brand-forest hover:bg-brand-forest/90 text-white py-6 text-lg rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            送信中...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            お問い合わせを送信する
                          </div>
                        )}
                      </Button>
                    </div>
                    
                    <div className="text-sm text-brand-steel leading-relaxed">
                      <AlertCircle className="w-4 h-4 inline mr-1" />
                      お預かりした個人情報は、お問い合わせへの回答以外の目的では使用いたしません。
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* 連絡先情報 */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-brand-forest mb-6">
                    お電話でのお問い合わせ
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-brand-forest" />
                      </div>
                      <div>
                        <div className="font-semibold text-brand-forest mb-1">
                          電話番号
                        </div>
                        <div className="text-brand-stone">
                          {contactInfo.phone}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-brand-forest" />
                      </div>
                      <div>
                        <div className="font-semibold text-brand-forest mb-1">
                          受付時間
                        </div>
                        <div className="text-brand-stone">
                          {contactInfo.hours}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-brand-forest" />
                      </div>
                      <div>
                        <div className="font-semibold text-brand-forest mb-1">
                          メールアドレス
                        </div>
                        <div className="text-brand-stone break-all">
                          {contactInfo.email}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-brand-forest" />
                      </div>
                      <div>
                        <div className="font-semibold text-brand-forest mb-1">
                          所在地
                        </div>
                        <div className="text-brand-stone">
                          {contactInfo.address}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg rounded-2xl bg-brand-forest text-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">
                    初回相談は無料です
                  </h3>
                  <p className="text-brand-natural leading-relaxed mb-6">
                    どんな小さなご相談でも、まずはお気軽にお問い合わせください。経験豊富なスタッフが丁寧にお答えいたします。
                  </p>
                  <ul className="space-y-2 text-brand-natural">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>初回相談無料</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>秘密厳守</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>迅速な対応</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}