# 調和プランニング - 公式ウェブサイト

株式会社調和プランニングの公式ウェブサイトです。建築設計、都市計画、環境配慮型建築などのサービスを提供しています。

## 🚀 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **UIコンポーネント**: shadcn/ui
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **フォーム**: React Hook Form
- **通知**: Sonner

## 📁 プロジェクト構造

```
chowa-planning/
├── src/
│   ├── app/                    # App Router ページ
│   │   ├── (pages)/           # ページグループ
│   │   ├── api/               # API ルート
│   │   ├── globals.css        # グローバルスタイル
│   │   ├── layout.tsx         # ルートレイアウト
│   │   └── page.tsx           # ホームページ
│   ├── components/            # 再利用可能コンポーネント
│   │   ├── ui/               # UIコンポーネント
│   │   ├── layout/           # レイアウトコンポーネント
│   │   └── sections/         # セクションコンポーネント
│   └── lib/                  # ユーティリティとデータ
│       ├── data.ts           # サンプルデータ
│       ├── email.ts          # メール送信機能
│       ├── database.ts       # データベース操作
│       └── utils.ts          # ユーティリティ関数
├── public/                   # 静的ファイル
│   ├── images/              # 画像ファイル
│   └── og/                  # OG画像
└── content/                 # MDXコンテンツ
    ├── projects/            # プロジェクト記事
    └── news/               # ニュース記事
```

## 🛠️ セットアップ

### 前提条件

- Node.js 18.0.0 以上
- npm または yarn

### インストール

1. リポジトリをクローン
```bash
git clone https://github.com/your-username/chowa-planning.git
cd chowa-planning
```

2. 依存関係をインストール
```bash
npm install
# または
yarn install
```

3. 環境変数を設定
```bash
cp .env.example .env.local
```

必要な環境変数:
```env
# メール送信設定（例: SendGrid）
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your_sendgrid_api_key
SMTP_FROM=info@chowa-planning.com

# データベース設定（例: Supabase）
DATABASE_URL=your_database_url
DATABASE_ANON_KEY=your_anon_key

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

4. 開発サーバーを起動
```bash
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 📝 主要機能

### ✅ 実装済み機能

- **レスポンシブデザイン**: モバイル、タブレット、デスクトップ対応
- **SEO最適化**: メタデータ、サイトマップ、robots.txt
- **アクセシビリティ**: WCAG 2.1 AA準拠
- **パフォーマンス最適化**: 画像最適化、コード分割
- **お問い合わせフォーム**: バリデーション、メール送信
- **プロジェクト・ニュース管理**: 動的ページ生成
- **アニメーション**: スムーズなページ遷移

### 🔄 今後の拡張予定

- **CMS統合**: Contentful または Strapi
- **多言語対応**: 日本語・英語
- **管理画面**: プロジェクト・ニュース管理
- **検索機能**: 全文検索
- **ブログ機能**: MDX対応

## 🚀 デプロイ

### Vercel（推奨）

1. [Vercel](https://vercel.com) にアカウント作成
2. GitHubリポジトリを接続
3. 環境変数を設定
4. デプロイ

### その他のプラットフォーム

- **Netlify**: `npm run build && npm run export`
- **AWS Amplify**: 自動デプロイ設定
- **Docker**: `Dockerfile` を使用

## 📊 パフォーマンス

- **Lighthouse スコア**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: 良好
- **画像最適化**: Next.js Image コンポーネント使用
- **コード分割**: 自動的な最適化

## 🔧 開発ガイド

### コンポーネント作成

```tsx
// src/components/ui/example.tsx
'use client';

import { cn } from '@/lib/utils';

interface ExampleProps {
  className?: string;
  children: React.ReactNode;
}

export function Example({ className, children }: ExampleProps) {
  return (
    <div className={cn('base-styles', className)}>
      {children}
    </div>
  );
}
```

### ページ作成

```tsx
// src/app/example/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ページタイトル - 調和プランニング',
  description: 'ページの説明',
};

export default function ExamplePage() {
  return (
    <div>
      <h1>ページコンテンツ</h1>
    </div>
  );
}
```

### API ルート作成

```tsx
// src/app/api/example/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello World' });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ received: body });
}
```

## 🧪 テスト

```bash
# ユニットテスト
npm run test

# E2Eテスト
npm run test:e2e

# テストカバレッジ
npm run test:coverage
```

## 📈 分析とモニタリング

- **Google Analytics**: ユーザー行動分析
- **Google Search Console**: SEO監視
- **Vercel Analytics**: パフォーマンス監視
- **Sentry**: エラー監視（オプション）

## 🤝 コントリビューション

1. フォークを作成
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 📞 サポート

質問や問題がある場合は、以下の方法でお問い合わせください：

- **Email**: info@chowa-planning.com
- **Phone**: 03-XXXX-XXXX
- **GitHub Issues**: [Issues ページ](https://github.com/your-username/chowa-planning/issues)

---

**株式会社調和プランニング**  
〒XXX-XXXX 東京都XXX区XXX  
TEL: 03-XXXX-XXXX  
Email: info@chowa-planning.com  
Website: https://chowa-planning.com
