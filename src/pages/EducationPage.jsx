import React from 'react';
import { PageShell } from '../components/PageShell';
import { SectionLabel } from '../components/SectionLabel';
import { Divider } from '../components/Divider';

export function EducationPage({ currentPage, onNavigate }) {
  return (
    <PageShell
      currentPage={currentPage}
      onNavigate={onNavigate}
      compact={false}
      location="PUNE, MAHARASHTRA"
      edition="SPECIAL TECHNOLOGY EDITION"
    >

      {/* Page Header */}
      <div className="text-center mb-4 mt-2">
        <SectionLabel text="[ INSIDE THE NEWSROOM ]" className="mb-2" />
        <h2 className="headline-main" style={{ fontSize: '42px', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
          DEVELOPER PROFILE
        </h2>
      </div>

      {/* Visual Centerpiece Quote */}
      <div className="flex-col text-center" style={{ margin: '8px 0 16px 0' }}>
        <Divider className="mb-3" />
        <div className="pull-quote-text" style={{ fontSize: '22px', lineHeight: '1.3', maxWidth: '850px', margin: '0 auto', color: 'var(--ink)' }}>
          "I enjoy transforming ideas into meaningful products that solve real-world problems and create valuable experiences."
        </div>
        <div className="headline-small mt-2" style={{ fontSize: '12px', letterSpacing: '0.1em' }}>— ADITYA MOHOD</div>
        <Divider className="mt-3" />
      </div>

      {/* Main Content: 3-Column Magazine Layout */}
      <div className="grid-3col-equal flex-1" style={{ minHeight: 0 }}>

        {/* Column 1: Snapshot & What I Build */}
        <div className="flex-col gap-5" style={{ paddingRight: '12px', borderRight: '1px solid var(--divider)' }}>
          <div className="flex-col">
            <h3 className="headline-article mb-2" style={{ textTransform: 'uppercase', fontSize: '15px', borderBottom: '2px solid var(--ink)', paddingBottom: '4px' }}>PROFESSIONAL SNAPSHOT</h3>
            <ul className="body-text flex-col gap-2" style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: 'var(--editorial-red)' }}>•</span> MERN Stack Developer</li>
              <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: 'var(--editorial-red)' }}>•</span> B.Tech Computer Science Engineering</li>
              <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: 'var(--editorial-red)' }}>•</span> Based In Pune, Maharashtra</li>
              <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: 'var(--editorial-red)' }}>•</span> Open To Opportunities</li>
            </ul>
          </div>

          <div className="flex-col mb-2">
            <h3 className="headline-article mb-3" style={{ textTransform: 'uppercase', fontSize: '16px', borderBottom: '2px solid var(--ink)', paddingBottom: '4px' }}>WHAT I BUILD</h3>
            <ul className="body-text flex-col gap-2" style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: 'var(--editorial-red)' }}>✓</span> Full Stack Web Applications</li>
              <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: 'var(--editorial-red)' }}>✓</span> Responsive User Interfaces</li>
              <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: 'var(--editorial-red)' }}>✓</span> RESTful Backend Services</li>
              <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: 'var(--editorial-red)' }}>✓</span> Scalable Digital Products</li>
            </ul>
          </div>
        </div>

        {/* Column 2: Tech Skills */}
        <div className="flex-col gap-5" style={{ padding: '0 8px', borderRight: '1px solid var(--divider)' }}>
          <h3 className="headline-article mb-1" style={{ textTransform: 'uppercase', fontSize: '16px', borderBottom: '2px solid var(--ink)', paddingBottom: '4px' }}>TECHNICAL EXPERTISE</h3>

          <div className="flex-col gap-5">
            <div className="flex-col">
              <h4 className="headline-small mb-2" style={{ color: 'var(--text-muted)' }}>FRONTEND</h4>
              <div className="body-text flex-col gap-2">
                <div style={{ fontWeight: 700, color: 'var(--editorial-red)' }}>React.js</div>
                <div>JavaScript</div>
                <div>Tailwind CSS</div>
                <div>Material UI</div>
              </div>
            </div>

            <div className="flex-col">
              <h4 className="headline-small mb-2" style={{ color: 'var(--text-muted)' }}>BACKEND</h4>
              <div className="body-text flex-col gap-2">
                <div style={{ fontWeight: 700, color: 'var(--editorial-red)' }}>Node.js</div>
                <div style={{ fontWeight: 700, color: 'var(--editorial-red)' }}>Express.js</div>
                <div>REST APIs</div>
              </div>
            </div>

            <div className="flex-col">
              <h4 className="headline-small mb-2" style={{ color: 'var(--text-muted)' }}>DATABASES</h4>
              <div className="body-text flex-col gap-2">
                <div style={{ fontWeight: 700, color: 'var(--editorial-red)' }}>MongoDB</div>
                <div>MySQL</div>
              </div>
            </div>

            <div className="flex-col">
              <h4 className="headline-small mb-1" style={{ color: 'var(--text-muted)' }}>TOOLS</h4>
              <div className="body-text flex-col gap-1">
                <div>Git & GitHub</div>
                <div>Linux</div>
                <div>Figma</div>
                <div>Notion & Canva</div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Quick Facts & Focus */}
        <div className="flex-col gap-5" style={{ paddingLeft: '12px' }}>

          <div className="flex-col gap-2">
            <div className="classified-box" style={{ padding: '6px 10px', border: '1px solid var(--ink)', background: 'var(--paper-dark)', marginBottom: 0 }}>
              <strong className="headline-small" style={{ display: 'block', marginBottom: '2px', color: 'var(--editorial-red)' }}>📍 LOCATION</strong>
              <span className="body-text" style={{ fontSize: '13px', fontWeight: 500 }}>Pune, Maharashtra</span>
            </div>
            <div className="classified-box" style={{ padding: '6px 10px', border: '1px solid var(--ink)', background: 'var(--paper-dark)', marginBottom: 0 }}>
              <strong className="headline-small" style={{ display: 'block', marginBottom: '2px', color: 'var(--editorial-red)' }}>🎓 EDUCATION</strong>
              <span className="body-text" style={{ fontSize: '13px', fontWeight: 500 }}>B.Tech Computer Science</span>
            </div>
            <div className="classified-box" style={{ padding: '6px 10px', border: '1px solid var(--ink)', background: 'var(--paper-dark)', marginBottom: 0 }}>
              <strong className="headline-small" style={{ display: 'block', marginBottom: '2px', color: 'var(--editorial-red)' }}>💼 CURRENT ROLE</strong>
              <span className="body-text" style={{ fontSize: '13px', fontWeight: 500 }}>MERN Stack Developer</span>
            </div>
            <div className="classified-box" style={{ padding: '6px 10px', border: '1px solid var(--ink)', background: 'var(--paper-dark)', marginBottom: 0 }}>
              <strong className="headline-small" style={{ display: 'block', marginBottom: '2px', color: 'var(--editorial-red)' }}>🚀 STATUS</strong>
              <span className="body-text" style={{ fontSize: '13px', fontWeight: 500 }}>Open To Opportunities</span>
            </div>
          </div>
        </div>
      </div>

      {/* DEVELOPMENT PROCESS INFOGRAPHIC */}
      <div className="flex-col mt-4 mb-3" style={{ background: 'var(--paper-dark)', padding: '16px 12px', border: '1px solid var(--ink)' }}>
        <h3 className="headline-article mb-3 text-center" style={{ textTransform: 'uppercase', fontSize: '16px', letterSpacing: '0.1em' }}>DEVELOPMENT PROCESS</h3>

        <div className="flex-row" style={{ justifyContent: 'center', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          {['Research', 'UI/UX', 'Development', 'Testing', 'Publish', 'Feedback', 'Improve'].map((step, index, arr) => (
            <React.Fragment key={step}>
              <div style={{
                padding: '6px 10px',
                border: '1px solid var(--ink)',
                background: 'var(--paper)',
                fontFamily: 'var(--font-heading)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 600,
                textAlign: 'center'
              }}>
                {step}
              </div>
              {index < arr.length - 1 && (
                <div style={{ color: 'var(--editorial-red)', fontSize: '12px', fontWeight: 'bold' }}>➔</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Footer / Next Story Preview - Fully Clickable */}
      <div 
        className="flex-row pb-2" 
        style={{ 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          background: 'var(--paper-dark)', 
          padding: '14px 18px', 
          border: '1px solid var(--ink)',
          cursor: 'pointer'
        }}
        onClick={() => onNavigate(2)}
      >
        <div className="flex-col">
          <strong className="headline-small" style={{ fontSize: '14px', textTransform: 'uppercase', color: 'var(--editorial-red)', marginBottom: '2px' }}>NEXT FEATURE STORY</strong>
          <strong className="headline-article" style={{ fontSize: '18px', textTransform: 'uppercase' }}>DESHKAROJGAR</strong>
          <span className="body-text" style={{ fontStyle: 'italic', fontSize: '13px' }}>Connecting Local Talent With Local Opportunities</span>
        </div>
        {/* Empty right side */}
      </div>

      {/* Page Number */}
      <div className="flex-row mt-3" style={{ justifyContent: 'space-between' }}>
        <div className="byline" style={{ fontSize: '10px' }}>THE ADITYA TIMES</div>
        <div className="byline" style={{ fontSize: '10px' }}>PAGE 2 OF 7</div>
      </div>

    </PageShell>
  );
}
