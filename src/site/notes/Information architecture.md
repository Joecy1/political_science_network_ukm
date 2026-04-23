---
{"dg-publish":true,"type":"administration","permalink":"/information-architecture/","dgPassFrontmatter":true,"noteIcon":"","created":"2026-04-06T07:49:20.711+08:00"}
---

Scalable, high-leverage information system **purpose-driven, flexible, and oriented toward retrieval and synthesis**  guideline
### **1. Define Your pCore Goals**

Before designing hierarchy or tags, clarify why the system exists:

- **User goal:** Find reliable, actionable insights quickly
- **Your goal:** Aggregate, abstract, and synthesize without reproducing others’ work
- **Output:** Summaries, curated links, visual maps, insight notes

This determines **how granular your hierarchy and tags need to be**.

---

### **2. Information Hierarchy (Top-Down Structure)**

Use **3–4 levels** for clarity; avoid more than 5–6 levels—it becomes unwieldy.

1. **Domains / Top-Level Categories** – Broad knowledge areas. Example:
    - Policy & Governance
    - Economics & Markets
    - Technology & AI
    - Entrepreneurship & Startups
    - Southeast Asia / Regional Studies
2. **Subdomains / Functional Categories** – Break down domains into actionable areas. Example:
    - Policy & Governance → Fiscal Policy, Social Policy, Urban Planning
    - Technology & AI → Generative AI, Automation Tools, Data Analytics
3. **Resource Type / Node Layer** – Concrete resource types:
    - Research papers
    - Articles / News
    - Tools / Dashboards
    - Courses / Tutorials
4. **Optional**: Individual Resource Node – a single entry with:
    - Title / short description
    - Abstract / summary
    - Key insights
    - Links / references

**Rule of thumb:** Keep hierarchy **shallow and wide** rather than deep—users and contributors can find and link nodes easily.

---

### **3. Tagging System (Cross-Cutting Metadata)**

Tags complement hierarchy; they **cut across categories** and allow flexible filtering and search.

**Suggested tag types:**

1. **Topic / Concept Tags** – Core concepts:
    - #macroeconomics, #digitaltransformation, #AIethics
2. **Region / Context Tags** – Geographic or cultural context:
    - #Malaysia, #SoutheastAsia, #Jakarta, #Singapore
3. **Function / Utility Tags** – What the resource does:
    - #research, #analysis, #dashboard, #tutorial, #policybrief
4. **Status / Reliability Tags** – For internal or public use:
    - #verified, #draft, #archived, #needsUpdate
5. **Source Type / Format Tags** – Helps users filter by medium:
    - #article, #dataset, #video, #interactive, #tool

**Rules for tags:**

- Limit per resource: 5–7 tags max (prevents clutter)
- Use consistent naming (decide upfront singular vs plural, lower-case vs camel-case)
- Make tags actionable: someone reading `#dashboard` knows they can interact, not just read

---

### **4. Linking Between Nodes**

Hierarchy + tags alone aren’t enough. Think **graph structure**:

- Nodes can link horizontally (related concepts) and vertically (parent → child).
- Examples:
    - Abstract node of an AI tool → links to the tool’s official site
    - Policy summary → links to a regional research paper
- This creates a **knowledge graph**, not just a tree.

---

### **5. Navigation & Retrieval**

- Implement filtering by:
    - Category (top-level domain)
    - Tag (cross-cutting)
    - Resource type
- Include a “related resources” section for each node
- Optional: search by keyword + tag combo

---

### **6. Maintenance & Scalability**

- Standardize input: use **submission forms** for new nodes (title, summary, tags, category, link)
- Periodically review tags for redundancy
- Keep hierarchy stable; tags are flexible
- Consider versioning for updated summaries or abstracts

---

### **7. Practical Implementation**

- Tools: Notion, Airtable, Obsidian, or custom CMS
- Suggested structure:
    
    Domain → Subdomain → Node  
    Tags: #concept #region #format #status
    
- Include **link fields** for external resources and related internal nodes

