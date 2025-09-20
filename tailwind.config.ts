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
          // メインカラー - 深いブルー系（信頼・専門性・技術力）
          primary: "#1E3A8A",    // 深いロイヤルブルー（メイン）
          secondary: "#1E40AF",  // 建築ブルー（サブ）
          
          // アクセントカラー - オレンジ系（活力・革新・成長）
          accent: "#EA580C",     // 建設オレンジ（アクセント）
          warning: "#F59E0B",    // 安全オレンジ（注意喚起）
          
          // ニュートラルカラー - グレー系（安定・信頼・品格）
          steel: "#374151",      // スチールグレー（濃）
          concrete: "#6B7280",   // コンクリートグレー（中）
          stone: "#9CA3AF",      // 石材グレー（薄）
          
          // サポートカラー
          natural: "#F9FAFB",    // 清潔な白（背景）
          dark: "#111827",       // ダークグレー（テキスト）
          success: "#059669",    // 成功グリーン
          
          // 旧カラー（互換性のため残す）
          forest: "#1E3A8A",     // primary にマッピング
          sky: "#1E40AF",        // secondary にマッピング
          earth: "#EA580C",      // accent にマッピング
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