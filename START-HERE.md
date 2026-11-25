# Building your portfolio in Claude Code: the plan

This is your step-by-step plan. Do the phases in order. Each phase ends with something you can look at before moving on, so nothing gets built in one blind go.

Files in this kit:
- **START-HERE.md** (this file): the steps and the exact prompts to paste
- **CLAUDE.md**: the project brief. Claude Code reads it automatically every session, so it always knows your design direction and content
- **media-planning-case-study.md**: the full media planning content (already made)

---

## Phase 0: Set up (about 30 minutes)

1. **Check your plan.** Claude Code runs on your Claude account, so make sure your plan includes Claude Code.
2. **Install Claude Code.**
   - Mac: open Terminal and paste `curl -fsSL https://claude.ai/install.sh | bash`
   - Windows: open PowerShell and paste `irm https://claude.ai/install.ps1 | iex`
3. **No Node.js needed.** The site is plain files that open straight in your browser.
4. **Make a project folder**, for example `Documents/portfolio`. Put these inside it:
   - `CLAUDE.md` (from this kit)
   - `content/media-planning-case-study.md`
   - an `assets/` folder (Phase 1 fills it)
5. **Open Claude Code in that folder.** In Terminal: `cd Documents/portfolio` then `claude`. Log in when it asks.
6. **Install the website-building plugins.** Inside Claude Code, type `/plugin` to open the plugin browser, look through the official list, and install anything for frontend design, UI/UX or web deployment. At minimum install frontend-design:
   `/plugin install frontend-design@claude-plugins-official`
   then `/reload-plugins`. Type `/plugin` again to check they show as enabled.

---

## Phase 1: Collect and shoot your assets (the part that makes it look real)

"Realistic" comes from real photographs, not drawn shapes. You're a photographer, so this is your advantage. Shoot everything on a plain, evenly lit surface (white or pale table, daylight from a window, no harsh shadows), from directly above or at a slight angle, and keep the light the same for every shot so the collage looks like one set.

**Shoot these objects (one photo each, later cut out to transparent PNGs):**
- A real **folder** in a pastel colour (light blue or pink), photographed **closed**, then **half open**, then **fully open and flat**. These three shots power the cover animation.
- Loose **papers**: a few A4 sheets, a polaroid or photo print, a sticky note, a paper clip, a strip of washi tape
- Your **camera**
- A **clapperboard** (WWI will have one)
- An **event ticket or wristband** (AquaTerra or any fest)
- **Momos** in a bamboo steamer or on a plate
- A **passport** or boarding pass and a small **travel** item (luggage tag, map, toy plane)
- A few **coins / a ₹ note** (for the finance touch)

**Collage cutouts from Pinterest:** you can also collect extra collage pieces from Pinterest. Search things like "camera png cutout", "film clapperboard png", "momos png", "vintage ticket png", "passport stamp png", "rupee coin png", "washi tape png", "torn paper png". Two things to keep it safe on a public site: prefer images marked free to use (Freepik, PNGWing, Canva elements, Unsplash or Pexels photos you cut out yourself), and avoid anything with someone else's watermark, artwork or logo. Your own photos are always the safest and look the most "you". Save them into `assets/cutouts/` and note where each came from in `assets/cutouts/CREDITS.md`.

**Cut them out:** use Canva's background remover, remove.bg or Photoshop. Export as PNG with transparent backgrounds, around 1600px on the long side.

**Collect your project files:**
| Folder | What to put in |
|---|---|
| `assets/objects/` | All the cut-out object PNGs |
| `assets/crftd/` | Tee designs (flat PNGs), product photos, any lookbook shots, the logo |
| `assets/tooyumm/` | Screenshots of your 4 published pieces, a calendar screenshot (blur anything confidential) |
| `assets/tiya/` | The 3 reel covers (screenshots are fine) and the view-count screenshot |
| `assets/aquaterra/` | Posters for Paradox, Starry Night, Disco Diwali, event photos, a sponsor deck slide |
| `assets/photography/` | The 4 NCPA-selected Goa photos, plus 6 to 10 of your best other photos |
| `assets/pr/` | The Zomato press release (as a PDF or text) |
| `assets/cv/` | Both CV PDFs |

**Mockups:** for realistic tee and phone mockups, put your designs into free mockup templates (Canva mockups, Mockey.ai or Shots.so) and export PNGs. Real fabric folds and real phone frames instantly look more professional than drawn ones.

Name files plainly: `crftd-tee-valentines-1.png`, `goa-aguada-fort.jpg`. Keep images under about 500 KB each (Squoosh.app compresses them).

**Check before moving on:** every folder has real files in it. If something's missing, the build can start without it, but the cover objects and the folder shots are a must.

---

## Phase 2: Let Claude plan the design before it writes code

Paste this into Claude Code. Press **Shift+Tab** first to switch to **plan mode**, so it only plans and doesn't build yet.

> Read CLAUDE.md fully, and look through every file in /assets and /content. First run /skills and /plugin and list every installed skill that helps with website design, frontend, UI/UX, animation, accessibility, performance or deployment. Use all of them for this project, starting with the frontend-design skill, and tell me which ones you're using. Use the cutouts in /assets/cutouts for the collages. Before writing any code, give me a design plan: the colour tokens with hex values, the typefaces and type scale, an ASCII wireframe for the cover, the About spread, the index and one project spread, and exactly how the cover folder opening works on scroll. Then review your own plan against CLAUDE.md and tell me anything that looks generic or templated and how you'd change it. Don't build anything yet.

Read the plan. Push back on anything you don't like ("the type feels too safe", "I want more of the folder visible"). When you're happy, tell it to save the plan as `DESIGN-PLAN.md` and continue.

---

## Phase 3: Build in small pieces

Turn plan mode off (Shift+Tab again). Paste one prompt at a time. After each one, open the site and check it before moving on.

**3.1 Set up the project**
> Set up the project as described in CLAUDE.md: plain index.html, css/style.css and js/main.js with no build tools, GSAP with ScrollTrigger and Lenis loaded from a CDN. Tell me how to open it.

To see the site, double-click `index.html` in your folder (it opens in Chrome). Refresh the page after each change.

**3.2 The cover**
> Build only the cover, following DESIGN-PLAN.md: the real folder photos from /assets/objects opening as I scroll, with the cut-out objects and papers sliding out to the sides like a collage on a desk. It should look like a magazine cover shot on a real table, not an illustration. Show me a screenshot when it's done.

**3.3 About + index**
> Build the About spread and the index next. In About, my passport (from /assets/objects) slides out of the folder with the About text set like a magazine profile. The index looks like the folder's tabs and links to each project. Screenshot when done.

**3.4 to 3.8 Project spreads, one prompt each.** Use this pattern and swap the project name:
> Build the CRFTD spread using the content in CLAUDE.md and the images in /assets/crftd. Lay it out like a magazine feature: one large hero image, the real tee mockups presented like a shop lookbook, a short headline, the brief / my role / what I made / result in a calm editorial layout, and the numbers set large. The spread slides in sideways as I scroll into it. Screenshot when done.

Order: CRFTD → Too Yumm → Tiya reels → AquaTerra → Media planning → PR desk → Photography → Also worked on → Contact.

**3.9 Polish pass**
> Now do a full review: take screenshots at desktop (1440px) and phone (390px) widths for every section. Fix anything that breaks, overlaps or looks unbalanced. Make sure it works with keyboard navigation, respects reduced motion, loads fast (compress any image over 500 KB), and that the cover animation is short enough that my name and "marketing and PR" show within the first scroll. List what you changed.

---

## Phase 4: Put it online for free (no Node needed)

**Easiest: Netlify Drop**
1. Go to app.netlify.com/drop and sign up free
2. Drag your whole `geetika-portfolio` folder onto the page
3. You get a live link in a few seconds. Rename it in Site settings to something like `geetika-agarwal.netlify.app`
4. To update later, open your site in Netlify, go to Deploys, and drag the folder in again

Put the link on both CVs and your LinkedIn. A custom domain can come later.

---

## Tips for working with Claude Code

- **One section at a time.** Big "build everything" prompts are how sites end up generic.
- **Say what's wrong specifically:** "the headline is too small and the momos are covering the text" works far better than "make it better".
- **Paste screenshots of references** straight into Claude Code (drag the image in) and say exactly what you like about them.
- **Save checkpoints.** Ask: "commit this to git with a message describing what we built". If something breaks later, you can go back.
- **New session?** Claude Code re-reads CLAUDE.md, so just say "continue from DESIGN-PLAN.md, next is the Too Yumm spread."
