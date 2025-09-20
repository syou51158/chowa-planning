// サンプルデータ

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'residential' | 'commercial' | 'public' | 'renovation';
  location: string;
  year: number;
  area: string;
  budget: string;
  status: 'completed' | 'in-progress' | 'planning';
  images: string[];
  features: string[];
  client: string;
  architect: string;
  awards?: string[];
}

export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'news' | 'project' | 'award' | 'event';
  publishedAt: string;
  author: string;
  tags: string[];
  featured: boolean;
  image?: string;
}

// プロジェクトサンプルデータ
export const projects: Project[] = [
  {
    id: '1',
    title: '自然と調和する住宅',
    description: '緑豊かな環境に溶け込む、持続可能な住宅設計。自然素材を活用し、エネルギー効率を最大化した現代的な住まい。',
    category: 'residential',
    location: '東京都世田谷区',
    year: 2023,
    area: '120㎡',
    budget: '3,500万円',
    status: 'completed',
    images: ['/images/projects/house-1-1.jpg', '/images/projects/house-1-2.jpg'],
    features: [
      'ZEH（ネット・ゼロ・エネルギー・ハウス）認定',
      '自然素材（無垢材・珪藻土）の使用',
      '太陽光発電システム',
      'パッシブデザインによる省エネ設計',
      '雨水利用システム'
    ],
    client: 'A様邸',
    architect: '田中 太郎',
    awards: ['グッドデザイン賞 2023']
  },
  {
    id: '2',
    title: 'モダンオフィスビル',
    description: '働く人々の創造性を刺激する、開放的で機能的なオフィス空間。最新の環境技術を導入した次世代型ビル。',
    category: 'commercial',
    location: '東京都港区',
    year: 2023,
    area: '2,500㎡',
    budget: '8億円',
    status: 'completed',
    images: ['/images/projects/office-1-1.jpg', '/images/projects/office-1-2.jpg'],
    features: [
      'LEED認証取得',
      'スマートビルディングシステム',
      '屋上緑化',
      'LED照明システム',
      '高効率空調システム'
    ],
    client: '株式会社○○',
    architect: '佐藤 花子'
  },
  {
    id: '3',
    title: '地域交流センター',
    description: '地域住民が集い、交流する場として設計された公共施設。バリアフリー設計で、すべての人に優しい空間。',
    category: 'public',
    location: '神奈川県横浜市',
    year: 2022,
    area: '1,800㎡',
    budget: '5億円',
    status: 'completed',
    images: ['/images/projects/community-1-1.jpg', '/images/projects/community-1-2.jpg'],
    features: [
      'ユニバーサルデザイン',
      '多目的ホール',
      '図書コーナー',
      'カフェスペース',
      '子育て支援室'
    ],
    client: '横浜市',
    architect: '山田 次郎'
  },
  {
    id: '4',
    title: '古民家リノベーション',
    description: '築100年の古民家を現代的な住まいに再生。伝統的な建築技術と現代の快適性を融合させたプロジェクト。',
    category: 'renovation',
    location: '埼玉県川越市',
    year: 2023,
    area: '180㎡',
    budget: '2,800万円',
    status: 'completed',
    images: ['/images/projects/renovation-1-1.jpg', '/images/projects/renovation-1-2.jpg'],
    features: [
      '伝統工法の保存',
      '断熱性能の向上',
      '現代的な設備の導入',
      '庭園の再整備',
      '文化財的価値の保全'
    ],
    client: 'B様邸',
    architect: '田中 太郎',
    awards: ['リノベーション・オブ・ザ・イヤー 2023']
  },
  {
    id: '5',
    title: 'エコロジカル住宅',
    description: '環境負荷を最小限に抑えた持続可能な住宅。再生可能エネルギーと自然素材を活用したエコハウス。',
    category: 'residential',
    location: '千葉県市川市',
    year: 2024,
    area: '140㎡',
    budget: '4,200万円',
    status: 'in-progress',
    images: ['/images/projects/eco-house-1-1.jpg'],
    features: [
      'カーボンニュートラル設計',
      '地中熱利用システム',
      '雨水・中水利用',
      '自然換気システム',
      'リサイクル材料の活用'
    ],
    client: 'C様邸',
    architect: '佐藤 花子'
  },
  {
    id: '6',
    title: '都市型複合施設',
    description: '商業・住宅・オフィスが一体となった都市型複合施設。持続可能な都市開発のモデルケース。',
    category: 'commercial',
    location: '東京都渋谷区',
    year: 2024,
    area: '15,000㎡',
    budget: '50億円',
    status: 'planning',
    images: ['/images/projects/complex-1-1.jpg'],
    features: [
      '混合用途開発',
      'スマートシティ技術',
      '公共交通連携',
      '緑化推進',
      'エネルギー自給自足'
    ],
    client: '都市開発株式会社',
    architect: '山田 次郎'
  }
];

// ニュースサンプルデータ
export const news: NewsPost[] = [
  {
    id: '1',
    title: 'グッドデザイン賞2023を受賞しました',
    excerpt: '「自然と調和する住宅」プロジェクトがグッドデザイン賞2023を受賞いたしました。',
    content: `この度、弊社が設計を手がけた「自然と調和する住宅」が、グッドデザイン賞2023を受賞いたしました。

本プロジェクトは、持続可能な住宅設計の新しいスタンダードを提示することを目指し、自然素材の活用、エネルギー効率の最大化、そして住む人の健康と快適性を重視した設計を行いました。

審査委員からは「環境への配慮と住み心地の良さを高次元で両立させた優れた設計」との評価をいただきました。`,
    category: 'award',
    publishedAt: '2023-10-15',
    author: '調和プランニング',
    tags: ['受賞', 'グッドデザイン賞', '住宅設計'],
    featured: true,
    image: '/images/news/award-2023.jpg'
  },
  {
    id: '2',
    title: '新オフィス移転のお知らせ',
    excerpt: '2024年1月より、新オフィスに移転いたします。より良いサービス提供のため、設備を拡充いたします。',
    content: `平素より格別のご愛顧を賜り、厚く御礼申し上げます。

この度、業務拡大に伴い、2024年1月15日より新オフィスに移転することとなりました。

新オフィスでは、より充実した設備と環境で、お客様により良いサービスを提供してまいります。

【新住所】
〒XXX-XXXX 東京都XXX区XXX

移転に伴い、一時的にご不便をおかけする場合がございますが、何卒ご理解のほどよろしくお願いいたします。`,
    category: 'news',
    publishedAt: '2023-12-01',
    author: '調和プランニング',
    tags: ['お知らせ', '移転'],
    featured: false
  },
  {
    id: '3',
    title: '持続可能な建築セミナーを開催します',
    excerpt: '2024年2月に「持続可能な建築の未来」をテーマとしたセミナーを開催いたします。',
    content: `「持続可能な建築の未来」をテーマとしたセミナーを開催いたします。

【開催概要】
日時：2024年2月20日（火）14:00-17:00
会場：東京国際フォーラム
参加費：無料（事前申込制）

【プログラム】
・基調講演「カーボンニュートラル建築への道筋」
・事例紹介「ZEH・ZEBの実践的アプローチ」
・パネルディスカッション「建築業界の未来」

お申し込みは弊社ウェブサイトより承っております。`,
    category: 'event',
    publishedAt: '2024-01-10',
    author: '調和プランニング',
    tags: ['セミナー', '持続可能', 'イベント'],
    featured: true,
    image: '/images/news/seminar-2024.jpg'
  },
  {
    id: '4',
    title: '地域交流センターが竣工しました',
    excerpt: '横浜市に建設していた地域交流センターが竣工し、地域住民の皆様にご利用いただけるようになりました。',
    content: `横浜市に建設を進めておりました地域交流センターが、このたび竣工いたしました。

本施設は、地域住民の皆様が気軽に集い、交流できる場として設計されており、多目的ホール、図書コーナー、カフェスペースなどを備えています。

ユニバーサルデザインを採用し、お子様からご高齢の方まで、すべての方に安心してご利用いただける施設となっております。

地域の皆様の豊かな暮らしに貢献できることを、心より嬉しく思います。`,
    category: 'project',
    publishedAt: '2022-11-30',
    author: '調和プランニング',
    tags: ['竣工', '公共施設', '地域貢献'],
    featured: false
  },
  {
    id: '5',
    title: '建築雑誌「ARCHITECTURE TODAY」に掲載されました',
    excerpt: '弊社の古民家リノベーションプロジェクトが建築雑誌に特集記事として掲載されました。',
    content: `建築雑誌「ARCHITECTURE TODAY」2024年1月号に、弊社が手がけた古民家リノベーションプロジェクトが特集記事として掲載されました。

「伝統と革新の融合」というタイトルで、築100年の古民家を現代的な住まいに再生したプロセスと、その設計思想について詳しく紹介されています。

伝統的な建築技術の保存と現代の快適性の両立について、編集部からも高い評価をいただきました。

雑誌は全国の書店でお求めいただけます。ぜひご覧ください。`,
    category: 'news',
    publishedAt: '2024-01-05',
    author: '調和プランニング',
    tags: ['掲載', '雑誌', 'リノベーション'],
    featured: false
  }
];

// データ取得関数
export async function getProjects(category?: string): Promise<Project[]> {
  // 実際のアプリケーションでは、ここでAPIやデータベースからデータを取得
  let filteredProjects = projects;
  
  if (category && category !== 'all') {
    filteredProjects = projects.filter(project => project.category === category);
  }
  
  return filteredProjects.sort((a, b) => b.year - a.year);
}

export async function getProject(id: string): Promise<Project | null> {
  return projects.find(project => project.id === id) || null;
}

export async function getNews(category?: string): Promise<NewsPost[]> {
  let filteredNews = news;
  
  if (category && category !== 'all') {
    filteredNews = news.filter(post => post.category === category);
  }
  
  return filteredNews.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getNewsPost(id: string): Promise<NewsPost | null> {
  return news.find(post => post.id === id) || null;
}

export async function getFeaturedProjects(limit: number = 3): Promise<Project[]> {
  return projects
    .filter(project => project.status === 'completed')
    .sort((a, b) => b.year - a.year)
    .slice(0, limit);
}

export async function getFeaturedNews(limit: number = 3): Promise<NewsPost[]> {
  return news
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}