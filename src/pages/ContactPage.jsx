import React, { useState } from 'react';
import { PageShell } from '../components/PageShell';
import { PERSONAL } from '../data/content';
import { Helmet } from 'react-helmet-async';

export function ContactPage({ currentPage, onNavigate }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:${PERSONAL.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    e.target.reset();
  };

  return (
    <PageShell 
      currentPage={currentPage} 
      onNavigate={onNavigate} 
      compact={false} 
      edition="FINAL EDITION" 
      location="PUNE, MAHARASHTRA, INDIA"
    >
      <Helmet>
        <title>Contact | Aditya Mohod | THE ADITYA TIMES</title>
        <meta name="description" content="Get in touch with Aditya Mohod for MERN Stack developer roles, internships, freelance opportunities, or technical collaborations." />
        <link rel="canonical" href="https://theadityatimes.site/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "https://theadityatimes.site/contact",
            "name": "Contact Aditya Mohod",
            "description": "Contact form and professional directory details for Aditya Mohod, MERN Stack Developer."
          })}
        </script>
      </Helmet>

      <div className="flex-col flex-1 justify-between" style={{ height: '100%', minHeight: 0, overflow: 'hidden', padding: '4px 0', background: '#F8F5EF' }}>
        
        {/* ══ HERO HEADER SECTION ══ */}
        <div className="text-center" style={{ marginBottom: '8px' }}>
          {/* Solid Red Badge */}
          <div style={{ display: 'inline-block', background: '#C62828', color: '#FFFFFF', padding: '4px 18px', fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
            FINAL EDITION // PUNE, MAHARASHTRA
          </div>
          
          {/* Main Title (Stacked 2 Lines) */}
          <h2 className="headline-main" style={{ fontSize: '46px', textTransform: 'uppercase', lineHeight: '1.02', letterSpacing: '0.01em', margin: '0 0 4px 0', fontFamily: 'var(--font-display)', fontWeight: 900, color: '#111111' }}>
            LET'S BUILD SOMETHING<br />TOGETHER
          </h2>

          {/* Diamond Accent Line */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', maxWidth: '280px', margin: '4px auto' }}>
            <div style={{ flex: 1, height: '1px', background: '#C62828' }} />
            <span style={{ color: '#C62828', fontSize: '9px', lineHeight: 1 }}>◆</span>
            <div style={{ flex: 1, height: '1px', background: '#C62828' }} />
          </div>

          {/* Italic Subtitle */}
          <div style={{ fontSize: '16px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: '#666666', marginBottom: '4px' }}>
            Open to Full-Time Opportunities, Freelance Projects & Meaningful Collaborations
          </div>

          <div style={{ height: '1px', background: '#D8D2CA', margin: '6px 0' }} />

          {/* Intro Paragraph (Enlarged) */}
          <p className="body-text text-center mx-auto" style={{ fontSize: '14px', color: '#111111', maxWidth: '680px', lineHeight: '1.5', margin: '0 auto', fontFamily: 'var(--font-serif)' }}>
            Thank you for reading The Aditya Times.<br />
            If my work, ideas or projects resonate with you,<br />
            I'd love to connect and build something impactful together.
          </p>
        </div>

        {/* ══ THREE-COLUMN EDITORIAL GRID (ENLARGED TO FILL SPACE) ══ */}
        <div style={{ border: '1px solid #D8D2CA', background: '#F8F5EF', display: 'grid', gridTemplateColumns: '1.15fr 1.35fr 1.15fr', flex: 1, minHeight: 0, alignItems: 'stretch', margin: '6px 0' }}>
          
          {/* --- LEFT COLUMN: CONTACT DIRECTORY --- */}
          <div className="flex-col justify-between" style={{ padding: '14px 18px', borderRight: '1px solid #D8D2CA' }}>
            <div>
              <div style={{ textAlign: 'center', borderTop: '1px solid #D8D2CA', borderBottom: '1px solid #D8D2CA', padding: '6px 0', marginBottom: '14px' }}>
                <h3 className="headline-article" style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0, fontWeight: 700, color: '#111111' }}>
                  CONTACT DIRECTORY
                </h3>
              </div>

              <div className="flex-col gap-3.5" style={{ fontSize: '13.5px' }}>
                {/* Email */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px' }}>📧</span>
                  <div className="flex-col">
                    <span className="byline" style={{ fontSize: '10.5px', fontWeight: 700, color: '#666666', letterSpacing: '0.05em' }}>EMAIL</span>
                    <a href={`mailto:${PERSONAL.email}`} className="editorial-link" style={{ fontSize: '13px', color: '#111111', wordBreak: 'break-all', textDecoration: 'none', fontWeight: 600 }}>
                      adityamohod754@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px' }}>📱</span>
                  <div className="flex-col">
                    <span className="byline" style={{ fontSize: '10.5px', fontWeight: 700, color: '#666666', letterSpacing: '0.05em' }}>PHONE</span>
                    <a href="tel:+919112607956" className="editorial-link" style={{ fontSize: '13px', color: '#111111', textDecoration: 'none', fontWeight: 600 }}>
                      +91 9112607956
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px' }}>📍</span>
                  <div className="flex-col">
                    <span className="byline" style={{ fontSize: '10.5px', fontWeight: 700, color: '#666666', letterSpacing: '0.05em' }}>LOCATION</span>
                    <span style={{ fontSize: '13px', color: '#111111', fontWeight: 600 }}>Pune, Maharashtra, India</span>
                  </div>
                </div>

                {/* Role */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px' }}>💼</span>
                  <div className="flex-col">
                    <span className="byline" style={{ fontSize: '10.5px', fontWeight: 700, color: '#666666', letterSpacing: '0.05em' }}>ROLE</span>
                    <span style={{ fontSize: '13px', color: '#111111', fontWeight: 600 }}>MERN Stack Developer</span>
                  </div>
                </div>

                {/* Status */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ height: '12px', width: '12px', backgroundColor: '#10b981', borderRadius: '50%', display: 'inline-block', margin: '0 2px' }}></span>
                  <div className="flex-col">
                    <span className="byline" style={{ fontSize: '10.5px', fontWeight: 700, color: '#666666', letterSpacing: '0.05em' }}>STATUS</span>
                    <span style={{ fontSize: '13px', color: '#111111', fontWeight: 700 }}>Open To Work</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ height: '1px', background: '#D8D2CA', margin: '12px 0' }} />
              <div style={{ textAlign: 'center', borderTop: '1px solid #D8D2CA', borderBottom: '1px solid #D8D2CA', padding: '5px 0', marginBottom: '12px' }}>
                <h4 className="headline-article" style={{ fontSize: '13.5px', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0, fontWeight: 700, color: '#111111' }}>
                  CURRENTLY AVAILABLE
                </h4>
              </div>
              <ul className="body-text flex-col gap-2" style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '12.5px' }}>
                {['Full-Time Roles', 'Freelance Projects', 'Startup Collaborations', 'Technical Consulting', 'Open Source Contributions'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ color: '#C62828', fontWeight: 'bold', fontSize: '15px' }}>✓</span>
                    <span style={{ fontWeight: 600, color: '#111111' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- CENTER COLUMN: LETTER TO THE EDITOR --- */}
          <div className="flex-col justify-between" style={{ padding: '14px 18px', borderRight: '1px solid #D8D2CA' }}>
            <div>
              <div style={{ textAlign: 'center', borderTop: '1px solid #D8D2CA', borderBottom: '1px solid #D8D2CA', padding: '6px 0', marginBottom: '14px' }}>
                <h3 className="headline-article" style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0, fontWeight: 700, color: '#111111' }}>
                  LETTER TO THE EDITOR
                </h3>
              </div>

              {submitted ? (
                <div style={{ padding: '32px 16px', border: '1px solid #D8D2CA', background: '#F8F5EF', textAlign: 'center', margin: '20px 0' }}>
                  <h4 className="headline-article mb-2" style={{ color: '#C62828', fontSize: '17px' }}>LETTER TRANSMITTED</h4>
                  <p className="body-text" style={{ fontSize: '13px', color: '#111111' }}>Thank you for reaching out! Your message has been sent directly to Aditya Mohod.</p>
                </div>
              ) : (
                <form className="flex-col gap-3.5" onSubmit={handleSubmit}>
                  <div className="flex-col">
                    <label htmlFor="name" className="byline" style={{ fontSize: '11px', fontWeight: 700, color: '#666666', marginBottom: '3px', letterSpacing: '0.05em' }}>NAME</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required 
                      style={{ width: '100%', padding: '9px 12px', background: '#F8F5EF', border: '1px solid #D8D2CA', fontFamily: 'var(--font-ui)', fontSize: '12.5px', color: '#111111', borderRadius: 0, outline: 'none' }} 
                    />
                  </div>

                  <div className="flex-col">
                    <label htmlFor="email" className="byline" style={{ fontSize: '11px', fontWeight: 700, color: '#666666', marginBottom: '3px', letterSpacing: '0.05em' }}>EMAIL</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required 
                      style={{ width: '100%', padding: '9px 12px', background: '#F8F5EF', border: '1px solid #D8D2CA', fontFamily: 'var(--font-ui)', fontSize: '12.5px', color: '#111111', borderRadius: 0, outline: 'none' }} 
                    />
                  </div>

                  <div className="flex-col">
                    <label htmlFor="subject" className="byline" style={{ fontSize: '11px', fontWeight: 700, color: '#666666', marginBottom: '3px', letterSpacing: '0.05em' }}>SUBJECT</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      required 
                      style={{ width: '100%', padding: '9px 12px', background: '#F8F5EF', border: '1px solid #D8D2CA', fontFamily: 'var(--font-ui)', fontSize: '12.5px', color: '#111111', borderRadius: 0, outline: 'none' }} 
                    />
                  </div>

                  <div className="flex-col">
                    <label htmlFor="message" className="byline" style={{ fontSize: '11px', fontWeight: 700, color: '#666666', marginBottom: '3px', letterSpacing: '0.05em' }}>MESSAGE</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows="4" 
                      required 
                      style={{ width: '100%', padding: '9px 12px', background: '#F8F5EF', border: '1px solid #D8D2CA', fontFamily: 'var(--font-ui)', fontSize: '12.5px', color: '#111111', resize: 'vertical', borderRadius: 0, outline: 'none' }}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    style={{ marginTop: '6px', padding: '12px 16px', background: '#111111', color: '#FFFFFF', border: 'none', fontFamily: 'var(--font-display)', fontSize: '13.5px', fontWeight: 700, letterSpacing: '0.12em', cursor: 'pointer', textTransform: 'uppercase', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                  >
                    SEND LETTER <span style={{ fontSize: '14px' }}>➔</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* --- RIGHT COLUMN: QUICK LINKS & SCAN TO READ --- */}
          <div className="flex-col justify-between" style={{ padding: '14px 18px' }}>
            <div>
              <div style={{ textAlign: 'center', borderTop: '1px solid #D8D2CA', borderBottom: '1px solid #D8D2CA', padding: '6px 0', marginBottom: '14px' }}>
                <h3 className="headline-article" style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0, fontWeight: 700, color: '#111111' }}>
                  QUICK LINKS
                </h3>
              </div>

              <div className="flex-col gap-3">
                {[
                  { 
                    label: 'GitHub', 
                    sublabel: 'View Repository', 
                    href: 'https://github.com/mohodaditya',
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#111111"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    )
                  },
                  { 
                    label: 'LinkedIn', 
                    sublabel: 'Connect', 
                    href: 'https://www.linkedin.com/in/aditya-mohod/',
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#0a66c2"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/></svg>
                    )
                  },
                  { 
                    label: 'Resume', 
                    sublabel: 'Download PDF', 
                    href: `${import.meta.env.BASE_URL}Aditya_Mohod_Resume.pdf`,
                    download: true,
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    )
                  },
                  { 
                    label: 'Portfolio Source', 
                    sublabel: 'View on GitHub', 
                    href: 'https://github.com/mohodaditya/theadityatimes',
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"/></svg>
                    )
                  },
                  { 
                    label: 'Email', 
                    sublabel: 'Send Mail', 
                    href: `mailto:${PERSONAL.email}`,
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    )
                  },
                ].map((item, i) => (
                  <a 
                    key={i} 
                    href={item.href} 
                    target={item.download ? '_self' : '_blank'} 
                    rel="noreferrer" 
                    download={item.download ? 'Aditya_Mohod_Resume.pdf' : undefined}
                    style={{ 
                      borderBottom: i < 4 ? '1px solid #D8D2CA' : 'none', 
                      paddingBottom: '8px', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      textDecoration: 'none',
                      color: 'inherit',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span>{item.icon}</span>
                      <div className="flex-col">
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#111111' }}>{item.label}</span>
                        <span style={{ fontSize: '10.5px', color: '#666666' }}>{item.sublabel}</span>
                      </div>
                    </div>
                    <span style={{ fontSize: '15px', color: '#111111', fontWeight: 'bold' }}>
                      ➔
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* SCAN TO READ SECTION */}
            <div style={{ borderTop: '1px dashed #D8D2CA', paddingTop: '12px', marginTop: '10px', textAlign: 'center' }}>
              <span className="byline" style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#111111' }}>
                SCAN TO READ
              </span>
              <span className="byline" style={{ display: 'block', fontSize: '10px', color: '#666666', marginBottom: '8px' }}>
                THE ADITYA TIMES
              </span>

              {/* QR Code in double border box */}
              <div style={{ display: 'inline-block', padding: '4px', border: '1px solid #111111', outline: '1px solid #111111', outlineOffset: '2px', background: '#FFFFFF' }}>
                <img 
                  src={`${import.meta.env.BASE_URL}theAdityaTimes.svg`} 
                  alt="QR Code" 
                  style={{ width: '78px', height: '78px', display: 'block' }} 
                />
              </div>
            </div>
          </div>

        </div>

        {/* Double Line Divider */}
        <div className="divider-double" style={{ margin: '6px 0' }} />

        {/* ══ BOTTOM EDITORIAL CLOSING SECTION (ENLARGED) ══ */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.6fr 1.3fr', gap: '18px', alignItems: 'center', padding: '6px 0' }}>
          
          {/* Left: Stacked Headline */}
          <div>
            <h3 className="headline-main" style={{ fontSize: '27px', textTransform: 'uppercase', lineHeight: '1.05', margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, color: '#111111' }}>
              THANK YOU<br />FOR READING
            </h3>
          </div>

          {/* Middle: Red Quote */}
          <div style={{ borderRight: '1px dotted #D8D2CA', paddingRight: '14px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            <span style={{ color: '#C62828', fontSize: '36px', lineHeight: 0.8, fontFamily: 'var(--font-serif)' }}>“</span>
            <div style={{ fontSize: '13.5px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: '#111111', lineHeight: '1.4' }}>
              Every great product starts<br />with a conversation.<br />
              Maybe the next story<br />will be ours.
            </div>
          </div>

          {/* Right: Stacked CTAs */}
          <div className="flex-col gap-2" style={{ width: '100%' }}>
            {/* Primary Solid Red CTA */}
            <a 
              href={`${import.meta.env.BASE_URL}Aditya_Mohod_Resume.pdf`} 
              download="Aditya_Mohod_Resume.pdf" 
              style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '11px 16px', 
                background: '#C62828', 
                color: '#FFFFFF', 
                border: 'none', 
                fontFamily: 'var(--font-display)', 
                fontSize: '12.5px', 
                fontWeight: 700, 
                letterSpacing: '0.08em', 
                textDecoration: 'none', 
                textTransform: 'uppercase',
                textAlign: 'center',
                borderRadius: '1px',
                width: '100%'
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
              DOWNLOAD RESUME
            </a>

            {/* Secondary White LinkedIn CTA */}
            <a 
              href="https://www.linkedin.com/in/aditya-mohod/" 
              target="_blank" 
              rel="noreferrer" 
              style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '10px 16px', 
                background: '#FFFFFF', 
                color: '#111111', 
                border: '1px solid #111111', 
                fontFamily: 'var(--font-display)', 
                fontSize: '12px', 
                fontWeight: 700, 
                letterSpacing: '0.08em', 
                textDecoration: 'none', 
                textTransform: 'uppercase',
                textAlign: 'center',
                borderRadius: '1px',
                width: '100%'
              }}
            >
              <span style={{ background: '#0a66c2', color: '#FFFFFF', fontSize: '10px', padding: '2px 4px', borderRadius: '1px', fontWeight: 'bold' }}>in</span>
              CONNECT ON LINKEDIN
            </a>
          </div>

        </div>

      </div>
    </PageShell>
  );
}
