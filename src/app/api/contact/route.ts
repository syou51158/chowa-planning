import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData, sendContactNotification, sendAutoReply } from '@/lib/email';
import { saveInquiry, trackEvent } from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    // バリデーション
    if (!formData.name || !formData.email || !formData.serviceType || !formData.message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません。' },
        { status: 400 }
      );
    }

    // メールアドレスの簡単なバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください。' },
        { status: 400 }
      );
    }

    // データベースに保存
    try {
      const inquiryId = await saveInquiry(formData);
      console.log('お問い合わせを保存しました:', inquiryId);
    } catch (dbError) {
      console.error('データベース保存エラー:', dbError);
      // データベースエラーでも処理を続行（メール送信は実行）
    }

    // メール送信
    try {
      // 管理者への通知メール
      await sendContactNotification(formData);

      // お客様への自動返信メール
      await sendAutoReply(formData);

      console.log('メール送信完了');
    } catch (mailError) {
      console.error('メール送信エラー:', mailError);
      // メールエラーでも成功として扱う（お問い合わせは受け付けた）
    }

    // Google Analyticsイベント追跡
    try {
      await trackEvent('contact_form_submit', {
        service_type: formData.serviceType,
        has_company: !!formData.company,
        has_phone: !!formData.phone,
        has_budget: !!formData.budget,
        has_timeline: !!formData.timeline,
        has_location: !!formData.location
      });
    } catch (analyticsError) {
      console.error('Analytics追跡エラー:', analyticsError);
      // Analytics エラーは無視
    }

    return NextResponse.json(
      {
        message: 'お問い合わせありがとうございます。担当者より折り返しご連絡いたします。',
        success: true
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('お問い合わせ処理エラー:', error);

    return NextResponse.json(
      {
        error: 'お問い合わせの送信に失敗しました。お手数ですが、再度お試しください。',
        success: false
      },
      { status: 500 }
    );
  }
}

// CORS対応（必要に応じて）
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}