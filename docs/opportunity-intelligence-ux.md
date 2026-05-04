# Opportunity Intelligence System — UX Blueprint

## Wireframes (low-fidelity)

### 1) Homepage
- Header / search (prominent, centered)
- Value proposition
- Entry paths: Learn Concepts / Build Your Thesis / Explore Ideas
- Opportunity dashboard preview

### 2) Opportunity Detail Page
- Summary block
- Metrics: funding, deadline, difficulty, acceptance rate
- Strategic Insight section
- Application Toolkit panel (template, checklist, steps)

### 3) Content/Knowledge Page
- Reading column center
- Right rail: related topics/frameworks/applications
- Embedded “Apply this concept” opportunity cards

## Component hierarchy
- `layout/index`
  - `homeUX`
  - `quickAccess`
  - `content`
- `layout/note`
  - `breadcrumb + reading meta`
  - `inline opportunity context`
  - `right sidebar recommendations`

## Design system
- Typography: serif heading + clean sans body, generous line-height
- Spacing scale: 4, 8, 12, 16, 24, 32, 48
- Color tokens: neutral slate background, muted blue accent, low-noise cards
- Tags: `Funded`, `Competitive`, `Beginner-friendly`, `High ROI`

## Performance notes
- Keep dashboard cards static-rendered first.
- Progressive enhancement for matching/bookmarking/tracking.
- Defer heavy scripts in graph pages only.
