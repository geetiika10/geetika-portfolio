# Geetika Agarwal: portfolio website

## Who this is for
Geetika Agarwal, second-year BBA Media & Communication student at Whistling Woods International, Mumbai (2025 to 2028). From Kolkata, studying in Mumbai. Applying for marketing, brand, events and PR internships (first target: Mavcomm Consulting, a PR and reputation consultancy). Readers are recruiters and hiring managers who decide in about 10 seconds whether to keep scrolling, then spend 2 to 5 minutes on projects.

**The site's job:** within the first scroll, make it obvious she does marketing, events and PR, and make people want to open the file.

## Where things stand
`style-tile.html` is the approved working prototype: cover, open file, one folder-tab divider and the CRFTD shop. Build the real site (`index.html`, `css/style.css`, `js/main.js`) from it. `docs/image-brief.html` holds the house style for images and a card for every image still needed.

## Design direction (the client's words win)
- **Photo-real, never drawn.** Every visual object is a photograph or a photo-real image: the folders, papers, stickers, phones, frames. Code supplies only layout, live text, motion and the app-window chrome. When an image is missing, leave a clearly labelled checkerboard frame naming the file and size, and tell Geetika.
- **The concept: a case file.** The first page is Geetika's own cover image (`assets/generated/cover-geetika.jpg`): a light pink folder on graph paper with a clipped polaroid and a blue gingham tab. Scrolling lifts it away into the open file (`open-geetika.jpg`): "About" printed on the taped card, "Contents" (linking to every section) printed on the clipped sheet. No stickers on the open file.
- **Section dividers are real stacked pastel folders** (`divider-folders.jpg`), section names printed on the tabs in spaced capitals and a huge wide title on the front folder. Each section gets its own front-folder colour.
- **Inside each section, the desktop language from `references/`:** a Mac-style app window around the page, a pale dot-grid canvas, project content in stacked app windows, Finder-style galleries with `.jpg` labels, and shop cards for merch.
- **Each project looks like the world it came from:**
  - CRFTD: shop cards with real tee mockups, plus "read me" and "sales summary" windows
  - Too Yumm: phones with the published posts, a content calendar page
  - Tiya reels: iPhones with the real reel covers
  - AquaTerra: a pinboard of the real event posters and tickets
  - Media planning: an open planner with clean, real charts (donuts, city bars, week-by-week schedule)
  - PR: the release set like a newspaper clipping
  - Photography: a gallery wall with an exhibition placard
  - Contact: a boarding pass printed with her email, LinkedIn and CV links
- **Colour:** bright pastels. Light pink and light blue lead; mint, lilac, peach and butter yellow support. One loud candy pink (#EC2A84) for pill tags and hearts. Text is navy ink, printed onto photographed paper with `mix-blend-mode: multiply` so the paper shows through.
- **Type:** Instrument Serif and Pinyon Script on the paper (titles, labels), Archivo wide for divider titles, Figtree for interface and body text. All stored in `fonts/`.
- **Her name stays small,** a label or byline. No photo or cut-out of her.
- **Motion:** one signature moment (the file opening), dividers sliding in from the side, project sections moving sideways. Everything else stays still.

## Images
- Geetika supplies most images, generated in ChatGPT from references and matched to the house style in `docs/image-brief.html`. Her own real work (tees, posts, reel covers, posters, press release, photographs) always stays real.
- Process each image here: crop to the shape the page needs, cut stickers out of their background, export WebP or JPG for the web, keep the original in an `originals/` folder, and log it in `CREDITS.md`.
- Her sticker cut-outs (flowers, iced coffee, sushi, laptop, concert tickets) are kept in `assets/cutouts/` but not used on the page for now.
- Real text goes on as live HTML on blank areas of the images. Where text is baked into an image, also put it in the page as a visually hidden heading.

## Skills
Reload the frontend-design skill (`SKILL.md` in this repo and the plugin) at the start of every design round, along with the design-critique, anti-slop, colour, typography, motion and accessibility skills. Follow its loop: plan, review against this brief, build, then screenshot at 1440px and 390px and critique before showing Geetika. Say which skills you used.

## Keep it specific (these make sites look AI-generated)
- Pastel stock and graph paper as backgrounds, in place of cream with a serif and terracotta accent
- Varied, purposeful surfaces in place of identical rounded cards with one grey shadow
- Spaced capitals only on folder tabs; numbers only where content is a real sequence (the contents list, divider tabs)
- Plain sentence-case buttons that say what happens
- Real photographs and labelled empty frames in place of gradients or emoji

## Tech (no Node, no build tools)
- Plain static files: `index.html`, `css/style.css`, `js/main.js`. No npm, no frameworks, no build step
- GSAP 3.12.5 + ScrollTrigger and Lenis 1.1.13 load from the CDN with exact versions, falling back to the copies in `js/vendor/`, so the site works by double-clicking `index.html`, even offline
- Images as WebP or compressed JPG, lazy-loaded below the cover
- Phones: horizontal movement becomes vertical; keyboard accessible (tabbing into the contents opens the file); prefers-reduced-motion shows the file already open
- Deploy: Netlify Drop or Vercel, free
- Commit and push after each finished section

## Writing rules
- No em dashes anywhere in the copy
- Human, warm, confident, concise. Plain verbs, sentence case
- Each project follows: **The brief, My role, What I made, Result**, kept short
- Never invent numbers, quotes or results. Use only the facts below. Mark coursework as coursework
- Both CV PDFs include her phone number; the site itself shows no phone number

---

## Site structure (in this order)
1. Cover (her closed folder)
2. About (printed inside the open file)
3. Index (the contents sheet inside the open file)
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
- On her cover image: Portfolio / Marketing, Events and PR / Geetika Agarwal / I like ideas that are fun to look at and still move numbers.
- Window title bar: Geetika Agarwal, Portfolio 2026

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
