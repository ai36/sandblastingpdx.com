'use server'

import { SERVICES } from '@/constants'

interface ContactPayload {
  name: string
  phone?: string
  email: string
  service?: string
  location?: string
  message: string
}

function esc(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export async function sendContactForm(
  payload: ContactPayload,
): Promise<{ ok: boolean }> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    console.error('[contact] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set')
    return { ok: false }
  }

  const serviceLabel =
    SERVICES.find((s) => s.slug === payload.service)?.title ??
    (payload.service === 'not-sure' ? "Not sure — let's talk" : null)

  const lines = [
    '🔥 <b>New Estimate Request</b>',
    '',
    `👤 <b>Name:</b> ${esc(payload.name)}`,
    payload.phone ? `📞 <b>Phone:</b> ${esc(payload.phone)}` : null,
    `📧 <b>Email:</b> ${esc(payload.email)}`,
    serviceLabel ? `🔧 <b>Service:</b> ${esc(serviceLabel)}` : null,
    payload.location ? `📍 <b>Location:</b> ${esc(payload.location)}` : null,
    '',
    `💬 <b>Message:</b>\n${esc(payload.message)}`,
  ]
    .filter(Boolean)
    .join('\n')

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: lines, parse_mode: 'HTML' }),
    },
  )

  if (!res.ok) {
    console.error('[contact] Telegram API error:', await res.text())
  }

  return { ok: res.ok }
}
