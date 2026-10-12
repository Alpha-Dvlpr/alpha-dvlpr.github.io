# Graph Report - alpha-dvlpr.github.io  (2026-10-12)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 42 nodes · 43 edges · 14 communities (5 shown, 9 thin omitted)
- Extraction: 88% EXTRACTED · 12% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `97d542cd`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Home page (index.html)
- CV content definition (_data/cv.json)
- Jekyll site configuration (_config.yml)
- Default Jekyll Layout
- CMS.md – Edición del contenido
- Light/Dark CSS Variables
- Sticky Header (back link, title, theme and translate buttons)
- Tailwind Config (CSS-variable palette)
- Job Card Include
- Study Card Include
- Experience page
- Studies page

## God Nodes (most connected - your core abstractions)
1. `Default Jekyll Layout` - 11 edges
2. `CV content definition (_data/cv.json)` - 6 edges
3. `Home page (index.html)` - 4 edges
4. `Profile field group` - 4 edges
5. `cv_images media collection` - 4 edges
6. `CMS.md – Edición del contenido` - 3 edges
7. `Light/Dark CSS Variables` - 3 edges
8. `Theme Switcher (auto/light/dark)` - 3 edges
9. `Sticky Header (back link, title, theme and translate buttons)` - 3 edges
10. `Tailwind Config (CSS-variable palette)` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Home page (index.html)` --references--> `Default Jekyll Layout`  [EXTRACTED]
  index.html → _layouts/default.html
- `About/profile section` --shares_data_with--> `Profile field group`  [INFERRED]
  index.html → .pages.yml
- `Contact section` --shares_data_with--> `Contact field group`  [INFERRED]
  index.html → .pages.yml
- `Personal projects section` --shares_data_with--> `Profile field group`  [INFERRED]
  index.html → .pages.yml

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Theming system (switcher, CSS variables, Tailwind config)** — _layouts_default_theme_switcher, _layouts_default_css_variables, _layouts_default_tailwind_config [EXTRACTED 0.90]

## Communities (14 total, 9 thin omitted)

### Community 0 - "Home page (index.html)"
Cohesion: 0.40
Nodes (6): Home page (index.html), About/profile section, Contact section, Personal projects section, Contact field group, Profile field group

### Community 1 - "CV content definition (_data/cv.json)"
Cohesion: 0.47
Nodes (6): Pages CMS config (.pages.yml), CV content definition (_data/cv.json), cv_images media collection, Jobs (Experiencia) field group, Translation languages field group, Studies (Formación) field group

### Community 2 - "Jekyll site configuration (_config.yml)"
Cohesion: 0.40
Nodes (5): Jekyll site configuration (_config.yml), graphify-out excluded from build, iOS developer profile (Swift, UIKit, SwiftUI, Asturias), jekyll-sitemap plugin, Aarón Granado personal site

### Community 3 - "Default Jekyll Layout"
Cohesion: 0.40
Nodes (5): Default Jekyll Layout, Accessibility Features (skip link, focus-visible, reduced motion), Person JSON-LD Schema, Scroll-to-Top Button, SEO / Open Graph Metadata

### Community 5 - "CMS.md – Edición del contenido"
Cohesion: 0.50
Nodes (4): CMS.md – Edición del contenido, GitHub Pages deployment (main branch), Pages CMS, Root-relative image paths with relative_url

## Knowledge Gaps
- **15 isolated node(s):** `Translation languages field group`, `Study Card Include`, `Experience page`, `Studies page`, `Person JSON-LD Schema` (+10 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 20 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Default Jekyll Layout` connect `Default Jekyll Layout` to `Tailwind Config (CSS-variable palette)`, `Home page (index.html)`, `Light/Dark CSS Variables`, `Sticky Header (back link, title, theme and translate buttons)`?**
  _High betweenness centrality (0.193) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Profile field group` (e.g. with `About/profile section` and `Personal projects section`) actually correct?**
  _`Profile field group` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Translation languages field group`, `Study Card Include`, `Experience page` to the rest of the system?**
  _15 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `Home page (index.html)` connect `Home page (index.html)` to `Default Jekyll Layout`?**
  _High betweenness centrality (0.153) - this node is a cross-community bridge._
- **Why does `Profile field group` connect `Home page (index.html)` to `CV content definition (_data/cv.json)`?**
  _High betweenness centrality (0.087) - this node is a cross-community bridge._