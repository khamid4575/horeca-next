// app/api/sendMessage/route.js

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, fullname, phoneNumber, message } = await req.json();

  const text = `Email: ${email}\nFull Name: ${fullname}\nPhone Number: ${phoneNumber}\nMessage: ${message}`;

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = '-1002159191350';

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.description }, { status: response.status });
    }
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ error: 'Error sending message' }, { status: 500 });
  }
}
