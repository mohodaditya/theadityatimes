import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const notesDir = path.join(rootDir, 'src', 'content', 'notes');

// Custom YAML Frontmatter Parser
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
      const listItemMatch = line.match(/^\s*-\s*(.*)$/);
      if (listItemMatch && currentKey) {
        if (!Array.isArray(data[currentKey])) {
          data[currentKey] = [];
        }
        let val = listItemMatch[1].trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        data[currentKey].push(val);
        continue;
      }

      const colonIndex = line.indexOf(':');
      if (colonIndex !== -1) {
        const key = line.slice(0, colonIndex).trim();
        let val = line.slice(colonIndex + 1).trim();

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

// Load and parse all Markdown notes
function loadNotes() {
  if (!fs.existsSync(notesDir)) return [];
  const files = fs.readdirSync(notesDir);
  const notes = [];

  files.forEach((file) => {
    if (file.endsWith('.md')) {
      const filePath = path.join(notesDir, file);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data: fm, content } = parseFrontMatter(raw);
      
      const fileSlug = file
        .replace(/\.md$/, '')
        .replace(/^\d{4}-\d{2}-\d{2}-/, '');
      const slug = fm.slug || fileSlug;

      // Generate fallback excerpt
      const excerpt = fm.excerpt || content
        .replace(/^#+\s.+$/gm, '')
        .replace(/```[\s\S]*?```/g, '')
        .replace(/[*_`~#>\[\]!()-]/g, '')
        .trim()
        .split('\n')
        .filter(Boolean)
        .slice(0, 2)
        .join(' ')
        .slice(0, 160);

      notes.push({
        slug,
        title: fm.title || 'Untitled',
        date: fm.date || '2026-01-01',
        excerpt,
        cover: fm.cover || null,
        status: fm.status || 'published'
      });
    }
  });

  // Sort notes newest first
  return notes
    .filter(n => n.status === 'published')
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

async function run() {
  console.log('Starting postbuild static pre-rendering (SSG)...');
  
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html not found! Run npm run build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');
  const notes = loadNotes();

  // Define static routes
  const routes = [
    {
      path: '/',
      title: 'THE ADITYA TIMES | Aditya Mohod – MERN Stack Developer',
      description: 'Explore THE ADITYA TIMES, an interactive newspaper-style portfolio by Aditya Mohod showcasing MERN Stack projects, software engineering work, technical notebook entries and product thinking.',
      canonical: 'https://theadityatimes.site/',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "THE ADITYA TIMES",
        "url": "https://theadityatimes.site/",
        "author": {
          "@type": "Person",
          "name": "Aditya Mohod",
          "jobTitle": "MERN Stack Developer",
          "url": "https://theadityatimes.site/",
          "sameAs": [
            "https://github.com/mohodaditya",
            "https://www.linkedin.com/in/aditya-mohod/"
          ]
        }
      }
    },
    {
      path: '/about',
      title: 'About Aditya Mohod | MERN Stack Developer | THE ADITYA TIMES',
      description: 'Learn about Aditya Mohod, a B.Tech Computer Science graduate and passionate MERN Stack Developer based in Pune, specialized in React, Node.js, and scaling products.',
      canonical: 'https://theadityatimes.site/about'
    },
    {
      path: '/projects/deshkarojgar',
      title: 'DeshKaRojgar | MERN Stack Project | THE ADITYA TIMES',
      description: 'A special report on DeshKaRojgar, a MERN stack web application built by Aditya Mohod to connect local Indian job seekers with localized opportunities.',
      canonical: 'https://theadityatimes.site/projects/deshkarojgar',
      schema: {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "DeshKaRojgar",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://theadityatimes.site/projects/deshkarojgar",
        "description": "Connecting Local Talent With Local Opportunities. A MERN stack project by Aditya Mohod.",
        "author": {
          "@type": "Person",
          "name": "Aditya Mohod"
        }
      }
    },
    {
      path: '/projects/tech-arena',
      title: 'Tech Arena | Interactive Learning Platform | THE ADITYA TIMES',
      description: 'Inside Tech Arena, an interactive learning platform designed for frontend developers to master CSS layouts, component logic, and typography.',
      canonical: 'https://theadityatimes.site/projects/tech-arena',
      schema: {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Tech Arena",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web",
        "url": "https://theadityatimes.site/projects/tech-arena",
        "description": "Interactive Technical Learning Platform. A MERN stack project by Aditya Mohod.",
        "author": {
          "@type": "Person",
          "name": "Aditya Mohod"
        }
      }
    },
    {
      path: '/notebook',
      title: 'From The Notebook | Aditya Mohod | THE ADITYA TIMES',
      description: 'Read small thoughts, lessons, observations, UI inspirations, and debugging experiences collected throughout Aditya Mohod\'s software development journey.',
      canonical: 'https://theadityatimes.site/notebook'
    },
    {
      path: '/contact',
      title: 'Contact | Aditya Mohod | THE ADITYA TIMES',
      description: 'Get in touch with Aditya Mohod for MERN Stack developer roles, internships, freelance opportunities, or technical collaborations.',
      canonical: 'https://theadityatimes.site/contact',
      schema: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "url": "https://theadityatimes.site/contact",
        "name": "Contact Aditya Mohod",
        "description": "Contact form and professional directory details for Aditya Mohod, MERN Stack Developer."
      }
    }
  ];

  // Add dynamic notebook note routes
  notes.forEach((note) => {
    routes.push({
      path: `/notebook/${note.slug}`,
      title: `${note.title} | Aditya Mohod | THE ADITYA TIMES`,
      description: note.excerpt,
      canonical: `https://theadityatimes.site/notebook/${note.slug}`,
      image: note.cover ? `https://theadityatimes.site${note.cover}` : undefined,
      schema: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": note.title,
        "description": note.excerpt,
        "datePublished": note.date,
        "url": `https://theadityatimes.site/notebook/${note.slug}`,
        "author": {
          "@type": "Person",
          "name": "Aditya Mohod"
        }
      }
    });
  });

  // Pre-render pages
  routes.forEach((route) => {
    let html = baseHtml;

    // Clean existing generic SEO tags from base HTML to prevent duplication
    html = html
      .replace(/<title>[\s\S]*?<\/title>/gi, '')
      .replace(/<meta name="description"[\s\S]*?\/>/gi, '')
      .replace(/<meta property="og:title"[\s\S]*?\/>/gi, '')
      .replace(/<meta property="og:description"[\s\S]*?\/>/gi, '')
      .replace(/<meta property="og:type"[\s\S]*?\/>/gi, '');

    // Branded social share preview image fallback
    const socialImage = route.image || 'https://theadityatimes.site/social-share.png';

    const headerInjects = [
      `<title>${route.title}</title>`,
      `<meta name="description" content="${route.description}" />`,
      `<link rel="canonical" href="${route.canonical}" />`,
      `<meta name="keywords" content="Aditya Mohod, MERN Stack Developer, Software Engineer, React Developer, Node.js Developer, Full Stack Developer, Portfolio, Pune, India, Web Developer" />`,
      
      `<!-- Open Graph / Facebook -->`,
      `<meta property="og:title" content="${route.title}" />`,
      `<meta property="og:description" content="${route.description}" />`,
      `<meta property="og:url" content="${route.canonical}" />`,
      `<meta property="og:type" content="${route.path.startsWith('/notebook/') ? 'article' : 'website'}" />`,
      `<meta property="og:site_name" content="THE ADITYA TIMES" />`,
      `<meta property="og:image" content="${socialImage}" />`,
      
      `<!-- Twitter -->`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${route.title}" />`,
      `<meta name="twitter:description" content="${route.description}" />`,
      `<meta name="twitter:image" content="${socialImage}" />`
    ];

    if (route.schema) {
      headerInjects.push(
        `<!-- Structured Data -->`,
        `<script type="application/ld+json">${JSON.stringify(route.schema)}</script>`
      );
    }

    const headContent = headerInjects.join('\n    ');
    html = html.replace('</head>', `  ${headContent}\n  </head>`);

    if (route.path === '/') {
      // Save root index.html
      fs.writeFileSync(templatePath, html, 'utf-8');
      console.log(`Pre-rendered: / (dist/index.html)`);
    } else {
      // Save subdirectory index.html
      const subDir = path.join(distDir, route.path);
      fs.mkdirSync(subDir, { recursive: true });
      fs.writeFileSync(path.join(subDir, 'index.html'), html, 'utf-8');
      console.log(`Pre-rendered: ${route.path} (dist${route.path}/index.html)`);
    }
  });

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://theadityatimes.site/sitemap.xml
`;
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');
  console.log('Generated: dist/robots.txt');

  // Generate sitemap.xml
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    return `  <url>
    <loc>${route.canonical}</loc>
    <changefreq>${route.path.startsWith('/notebook/') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${route.path === '/' ? '1.0' : route.path.startsWith('/projects/') || route.path.startsWith('/notebook/') ? '0.8' : '0.6'}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log('Generated: dist/sitemap.xml');

  console.log('Static site generation (SSG) and SEO setup complete!');
}

run().catch((err) => {
  console.error('Error during postbuild script:', err);
  process.exit(1);
});
