import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-steel-950 flex items-center justify-center pt-16">
      <div className="container text-center py-24">
        <p className="text-8xl font-black text-fire-500 mb-6">404</p>
        <h1 className="text-3xl font-bold text-steel-50 mb-4">
          Page Not Found
        </h1>
        <p className="text-steel-400 mb-8 max-w-md mx-auto">
          Looks like this page got blasted away. Head back to the homepage or send us a message.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-fire-500 hover:bg-fire-600 text-white font-bold rounded-xl transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-steel-700 text-steel-300 font-semibold rounded-xl hover:border-fire-500 hover:text-fire-400 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
