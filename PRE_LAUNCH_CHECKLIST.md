# Pre-Launch Checklist

## Visual Polish

- [x] Consistent palette in use via theme tokens (`rgbPrimary`, `rgbAccent`, `rgbText`, `rgbBackground`)
- [x] Typography hierarchy implemented across homepage sections (`h1` -> `h2` -> `h3`)
- [x] Spacing uses shared spacing variables (`--space*`) in updated sections
- [x] CTA/button styling standardized with shared `Button` component
- [x] Contact form input styles unified in homepage contact section
- [x] Loading state present on contact submit button
- [x] Smooth scroll enabled globally (`html { scroll-behavior: smooth; }`)
- [x] Focus/hover states present for cards, buttons, links, and filters
- [ ] Final visual QA pass at all major breakpoints (mobile/tablet/desktop ultra-wide)

## Content Audit

- [x] Homepage spell/grammar pass completed for new sections
- [x] Placeholder testimonial bracket text removed (`[Name]`, `[Company]`)
- [x] CTA routes aligned (`#services`, `#contact`, `/articles` filters, `/resume`)
- [x] Contact info aligned with current values on site
- [x] No Lorem Ipsum detected in source
- [x] Homepage imagery has descriptive alt text in updated sections
- [ ] Manual click-test every internal/external link in browser
- [ ] Final legal/brand-name approval pass (client spellings and usage rights)

## Technical Checklist

- [x] Favicon present (`public/favicon.svg`)
- [x] Title and meta description optimized (homepage)
- [x] Open Graph tags set
- [x] Structured data (JSON-LD) added for Person + Services
- [ ] Analytics tracking code added (Google Analytics or alternative) - pending your choice
- [x] Contact form connected to backend endpoint (`/api/sendgrid`)
- [x] 404 page exists
- [x] Sitemap exists (`public/sitemap.xml`)
- [x] Robots configured (`public/robots.txt` with sitemap URL)
- [x] Lazy loading implemented in shared image component
- [x] Mobile responsive behavior implemented for new homepage sections
- [ ] SSL verification on production domain (runtime/infrastructure check)
- [ ] Cross-browser test (Chrome, Safari, Firefox, Edge)
- [ ] Accessibility audit run (Lighthouse + keyboard + screen reader quick pass)
- [ ] Performance verification > 90 (Lighthouse mobile + desktop)
- [ ] Confirm image compression pipeline for newly added assets
- [ ] Add legal pages if required (Privacy Policy / Terms)

## Launch Preparation

- [ ] Backup current site and content assets
- [ ] Test contact form end-to-end (success + failure cases)
- [ ] Test resume download links and rendering
- [ ] Test portfolio filtering + modal quick view + load more
- [ ] Test navbar/anchor navigation and sticky "Let's Talk" button
- [ ] Validate social sharing preview with Open Graph debugger
- [ ] Connect and verify Google Search Console
- [ ] Submit sitemap to Google/Bing
- [ ] Publish LinkedIn launch announcement
- [ ] Update LinkedIn profile with portfolio URL
- [ ] Share in relevant professional groups/communities

## Post-Launch (Week 1)

- [ ] Monitor analytics daily (top pages, bounce, CTR, time on page)
- [ ] Monitor and tag all inbound form submissions
- [ ] Gather feedback from 3-5 trusted users/clients
- [ ] A/B test key CTAs (hero + segment cards + contact section)
- [ ] Publish supporting content pieces to drive new traffic
- [ ] Set up Google Alerts for brand mentions and name queries

## Quick Commands (Optional)

- Run production build locally: `npm run build`
- Run Lighthouse (if configured) and capture baseline screenshots
