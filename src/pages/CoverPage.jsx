import { PageShell } from '../components/PageShell';
import { SectionLabel } from '../components/SectionLabel';
import { ArticleCard } from '../components/ArticleCard';
import { Divider } from '../components/Divider';
import { Helmet } from 'react-helmet-async';

export function CoverPage({ currentPage, onNavigate }) {
  return (
    <PageShell 
      currentPage={currentPage} 
      onNavigate={onNavigate} 
      compact={false}
      edition="SPECIAL TECHNOLOGY EDITION"
      location="PUNE, MAHARASHTRA, INDIA"
    >
      <Helmet>
        <title>THE ADITYA TIMES | Aditya Mohod – MERN Stack Developer</title>
        <meta name="description" content="Explore THE ADITYA TIMES, an interactive newspaper-style portfolio by Aditya Mohod showcasing MERN Stack projects, software engineering work, technical notebook entries and product thinking." />
        <link rel="canonical" href="https://theadityatimes.site/" />
        <meta name="keywords" content="Aditya Mohod, MERN Stack Developer, Software Engineer, React Developer, Node.js Developer, Full Stack Developer, Portfolio, Pune, India, Web Developer" />
        
        {/* Open Graph */}
        <meta property="og:title" content="THE ADITYA TIMES | Aditya Mohod – MERN Stack Developer" />
        <meta property="og:description" content="Explore THE ADITYA TIMES, an interactive newspaper-style portfolio by Aditya Mohod showcasing MERN Stack projects, software engineering work, technical notebook entries and product thinking." />
        <meta property="og:url" content="https://theadityatimes.site/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="THE ADITYA TIMES" />
        <meta property="og:image" content="https://theadityatimes.site/social-share.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="THE ADITYA TIMES | Aditya Mohod – MERN Stack Developer" />
        <meta name="twitter:description" content="Explore THE ADITYA TIMES, an interactive newspaper-style portfolio by Aditya Mohod showcasing MERN Stack projects, software engineering work, technical notebook entries and product thinking." />
        <meta name="twitter:image" content="https://theadityatimes.site/social-share.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>
      
      {/* Front Page Feature Header */}
      <div className="text-center mb-6 mt-4">
        <h2 className="headline-main mb-2" style={{ fontSize: '54px', textTransform: 'uppercase', lineHeight: '1.1' }}>
          ADITYA MOHOD
        </h2>
        <div className="headline-section mb-2" style={{ fontSize: '24px', letterSpacing: '0.05em' }}>
          MERN STACK DEVELOPER
        </div>
        <div className="subtitle mb-2" style={{ fontSize: '16px' }}>
          Building Modern Digital Products Through Clean Code & Creative Solutions
        </div>
      </div>
      
      <Divider className="mb-6" />

      <div className="grid-3col flex-1">
        {/* Left Column */}
        <div className="flex-col gap-6">
          
          {/* Professional Summary */}
          <div className="flex-col">
            <h3 className="headline-small mb-3 text-center">PROFESSIONAL SUMMARY</h3>
            <div className="body-text drop-cap">
              Computer Science Engineering Graduate passionate about building scalable web applications and meaningful digital experiences. Specialized in MERN stack development with strong frontend engineering skills. Open to opportunities where I can contribute, learn, and grow.
            </div>
          </div>
          
          <Divider />
          
          {/* Quick Profile */}
          <div className="flex-col">
            <h3 className="headline-small mb-3 text-center">QUICK PROFILE</h3>
            <div className="body-text--small flex-col gap-4">
              <div>📍 Pune, Maharashtra</div>
              <div>🎓 B.Tech Computer Science Engineering Graduate</div>
              <div>💼 MERN Stack Developer</div>
              <div>🚀 Open To Full-Time Roles</div>
              <div>🚀 Open To Internships</div>
              <div>🚀 Open To Freelance Projects</div>
            </div>
          </div>

          <Divider />
          
          {/* Core Technologies */}
          <div className="flex-col">
            <h3 className="headline-small mb-3 text-center">CORE TECHNOLOGIES</h3>
            <div className="body-text--small grid-2col gap-4">
              <div>• React.js</div>
              <div>• Node.js</div>
              <div>• Express.js</div>
              <div>• MongoDB</div>
              <div>• JavaScript</div>
              <div>• Tailwind CSS</div>
              <div>• Material UI</div>
              <div>• Git & GitHub</div>
            </div>
          </div>
        </div>

        {/* Center Column (Main Story) */}
        <div className="flex-col">
          <img 
            src={`${import.meta.env.BASE_URL}profile.png`} 
            alt="Aditya Mohod Professional Portrait" 
            className="mb-2"
            style={{ 
              width: '100%', 
              height: '420px', 
              objectFit: 'cover', 
              border: '1px solid var(--card-border)',
              filter: 'grayscale(100%) contrast(1.1) brightness(0.95)' 
            }} 
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="img-placeholder mb-2" style={{ height: '420px', display: 'none' }}>
            <span className="caption">(Please add profile.png to your public folder)</span>
          </div>
          <div className="caption text-center mb-4">
            Aditya Mohod — MERN Stack Developer
          </div>
          
          <div className="flex-1 flex-col" style={{ justifyContent: 'center', alignItems: 'center' }}>
             <div className="pull-quote-text text-center px-2" style={{ fontSize: '20px' }}>
              "I enjoy turning ideas into practical products that solve real-world problems and create meaningful experiences for users."
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-col gap-6">
          <div className="flex-col gap-4">
            <div className="text-center">
              <SectionLabel text="FEATURED PROJECTS" className="mb-4" />
            </div>
            
            <ArticleCard className="text-center">
              <h4 className="headline-article mb-1">DESHKAROJGAR</h4>
              <div className="body-text--small text-muted mb-3">Connecting Local Talent With Local Opportunities</div>
              <button className="editorial-link" onClick={() => onNavigate(2)}>Read More → Page 3</button>
            </ArticleCard>
            
            <ArticleCard className="text-center mt-2">
              <h4 className="headline-article mb-1">TECH ARENA</h4>
              <div className="body-text--small text-muted mb-3">Interactive Technical Learning Platform</div>
              <button className="editorial-link" onClick={() => onNavigate(3)}>Read More → Page 4</button>
            </ArticleCard>
            
            <ArticleCard className="text-center mt-2">
              <h4 className="headline-article mb-1">EDITOR'S DESK</h4>
              <div className="body-text--small text-muted mb-3">Thoughts, Lessons & Experiences</div>
              <button className="editorial-link" onClick={() => onNavigate(4)}>Read More → Page 5</button>
            </ArticleCard>
          </div>
          
          <Divider />

          {/* Quick Access */}
          <div className="flex-col mt-auto classified-box" style={{ padding: '16px' }}>
            <h3 className="headline-small mb-4 text-center">QUICK ACCESS</h3>
            <div className="body-text flex-col gap-4">
              <div className="flex-col gap-1" style={{ borderBottom: '1px solid var(--divider)', paddingBottom: '8px', overflow: 'hidden' }}>
                <strong style={{ fontSize: '12px', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>GitHub</strong>
                <a href="https://github.com/mohodaditya" target="_blank" rel="noreferrer" className="editorial-link" style={{ fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>github.com/mohodaditya</a>
              </div>
              <div className="flex-col gap-1" style={{ borderBottom: '1px solid var(--divider)', paddingBottom: '8px', overflow: 'hidden' }}>
                <strong style={{ fontSize: '12px', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>LinkedIn</strong>
                <a href="https://www.linkedin.com/in/aditya-mohod/" target="_blank" rel="noreferrer" className="editorial-link" style={{ fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>/in/aditya-mohod</a>
              </div>
              <div className="flex-col gap-1" style={{ borderBottom: '1px solid var(--divider)', paddingBottom: '8px', overflow: 'hidden' }}>
                <strong style={{ fontSize: '12px', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Email Address</strong>
                <a href="mailto:adityamohod754@gmail.com" className="editorial-link" style={{ fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>adityamohod754@gmail.com</a>
              </div>
              <div className="flex-col gap-1" style={{ paddingBottom: '2px', overflow: 'hidden' }}>
                <strong style={{ fontSize: '12px', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Phone No.</strong>
                <a 
                  href="tel:+919112607956" 
                  className="editorial-link" 
                  style={{ fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  onClick={() => navigator.clipboard.writeText('+919112607956')}
                  title="Click to copy & call"
                >
                  +91 9112607956
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar & Social Directory */}
      <Divider className="mt-6 mb-4" />
      <div className="flex-row pb-2" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="flex-row gap-6">
          <a href={`${import.meta.env.BASE_URL}Aditya_Mohod_Resume.pdf`} download="Aditya_Mohod_Resume.pdf" className="form-submit" style={{ textDecoration: 'none', textAlign: 'center' }}>DOWNLOAD RESUME</a>
          <a href="https://github.com/mohodaditya" target="_blank" rel="noreferrer" className="form-submit" style={{ textDecoration: 'none', textAlign: 'center' }}>VIEW GITHUB</a>
          <a href="https://www.linkedin.com/in/aditya-mohod/" target="_blank" rel="noreferrer" className="form-submit" style={{ textDecoration: 'none', textAlign: 'center' }}>LINKEDIN PROFILE</a>
          <button className="form-submit" onClick={() => onNavigate(5)}>GET IN TOUCH</button>
        </div>
        <div className="byline" style={{ fontSize: '10px' }}>
          PAGE 1 OF 6
        </div>
      </div>
      
    </PageShell>
  );
}
