import { Metadata } from 'next';

const siteConfig = {
  name: '調和プランニング',
  description: '人と自然、都市とまちを「調和」させる。小さな配慮の重なりで、暮らしの景色はやさしく変わる。設計から監理、まちのルールづくりまで、丁寧に伴走します。',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://chowa-planning.jp',
  ogImage: '/og/default.jpg',
  links: {
    twitter: 'https://twitter.com/chowa_planning',
    facebook: 'https://facebook.com/chowa.planning',
  },
};

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
};

export function generateSEO({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  tags,
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const fullUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
  const fullImage = image.startsWith('http') ? image : `${siteConfig.url}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      '調和プランニング',
      '建築設計',
      '施工管理',
      '不動産',
      '持続可能',
      'サステナブル',
      '自然素材',
      '環境配慮',
      '建築監理',
    ],
    authors: authors ? authors.map(name => ({ name })) : [{ name: '調和プランニング' }],
    creator: '調和プランニング',
    publisher: '調和プランニング',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: 'ja_JP',
      url: fullUrl,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: authors || ['調和プランニング'],
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      creator: '@chowa_planning',
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

export function generateStructuredData({
  type,
  data,
}: {
  type: 'Organization' | 'Article' | 'BreadcrumbList' | 'Project';
  data: Record<string, unknown>;
}) {
  const baseUrl = siteConfig.url;

  switch (type) {
    case 'Organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        description: siteConfig.description,
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'JP',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'info@chowa-planning.jp',
          contactType: 'customer service',
        },
        sameAs: [
          siteConfig.links.twitter,
          siteConfig.links.facebook,
        ],
      };

    case 'Article':
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        image: data.image ? `${baseUrl}${data.image}` : `${baseUrl}${siteConfig.ogImage}`,
        datePublished: data.publishedTime,
        dateModified: data.modifiedTime || data.publishedTime,
        author: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.name,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo.png`,
          },
        },
      };

    case 'BreadcrumbList':
      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: (data as unknown as Array<{ name: string, url: string }>).map((item, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${baseUrl}${item.url}`,
        })),
      };

    case 'Project':
      return {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: data.title,
        description: data.problem,
        image: data.hero ? `${baseUrl}${data.hero}` : undefined,
        dateCreated: data.year,
        creator: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
        about: data.category,
        locationCreated: data.location,
      };

    default:
      return null;
  }
}

export { siteConfig };