'use client'

import { create } from 'zustand'

// ─── UI Store ─────────────────────────────────────────────────────────────────
interface UIState {
  // Mobile navigation
  isMenuOpen: boolean
  setMenuOpen: (open: boolean) => void
  toggleMenu: () => void

  // Lightbox / media gallery
  lightboxImages: { src: string; alt: string }[]
  lightboxIndex: number | null
  openLightbox: (images: { src: string; alt: string }[], index: number) => void
  closeLightbox: () => void
  lightboxNext: () => void
  lightboxPrev: () => void
}

export const useUIStore = create<UIState>((set, get) => ({
  // ── Menu ──────────────────────────────────────────────────────────────────
  isMenuOpen: false,
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  toggleMenu: () => set((s) => ({ isMenuOpen: !s.isMenuOpen })),

  // ── Lightbox ──────────────────────────────────────────────────────────────
  lightboxImages: [],
  lightboxIndex: null,

  openLightbox: (images, index) =>
    set({ lightboxImages: images, lightboxIndex: index }),

  closeLightbox: () => set({ lightboxIndex: null, lightboxImages: [] }),

  lightboxNext: () => {
    const { lightboxIndex, lightboxImages } = get()
    if (lightboxIndex === null) return
    set({ lightboxIndex: (lightboxIndex + 1) % lightboxImages.length })
  },

  lightboxPrev: () => {
    const { lightboxIndex, lightboxImages } = get()
    if (lightboxIndex === null) return
    set({
      lightboxIndex:
        (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length,
    })
  },
}))
