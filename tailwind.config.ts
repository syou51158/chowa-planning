import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // ブランドカラー - 建築・土木業界の本格的なカラーパレット
        brand: {
          // メインカラー - 深いネイビー/チャコール（信頼・専門性・品格）
          primary: "#0F172A",    // ダークスレート（メイン背景・ヘッダー）
          secondary: "#334155",  // スレート（サブ要素）
          
          // アクセントカラー - 落ち着いたゴールド/ブロンズ（高級感・伝統・革新）
          accent: "#C29B40",     // アンティークゴールド（アクセント・ボタン）
          warning: "#D97706",    // アンバー（注意喚起）
          
          // ニュートラルカラー - グレー系（安定・信頼）
          steel: "#475569",      // クールグレー（濃）
          concrete: "#94A3B8",   // コンクリートグレー（中）
          stone: "#CBD5E1",      // ストーングレー（薄）
          
          // サポートカラー
          natural: "#F8FAFC",    // スノーホワイト（背景）
          dark: "#020617",       // ほぼ黒（テキスト）
          success: "#059669",    // エメラルド（成功）
          
          // 旧カラー（互換性のため残す - 新しい値にマッピング）
          forest: "#0F172A",     // primary にマッピング
          sage: "#059669",       // success にマッピング
          sky: "#334155",        // secondary にマッピング
          earth: "#C29B40",      // accent にマッピング
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "Noto Sans JP",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;