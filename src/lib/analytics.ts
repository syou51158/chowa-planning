declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Google Analytics が有効かどうかを確認
export const isGAEnabled = !!GA_MEASUREMENT_ID;

// ページビューを送信
export const pageview = (url: string) => {
  if (!isGAEnabled || typeof window === 'undefined') return;
  
  window.gtag('config', GA_MEASUREMENT_ID!, {
    page_path: url,
  });
};

// イベントを送信
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!isGAEnabled || typeof window === 'undefined') return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// よく使用されるイベント
export const trackContactFormSubmit = () => {
  event({
    action: 'submit',
    category: 'contact_form',
    label: 'contact_page',
  });
};

export const trackProjectView = (projectSlug: string) => {
  event({
    action: 'view',
    category: 'project',
    label: projectSlug,
  });
};

export const trackDownload = (fileName: string) => {
  event({
    action: 'download',
    category: 'file',
    label: fileName,
  });
};

export const trackExternalLink = (url: string) => {
  event({
    action: 'click',
    category: 'external_link',
    label: url,
  });
};

// Google Analytics スクリプトタグを生成
export const getGAScript = () => {
  if (!isGAEnabled) return null;
  
  return {
    src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
    strategy: 'afterInteractive' as const,
  };
};

// Google Analytics 初期化スクリプト
export const getGAInitScript = () => {
  if (!isGAEnabled) return null;
  
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_path: window.location.pathname,
    });
  `;
};