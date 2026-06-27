import { useCallback, useMemo } from 'react';
import { PageShell } from '../components/PageShell';
import { SectionLabel } from '../components/SectionLabel';
import { Divider } from '../components/Divider';
import { NotebookGrid } from '../components/NotebookGrid';
import { NotebookModal } from '../components/NotebookModal';
import { notes } from '../utils/loadNotes';
import { Helmet } from 'react-helmet-async';

/**
 * Page 6 — From The Notebook
 *
 * A personal developer notebook powered by Markdown files.
 * Content is auto-discovered from src/content/notes/*.md at build time.
 * No manual imports. No code changes. Just write and push.
 */
export function BlogsPage({ currentPage, onNavigate, activeNoteSlug, setNoteSlug }) {
  
  const activeNoteIndex = useMemo(() => {
    if (!activeNoteSlug) return -1;
    return notes.findIndex(n => n.slug === activeNoteSlug);
  }, [activeNoteSlug]);

  const activeNote = useMemo(() => {
    if (activeNoteIndex === -1) return null;
    return notes[activeNoteIndex];
  }, [activeNoteIndex]);

  const openNote = useCallback((idx) => {
    if (idx >= 0 && idx < notes.length) {
      setNoteSlug(notes[idx].slug);
    }
  }, [setNoteSlug]);

  const closeNote = useCallback(() => {
    setNoteSlug(null);
  }, [setNoteSlug]);

  const navNote = useCallback((idx) => {
    if (idx >= 0 && idx < notes.length) {
      setNoteSlug(notes[idx].slug);
    }
  }, [setNoteSlug]);

  return (
    <PageShell currentPage={currentPage} onNavigate={onNavigate} compact>
      <Helmet>
        <title>From The Notebook | Aditya Mohod | THE ADITYA TIMES</title>
        <meta name="description" content="Read small thoughts, lessons, observations, UI inspirations, and debugging experiences collected throughout Aditya Mohod's software development journey." />
        <link rel="canonical" href="https://theadityatimes.site/notebook" />
      </Helmet>

      {activeNote && (
        <Helmet>
          <title>{`${activeNote.title} | Aditya Mohod | THE ADITYA TIMES`}</title>
          <meta name="description" content={activeNote.excerpt} />
          <link rel="canonical" href={`https://theadityatimes.site/notebook/${activeNote.slug}`} />
          
          {/* Open Graph */}
          <meta property="og:title" content={`${activeNote.title} | Aditya Mohod | THE ADITYA TIMES`} />
          <meta property="og:description" content={activeNote.excerpt} />
          <meta property="og:url" content={`https://theadityatimes.site/notebook/${activeNote.slug}`} />
          <meta property="og:type" content="article" />
          {activeNote.cover && <meta property="og:image" content={`https://theadityatimes.site${activeNote.cover}`} />}
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${activeNote.title} | Aditya Mohod | THE ADITYA TIMES`} />
          <meta name="twitter:description" content={activeNote.excerpt} />
          {activeNote.cover && <meta name="twitter:image" content={`https://theadityatimes.site${activeNote.cover}`} />}

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": activeNote.title,
              "description": activeNote.excerpt,
              "datePublished": activeNote.date,
              "url": `https://theadityatimes.site/notebook/${activeNote.slug}`,
              "author": {
                "@type": "Person",
                "name": "Aditya Mohod"
              }
            })}
          </script>
        </Helmet>
      )}

      {/* ── SECTION 1: Header ── */}
      <div className="text-center" style={{ marginBottom: '6px', marginTop: '4px' }}>
        <SectionLabel text="EDITOR'S DESK" className="mb-3" />
        <h2 className="headline-main" style={{ fontSize: '38px', textTransform: 'uppercase', marginBottom: '3px', letterSpacing: '0.01em' }}>
          FROM THE NOTEBOOK
        </h2>
        <div className="subtitle" style={{ fontSize: '14px', fontWeight: 600, marginBottom: '3px', color: 'var(--ink)' }}>
          Ideas, Lessons, Experiments & Random Thoughts
        </div>
        <p className="body-text text-center" style={{ fontSize: '10.5px', color: 'var(--text-muted)', maxWidth: '70%', margin: '0 auto', lineHeight: '1.45' }}>
          A collection of small notes gathered while building products, solving problems, and learning software development.
        </p>
      </div>

      <Divider style={{ marginBottom: '8px' }} />

      {/* ── SECTION 2: Notebook Grid ── */}
      <NotebookGrid notes={notes} onCardClick={openNote} />

      <Divider style={{ marginTop: '8px', marginBottom: '6px' }} />

      {/* ── SECTION 3: Pull Quote ── */}
      <div className="text-center" style={{ marginBottom: '6px' }}>
        <p className="pull-quote-text" style={{ fontSize: '15px', maxWidth: '80%', margin: '0 auto', lineHeight: '1.45', fontStyle: 'italic' }}>
          "Some ideas become products. Others remain in the notebook. Both are worth writing down."
        </p>
        <span className="pull-quote-attr" style={{ fontSize: '8px', marginTop: '3px', display: 'block', fontWeight: 700, letterSpacing: '0.1em' }}>
          — FROM THE EDITOR'S DESK
        </span>
      </div>

      <Divider style={{ marginBottom: '6px' }} />

      {/* ── SECTION 4: Next Edition ── */}
      <div className="flex-row" style={{ justifyContent: 'space-between', alignItems: 'center', padding: '2px 0' }}>
        <div className="flex-row gap-8" style={{ alignItems: 'center' }}>
          <span className="form-label" style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em' }}>NEXT EDITION</span>
          <span className="headline-small" style={{ fontSize: '12px', fontWeight: 800 }}>CONTACT & CLASSIFIEDS</span>
          <span className="body-text" style={{ fontSize: '10px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            Let's Build Something Together
          </span>
        </div>
        <button
          className="editorial-link"
          style={{ fontWeight: 700, fontSize: '11px' }}
          onClick={() => onNavigate(5)}
        >
          Turn To Page 6 →
        </button>
      </div>

      {/* ── Reading Popup ── */}
      <NotebookModal
        notes={notes}
        activeIndex={activeNoteIndex !== -1 ? activeNoteIndex : null}
        onClose={closeNote}
        onNav={navNote}
      />

      {/* Page Number */}
      <div className="flex-row mt-3" style={{ justifyContent: 'space-between', borderTop: '1px solid var(--divider)', paddingTop: '10px' }}>
        <div className="byline" style={{ fontSize: '10.5px', fontWeight: 700 }}>THE ADITYA TIMES</div>
        <div className="byline" style={{ fontSize: '10.5px', fontWeight: 700 }}>PAGE 5 OF 6</div>
      </div>

    </PageShell>
  );
}
