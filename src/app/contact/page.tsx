'use client'

import { useState, useTransition } from 'react'
import { IconCircleCheck, IconMail } from '@tabler/icons-react'
import { COMPANY, SERVICE_AREAS, SERVICES, SECTION_COPY } from '@/constants'

// Note: metadata export requires a separate Server Component wrapper.
// For simplicity here the page is a Client Component; move metadata to a
// parent layout or a separate generateMetadata() file if SEO is needed.

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    startTransition(async () => {
      // TODO: replace with your form handler / API route / Formspree endpoint
      console.info('Form submission:', data)
      // Simulate success
      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
      form.reset()
    })
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <IconCircleCheck size={56} strokeWidth={1.5} className="text-fire-400 mx-auto mb-4" aria-hidden="true" />
        <h3 className="text-xl font-bold text-steel-50 mb-2">
          Got it — we&apos;ll be in touch soon!
        </h3>
        <p className="text-steel-400">
          Most inquiries get a same-day response during business hours.
        </p>
        <button
          className="mt-6 text-sm text-fire-400 hover:text-fire-300 transition-colors font-semibold"
          onClick={() => setStatus('idle')}
        >
          Send another message →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-steel-300 mb-1.5">
            Your Name <span className="text-fire-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Mike Thompson"
            className="w-full px-4 py-3 rounded-xl bg-steel-800 border border-steel-700 text-steel-100 placeholder:text-steel-600 focus:border-fire-500 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-steel-300 mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(503) 555-0100"
            className="w-full px-4 py-3 rounded-xl bg-steel-800 border border-steel-700 text-steel-100 placeholder:text-steel-600 focus:border-fire-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-steel-300 mb-1.5">
          Email Address <span className="text-fire-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-xl bg-steel-800 border border-steel-700 text-steel-100 placeholder:text-steel-600 focus:border-fire-500 focus:outline-none transition-colors"
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-steel-300 mb-1.5">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-xl bg-steel-800 border border-steel-700 text-steel-100 focus:border-fire-500 focus:outline-none transition-colors"
        >
          <option value="">— Select a service —</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="not-sure">Not sure — let&apos;s talk</option>
        </select>
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-steel-300 mb-1.5">
          Your Location / City
        </label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Portland, OR"
          list="service-areas"
          className="w-full px-4 py-3 rounded-xl bg-steel-800 border border-steel-700 text-steel-100 placeholder:text-steel-600 focus:border-fire-500 focus:outline-none transition-colors"
        />
        <datalist id="service-areas">
          {SERVICE_AREAS.map((area) => (
            <option key={area} value={area} />
          ))}
        </datalist>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-steel-300 mb-1.5">
          Tell Us About Your Project <span className="text-fire-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe what you need blasted — size, material, current condition. Photos help too!"
          className="w-full px-4 py-3 rounded-xl bg-steel-800 border border-steel-700 text-steel-100 placeholder:text-steel-600 focus:border-fire-500 focus:outline-none transition-colors resize-y"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 bg-fire-500 hover:bg-fire-600 text-white font-bold text-lg rounded-xl transition-colors disabled:opacity-60 disabled:pointer-events-none"
      >
        {isPending ? 'Sending…' : 'Send My Request'}
      </button>

      <p className="text-xs text-center text-steel-600">
        We typically respond within a few hours during business hours. We will never spam you.
      </p>
    </form>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-steel-950 pt-16">
      {/* Page header */}
      <div className="bg-steel-900 border-b border-steel-800">
        <div className="container py-16 lg:py-20">
          <p className="text-fire-500 text-sm font-bold uppercase tracking-widest mb-3">
            {SECTION_COPY.contact.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-steel-50 mb-4">
            {SECTION_COPY.contact.title}
          </h1>
          <p className="text-lg text-steel-400 max-w-xl leading-relaxed">
            {SECTION_COPY.contact.subtitle}
          </p>
        </div>
      </div>

      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-6 lg:p-8 rounded-2xl bg-steel-900 border border-steel-800">
              <h2 className="text-xl font-bold text-steel-50 mb-6">
                Request a Free Estimate
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-2 space-y-6">
            {/* Direct contact */}
            <div className="p-6 rounded-2xl bg-steel-900 border border-steel-800">
              <h3 className="font-bold text-steel-100 mb-4">
                Prefer to email directly?
              </h3>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-lg font-bold text-fire-400 hover:text-fire-300 transition-colors"
              >
                <IconMail size={20} strokeWidth={1.75} aria-hidden="true" />
                {COMPANY.email}
              </a>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-2xl bg-steel-900 border border-steel-800">
              <h3 className="font-bold text-steel-100 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-sm text-steel-400">
                <p>{COMPANY.hours.weekdays}</p>
                <p>{COMPANY.hours.saturday}</p>
                <p>{COMPANY.hours.sunday}</p>
              </div>
            </div>

            {/* Service areas */}
            <div className="p-6 rounded-2xl bg-steel-900 border border-steel-800">
              <h3 className="font-bold text-steel-100 mb-3">
                We Serve
              </h3>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 rounded-full text-xs bg-steel-800 text-steel-400"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
