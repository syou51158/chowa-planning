'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { ContactFormData } from '@/lib/types';

const contactInfo = [
  {
    icon: Phone,
    title: 'お電話でのお問い合わせ',
    content: '03-XXXX-XXXX',
    description: '平日 9:00-18:00',
    color: 'text-brand-forest',
    bgColor: 'bg-brand-forest/15',
  },
  {
    icon: Mail,
    title: 'メールでのお問い合わせ',
    content: 'info@chowa-planning.com',
    description: '24時間受付',
    color: 'text-brand-sky',
    bgColor: 'bg-brand-sky/15',
  },
  {
    icon: MapPin,
    title: '事務所所在地',
    content: '東京都XXX区XXX',
    description: 'アクセス詳細はこちら',
    color: 'text-brand-steel',
    bgColor: 'bg-brand-steel/15',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
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
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          inquiryType: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-8 text-balance">
            お問い合わせ
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            建築に関するご相談やご質問など、
            <br className="hidden md:block" />
            お気軽にお問い合わせください。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* お問い合わせフォーム */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl rounded-3xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-slate-800 mb-8">
                  お問い合わせフォーム
                </h3>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">お問い合わせありがとうございます。担当者より折り返しご連絡いたします。</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">送信に失敗しました。お手数ですが、再度お試しください。</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* お名前 */}
                  <div>
                    <Label htmlFor="name" className="text-brand-stone font-semibold">
                      お名前 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-2 border-brand-concrete focus:border-brand-steel focus:ring-brand-steel/20"
                      placeholder="山田 太郎"
                    />
                  </div>

                  {/* メールアドレス */}
                  <div>
                    <Label htmlFor="email" className="text-brand-forest font-medium">
                      メールアドレス <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-2 border-brand-stone/30 focus:border-brand-forest"
                      placeholder="example@email.com"
                    />
                  </div>

                  {/* 電話番号 */}
                  <div>
                    <Label htmlFor="phone" className="text-brand-forest font-medium">
                      電話番号
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-2 border-brand-stone/30 focus:border-brand-forest"
                      placeholder="03-1234-5678"
                    />
                  </div>

                  {/* 会社名・団体名 */}
                  <div>
                    <Label htmlFor="company" className="text-brand-forest font-medium">
                      会社名・団体名
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="mt-2 border-brand-stone/30 focus:border-brand-forest"
                      placeholder="株式会社○○○"
                    />
                  </div>

                  {/* お問い合わせ種別 */}
                  <div>
                    <Label className="text-brand-forest font-medium">
                      お問い合わせ種別 <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => handleInputChange('inquiryType', value)}
                      required
                    >
                      <SelectTrigger className="mt-2 border-brand-stone/30 focus:border-brand-forest">
                        <SelectValue placeholder="選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="新築">新築</SelectItem>
                        <SelectItem value="リノベーション">リノベーション</SelectItem>
                        <SelectItem value="設計監理">設計監理</SelectItem>
                        <SelectItem value="コンサルティング">コンサルティング</SelectItem>
                        <SelectItem value="その他">その他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* メッセージ */}
                  <div>
                    <Label htmlFor="message" className="text-brand-forest font-medium">
                      メッセージ <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={5}
                      className="mt-2 border-brand-stone/30 focus:border-brand-forest resize-none"
                      placeholder="ご相談内容やご質問をお聞かせください"
                    />
                  </div>

                  {/* 送信ボタン */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        送信中...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        送信する
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* 連絡先情報 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-10">
              その他のお問い合わせ方法
            </h3>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl bg-white/90 backdrop-blur-sm hover:scale-105">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 mb-3 text-lg">
                            {info.title}
                          </h4>
                          <p className="text-xl font-semibold text-slate-700 mb-2">
                            {info.content}
                          </p>
                          <p className="text-sm text-slate-500">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}

            {/* 営業時間 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-3 text-lg">
                        営業時間
                      </h4>
                      <p className="text-slate-700 text-lg">
                        平日：9:00 - 18:00
                        <br />
                        土日祝：定休日
                      </p>
                      <p className="text-sm text-slate-500 mt-3">
                        ※緊急時はメールにてご連絡ください
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;