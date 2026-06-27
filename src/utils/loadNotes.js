/**
 * loadNotes.js
 * 
 * Static notebook content loader for The Aditya Times.
 * Uses Vite's import.meta.glob to auto-discover all Markdown files
 * in src/content/notes/ at build time.
 * 
 * Adding a new .md file → rebuild → new notebook card appears.
 * No manual imports. No code changes.
 */

/**
 * A simple custom YAML frontmatter parser for client-side use.
 * Avoids Node.js dependencies (like Buffer or fs) and works natively in browser/Vite.
 */
function parseFrontMatter(rawContent) {
  const lines = rawContent.split(/\r?\n/);
  const data = {};
  let contentLines = [];
  let inFrontMatter = false;
  let hasParsedFrontMatter = false;
  let currentKey = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trim() === '---') {
      if (!inFrontMatter && !hasParsedFrontMatter) {
        inFrontMatter = true;
        continue;
      } else if (inFrontMatter) {
        inFrontMatter = false;
        hasParsedFrontMatter = true;
        continue;
      }
    }

    if (inFrontMatter) {
      // Check if it's a list item (e.g. "  - tag")
      const listItemMatch = line.match(/^\s*-\s*(.*)$/);
      if (listItemMatch && currentKey) {
        if (!Array.isArray(data[currentKey])) {
          data[currentKey] = [];
        }
        let val = listItemMatch[1].trim();
        // Remove quotes if present
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        data[currentKey].push(val);
        continue;
      }

      // Check for key-value pair
      const colonIndex = line.indexOf(':');
      if (colonIndex !== -1) {
        const key = line.slice(0, colonIndex).trim();
        let val = line.slice(colonIndex + 1).trim();

        // Remove quotes if present
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }

        if (val === 'true') {
          data[key] = true;
        } else if (val === 'false') {
          data[key] = false;
        } else if (!isNaN(val) && val !== '') {
          data[key] = Number(val);
        } else {
          data[key] = val;
        }

        currentKey = key;
      }
    } else {
      contentLines.push(line);
    }
  }

  return {
    data,
    content: contentLines.join('\n').trim()
  };
}

/* ── Card decoration styles that cycle automatically ── */
const DECORATIONS = [
  'fold', 'tape', 'clip', 'quote', 'pin',
  'sticky', 'torn', 'lined', 'stamp', 'coffee',
];

/**
 * Auto-import all .md files from the notes directory at build time.
 * Vite resolves this statically — no runtime file-system access needed.
 */
const noteModules = import.meta.glob('/src/content/notes/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

/**
 * Parse a single raw Markdown string into a structured note object.
 */
function parseNote(raw, filePath, index) {
  const { data: fm, content } = parseFrontMatter(raw);

  /* Derive slug from frontmatter or filename */
  const fileSlug = filePath
    .split('/')
    .pop()
    .replace(/\.md$/, '')
    .replace(/^\d{4}-\d{2}-\d{2}-/, ''); // strip date prefix

  const slug = fm.slug || fileSlug;

  /* Auto-generate excerpt if not provided */
  const excerpt =
    fm.excerpt ||
    content
      .replace(/^#+\s.+$/gm, '')   // strip headings
      .replace(/```[\s\S]*?```/g, '') // strip code blocks
      .replace(/[*_`~#>\[\]!()-]/g, '') // strip markdown chars
      .trim()
      .split('\n')
      .filter(Boolean)
      .slice(0, 2)
      .join(' ')
      .slice(0, 160);

  /* Auto-assign decoration: use frontmatter override or cycle */
  const decoration = fm.decoration || DECORATIONS[index % DECORATIONS.length];

  return {
    slug,
    title: fm.title || 'Untitled',
    date: fm.date || '2026-01-01',
    status: fm.status || 'published',
    featured: fm.featured || false,
    tags: fm.tags || [],
    cover: fm.cover || null,
    decoration,
    excerpt,
    content, // raw Markdown body (rendered in popup)
  };
}

/**
 * Load, parse, filter, and sort all notebook entries.
 * Returns a ready-to-render array of note objects.
 */
function loadAllNotes() {
  const paths = Object.keys(noteModules);
  const allNotes = paths.map((path, i) => parseNote(noteModules[path], path, i));

  /* Filter out drafts and archived notes */
  const published = allNotes.filter((n) => n.status === 'published');

  /* Sort newest first */
  published.sort((a, b) => new Date(b.date) - new Date(a.date));

  return published;
}

/* ── Exported data ── */
export const notes = loadAllNotes();

/* Identify the featured note (or newest as fallback) */
export const featuredNote = notes.find((n) => n.featured) || notes[0] || null;

/* All unique tags across published notes (for future filters) */
export const allTags = [...new Set(notes.flatMap((n) => n.tags))].sort();

/* Notes grouped by year (for future archive page) */
export const notesByYear = notes.reduce((acc, note) => {
  const year = new Date(note.date).getFullYear();
  if (!acc[year]) acc[year] = [];
  acc[year].push(note);
  return acc;
}, {});
