import { Resend } from 'resend';
import { ContactFormData } from './types';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const defaultContactEmail = process.env.DEFAULT_CONTACT_EMAIL || 'info@chowa-planning.jp';

export async function sendContactNotification(data: ContactFormData): Promise<boolean> {
  if (!resend) {
    console.log('Resend not configured, skipping email send');
    // 開発環境では成功として扱う
    return true;
  }

  try {
    const emailContent = `
新しいお問い合わせが届きました。

【お客様情報】
お名前: ${data.name}
メールアドレス: ${data.email}
電話番号: ${data.phone || '未入力'}

【プロジェクト詳細】
予算範囲: ${data.budgetRange || '未入力'}
希望時期: ${data.timeframe || '未入力'}

【お問い合わせ内容】
${data.message}

【その他】
参照元: ${data.source || 'ウェブサイト'}
受信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}

---
調和プランニング お問い合わせシステム
    `;

    const { error } = await resend.emails.send({
      from: 'お問い合わせ <noreply@chowa-planning.jp>',
      to: [defaultContactEmail],
      subject: `【調和プランニング】新しいお問い合わせ - ${data.name}様`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    });

    if (error) {
      console.error('Resend error:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

export async function sendAutoReply(data: ContactFormData): Promise<boolean> {
  if (!resend) {
    console.log('Resend not configured, skipping auto-reply');
    return true;
  }

  try {
    const autoReplyContent = `
${data.name} 様

この度は調和プランニングにお問い合わせいただき、誠にありがとうございます。

以下の内容でお問い合わせを承りました。
内容を確認の上、2営業日以内にご連絡させていただきます。

【お問い合わせ内容】
${data.message}

【ご入力いただいた情報】
お名前: ${data.name}
メールアドレス: ${data.email}
電話番号: ${data.phone || '未入力'}
予算範囲: ${data.budgetRange || '未入力'}
希望時期: ${data.timeframe || '未入力'}

お急ぎの場合は、お電話でもお気軽にお問い合わせください。

---
調和プランニング
メール: info@chowa-planning.jp
ウェブサイト: https://chowa-planning.jp

※このメールは自動送信されています。
※ご返信いただいても対応できませんので、ご了承ください。
    `;

    const { error } = await resend.emails.send({
      from: '調和プランニング <noreply@chowa-planning.jp>',
      to: [data.email],
      subject: '【調和プランニング】お問い合わせありがとうございます',
      text: autoReplyContent,
      html: autoReplyContent.replace(/\n/g, '<br>'),
    });

    if (error) {
      console.error('Auto-reply error:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Failed to send auto-reply:', error);
    return false;
  }
}