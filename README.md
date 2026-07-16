# ClearClaim Website

Welcome to the frontend codebase for **ClearClaim** — a premium platform dedicated to reclaiming unclaimed investments, recovery of shares, IEPF claims, and mutual funds, with specialized services for NRIs.

Built using **Next.js**, **TypeScript**, and **Tailwind CSS**, this web application features fluid user interfaces, dynamic scroll animations, and interactive forms to guide users through the claims recovery process.

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Carousels:** Swiper & React Slick
- **Form/Services:** EmailJS Integration

---

## 📁 Project Structure

```text
clearclaim-website/
├── public/                 # Static assets (images, logos, fonts, plans)
├── src/
│   ├── app/                # Next.js App Router structure
│   │   ├── about/          # About Us page (Mission, Vision, local presence)
│   │   ├── api/            # API Route handlers (e.g., testimonials)
│   │   ├── blog/           # Knowledge hub and articles
│   │   ├── case-study/     # Success stories
│   │   ├── contact/        # Contact form and touchpoints
│   │   ├── gallery/        # Photo & Media gallery
│   │   ├── howwework/      # Visual explanation of step-by-step process
│   │   ├── iepfclaim/      # IEPF Claim recovery page
│   │   ├── nri-services/   # Tailored recovery services for NRIs
│   │   ├── ourservices/    # Comprehensive listing of recovery offerings
│   │   ├── publication/    # Press releases and news publications
│   │   ├── recovery-of-shares/ # Share recovery specific details page
│   │   ├── testimonial/    # Client testimonials & reviews
│   │   ├── whyclearclaim/  # Key value propositions and differentiators
│   │   ├── layout.tsx      # Main application layout (Header, Footer, providers)
│   │   ├── page.tsx        # Homepage with hero section and main pathways
│   │   └── globals.css     # Global styles & custom Tailwind utilities
│   └── components/         # Reusable UI components
│       ├── Header.tsx      # Premium navigation bar
│       ├── Footer.tsx      # Main site footer with detailed links
│       ├── WhatsAppButton.tsx # Quick floating WhatsApp link
│       ├── CountrySelect.tsx  # Dynamic country selector for forms
│       └── SearchablePhoneCode.tsx # Interactive country phone code lookup
```

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have **Node.js** (v18.x or higher) and **npm** installed.

### Installation

Clone the repository and install dependencies:

```bash
# Install dependencies
npm install
```

### Development Server

Run the development server locally:

```bash
# Standard dev mode with Turbopack (recommended)
npm run dev

# Safe dev mode (without turbopack)
npm run dev:safe
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build and Deployment

To build the application for production:

```bash
# Build the production application
npm run build

# Export the application to static files (if configured)
npm run export
```

---

## ✨ Features & Design Systems

1. **Responsive & Modern Design:** Fully responsive layout catering to desktop, tablet, and mobile browsers.
2. **Interactive Claim Workflows:** Quick and easy forms utilizing dynamic country selects and phone inputs.
3. **Optimized SEO:** Individual page optimizations using Next.js Metadata and semantic HTML structure.
4. **Rich Animations:** Interactive elements using `framer-motion` for page transitions and entry animations.