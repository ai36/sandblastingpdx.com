'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { cn } from '@/lib/utils'
import { useUIStore } from '@/store'
import { NAV_LINKS, COMPANY } from '@/constants'

export function Header() {
  const { isMenuOpen, setMenuOpen, toggleMenu } = useUIStore()

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  // Close on Escape key
  useEffect(() => {
    if (!isMenuOpen) return
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isMenuOpen, setMenuOpen])

  // Close drawer on resize to desktop
  useEffect(() => {
    function onResize() { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [setMenuOpen])

  return (
    <>
      {/* ── Fixed top bar ─────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-steel-800 bg-steel-950/95 backdrop-blur-md">
        <div className="container">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2.5 shrink-0"
            >
              <span className="size-8 rounded-lg bg-fire-500 flex items-center justify-center text-white font-black text-sm shrink-0">
                S
              </span>
              <span className="text-steel-50 font-black text-lg tracking-tight leading-none whitespace-nowrap">
                {COMPANY.name}
              </span>
            </Link>

            {/* Desktop nav — lg+ only */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-steel-400 hover:text-steel-50 rounded-lg hover:bg-steel-800/60 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA — lg+ only */}
            <div className="hidden lg:block shrink-0">
              <Link
                href="/contact"
                className="px-5 py-2 bg-fire-500 text-white text-sm font-bold rounded-lg hover:bg-fire-600 transition-colors shadow-[var(--shadow-btn-fire)] whitespace-nowrap"
              >
                Free Estimate
              </Link>
            </div>

            {/* Mobile: compact CTA + hamburger — below lg */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="hidden min-[480px]:block px-4 py-1.5 bg-fire-500 text-white text-sm font-bold rounded-lg hover:bg-fire-600 transition-colors whitespace-nowrap"
              >
                Estimate
              </Link>
              <button
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-nav"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                className="size-9 flex items-center justify-center rounded-lg text-steel-400 hover:text-steel-50 hover:bg-steel-800 transition-colors"
              >
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Mobile: backdrop ─────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={cn(
          'fixed inset-0 z-40 lg:hidden bg-black/60 backdrop-blur-sm transition-opacity duration-300',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      />

      {/* ── Mobile: side drawer ───────────────────────────────────────── */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={cn(
          'fixed top-[1px] right-0 bottom-0 z-[60] lg:hidden w-88 max-w-92',
          'bg-steel-950 border-l border-steel-800 flex flex-col',
          'transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-steel-800 shrink-0">
          <span className="text-xs font-bold uppercase tracking-widest text-steel-500">
            Menu
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="size-8 flex items-center justify-center rounded-lg text-steel-400 hover:text-steel-50 hover:bg-steel-800 transition-colors"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-1 overflow-y-auto py-4 px-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-3 py-3.5 rounded-xl text-base font-semibold text-steel-300 hover:text-steel-50 hover:bg-steel-800/70 transition-colors group"
            >
              {link.label}
              <svg
                className="size-3.5 text-steel-600 group-hover:text-fire-400 transition-colors shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Drawer footer CTA */}
        <div className="px-4 pb-8 pt-3 border-t border-steel-800 space-y-3 shrink-0">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-fire-500 hover:bg-fire-600 text-white font-bold rounded-xl transition-colors text-sm"
          >
            Get Free Estimate
            <svg className="size-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <a
            href={`mailto:${COMPANY.email}`}
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-1.5 text-xs text-steel-500 hover:text-fire-400 transition-colors"
          >
            <svg className="size-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            {COMPANY.email}
          </a>
        </div>
      </nav>
    </>
  )
}
