# Neucon Labs - Corporate Website

## Project Overview
Modern, high-performance corporate website for Neucon Labs, an Australia-based AI/ML and software development startup. The site showcases our expertise in AI/ML development, full-stack software development, SaaS solutions, and automation services.

**Company**: Neucon Labs
**Location**: Australia
**Services**: AI/ML Development, Full-stack Development, SaaS Solutions, Automation & Integration

---

## Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion, GSAP (scroll animations), Lenis (smooth scrolling)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation

### Backend & Infrastructure
- **Database**: PostgreSQL (via Supabase)
- **ORM**: Prisma
- **Authentication**: Auth.js (NextAuth v5)
- **Auth Strategy**: JWT with refresh token rotation
- **OAuth**: Google Sign-in
- **Email Service**: Resend
- **Email Templates**: React Email
- **File Storage**: Supabase Storage
- **Hosting**: Vercel
- **Analytics**: Vercel Analytics

### SEO & Performance
- Next.js Metadata API
- Dynamic sitemap generation
- Structured data (JSON-LD)
- Image optimization (next/image, WebP)
- Font optimization (next/font)
- Server-side rendering (SSR)
- Static generation where applicable

---

## Project Structure

```
neucon-labs-website/
├── app/
│   ├── (public)/                 # Public routes (SSR/SSG)
│   │   ├── page.tsx             # Homepage
│   │   ├── layout.tsx           # Root layout
│   │   ├── services/
│   │   │   └── page.tsx         # Services page
│   │   ├── projects/
│   │   │   ├── page.tsx         # Projects listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Project details
│   │   ├── about/
│   │   │   └── page.tsx         # About/Team page
│   │   └── contact/
│   │       └── page.tsx         # Contact form
│   ├── (auth)/                   # Auth routes
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── admin/                    # Protected admin dashboard
│   │   ├── layout.tsx
│   │   ├── dashboard/
│   │   ├── projects/
│   │   ├── team/
│   │   └── contacts/
│   └── api/                      # API routes
│       ├── auth/
│       │   └── [...nextauth]/
│       ├── contact/
│       ├── projects/
│       └── team/
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── layout/                   # Layout components (Navbar, Footer)
│   ├── sections/                 # Page sections (Hero, Services, etc.)
│   ├── animations/               # Animation wrappers
│   └── forms/                    # Form components
├── lib/
│   ├── db.ts                     # Prisma client
│   ├── auth.ts                   # Auth.js config
│   ├── email.ts                  # Email utilities
│   ├── utils.ts                  # Helper functions
│   └── validations.ts            # Zod schemas
├── prisma/
│   ├── schema.prisma             # Database schema
│   └── seed.ts                   # Seed data
├── public/
│   ├── images/
│   └── fonts/
└── emails/                       # React Email templates
    ├── contact-confirmation.tsx
    └── admin-notification.tsx
```

---

## Design System

### Color Palette
```css
/* Primary Colors */
--primary: #6366f1        /* Indigo - Main brand, CTAs */
--secondary: #8b5cf6      /* Purple - Accents, highlights */
--accent: #06b6d4         /* Cyan - Interactive elements */

/* Backgrounds (Dark Mode Primary) */
--background: #0f172a     /* Slate 900 - Main background */
--surface: #1e293b        /* Slate 800 - Cards, sections */
--surface-light: #334155  /* Slate 700 - Hover states */

/* Text Colors */
--text-primary: #f1f5f9   /* Slate 100 - Headings, primary text */
--text-secondary: #cbd5e1 /* Slate 300 - Body text */
--text-muted: #94a3b8     /* Slate 400 - Captions, metadata */

/* Semantic Colors */
--success: #10b981        /* Emerald - Success states */
--warning: #f59e0b        /* Amber - Warnings */
--error: #ef4444          /* Red - Errors */

/* Light Mode (Optional) */
--bg-light: #ffffff
--surface-light-mode: #f8fafc
--text-light: #0f172a
```

### Typography
```typescript
// Font Family
Headings: Inter (Bold, 700)
Body: Inter (Regular, 400)
Code/Mono: Fira Code (Medium, 500)

// Font Scales
Hero: 3.5rem - 4.5rem (56px - 72px)
H1: 2.5rem - 3rem (40px - 48px)
H2: 2rem - 2.25rem (32px - 36px)
H3: 1.5rem - 1.875rem (24px - 30px)
Body: 1rem - 1.125rem (16px - 18px)
Small: 0.875rem (14px)
```

### Spacing System
```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
4xl: 6rem (96px)
```

### Animation Principles
- **Duration**: 300-500ms for most transitions
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1) - smooth, professional
- **Page Transitions**: 400ms fade + slide
- **Hover Effects**: 200ms scale/color changes
- **Scroll Animations**: Fade up, stagger children
- **Magnetic Buttons**: Cursor-follow effect on desktop
- **Parallax**: Subtle depth on hero sections
- **Loading States**: Skeleton screens, not spinners

### Interactive Elements
- Custom cursor (desktop only)
- Magnetic hover on buttons
- Smooth scroll with Lenis
- Reveal animations on scroll
- Card hover effects (lift + glow)
- Navigation transitions
- Form field animations

---

## Database Schema

### Core Models

```prisma
// User authentication
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  password      String?   // Hashed, optional (OAuth users)
  role          Role      @default(USER)
  accounts      Account[]
  sessions      Session[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum Role {
  USER
  ADMIN
}

// Portfolio projects
model Project {
  id           String   @id @default(cuid())
  title        String
  slug         String   @unique
  description  String   @db.Text
  content      String   @db.Text  // Rich content (MDX)
  category     String[] // ["AI/ML", "Full-stack", "SaaS", "Automation"]
  technologies String[] // ["Next.js", "Python", "TensorFlow", etc.]
  imageUrl     String
  images       String[] // Gallery images
  demoUrl      String?
  githubUrl    String?
  client       String?
  clientLogo   String?
  metrics      Json?    // { revenue: "+150%", users: "10k+" }
  featured     Boolean  @default(false)
  published    Boolean  @default(true)
  order        Int      @default(0)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

// Team members
model TeamMember {
  id        String   @id @default(cuid())
  name      String
  role      String   // "Co-founder & CEO", "ML Engineer", etc.
  bio       String   @db.Text
  imageUrl  String
  linkedin  String?
  github    String?
  twitter   String?
  email     String?
  order     Int      @default(0)
  published Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Contact form submissions
model ContactSubmission {
  id        String   @id @default(cuid())
  name      String
  email     String
  company   String?
  service   String?  // Which service they're interested in
  message   String   @db.Text
  status    ContactStatus @default(NEW)
  notes     String?  @db.Text // Admin notes
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum ContactStatus {
  NEW
  IN_PROGRESS
  COMPLETED
  ARCHIVED
}

// Services (optional, can be hardcoded)
model Service {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  description String   @db.Text
  icon        String   // Icon name from Lucide
  features    String[] // Key features list
  order       Int      @default(0)
  published   Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

---

## Authentication Flow

### JWT Strategy
- **Access Token**: Short-lived (15 minutes), stored in httpOnly cookie
- **Refresh Token**: Long-lived (7 days), stored in httpOnly cookie
- **Token Rotation**: New refresh token issued on each refresh
- **Session Management**: Database-backed sessions via Prisma

### Auth.js Configuration
```typescript
// Google OAuth + Credentials provider
Providers: [Google, Credentials]
Session Strategy: JWT
Callbacks: jwt, session, signIn
Pages: Custom login/register pages
```

### Protected Routes
```
/admin/*           - Requires ADMIN role
/api/admin/*       - Requires ADMIN role
/api/projects      - GET: public, POST/PUT/DELETE: admin
/api/team          - GET: public, POST/PUT/DELETE: admin
```

---

## API Routes

### Public Endpoints
```
POST /api/contact              - Submit contact form
GET  /api/projects             - List all published projects
GET  /api/projects/[slug]      - Get single project
GET  /api/team                 - List all published team members
GET  /api/services             - List all services
```

### Admin Endpoints (Auth Required)
```
POST   /api/admin/projects            - Create project
PUT    /api/admin/projects/[id]       - Update project
DELETE /api/admin/projects/[id]       - Delete project
POST   /api/admin/team                - Create team member
PUT    /api/admin/team/[id]           - Update team member
DELETE /api/admin/team/[id]           - Delete team member
GET    /api/admin/contacts            - List submissions
PATCH  /api/admin/contacts/[id]       - Update status
```

---

## Email Templates

### Contact Form Confirmation (User)
- Thank you message
- Copy of their submission
- Expected response time
- Neucon Labs branding

### Admin Notification (Internal)
- New contact submission alert
- Submitter details
- Message preview
- Link to admin dashboard

---

## SEO Strategy

### Metadata Per Page
```typescript
// Homepage
title: "Neucon Labs | AI/ML & Software Development | Australia"
description: "Leading AI/ML and software development agency in Australia. Expert SaaS solutions, full-stack development, and intelligent automation."

// Services
title: "Our Services | AI/ML, Full-stack, SaaS, Automation | Neucon Labs"

// Projects
title: "Case Studies & Projects | Neucon Labs"

// About
title: "About Neucon Labs | Meet Our Team"
```

### Structured Data
- Organization schema
- LocalBusiness schema (Australia)
- Service schema per service
- Project/CreativeWork schema

### Performance Targets
- **Lighthouse Score**: 95+ (all categories)
- **First Contentful Paint (FCP)**: <1s
- **Largest Contentful Paint (LCP)**: <2.5s
- **Cumulative Layout Shift (CLS)**: <0.1
- **Time to Interactive (TTI)**: <3s

---

## Development Guidelines

### Code Standards
- TypeScript strict mode enabled
- ESLint + Prettier configured
- Conventional commit messages
- Component-driven development
- Reusable, composable components

### File Naming
- Components: PascalCase (`HeroSection.tsx`)
- Utilities: camelCase (`formatDate.ts`)
- Pages: lowercase (`page.tsx`, `layout.tsx`)
- API routes: lowercase (`route.ts`)

### Component Structure
```typescript
// Prefer server components by default
// Add 'use client' only when needed (hooks, events, animations)

import type { ComponentProps } from 'react'

interface Props {
  // Props definition
}

export function ComponentName({ }: Props) {
  // Component logic
  return (
    // JSX
  )
}
```

### State Management
- Server components by default (RSC)
- URL state for filters/pagination
- React Context for theme/global state
- Server Actions for mutations
- Optimistic updates where applicable

---

## Environment Variables

```bash
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Auth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Resend Email
RESEND_API_KEY="re_..."
EMAIL_FROM="hello@neuconlabs.com"
ADMIN_EMAIL="admin@neuconlabs.com"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://..."
SUPABASE_SERVICE_ROLE_KEY="..."

# Optional
NEXT_PUBLIC_SITE_URL="https://neuconlabs.com"
```

---

## Deployment Checklist

### Pre-deployment
- [ ] All environment variables configured
- [ ] Database migrations run
- [ ] Seed data added (services, initial team)
- [ ] Google OAuth configured for production domain
- [ ] Resend domain verified
- [ ] Images optimized (WebP)
- [ ] Lighthouse tests passing
- [ ] SEO metadata complete
- [ ] robots.txt and sitemap configured

### Vercel Configuration
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Environment Variables: Import from `.env.local`
- Analytics: Enabled
- Speed Insights: Enabled

---

## Key Features Summary

### User-Facing
✅ Modern, animated homepage
✅ Services showcase with detailed descriptions
✅ Portfolio/case studies with filtering
✅ About page with team bios
✅ Contact form with email notifications
✅ Responsive design (mobile-first)
✅ Dark mode optimized
✅ SEO optimized
✅ Accessible (WCAG 2.1 AA)

### Admin Features
✅ Secure authentication (Google OAuth + JWT)
✅ Admin dashboard
✅ Manage projects (CRUD)
✅ Manage team members (CRUD)
✅ View contact submissions
✅ Content management without redeployment

### Technical Features
✅ Server-side rendering
✅ Type-safe database queries (Prisma)
✅ Form validation (Zod)
✅ Custom animations (Framer Motion + GSAP)
✅ Email notifications (Resend)
✅ Image optimization
✅ Performance optimized

---

## Quick Start Commands

```bash
# Install dependencies
npm install

# Set up database
npx prisma generate
npx prisma db push
npx prisma db seed

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Database studio
npx prisma studio
```

---

## Implementation Tracking

**IMPORTANT**: This section tracks project progress and must be updated after each major task/feature completion. This helps maintain context across sessions.

### Current Status
**Last Updated**: October 7, 2025
**Current Phase**: Phase 1 Foundation - IN PROGRESS
**Next Task**: Set up shadcn/ui and base components

### Completed Tasks
- ✅ Phase 1 Foundation Tasks 1-10 completed- ✅ Next.js 15 initialized with TypeScript and Tailwind- ✅ All dependencies installed- ✅ Design system configured in globals.css- ✅ Project folder structure created- ✅ Prisma schema configured- ✅ Environment variables template created- ✅ Utility files created (lib/utils.ts, lib/db.ts)
- ✅ Planning & Documentation (CLAUDE.md, PRD.md created)
- ✅ Technology stack finalized
- ✅ Design system defined
- ✅ Database schema designed

### In Progress
- 🔄 None

### Next Up
- ⏭️ Initialize Next.js 15 project with TypeScript
- ⏭️ Install core dependencies
- ⏭️ Configure Tailwind CSS and design system
- ⏭️ Set up project structure

### Implementation Phases

#### Phase 1: Foundation (Week 1-2) - NOT STARTED
**Tasks**:
1. [ ] Initialize Next.js 15 project with TypeScript and Tailwind
2. [ ] Install dependencies (Prisma, Auth.js, Resend, shadcn/ui, Framer Motion, etc.)
3. [ ] Configure Tailwind with design system (colors, typography, animations)
4. [ ] Set up project folder structure (app, components, lib, etc.)
5. [ ] Set up Supabase project and get credentials
6. [ ] Configure Prisma schema
7. [ ] Run database migrations
8. [ ] Set up environment variables (.env.local)
9. [ ] Initialize Git repository
10. [ ] Create initial commit

**Git Commits (One-line messages)**:
- ✅ "Initial Next.js 15 setup with TypeScript and Tailwind"
- ✅ "Add all project dependencies and configure Tailwind design system"
- ✅ "Set up project structure and folders"
- ✅ "Configure Prisma schema and database connection"
- ✅ "Initialize Git repository and add gitignore"

#### Phase 2: Core Infrastructure (Week 1-2) - NOT STARTED
**Tasks**:
11. [ ] Set up shadcn/ui and install base components
12. [ ] Configure Auth.js with Google OAuth
13. [ ] Set up Resend email service
14. [ ] Create React Email templates (contact confirmation, admin notification)
15. [ ] Build base layout components (RootLayout, Navbar, Footer)
16. [ ] Set up SEO configuration (metadata API, sitemap)
17. [ ] Configure fonts (Inter, Fira Code)
18. [ ] Test authentication flow

**Git Commits**:
- ✅ "Add shadcn/ui and base UI components"
- ✅ "Configure Auth.js with Google OAuth and JWT"
- ✅ "Set up Resend email service with React Email templates"
- ✅ "Build navigation and footer components"
- ✅ "Configure SEO metadata and sitemap generation"

#### Phase 3: Homepage & Services (Week 2-3) - NOT STARTED
**Tasks**:
19. [ ] Build Homepage hero section with animations
20. [ ] Build Homepage services overview section
21. [ ] Build Homepage featured projects section
22. [ ] Build Homepage CTA sections
23. [ ] Build Services page with all 4 service sections
24. [ ] Add service detail content and tech stacks
25. [ ] Implement scroll animations (GSAP)
26. [ ] Add hover effects and micro-interactions

**Git Commits**:
- ✅ "Build homepage hero section with animations"
- ✅ "Add services overview and featured projects to homepage"
- ✅ "Build complete services page with all sections"
- ✅ "Add scroll animations and micro-interactions"

#### Phase 4: Projects Portfolio (Week 3-4) - NOT STARTED
**Tasks**:
27. [ ] Build Projects listing page with grid layout
28. [ ] Implement project filtering by category and technology
29. [ ] Build Project detail page template
30. [ ] Create project card components with hover effects
31. [ ] Add project API routes (GET /api/projects)
32. [ ] Seed database with sample projects
33. [ ] Test project filtering and navigation

**Git Commits**:
- ✅ "Build projects listing page with filtering"
- ✅ "Create project detail page and card components"
- ✅ "Add project API routes and seed sample data"

#### Phase 5: About & Contact (Week 4) - NOT STARTED
**Tasks**:
34. [ ] Build About page with company story
35. [ ] Build team member profile cards
36. [ ] Add team API routes (GET /api/team)
37. [ ] Build Contact page with form
38. [ ] Implement form validation (React Hook Form + Zod)
39. [ ] Create contact API route (POST /api/contact)
40. [ ] Integrate email notifications for contact form
41. [ ] Test contact form submission flow

**Git Commits**:
- ✅ "Build about page with team profiles"
- ✅ "Add team API routes and seed team data"
- ✅ "Build contact form with validation"
- ✅ "Integrate contact form email notifications"

#### Phase 6: Admin Dashboard (Week 5) - NOT STARTED
**Tasks**:
42. [ ] Build login/register pages
43. [ ] Build admin dashboard layout and navigation
44. [ ] Build admin dashboard home (overview stats)
45. [ ] Build projects management (list, create, edit, delete)
46. [ ] Build team management (list, create, edit, delete)
47. [ ] Build contact submissions viewer
48. [ ] Implement admin API routes
49. [ ] Add image upload for projects/team (Supabase Storage)
50. [ ] Test all admin CRUD operations

**Git Commits**:
- ✅ "Build authentication pages and admin layout"
- ✅ "Build admin dashboard home with overview stats"
- ✅ "Add projects management CRUD functionality"
- ✅ "Add team management and contact submissions viewer"
- ✅ "Implement image upload with Supabase Storage"

#### Phase 7: Animations & Polish (Week 6) - NOT STARTED
**Tasks**:
51. [ ] Add Framer Motion page transitions
52. [ ] Implement GSAP scroll-triggered animations
53. [ ] Add Lenis smooth scrolling
54. [ ] Create custom cursor effect (desktop)
55. [ ] Add magnetic button effects
56. [ ] Implement loading states and skeletons
57. [ ] Add success/error toast notifications
58. [ ] Polish all hover effects and transitions

**Git Commits**:
- ✅ "Add Framer Motion page transitions"
- ✅ "Implement GSAP scroll animations and Lenis smooth scroll"
- ✅ "Add custom cursor and magnetic button effects"
- ✅ "Add loading states and toast notifications"

#### Phase 8: SEO & Performance (Week 6-7) - NOT STARTED
**Tasks**:
59. [ ] Implement metadata for all pages
60. [ ] Add structured data (JSON-LD)
61. [ ] Generate dynamic sitemap
62. [ ] Add robots.txt
63. [ ] Optimize all images (WebP conversion)
64. [ ] Implement image lazy loading
65. [ ] Code splitting and bundle optimization
66. [ ] Run Lighthouse audits and fix issues
67. [ ] Accessibility audit (WCAG 2.1 AA)

**Git Commits**:
- ✅ "Add SEO metadata and structured data to all pages"
- ✅ "Generate dynamic sitemap and add robots.txt"
- ✅ "Optimize images and implement lazy loading"
- ✅ "Performance optimization and Lighthouse fixes"
- ✅ "Accessibility improvements for WCAG compliance"

#### Phase 9: Testing & QA (Week 7) - NOT STARTED
**Tasks**:
68. [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
69. [ ] Mobile responsiveness testing (iOS, Android)
70. [ ] Form validation testing
71. [ ] Authentication flow testing
72. [ ] Admin dashboard testing
73. [ ] API endpoint testing
74. [ ] Performance testing (Lighthouse CI)
75. [ ] Fix all bugs and issues

**Git Commits**:
- ✅ "Fix cross-browser compatibility issues"
- ✅ "Fix mobile responsiveness bugs"
- ✅ "Fix form validation and authentication issues"
- ✅ "Final bug fixes and QA improvements"

#### Phase 10: Content & Launch (Week 8) - NOT STARTED
**Tasks**:
76. [ ] Write all page copy and content
77. [ ] Add 8-10 real project case studies
78. [ ] Add team member profiles and photos
79. [ ] Add high-quality images throughout
80. [ ] Final review and approval
81. [ ] Set up production environment on Vercel
82. [ ] Configure production environment variables
83. [ ] Set up production database on Supabase
84. [ ] Run production migrations
85. [ ] Deploy to production
86. [ ] Configure custom domain
87. [ ] Set up Google Analytics
88. [ ] Set up Google Search Console
89. [ ] Submit sitemap to search engines

**Git Commits**:
- ✅ "Add all content, copy, and project case studies"
- ✅ "Add team profiles and high-quality images"
- ✅ "Production deployment configuration"
- ✅ "Final launch commit"

### Git Workflow
- Commit after each major feature/task completion
- Use one-line commit messages (imperative mood)
- Format: "Add feature" not "Added feature" or "Adding feature"
- Push to main branch after each phase completion
- Tag releases (v0.1.0, v0.2.0, v1.0.0)

### Session Context Updates
**After completing each major task**:
1. Update "Completed Tasks" section above
2. Move task from "Next Up" to "Completed Tasks"
3. Update "Current Phase" and "Next Task"
4. Commit changes to CLAUDE.md with message: "Update implementation tracking"
5. Make feature commit with one-line message
6. Push to GitHub

This ensures that if the terminal/session is killed, the next session can pick up exactly where we left off by reading this file.

---

## Notes

- All times in AEST (Australian Eastern Standard Time) for admin features
- Company location: Australia (include in footer, about page)
- Primary CTA: "Get Started" / "Contact Us"
- Target audience: B2B (startups, enterprises)
- Brand voice: Professional, innovative, technical expertise
- Keep content manageable through admin panel for easy updates
- Focus on showcasing real projects and results
