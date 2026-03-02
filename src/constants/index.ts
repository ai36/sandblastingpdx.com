import type { NavLink, Service, Testimonial, Faq, Feature, Step } from '@/types'
import {
  IconHammer,
  IconBrush,
  IconSettings,
  IconTools,
  IconCar,
  IconTool,
  IconTractor,
  IconBuilding,
  IconHome,
  IconAlertTriangle,
  IconAlertCircle,
  IconClock,
  IconEyeOff,
  IconShieldCheck,
  IconBolt,
  IconRuler,
  IconLeaf,
} from '@tabler/icons-react'

// ─── Company ─────────────────────────────────────────────────────────────────
export const COMPANY = {
  name: process.env.PROJECT_NAME ?? 'SandblastingPDX',
  legalName: 'SandblastingPDX LLC',
  tagline: "Portland's Trusted Surface Prep Specialists",
  shortTagline: 'Rust · Paint · Surface Prep — Done Right',
  phone: '(503) 555-0182',
  phoneTel: '+15035550182',
  email: 'info@sandblastingpdx.com',
  hours: {
    weekdays: 'Monday – Friday: 7:00 AM – 5:00 PM',
    saturday: 'Saturday: By Appointment',
    sunday: 'Sunday: Closed',
  },
  social: {
    facebook: 'https://facebook.com/sandblastingpdx',
    instagram: 'https://instagram.com/sandblastingpdx',
    google: 'https://g.page/sandblastingpdx',
  },
  founded: 2009,
  jobsCompleted: 500,
  yearsInBusiness: 15,
} as const

// ─── Service Areas ────────────────────────────────────────────────────────────
export const SERVICE_AREAS = [
  'Portland, OR',
  'Vancouver, WA',
  'Beaverton, OR',
  'Gresham, OR',
  'Lake Oswego, OR',
  'Hillsboro, OR',
  'Tigard, OR',
  'Milwaukie, OR',
  'Camas, WA',
  'Washougal, WA',
  'Clackamas, OR',
  'Happy Valley, OR',
] as const

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Work Reports', href: '/reports' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Contact', href: '/contact' },
]

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    slug: 'rust-removal',
    title: 'Rust & Scale Removal',
    shortTitle: 'Rust Removal',
    description:
      'We blast rust, mill scale, and corrosion down to bare, bright metal — the right way. Whether it\'s a car frame, trailer hitch, or farm equipment, we leave nothing behind.',
    icon: IconHammer,
    benefits: [
      'Bare metal in hours, not days',
      'Reaches blind spots no grinder can touch',
      'Eliminates hidden rust pockets',
      'Extends the life of your metal by decades',
    ],
  },
  {
    slug: 'paint-removal',
    title: 'Paint & Coating Removal',
    shortTitle: 'Paint Stripping',
    description:
      'Old paint, epoxy, undercoating, Bondo — we strip it all without warping thin sheet metal. We choose the right media for the job: soda, glass bead, or aluminum oxide.',
    icon: IconBrush,
    benefits: [
      'No heat distortion or warping',
      'Gentle enough for classic car panels',
      'Removes multiple coating layers in one pass',
      'Surface ready for primer immediately',
    ],
  },
  {
    slug: 'powder-coating-prep',
    title: 'Powder Coat Prep',
    shortTitle: 'Powder Coat Prep',
    description:
      'Poor surface prep is the #1 reason powder coating fails. We deliver a clean, profiled surface that gives powder coating maximum bite — meeting SSPC-SP6 and SP10 standards.',
    icon: IconSettings,
    benefits: [
      'Maximum adhesion — coatings that last',
      'SSPC-SP6 / SP10 surface profile available',
      'Works with any coating shop in the Portland metro',
    ],
  },
]

// ─── Trusted By (industry types) ─────────────────────────────────────────────
export const TRUSTED_BY = [
  { label: 'Auto Body Shops', icon: IconTools },
  { label: 'Classic Car Restorers', icon: IconCar },
  { label: 'Metal Fabricators', icon: IconTool },
  { label: 'Equipment Dealers', icon: IconTractor },
  { label: 'Construction Firms', icon: IconBuilding },
  { label: 'Homeowners & DIYers', icon: IconHome },
]

// ─── Problem Pain Points ──────────────────────────────────────────────────────
export const PAIN_POINTS = [
  {
    icon: IconAlertTriangle,
    headline: 'You spent all weekend grinding',
    body: 'Wire wheels and angle grinders miss rust pockets, weld seams, and tight corners. You get tired. The rust doesn\'t.',
  },
  {
    icon: IconAlertCircle,
    headline: 'The powder coat failed — again',
    body: 'Your coating shop won\'t warranty work unless the surface is properly prepped. Peeling and blistering after six months is expensive frustration.',
  },
  {
    icon: IconClock,
    headline: 'Prep takes longer than the build',
    body: 'Surface preparation shouldn\'t eat your entire project timeline. There\'s a faster, more thorough way.',
  },
  {
    icon: IconEyeOff,
    headline: 'You can\'t get into tight corners',
    body: 'Tube notches, box sections, chassis rails — these are exactly where rust hides and where grinders can\'t reach. Media blasting gets everywhere.',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Brought in my \'69 Camaro subframe expecting it to take a week. They had it done in two days — bare metal, perfect profile. My powder coater said it was the best-prepped frame he\'d ever seen come through.',
    author: 'Mike T.',
    location: 'Happy Valley, OR',
    rating: 5,
  },
  {
    id: 't2',
    quote:
      'We use SandblastingPDX for all our shop\'s prep work now. Fast turnaround, fair pricing, and they actually understand what SSPC standards mean. Saves us hours every week.',
    author: 'Derek R.',
    location: 'Vancouver, WA',
    rating: 5,
  },
  {
    id: 't3',
    quote:
      'Called them on a Monday, frame was done by Wednesday. The price was exactly what they quoted — no surprises. I\'ve already sent three friends their way.',
    author: 'Sarah K.',
    location: 'Beaverton, OR',
    rating: 5,
  },
]

// ─── Features / Benefits ─────────────────────────────────────────────────────
export const FEATURES: Feature[] = [
  {
    benefit: 'Your Coating Will Never Fail Because of Prep Again',
    feature: 'We deliver SSPC-SP6 and SP10 surface profiles — the industry standard for maximum coating adhesion.',
    icon: IconShieldCheck,
  },
  {
    benefit: 'Save Days of Labor on Every Project',
    feature: 'Media blasting removes rust, paint, and coatings in a fraction of the time grinding takes — with better results.',
    icon: IconBolt,
  },
  {
    benefit: 'No Part Too Big, No Corner Too Tight',
    feature: 'Our blast cabinet handles everything from small brackets to full car frames and large structural parts. No job too big or too tight.',
    icon: IconRuler,
  },
  {
    benefit: 'Eco-Friendly Options Available',
    feature: 'We offer soda blasting, walnut shell, corn cob, and glass bead media for jobs where aluminum oxide isn\'t appropriate.',
    icon: IconLeaf,
  },
]

// ─── How It Works ─────────────────────────────────────────────────────────────
export const HOW_IT_WORKS: Step[] = [
  {
    number: '01',
    title: 'Get Your Free Estimate',
    description:
      'Call, text, or fill out our form. Send a few photos and describe the job. We respond same-day and give you a straight quote — no runaround.',
  },
  {
    number: '02',
    title: 'Drop It Off',
    description:
      'Our shop is easy to find in Portland. Drop off your part, frame, or equipment — we\'ll take it from there.',
  },
  {
    number: '03',
    title: 'Back to You Fast — Ready to Coat',
    description:
      'Most small to medium jobs are done in 1–3 business days. Parts come back clean, profiled, and ready for primer or powder coat. No scale, no rust, no excuses.',
  },
]

// ─── FAQ / Objection Handling ─────────────────────────────────────────────────
export const FAQS: Faq[] = [
  {
    question: 'Will blasting warp or damage thin sheet metal?',
    answer:
      'Not when done right. We match the media type and pressure to your material. Soda blasting is ideal for thin panels and classic car sheetmetal — it\'s gentle enough to strip paint without altering the profile of the metal. We\'ve never warped a panel we were hired to strip.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Most small to medium jobs — a car frame, a set of control arms, a gate or fence panel — run $150–$500. Larger industrial pieces are quoted on-site. We give you a straight quote upfront, no surprise charges when you pick up.',
  },
  {
    question: 'How long does a typical job take?',
    answer:
      'Most jobs are turned around in 1–3 business days. During busy season (spring through fall) we recommend scheduling a week out. We\'ll always give you an honest turnaround time when you get your estimate.',
  },
  {
    question: 'What\'s the difference between sandblasting and media blasting?',
    answer:
      'Traditional sandblasting uses silica sand, which has been largely replaced with safer media. We use aluminum oxide, glass bead, soda, walnut shell, and other engineered abrasives chosen specifically for each job — better results, no silica dust hazard.',
  },
]

// ─── Hero Locations (shown as badges in the hero section) ─────────────────────
export const HERO_LOCATIONS = ['Portland, OR', 'Vancouver, WA'] as const

// ─── Images ───────────────────────────────────────────────────────────────────
export const IMAGES = {
  beforeRust: '/images/before-rust.jpg',
  afterClean: '/images/after-clean.jpg',
  ogDefault:  '/images/og-default.jpg',
} as const

// ─── Section Copy ─────────────────────────────────────────────────────────────
export const SECTION_COPY = {
  problem: {
    eyebrow:  'Sound Familiar?',
    title:    'Why DIY Surface Prep Keeps Letting You Down',
    subtitle: "Most coating failures aren't the coating's fault. They're a surface prep problem. Here's what we hear every week:",
  },
  solution: {
    eyebrow:  'The Solution',
    title:    'Professional Media Blasting That Gets It Right the First Time',
    subtitle: `We don't grind, we don't sand, and we don't cut corners. ${COMPANY.name} uses industrial media blasting to strip your metal down to a clean, profiled surface — faster and more thoroughly than any hand method.`,
  },
  features: {
    eyebrow:  'Features & Benefits',
    title:    `Why Shops & Builders Choose ${COMPANY.name}`,
    subtitle: 'We lead with what you get — not just what we do.',
  },
  howItWorks: {
    eyebrow:  'How It Works',
    title:    'Three Steps to Bare Metal',
    subtitle: 'We keep it simple. No complicated process, no runaround — just fast, professional results.',
  },
  trustedBy: {
    label: 'Industries & Clients We Serve Every Week',
  },
  testimonials: {
    eyebrow:  'Customer Reviews',
    title:    'What Portland Metalworkers Say About Us',
    subtitle: "Don't just take our word for it. Here's what real customers from across the metro area have shared.",
  },
  objections: {
    eyebrow:  'Common Questions',
    title:    'Answers Before You Call',
    subtitle: "We get these questions a lot. Here's the straight answer to each one.",
  },
  finalCta: {
    eyebrow:    'Ready to Get It Done Right?',
    titleLine1: 'Stop Fighting Rust.',
    titleLine2: 'Get Your Free Quote.',
    body:       "We'll give you an honest quote, a fast turnaround, and surfaces your coating shop will actually thank you for. Serving Portland, Vancouver WA, and the Pacific Northwest.",
  },
  contact: {
    eyebrow:  'Get In Touch',
    title:    'Free Estimate & Quotes',
    subtitle: "Describe your project and we'll get back to you with a straight quote. No pressure, no runaround — just honest pricing and fast turnaround.",
  },
} as const

// ─── Meta / SEO ───────────────────────────────────────────────────────────────
export const SITE_META = {
  title: 'SandblastingPDX | Portland Sandblasting & Surface Prep',
  description:
    'Professional sandblasting, rust removal & powder coat prep in Portland OR and Vancouver WA. Same-week scheduling. Call (503) 555-0182.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sandblastingpdx.com',
  ogImage: '/images/og-default.jpg',
  keywords: [
    'sandblasting Portland OR',
    'media blasting Portland',
    'rust removal Portland',
    'powder coat prep Portland',
    'sandblasting Vancouver WA',
    'surface preparation Portland',
    'paint removal Portland Oregon',

  ],
} as const
