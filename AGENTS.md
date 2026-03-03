# AGENTS.md - Developer Guide

This is an Astro-based personal website using Tailwind CSS v4 with a retro-inspired "Zaggonaut" theme. It features blog and project sections.

## Build Commands

```bash
pnpm dev          # Start development server with hot reload
pnpm build        # Build for production
pnpm preview      # Preview production build locally
pnpm astro        # Run Astro CLI commands
pnpm astro check  # Type-check the project
```

**Running a single test**: No test framework is currently configured.

## Project Structure

```
src/
├── components/       # Astro components
│   ├── common/       # Reusable UI (Anchor, Section)
│   └── home/        # Homepage-specific components
├── layouts/         # Page layouts
├── lib/             # Utilities and types
├── pages/           # File-based routing
└── styles/          # Global CSS with Tailwind
content/
├── blogs/           # Markdown blog posts
├── projects/        # Markdown project entries
└── configuration.toml  # Site configuration
```

## Code Style Guidelines

### TypeScript

- Uses strict TypeScript mode (`astro/tsconfigs/strict`)
- Enable `strictNullChecks` - always handle null/undefined
- Use type annotations for function parameters and return types
- Prefer explicit types over `any`

### Astro Components

- Use frontmatter fence `---` at the top of `.astro` files
- Import components and utilities in alphabetical order within frontmatter
- Put script tags at the bottom of the component
- Use `<slot />` for content projection

```astro
---
import Anchor from "./common/Anchor.astro";
import ThemeToggle from "./ThemeToggle.astro";

const { data: config } = await getConfigurationCollection();
---

<header>
  <slot />
</header>

<script>
  // Client-side JavaScript here
</script>
```

### Imports

- Use absolute imports from `astro:` for Astro built-ins
- Use relative paths for local components
- Order: Astro built-ins → External libraries → Local imports

```typescript
import { type CollectionEntry, getCollection } from "astro:content";
import { parse as parseToml } from "toml";
import Anchor from "./common/Anchor.astro";
```

### Naming Conventions

- **Components**: PascalCase (e.g., `ThemeToggle.astro`, `Hero.astro`)
- **Files**: kebab-case for utilities (e.g., `utils.ts`, `types.ts`)
- **Functions**: camelCase (e.g., `getShortDescription`, `processArticleDate`)
- **Types**: PascalCase with `Frontmatter` suffix (e.g., `ArticleFrontmatter`)
- **CSS Classes**: Tailwind utilities; custom classes use `zag-*` prefix

### CSS and Tailwind

- Uses Tailwind CSS v4 with `@theme` directive
- Custom theme variables use `zag-*` prefix (e.g., `zag-bg`, `zag-text`, `zag-accent`)
- Dark mode via `.dark` class on `<html>` element

```css
@theme {
  --color-zag-dark: var(--color-neutral-900);
  --color-zag-accent-light: var(--color-emerald-400);
}
```

### JSDoc Documentation

- Document public functions with JSDoc comments
- Include `@param` and `@returns` with types

```typescript
/**
 * Shortens a string by removing words at the end until it fits.
 * @param content the content to shorten
 * @param maxLength the maximum length (default is 20)
 * @returns a shortened version of the content
 */
```

### Error Handling

- Throw descriptive errors for configuration issues
- Use try/catch for async operations
- Cache expensive operations (see `configCache` pattern in `utils.ts`)

### Content Collections

- Define schemas in `src/content.config.ts` using Zod
- Use transforms to derive computed fields (e.g., slug from title)
- Blog/project entries support: title, description, tags, featured, timestamp

### Dark Mode

- Theme detection script runs inline in `<head>` before render
- Store theme preference in `localStorage`
- Respect `prefers-color-scheme` media query

### VS Code Settings

- Spell check custom words in `.vscode/settings.json` (e.g., "Zaggonaut", "Frontmatter")
- Astro language server provides IntelliSense

## Key Dependencies

- `astro`: ^5.16.6 - Static site generator
- `tailwindcss`: ^4.1.18 - CSS framework
- `@tailwindcss/vite`: ^4.1.18 - Vite integration
- `@tailwindcss/typography`: ^0.5.19 - Prose styling
- `toml`: ^3.0.0 - Configuration parsing

## Adding New Content

### Blog Post
Create `content/blogs/your-post.md`:
```markdown
---
title: "Your Post Title"
description: "Short description"
featured: false
timestamp: 2024-01-01
---

Your content here...
```

### Project
Create `content/projects/your-project.md`:
```markdown
---
title: "Project Name"
description: "Short description"
githubUrl: https://github.com/user/repo
featured: false
timestamp: 2024-01-01
---

Your description here...
```

## Common Tasks

- **Add new page**: Create `.astro` in `src/pages/`
- **Add new component**: Create `.astro` in `src/components/`
- **Add utility function**: Add to `src/lib/utils.ts`
- **Modify theme colors**: Edit CSS variables in `src/styles/global.css`
- **Update site config**: Edit `content/configuration.toml`
