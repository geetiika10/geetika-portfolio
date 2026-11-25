# Geetika Agarwal: portfolio website

## Who this is for
Geetika Agarwal, second-year BBA Media & Communication student at Whistling Woods International, Mumbai (2025 to 2028). From Kolkata, studying in Mumbai. Applying for marketing, brand, content and PR internships (first target: Mavcomm Consulting, a PR and reputation consultancy). Readers are recruiters and hiring managers who decide in about 10 seconds whether to keep scrolling, then spend 2 to 5 minutes on projects.

**The site's job:** within the first scroll, make it obvious she does marketing, PR and content, and make people want to open the file.

## Design direction (the client's words win)
- **Editorial and realistic.** It should feel like a fashion or culture magazine shot on a real desk: real photographs of real objects, real paper, real shadows. **No flat vector illustrations, no cartoon shapes, no clip-art stickers.** Every object on the page is a cut-out photograph from `/assets/objects`.
- **Colourful and bright, in pastels:** light blue and light pink lead, with other pastels (butter yellow, mint, lilac, peach) as support. Pastels are used like coloured paper stock and photographed objects, not as flat cartoon fills.
- **The concept: a case file.** The cover is a real pastel folder. As you scroll, it opens and its contents (papers, photos, objects) slide out sideways, like a collage on a desk. Everything after is something that came out of the file.
- **Each project looks like the world it came from,** presented as a magazine spread:
  - CRFTD: a shop lookbook with real tee mockups
  - Too Yumm: real phone mockups with the published posts, a content calendar page
  - Tiya reels: iPhone mockups with the real reel covers
  - AquaTerra: a wall of the real event posters, tickets and photos
  - Media planning: a planner's spread with clean, real charts (donuts, city bars, a week-by-week schedule)
  - PR: a press kit, with the release set like a real newspaper clipping
  - Photography: a gallery wall with an exhibition placard
  - Contact: a real boarding pass or passport page (travel motif)
- **Collage objects she wants:** camera, clapperboard, event tickets and wristbands, **momos**, travel items (passport, boarding pass, luggage tag), coins or a ₹ note (she likes finance).
- **Her name is small,** like a byline or a folder label. **No giant name in the hero. No photo cut-out of her.**
- **Motion:** "things moving to the side" as you scroll. One signature moment (the folder opening on the cover), then project spreads that slide in horizontally. Everything else stays calm. No fade-and-slide-up on every element, no hover wiggles on every card.

## Avoid (these make it look AI-generated)
- Cream backgrounds near #F4F1EA with a serif and terracotta accent
- Rounded identical cards with the same grey shadow everywhere
- ALL-CAPS tracked labels above every heading, 01/02/03 numbering, "A · B · C" meta strings, arrows appended to buttons
- One word in a headline set in a different colour or italic
- Emoji used as icons
- Placeholder gradients where a real image should be. If an image is missing, leave a clearly labelled empty frame and tell me.

## Skills to use
First, read `skills/frontend-design/SKILL.md` in this repo and follow it for every design decision (plan, self-review, build, critique).
Before designing or building anything, list every installed skill and plugin (run /skills and /plugin). Use **every skill relevant to website design, frontend, UI/UX, animation, accessibility, performance and deployment**, starting with the frontend-design skill. Say which skills you're using at the start of each section.

## Collage cutouts
- Collage elements live in `/assets/cutouts/` as transparent PNGs, sorted into subfolders (camera, film, events, food, travel, finance, paper). Some are collected from Pinterest and free PNG sites, some are Geetika's own photos.
- Use them to build layered, editorial collages: overlap, slight rotation, real drop shadows, tape and paper textures. They should look like real objects on a real desk.
- If a cutout has a messy edge or a background left in, clean it or skip it and tell me.
- Keep a `/assets/cutouts/CREDITS.md` noting where each non-original cutout came from.

## Tech (no Node, no build tools)
- Plain static files only: `index.html`, `css/style.css`, `js/main.js`. No npm, no Vite, no frameworks, no build step
- Load GSAP + ScrollTrigger and Lenis from a CDN with exact pinned versions (script tags in index.html)
- The site must work by simply double-clicking `index.html` to open it in Chrome
- Images as WebP or compressed JPG/PNG, lazy-loaded below the cover
- Must work well on phones (simplify the horizontal scrolling into vertical on small screens), keyboard accessible, and respect prefers-reduced-motion
- Deploy target: Netlify Drop (drag-and-drop the folder) or Vercel, free
- Commit to git after each finished section if git is available

## Writing rules
- No em dashes anywhere in the copy
- Human, warm, confident, concise. Plain verbs, sentence case
- Each project follows: **The brief → My role → What I made → Result**, kept short
- Never invent numbers, quotes or results. Use only the facts below. Mark coursework as coursework

---

## Site structure (in this order)
1. Cover (the folder)
2. About
3. Index (folder tabs linking to each section)
4. CRFTD
5. Too Yumm!
6. Valentine's reels with Tiya Gupta
7. AquaTerra
8. Media planning
9. PR desk
10. Photography
11. Also on my desk (small strip)
12. Contact

---

## Content

### Cover
- Folder label: Geetika Agarwal, Portfolio 2026
- Line: Marketing, PR and content

### About
- Name: Geetika Agarwal
- Based in: Kolkata and Mumbai
- Studying: BBA in Media & Communication, Whistling Woods International, Mumbai (2025 to 2028)
- Good at: brand building, social content, events, sponsorships, PR writing
- Short intro (can be refined): I co-founded an apparel label that sold 2,000+ units, ran events for a student NGO, wrote strategy for a snack brand and shot reels that crossed 250K views. I like ideas that are fun to look at and still move numbers. Off the clock: my camera, momos, and the next trip.
- Highlights: ₹8L+ bootstrapped revenue · 250K+ reel views in 3 days · 30+ sponsors closed · 4 photographs selected for exhibition at NCPA

### CRFTD (formerly Roots), Co-Founder & Director, Jan 2024 to Jun 2026, Kolkata
- What it is: a purpose-driven D2C and B2B apparel label featuring artwork by children, supporting welfare initiatives
- Brief: build an apparel brand from zero that sells, with children's art at its heart
- Role: co-founder and director; owned product design, social media, logistics and fulfilment
- What I made: 3 themed drops (Valentine's, Earth Day, IPL). I designed 8 tees; 4 tees were designed by children. DIY T-shirt print kits as a co-creative product
- Result: 2,000+ units sold, ₹8 lakh+ fully bootstrapped revenue before rebranding to CRFTD, 100+ pre-launch sales from the DIY kits, then pivoted to B2B and worked with 10+ schools in Kolkata

### Too Yumm! (RPSG Group), Social Media Intern, Aug to Sep 2026, remote
- Brief: keep the brand's Instagram fresh and help shape an upcoming launch
- Role: planned the monthly content calendar, pitched original content IPs, ran competitor benchmarking, coordinated a co-intern on sketch-based reels
- What I made: a 30-post monthly calendar; 30+ concepts ideated, 12 produced; 8 original content IPs pitched (1 approved); benchmarking of 15+ brands on tone, visuals and reel formats; a social media strategy with 15+ concepts for an upcoming product launch
- Result: 4 pieces went live (3 posts, 1 reel), including the period's top-performing contest carousel
- Do NOT name or describe the upcoming product

### Valentine's Week reels with Tiya Gupta, Content Creator (freelance), Feb 2026
- Scripted, shot and edited a 3-reel Valentine's Week series for the creator's page
- Owned the full pipeline from concept to delivery, coordinating directly with the creator
- Result: 250K+ views in 3 days

### AquaTerra (NGO), Director of Events and Marketing, Apr 2023 to present, Kolkata
- What it is: a student-run NGO that funds all its charitable work through events, not donations
- Role: rose from volunteer to Director in 2 years; led 7 events with a 60-member team
- Flagship event IPs: Paradox, Starry Night, Disco Diwali. Paradox 4.0: 1,200+ attendees across 6 days
- Closed 30+ sponsorships through custom sponsor decks and pitches; helped raise ₹4 lakh+ for welfare work
- Grew Instagram from 1,200 to 5,000 followers (about 4x)

### Media planning: same ₹8 crore, opposite jobs (coursework, team of 3)
Full content in `/content/media-planning-case-study.md`. Key points:
- Titan Edge (luxury watch, build prestige, 12 weeks): YouTube/OTT 20%, OOH 17%, Instagram 14%, TV 10%, Print 10%, Search 8%, Creators 8%, Retail/e-com 6%, Cinema 5%, Radio 2%. Cities: Mumbai 28%, Delhi NCR 26%, Bengaluru 16%, Hyderabad, Chennai, Pune 10% each. Reach 65% at 6+. Big bet: environment over volume
- DantKanti Pro+ (new toothpaste, drive trial, 8 weeks): Instagram 15%, Search 15%, TV 10%, YouTube/OTT 10%, OOH 10%, Creators 10%, Retail/e-com 10%, Radio 8%, Cinema 5%, Sampling 5%, Print 2%. Cities: Hyderabad 17.5%, Delhi NCR, Mumbai, Pune 15% each, Bengaluru, Ahmedabad, Lucknow 12.5% each. Reach 60% at 3+. Big bet: Hyderabad
- Note: dummy classroom briefs, plans refined after class
- Her role: [Geetika to fill in]

### PR desk
- Press release (coursework): launch release for a 3-day pan-Asian food festival in Mumbai at Jio World Garden, bringing chefs from across Asia, written from a Zomato client-style brief. Use the actual release from `/assets/pr`
- More writing samples (media pitch, crisis statement) may be added later; leave room for 2 more pieces

### Photography
- Goa photo essay on Portuguese-era architecture (Chandor, Aguada Fort, Aguada Jail), commissioned by Erasmus. 4 of her photographs selected for exhibition at NCPA, Mumbai, January 2027
- Plus a selection of her own photography from `/assets/photography`

### Also on my desk (small)
- The Lil Flea (Nov 2025): Operations Executive, MCR team, 3-day festival with 400+ homegrown brands; handled on-ground crises (reunited a lost child with family, restored power to stalls)
- Whistling Woods: Sub-Head, Production for Celebrate Cinema; Stalls In-charge at Saksham (15+ stalls); Photography and Production team for WWCL; team member for Inbox
- Chehre (capstone short film): Asst. Production Designer, BTS Photographer, 3rd AD
- Stop-motion ad: set and props, shooting and editing
- School: Club Director of BizTeens; Event Head for Nirmaan (16 schools); captained the basketball team to back-to-back CBSE East Zone podiums (3rd, then 2nd)

### Contact
- Email: geetikaa174@gmail.com (show as text and as a mailto link, with a copy button)
- LinkedIn: https://www.linkedin.com/in/geetika-agarwal10
- CV downloads: `/assets/cv/` (general CV and PR CV)
- No phone number on the site
