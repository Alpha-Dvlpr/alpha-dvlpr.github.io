# Graph Report - alpha-dvlpr.github.io  (2026-10-14)

## Corpus Check
- 3 files · ~4,450 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 5)

## Summary
- 44 nodes · 43 edges · 11 communities (5 shown, 6 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9595176a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Default Jekyll Layout
- CV content definition (_data/cv.json)
- Home page (index.html)
- Jekyll site configuration (_config.yml)
- CMS.md – Edición del contenido
- Job Card Include
- Study Card Include
- Experience page
- Studies page

## God Nodes (most connected - your core abstractions)
1. `Default Jekyll Layout` - 10 edges
2. `CV content definition (_data/cv.json)` - 6 edges
3. `cv_images media collection` - 4 edges
4. `Light/Dark CSS Variables` - 3 edges
5. `Sticky Header (back link, title, theme and translate buttons)` - 3 edges
6. `Tailwind Config (CSS-variable palette)` - 3 edges
7. `Theme Switcher (auto/light/dark)` - 3 edges
8. `Jekyll site configuration (_config.yml)` - 3 edges
9. `CMS.md – Edición del contenido` - 3 edges
10. `Home page (index.html)` - 3 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Theming system (switcher, CSS variables, Tailwind config)** — alpha_dvlpr_github_io_layouts_default_theme_switcher, alpha_dvlpr_github_io_layouts_default_css_variables, alpha_dvlpr_github_io_layouts_default_tailwind_config [EXTRACTED 0.90]

## Communities (11 total, 6 thin omitted)

### Community 0 - "Default Jekyll Layout"
Cohesion: 0.27
Nodes (11): Default Jekyll Layout, Accessibility Features (skip link, focus-visible, reduced motion), Light/Dark CSS Variables, Sticky Header (back link, title, theme and translate buttons), Person JSON-LD Schema, Scroll-to-Top Button, SEO / Open Graph Metadata, Tailwind Config (CSS-variable palette) (+3 more)

### Community 1 - "CV content definition (_data/cv.json)"
Cohesion: 0.36
Nodes (8): Pages CMS config (.pages.yml), Contact field group, CV content definition (_data/cv.json), cv_images media collection, Jobs (Experiencia) field group, Translation languages field group, Profile field group, Studies (Formación) field group

### Community 2 - "Home page (index.html)"
Cohesion: 0.47
Nodes (6): Home page (index.html), About section (profile, headline, chips nav), Contact section (contact.elements), Dev environment redirect of 3d.aarontxu.com to local 127.0.0.1:4001, External link handling pattern (target _blank, noopener, sr-only notice), Projects section (profile.others)

### Community 3 - "Jekyll site configuration (_config.yml)"
Cohesion: 0.40
Nodes (5): Jekyll site configuration (_config.yml), graphify-out excluded from build, iOS developer profile (Swift, UIKit, SwiftUI, Asturias), jekyll-sitemap plugin, Aarón Granado personal site

### Community 5 - "CMS.md – Edición del contenido"
Cohesion: 0.50
Nodes (4): CMS.md – Edición del contenido, GitHub Pages deployment (main branch), Pages CMS, Root-relative image paths with relative_url

## Knowledge Gaps
- **17 isolated node(s):** `Person JSON-LD Schema`, `Scroll-to-Top Button`, `SEO / Open Graph Metadata`, `Accessibility Features (skip link, focus-visible, reduced motion)`, `Contact field group` (+12 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 22 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `Person JSON-LD Schema`, `Scroll-to-Top Button`, `SEO / Open Graph Metadata` to the rest of the system?**
  _17 weakly-connected nodes found - possible documentation gaps or missing edges._