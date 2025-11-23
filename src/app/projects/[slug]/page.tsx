import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Calendar,
  MapPin,
  Users,
  ArrowLeft,
  Building
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getProject, getProjects } from '@/lib/data';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// 静的パラメータ生成
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.id,
  }));
}

// メタデータ生成
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProject(params.slug);

  if (!project) {
    return {
      title: 'プロジェクトが見つかりません - 調和プランニング',
    };
  }

  return {
    title: `${project.title} - 調和プランニング`,
    description: project.description,
    openGraph: {
      title: `${project.title} - 調和プランニング`,
      description: project.description,
      images: project.images && project.images.length > 0 ? [project.images[0]] : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* ヒーロー画像 */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {project.images && project.images.length > 0 && (
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/40" />

        {/* 戻るボタン */}
        <div className="absolute top-8 left-8 z-10">
          <Link href="/projects">
            <Button variant="outline" className="bg-white/90 hover:bg-white text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              プロジェクト一覧に戻る
            </Button>
          </Link>
        </div>

        {/* プロジェクト基本情報 */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
          <div className="container mx-auto">
            <div className="text-white max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-brand-accent text-white">
                  {project.category}
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  {project.status}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 mb-6">
                {project.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}年</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  <span>{project.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{project.client}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プロジェクト詳細 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* メインコンテンツ */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2>プロジェクト詳細</h2>
                <p>{project.description}</p>

                <h2>特徴・工夫点</h2>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                {/* 追加の画像があれば表示 */}
                {project.images && project.images.length > 1 && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.slice(1).map((img, index) => (
                      <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                          src={img}
                          alt={`${project.title} - ${index + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* サイドバー */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* プロジェクト詳細情報 */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">プロジェクト詳細</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">竣工年</span>
                        <span className="font-medium">{project.year}年</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">所在地</span>
                        <span className="font-medium">{project.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">延床面積</span>
                        <span className="font-medium">{project.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">予算</span>
                        <span className="font-medium">{project.budget}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">クライアント</span>
                        <span className="font-medium">{project.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">設計者</span>
                        <span className="font-medium">{project.architect}</span>
                      </div>
                      {project.awards && project.awards.length > 0 && (
                        <div>
                          <span className="text-gray-600 block mb-2">受賞歴</span>
                          <div className="space-y-1">
                            {project.awards.map((award, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {award}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* お問い合わせCTA */}
                <Card className="bg-brand-primary text-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">類似プロジェクトをご検討ですか？</h3>
                    <p className="text-sm text-gray-300 mb-4">
                      お気軽にご相談ください。初回相談は無料です。
                    </p>
                    <Link href="/contact">
                      <Button variant="secondary" className="w-full bg-brand-accent text-brand-primary hover:bg-brand-warning">
                        お問い合わせ
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 関連プロジェクト */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              関連プロジェクト
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              同じカテゴリーの他のプロジェクトもご覧ください
            </p>
          </div>

          <div className="text-center">
            <Link href={`/projects?category=${project.category}`}>
              <Button variant="outline" size="lg">
                {project.category}の他のプロジェクトを見る
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}