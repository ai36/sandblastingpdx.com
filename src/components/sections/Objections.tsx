'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { FAQS, SECTION_COPY } from '@/constants'
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper'

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="card card-fire overflow-hidden rounded-xl">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-steel-800 transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-semibold text-steel-100">{question}</span>
        <svg
          className={clsx(
            'size-5 shrink-0 text-fire-500 transition-transform duration-200',
            open && 'rotate-180',
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={clsx(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-96' : 'max-h-0',
        )}
      >
        <div className="px-6 py-5 bg-steel-950 border-t border-steel-700">
          <p className="text-sm text-steel-400 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export function Objections() {
  return (
    <SectionWrapper id="faq" alt>
      <div className="max-w-3xl mx-auto">
        <SectionHeading {...SECTION_COPY.objections} centered />

        <div className="space-y-3">
          {FAQS.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-steel-500">
          Still have a question?{' '}
          <a
            href="/contact"
            className="text-fire-400 hover:text-fire-300 font-semibold transition-colors"
          >
            Drop us a message →
          </a>
        </p>
      </div>
    </SectionWrapper>
  )
}
