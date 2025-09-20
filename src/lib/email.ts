// メール送信機能（実装例）

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceType: string;
  budget?: string;
  timeline?: string;
  location?: string;
  message: string;
}

// お問い合わせ通知メール送信
export async function sendContactNotification(data: ContactFormData): Promise<boolean> {
  try {
    // 実際のアプリケーションでは、SendGrid、Nodemailer、AWS SESなどを使用
    console.log('お問い合わせ通知メール送信:', {
      to: 'info@chowa-planning.com',
      subject: `【お問い合わせ】${data.name}様より`,
      content: `
新しいお問い合わせが届きました。

【お客様情報】
お名前: ${data.name}
メールアドレス: ${data.email}
電話番号: ${data.phone || '未入力'}
会社名・団体名: ${data.company || '未入力'}

【ご相談内容】
サービス: ${data.serviceType}
ご予算: ${data.budget || '未入力'}
希望スケジュール: ${data.timeline || '未入力'}
建設予定地: ${data.location || '未入力'}

【詳細・ご要望】
${data.message}

---
調和プランニング お問い合わせシステム
      `
    });
    
    return true;
  } catch (error) {
    console.error('メール送信エラー:', error);
    return false;
  }
}

// 自動返信メール送信
export async function sendAutoReply(data: ContactFormData): Promise<boolean> {
  try {
    console.log('自動返信メール送信:', {
      to: data.email,
      subject: 'お問い合わせありがとうございます - 調和プランニング',
      content: `
${data.name} 様

この度は、調和プランニングにお問い合わせいただき、誠にありがとうございます。

以下の内容でお問い合わせを承りました。

【お問い合わせ内容】
サービス: ${data.serviceType}
ご予算: ${data.budget || '未入力'}
希望スケジュール: ${data.timeline || '未入力'}
建設予定地: ${data.location || '未入力'}

【詳細・ご要望】
${data.message}

担当者より1-2営業日以内にご連絡させていただきます。
お急ぎの場合は、お電話（03-XXXX-XXXX）にてお問い合わせください。

今後ともよろしくお願いいたします。

---
株式会社調和プランニング
〒XXX-XXXX 東京都XXX区XXX
TEL: 03-XXXX-XXXX
Email: info@chowa-planning.com
Website: https://chowa-planning.com
      `
    });
    
    return true;
  } catch (error) {
    console.error('自動返信メール送信エラー:', error);
    return false;
  }
}

// 実際のメール送信実装例（Nodemailer使用）
/*
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactNotification(data: ContactFormData): Promise<boolean> {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'info@chowa-planning.com',
      subject: `【お問い合わせ】${data.name}様より`,
      text: `新しいお問い合わせが届きました...`,
      html: `<h2>新しいお問い合わせ</h2>...`,
    });
    return true;
  } catch (error) {
    console.error('メール送信エラー:', error);
    return false;
  }
}
*/