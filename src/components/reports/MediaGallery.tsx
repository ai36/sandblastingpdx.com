'use client'

import Image from 'next/image'
import { useEffect, useCallback } from 'react'
import { useUIStore } from '@/store'
import type { ReportImage } from '@/types'

interface GalleryProps {
  images: ReportImage[]
  video?: string
}

const RE_YOUTUBE_HOST = /youtube\.com|youtu\.be/
const RE_YOUTUBE_ID = /(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/

function isYouTubeUrl(url: string): boolean {
  return RE_YOUTUBE_HOST.test(url)
}

function getYouTubeEmbedUrl(url: string): string {
  const match = url.match(RE_YOUTUBE_ID)
  return match ? `https://www.youtube.com/embed/${match[1]}` : url
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox() {
  const { lightboxImages, lightboxIndex, closeLightbox, lightboxNext, lightboxPrev } =
    useUIStore()

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') lightboxNext()
      if (e.key === 'ArrowLeft') lightboxPrev()
    },
    [closeLightbox, lightboxNext, lightboxPrev],
  )

  useEffect(() => {
    if (lightboxIndex === null) return
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, handleKey])

  if (lightboxIndex === null) return null

  const current = lightboxImages[lightboxIndex]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={closeLightbox}
    >
      {/* Image container */}
      <div
        className="relative max-w-5xl w-full mx-4 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video rounded-xl overflow-hidden bg-steel-900">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>

        {/* Caption */}
        {current.alt && (
          <p className="mt-3 text-center text-sm text-steel-400">
            {current.alt}
          </p>
        )}

        {/* Counter */}
        <p className="mt-1 text-center text-xs text-steel-600">
          {lightboxIndex + 1} / {lightboxImages.length}
        </p>
      </div>

      {/* Prev */}
      {lightboxImages.length > 1 && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-steel-800 text-steel-300 hover:text-white hover:bg-steel-700 transition-colors"
          onClick={(e) => { e.stopPropagation(); lightboxPrev() }}
          aria-label="Previous image"
        >
          <svg className="size-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      {/* Next */}
      {lightboxImages.length > 1 && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-steel-800 text-steel-300 hover:text-white hover:bg-steel-700 transition-colors"
          onClick={(e) => { e.stopPropagation(); lightboxNext() }}
          aria-label="Next image"
        >
          <svg className="size-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}

      {/* Close */}
      <button
        className="absolute top-4 right-4 p-2 rounded-full bg-steel-800 text-steel-300 hover:text-white hover:bg-steel-700 transition-colors"
        onClick={closeLightbox}
        aria-label="Close lightbox"
      >
        <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

// ── Gallery grid ──────────────────────────────────────────────────────────────
function GalleryGrid({ images }: { images: ReportImage[] }) {
  const { openLightbox } = useUIStore()

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {images.map((img, i) => (
        <button
          key={img.src}
          className="relative aspect-square rounded-xl overflow-hidden bg-steel-800 cursor-zoom-in group hover:ring-2 hover:ring-fire-500 transition-all"
          onClick={() => openLightbox(images, i)}
          aria-label={`View full size: ${img.alt}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <svg
              className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
            </svg>
          </div>
        </button>
      ))}
      <Lightbox />
    </div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────
export function MediaGallery({ images, video }: GalleryProps) {
  return (
    <div className="space-y-6">
      {/* Video */}
      {video && (
        <div className="rounded-2xl overflow-hidden aspect-video bg-steel-800">
          {isYouTubeUrl(video) ? (
            <iframe
              src={getYouTubeEmbedUrl(video)}
              title="Job video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={video}
              controls
              className="w-full h-full"
              preload="metadata"
            />
          )}
        </div>
      )}

      {/* Photos */}
      {images.length > 0 && <GalleryGrid images={images} />}
    </div>
  )
}
