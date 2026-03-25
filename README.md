# Next.js Beginners - Commit-Wise Learning Guide

This repository was built as a teaching project to introduce Next.js App Router concepts step by step.
Instead of only showing the final code, this README explains what was taught in each commit so students can learn in sequence.

## Run The Project

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## What Students Learn In This Repo

- App Router basics (`app` folder and route-based pages)
- Shared UI with layout composition (`Header` and `Footer`)
- Client components and hooks (`useState`, `useEffect`, `usePathname`)
- Route metadata (`metadata`, dynamic `generateMetadata`)
- Dynamic routes (`posts/[postId]`)
- Data fetching patterns for list and detail pages

## Commit-Wise Timeline

### 1) `980b7c2` - Initial commit from Create Next App

What you taught:

- Bootstrapped a fresh Next.js project using `create-next-app`
- Introduced project structure and the default App Router setup

Key learning points:

- How a Next.js app starts
- Where `app/layout` and `app/page` fit in routing

---

### 2) `c1e6b91` - feat: add Header, Footer, and About page components

What you taught:

- Built reusable layout pieces (`Header`, `Footer`)
- Added a dedicated About page route

Key learning points:

- Reusable components in `src/components`
- Basic static routing with App Router (`/about`)

Likely files touched:

- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/app/(site)/about/page.jsx`
- `src/app/layout.jsx`

---

### 3) `a7e8fbd` - feat(Header): enhance navigation with active link styling

What you taught:

- Improved navigation UX by highlighting active menu links
- Used `usePathname` from `next/navigation` inside a client component

Key learning points:

- Why `"use client"` is needed for router hooks
- Route-aware UI patterns

Likely files touched:

- `src/components/Header.jsx`

---

### 4) `c8cc842` - feat(metadata): add metadata for About and Contact pages

What you taught:

- Added per-page metadata for SEO and browser titles

Key learning points:

- Page-level `metadata` export in App Router
- Title/description customization by route

Likely files touched:

- `src/app/(site)/about/page.jsx`
- `src/app/(site)/contact/page.jsx`

---

### 5) `b1dd5d3` - refactor: restructure components and update imports

What you taught:

- Performed codebase cleanup to improve maintainability
- Reorganized component structure and fixed import paths

Key learning points:

- Refactoring without changing behavior
- Cleaner folder architecture for scaling

Likely files touched:

- `src/components/*`
- `src/app/layout.jsx`
- related route files with updated imports

---

### 6) `0ef139f` - feat: recreate About and Contact pages with components

What you taught:

- Rebuilt page content using explicit component composition
- Added interactive Contact page behavior through a client component

Key learning points:

- Server page + client child component pattern
- Local state with `useState` in a small interactive UI (`PukeCounter`)

Likely files touched:

- `src/app/(site)/about/page.jsx`
- `src/app/(site)/contact/page.jsx`
- `src/app/(site)/contact/PukeCounter.jsx`

---

### 7) `a472df0` - feat(Posts): add PostList component and update Posts page

What you taught:

- Created a Posts listing route
- Fetched remote data and rendered a list of post cards
- Linked each item to a dynamic detail route

Key learning points:

- `useEffect` + `useState` for client-side data fetching
- Building list/detail navigation flow

Likely files touched:

- `src/app/(site)/posts/page.jsx`
- `src/app/(site)/posts/PostList.jsx`

---

### 8) `437924e` - feat(PostDetail): add PostDetail component and page

What you taught:

- Implemented dynamic route details at `/posts/[postId]`
- Loaded single post data by ID
- Generated dynamic metadata from fetched content

Key learning points:

- Dynamic segments in App Router
- Combining `generateMetadata` with detail-page fetching

Likely files touched:

- `src/app/(site)/posts/[postId]/page.jsx`
- `src/app/(site)/posts/[postId]/PostDetail.jsx`

## Suggested Learning Flow For Students

1. Start at commit `980b7c2` to understand the scaffold.
2. Move through commits in order and run the app after each checkout.
3. Compare changes using `git show <commit-hash>`.
4. After commit `437924e`, trace the full user flow:
   - Home -> Posts list -> Post detail
   - Observe metadata/title changes per route

## Useful Git Commands For Teaching

```bash
git log --oneline --reverse
git show <commit-hash>
git checkout <commit-hash>
```

When finished exploring an older commit:

```bash
git checkout main
```
