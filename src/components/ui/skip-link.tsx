'use client';

import { cn } from '@/lib/utils';

interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function SkipLink({ href, children, className }: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50',
        'bg-brand-forest text-white px-4 py-2 rounded-md',
        'focus:outline-none focus:ring-2 focus:ring-brand-sage focus:ring-offset-2',
        'transition-all duration-200',
        className
      )}
    >
      {children}
    </a>
  );
}

// スクリーンリーダー専用テキスト
export function ScreenReaderOnly({ children }: { children: React.ReactNode }) {
  return <span className="sr-only">{children}</span>;
}

// フォーカス可能な要素のアウトライン
export function FocusRing({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('focus-within:ring-2 focus-within:ring-brand-sage focus-within:ring-offset-2 rounded-md', className)}>
      {children}
    </div>
  );
}