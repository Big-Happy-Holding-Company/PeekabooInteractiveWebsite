/**
 * Author: Sonnet 4
 * Date: 2025-09-18
 * PURPOSE: Comprehensive plan for redesigning peekaboointeractive.com to focus on driving App Store installs for Peekaboo Calm and Peekaboo Plunk while maintaining educational credibility
 * SRP and DRY check: Pass - Single responsibility of planning the website redesign with clear modular breakdown
 */

# Peekaboo Interactive Website Redesign Plan
**Date:** September 18, 2025
**Objective:** Transform website from legacy-focused to app-install-driven platform

## Research Summary

### Current App Portfolio Analysis
- **Peekaboo Plunk** ($1.99): Drop animals down Galton board, ages 0-4, coordination/problem-solving
- **Peekaboo Calm** ($1.99): Peaceful nature backgrounds with animated animals, ages 0-4, bedtime/sensory support
- **Developer:** BHHC LLC with multiple apps in portfolio
- **Key Differentiators:** Created by children's artist Brianne Baker, no data collection, COPPA compliant, research backed!!!

### Current Website Assessment
- **Strengths:** Strong educational credibility, clear privacy focus, Brianne Baker legacy content
- **Weaknesses:** No app showcase, legacy-heavy messaging, lacks App Store integration, corporate tone
- **Technical Stack:** React + TypeScript, Vite, Tailwind, Wouter routing, comprehensive UI component library

## Information Architecture Redesign

### New Site Structure
```
Global Navigation: Home | Apps | Why It Works | For Families | About | Press

├── Home (/) - One-screen app promo with store badges above fold
├── Apps (/apps) - Grid showcase of both apps with expansion capability
│   ├── Peekaboo Calm (/apps/calm) - Individual app detail page
│   └── Peekaboo Plunk (/apps/plunk) - Individual app detail page
├── Why It Works (/why-it-works) - Toddler-first design education
├── For Families (/for-families) - Practical usage tips by context
├── About (/about) - Brief studio story, no lead capture
└── Press (/press) - Media kit and assets only
```

### Routing Implementation
- Update `client/src/App.tsx` routing with new structure
- Create new page components following existing patterns
- Maintain `/privacy` and `/research` as legacy support pages

## Phase-by-Phase Implementation Plan

### Phase 1: Foundation & Navigation (Day 1)
**Files to Create/Modify:**
- `client/src/components/Navigation.tsx` - Global navigation component
- `client/src/App.tsx` - Updated routing structure
- `client/src/pages/apps/index.tsx` - Apps showcase page
- `client/src/pages/apps/calm.tsx` - Peekaboo Calm detail page
- `client/src/pages/apps/plunk.tsx` - Peekaboo Plunk detail page
- `client/src/pages/why-it-works.tsx` - Educational content page
- `client/src/pages/for-families.tsx` - Usage tips page
- `client/src/pages/press.tsx` - Media kit page

**Technical Requirements:**
- Implement wouter routing for all new pages
- Create consistent layout component with navigation
- Ensure mobile-responsive navigation patterns

### Phase 2: Component Library Expansion (Day 1-2)
**New Components to Create:**
- `client/src/components/AppStoreBadge.tsx` - Reusable store badges
- `client/src/components/AppCard.tsx` - App showcase cards with hover effects
- `client/src/components/ScreenshotGallery.tsx` - Touch-friendly image galleries
- `client/src/components/FeatureList.tsx` - Icon-supported feature bullets
- `client/src/components/FAQ.tsx` - Collapsible FAQ sections

**Design System Implementation:**
- Warm neutral color palette with app-specific accents
- Large, legible typography system
- Subtle motion respecting `prefers-reduced-motion`
- Accessibility-first component design

### Phase 3: Home Page Complete Redesign (Day 2)
**Target:** `client/src/pages/home.tsx`

**New Structure:**
```
Above the Fold:
├── Hero Section
│   ├── Headline: "Calm, gentle tap-to-discover apps for toddlers"
│   ├── Subhead: "Tiny surprises. Soft sounds. No pressure—just peaceful play"
│   ├── App Store badges (both apps, immediately visible)
│   └── 2-3 quiet app screenshots with generous white space

Mid-Page Content:
├── "Why parents like this" (3 icon-supported bullets)
├── "Meet the apps" (2 cards with gentle hover effects)
└── "Gentle by design" (research paragraph + link)

Footer:
└── Store badges repeated, privacy link, tiny About link
```

**Content Guidelines:**
- Replace all "game" terminology with "calming apps," "gentle play," "quiet experiences"
- 6th grade reading level maximum
- Warm, clear, simple tone
- Focus on calm and delight, not hype

### Phase 4: App Detail Pages (Day 3)
**Template Structure for Both Apps:**
```
Hero Section:
├── Large app icon
├── App name
├── 1-sentence value promise
└── App Store badges above fold

Content Sections:
├── Screenshot showcase (4-6 images, tap-to-advance)
├── Features (concise bullets about interaction, audio, accessibility)
├── Everyday use cases (bedtime, travel, sensory breaks)
├── FAQ (3-4 questions max)
└── Store badges repeated
```

**App-Specific Content:**
- **Peekaboo Calm:** Focus on peaceful, bedtime, sensory support
- **Peekaboo Plunk:** Emphasize coordination, problem-solving, active play

### Phase 5: Educational Content Pages (Day 3-4)
**Why It Works Page:**
- Gentle play for toddlers 0-4 (large targets, single-tap)
- Calming design principles (color, rhythm, limited motion)
- Joint play benefits (language development, connection)
- Repetition and surprise balance (engagement without overstimulation)
- 250-400 words total with friendly icons

**For Families Page:**
- Usage tips by context: Bedtime, On-the-go, Quiet time, Transitions
- Sensory support suggestions (volume limits, Reduce Motion, dim display)
- 6-8 parent prompts for shared language ("Who's hiding?", "Is the barn awake?")
- Supportive, not sales-heavy tone

### Phase 6: Supporting Pages Redesign (Day 4)
**About Page Streamlining:**
- Single paragraph: studio philosophy, team, Peekaboo Barn roots, Winston as developer
- One tiny press email link
- Remove all "Work with us" and contact forms

**Press Page (Lightweight):**
- Downloadable kit: app icons, screenshots, brand images
- 150-word and 25-word app descriptions
- App Store page links
- Single press email, no PR forms

### Phase 7: Asset Integration and Optimization (Day 5)
**Required Assets:**
- App icons for both Peekaboo Calm and Peekaboo Plunk
- Screenshot galleries (4-6 per app)
- App Store badge graphics
- Gentle micro-interaction graphics (barn door peek animation)

**Technical Optimization:**
- Implement proper image loading and optimization
- Add meta tags and structured data for app discovery
- Ensure fast mobile loading
- Test accessibility compliance

## Content Strategy

### Tone and Terminology
**Use:** tap, peek, listen, soft, gentle, calm, playful, calming apps, gentle play, quiet experiences
**Avoid:** game, win, challenge, level up, contact us, lead generation language

### Call-to-Action Hierarchy
1. **Primary:** App Store badges (prominently placed above fold)
2. **Secondary:** Links to "Why It Works" and "For Families"
3. **Tertiary:** Navigation to other educational content

### SEO and Discovery
- Target keywords: "toddler apps," "calming apps for kids," "sensory-friendly apps," "bedtime apps"
- App Store optimization through proper linking
- Maintain educational authority through research content

## Technical Implementation Notes

### Accessibility Requirements
- Large tap targets (minimum 44px)
- High contrast text ratios
- Alt text for all images
- Focus states for keyboard navigation
- Respect for color-blindness and motion preferences

### Performance Considerations
- Optimize app screenshots for web delivery
- Implement lazy loading for below-fold content
- Ensure fast Time to First Contentful Paint
- Test on low-bandwidth connections

### Development Best Practices
- Follow existing component patterns in UI library
- Maintain TypeScript strict mode compliance
- Use existing Tailwind design system
- Follow SRP and DRY principles throughout

## Success Metrics

### Primary Goals
- Increase App Store installs for both apps
- Reduce bounce rate on landing page
- Increase time spent on app detail pages

### Secondary Goals
- Maintain educational credibility
- Improve mobile user experience
- Enhance accessibility compliance

## Risk Mitigation

### Technical Risks
- Ensure backward compatibility with existing research/privacy pages
- Test routing changes thoroughly
- Maintain SEO rankings for educational content

### Content Risks
- Preserve Brianne Baker legacy content in About section
- Maintain research credibility while shifting focus
- Balance app promotion with educational mission

## Timeline Summary
- **Day 1:** Foundation, navigation, routing structure
- **Day 2:** Component library, home page redesign
- **Day 3:** App detail pages, content creation
- **Day 4:** Educational pages, supporting page updates
- **Day 5:** Asset integration, optimization, testing

**Total Estimated Timeline:** 5 days for complete redesign implementation

---

*This plan maintains the educational integrity of Peekaboo Interactive while pivoting to drive app installs through calm, parent-friendly messaging and strategic App Store badge placement.*