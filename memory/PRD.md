# Just Ride Cycles – Premium Digital Showroom Website

## Project Overview
Premium, conversion-focused digital showroom for Just Ride Cycles, Kumbakonam's top-rated cycle shop (4.9★ Google, 554 reviews).

**Built:** April 2026
**Type:** Single-page React marketing website
**Stack:** React (frontend only), FastAPI + MongoDB (backend, minimal usage)

---

## Business Details
- **Shop:** Just Ride Cycles
- **Location:** Mutt St, Karna Kollai Agraharam, Anna Nagar, Kumbakonam, Tamil Nadu 612001
- **Phone:** 098947 74778
- **WhatsApp:** 918947774778 (wa.me link)
- **Hours:** 9 AM – 9 PM · Open 7 days
- **Rating:** 4.9★ · 554 Google Reviews · 4.8/5 JustDial
- **Est:** 2018 · In association with Delta Cycle

---

## Architecture

### Frontend Structure
```
/app/frontend/src/
├── App.js                          # Main app orchestrator
├── App.css                         # Ken Burns, pulse, reveal animations
├── index.css                       # Tailwind + Outfit/Inter Google Fonts
├── data/
│   └── constants.js                # Shop data, images, WhatsApp links, cycle data
├── hooks/
│   └── useReveal.js                # IntersectionObserver scroll reveal hook
└── components/
    ├── Navbar.jsx                  # Sticky glassmorphism navbar
    ├── HeroSection.jsx             # Fullscreen hero with Ken Burns effect
    ├── TrustBar.jsx                # 4 stats with count-up animation
    ├── ShowroomSection.jsx         # Split section with parallax image
    ├── ScrollAnimationSection.jsx  # Horizontal cycle scroll animation (280vh)
    ├── CategoriesSection.jsx       # 2x2 category cards
    ├── CycleShowcase.jsx           # 6 cycle cards with 3D tilt + WA enquiry
    ├── RentalsSection.jsx          # Dark section with rental options
    ├── BuyersGuide.jsx             # 4-step buyer's guide
    ├── NewsSection.jsx             # Latest updates card
    ├── GallerySection.jsx          # Masonry gallery with lightbox
    ├── ContactSection.jsx          # Google Maps + contact info
    ├── Footer.jsx                  # 4-column footer + social strip
    └── FloatingButtons.jsx         # Fixed WhatsApp + Call buttons
```

---

## What's Been Implemented

### Version 1.1 – Premium Upgrade (April 2026)
- [x] **Hero redesign:** Gradient cycling text (Mountain Bike/Road Bike/Kids Cycle/Perfect Ride animates every 2.8s)
- [x] **Mouse parallax:** Hero background image moves subtly with cursor position
- [x] **Decorative spinning bicycle wheels:** Two semi-transparent SVG wheels in hero background (12s rotation)
- [x] **Glassmorphism stats bar:** Bottom of hero — 4.9★ / 554+ / 100+ / 7 Days — beautiful blur effect
- [x] **Premium CTA buttons:** Green glow shadow on "View Cycles", glass/blur effect on "Rent Now"
- [x] **Animated badge:** Shimmer sweep effect on "Kumbakonam's #1 Cycle Shop" badge
- [x] **Brands Marquee:** Infinite scrolling ticker — HERCULES · HERO CYCLES · FIREFOX · MACH CITY · BSA...
- [x] **Cursor glow:** Ambient green radial gradient follows cursor across entire site
- [x] **TrustBar redesign:** Dark premium cards with icon pills, hover glow, bottom accent line animation
- [x] **Accent underline:** Animated width + shimmer under the gradient headline
- [x] Sticky glassmorphism navbar with logo, nav links, WhatsApp CTA, hamburger mobile menu
- [x] Hero section: fullscreen shop exterior photo + Ken Burns zoom animation
- [x] Trust bar: 4 stats with count-up animation (4.9★, 554+, 100+, Since 2018)
- [x] Showroom section: split layout with parallax scroll effect
- [x] Horizontal scroll animation section (cycle slides across viewport on scroll)
- [x] Category cards: Mountain, Road, Kids, Gear — 2x2 grid with hover effects
- [x] Cycle showcase: 6 product cards (Hercules, Hero, Firefox, Mach City, BSA) with 3D tilt + WhatsApp enquiry
- [x] Rentals: dark section with Hourly/Daily/Weekly cards + 4 steps + WhatsApp CTA
- [x] Buyer's Guide: 4-step numbered cards
- [x] News section: Latest updates card with left green border
- [x] Gallery: masonry grid (3-col) with lightbox on click
- [x] Contact: Google Maps embed + address/phone/hours + 3 CTAs
- [x] Footer: 4 columns + social strip + "In association with Delta Cycle" bottom bar
- [x] Floating WhatsApp button (pulsing) + Call button fixed bottom-right
- [x] Scroll reveal animations on all sections
- [x] Premium design: Outfit/Inter fonts, #22c55e accent, Apple Store-meets-local feel
- [x] SEO meta tags in index.html
- [x] Mobile-first responsive design

### Images Used
- Real shop photos: exterior (hero), interior wide (showroom), cycle rows, indoor stock
- AI-generated: premium MTB studio, city commuter bike, gear detail
- Logo: JR logo provided by shop owner
- Unsplash: kids bike, rental bg, additional bikes

### Design System
- Primary: #111111, Accent: #22c55e, Background: #f8fafc
- Fonts: Outfit (headings), Inter (body) — Google Fonts
- Border radius: 12px cards, 8px buttons
- Animations: Ken Burns, parallax, count-up, scroll reveal, 3D tilt

---

## Conversion Goals
1. **Primary:** WhatsApp enquiry (17 WhatsApp entry points across all sections)
2. **Secondary:** Phone call (tel: link in navbar, contact, footer)
3. **Tertiary:** In-store visit via Google Maps directions

---

## Prioritized Backlog

### P0 (Critical - already done)
- [x] All sections built and working
- [x] WhatsApp links functional (918947774778)
- [x] Google Maps embed
- [x] Real shop photos

### P1 (High Priority - Next Phase)
- [ ] Add real cycle prices if shop wants them displayed
- [ ] Add more product photos specific to each cycle model
- [ ] Instagram feed integration (actual shop posts)
- [ ] WhatsApp chat widget (Tidio or similar) with auto-response

### P2 (Nice to Have)
- [ ] Customer testimonials/reviews section
- [ ] Video tour of showroom
- [ ] Brands carousel (Hercules, Hero, Firefox, Mach City, BSA logos)
- [ ] Online booking form for rentals
- [ ] FAQ section

---

## Next Tasks
1. Share live URL with shop owner for feedback
2. Get more cycle photos for the showcase section
3. Add real Instagram posts if the shop has active account
4. Consider Google Analytics integration for conversion tracking
