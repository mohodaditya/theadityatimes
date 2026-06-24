import { PageShell } from '../components/PageShell';
import { SectionLabel } from '../components/SectionLabel';
import { Divider } from '../components/Divider';

export function DeshKaRojgarPage({ currentPage, onNavigate }) {
  return (
    <PageShell currentPage={currentPage} onNavigate={onNavigate} compact={false}>
      
      {/* Header */}
      <div className="text-center mb-6 mt-4">
        <SectionLabel text="OPPORTUNITY & EMPLOYMENT DESK" className="mb-4" />
        <h2 className="headline-main mb-2" style={{ fontSize: '46px', textTransform: 'uppercase' }}>
          DESHKAROJGAR
        </h2>
        <div className="subtitle mb-2" style={{ fontSize: '20px' }}>
          Connecting Local Talent With Local Opportunities
        </div>
        <div className="byline mt-4" style={{ textTransform: 'none', fontSize: '14px', fontStyle: 'italic', letterSpacing: 'normal' }}>
          A Digital Platform Designed To Simplify Job Discovery And Local Service Hiring Across India
        </div>
      </div>

      <Divider className="mb-6" />

      {/* Scrollable container for tall content */}
      <div className="flex-col flex-1" style={{ overflowY: 'auto', paddingRight: '10px' }}>
        
        {/* Project Overview */}
        <div className="flex-col mb-6">
          <h3 className="headline-section mb-3 text-center">PROJECT OVERVIEW</h3>
          <div className="text-2col body-text">
            <p>DeshKaRojgar is a community-focused platform that helps local businesses, recruiters, workers, and service providers connect easily.</p>
            <p className="mt-2">The platform is designed specifically for common Indian users by keeping the experience simple, accessible, and mobile-friendly.</p>
            <p className="mt-2">Users can discover local jobs, find service providers, and connect directly through phone calls or WhatsApp without complicated application processes.</p>
          </div>
        </div>

        <Divider className="mb-6" />

        {/* Live Preview */}
        <div className="flex-col mb-6">
          <h3 className="headline-section mb-3 text-center">LIVE PLATFORM PREVIEW</h3>
          <div className="img-placeholder mb-4" style={{ height: '300px', backgroundColor: '#e0dcd7' }}>
            <span className="caption">[ LARGE PROJECT SCREENSHOT ]</span>
          </div>
          <div className="flex-row gap-8 justify-center body-text--small">
            <button className="editorial-link">▶ Live Demo</button>
            <button className="editorial-link">💻 GitHub Repository</button>
            <button className="editorial-link">📄 Case Study</button>
            <button className="editorial-link">🎨 Design Process</button>
          </div>
        </div>

        <Divider className="mb-6" />

        {/* 3 Columns Grid */}
        <div className="grid-3col mb-6">
          {/* Left Column */}
          <div className="flex-col gap-6">
            <div className="flex-col">
              <h4 className="headline-small mb-2">The Problem</h4>
              <div className="body-text--small flex-col gap-2">
                <p>Many local jobs and services are never listed on large job portals.</p>
                <p>Small businesses struggle to find workers.</p>
                <p>Workers struggle to discover nearby opportunities.</p>
                <p>Many users are not comfortable with complex recruitment platforms.</p>
              </div>
            </div>
            
            <Divider />
            
            <div className="flex-col">
              <h4 className="headline-small mb-2">The Goal</h4>
              <p className="body-text--small mb-2">Create a simple platform where:</p>
              <ul className="body-text--small flex-col gap-2" style={{ listStyleType: 'none' }}>
                <li>✓ Recruiters can post jobs quickly</li>
                <li>✓ Workers can discover opportunities easily</li>
                <li>✓ Local service providers can showcase their services</li>
                <li>✓ Communication happens directly</li>
              </ul>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex-col gap-6">
            <div className="flex-col">
              <h4 className="headline-small mb-3 text-center">Core Features</h4>
              <ul className="body-text--small flex-col gap-2 mx-auto" style={{ listStyleType: 'none' }}>
                <li>✓ Local Job Listings</li>
                <li>✓ Service Marketplace</li>
                <li>✓ Mobile Friendly Experience</li>
                <li>✓ Direct Call Option</li>
                <li>✓ WhatsApp Integration</li>
                <li>✓ Recruiter Dashboard</li>
                <li>✓ Employee Discovery</li>
                <li>✓ Category-Based Search</li>
                <li>✓ Hindi & English Support Ready</li>
              </ul>
            </div>
            
            <Divider />
            
            <div className="flex-col">
              <h4 className="headline-small mb-3 text-center">Technologies Used</h4>
              <div className="flex-row justify-center" style={{ flexWrap: 'wrap', gap: '8px' }}>
                <span className="badge">React</span>
                <span className="badge">Vite</span>
                <span className="badge">Tailwind CSS</span>
                <span className="badge">Material UI</span>
                <span className="badge">Node.js</span>
                <span className="badge">Express.js</span>
                <span className="badge">MongoDB / MySQL</span>
                <span className="badge">REST APIs</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-col gap-6">
            <div className="flex-col">
              <h4 className="headline-small mb-3 text-center">Target Users</h4>
              <ul className="body-text--small flex-col gap-2 text-center" style={{ listStyleType: 'none' }}>
                <li>Local Businesses</li>
                <li>Shop Owners</li>
                <li>Contractors</li>
                <li>Workers</li>
                <li>Students</li>
                <li>Freelancers</li>
                <li>Service Providers</li>
              </ul>
            </div>
            
            <Divider />
            
            <div className="flex-col text-center">
              <h4 className="headline-small mb-3">Platform Vision</h4>
              <p className="body-text--small mb-3">Create India's simplest local employment and service discovery platform.</p>
              <p className="body-text--small mb-2 text-muted">Focused on:</p>
              <ul className="body-text--small flex-col gap-1 mx-auto text-center" style={{ listStyleType: 'none', color: 'var(--editorial-red)' }}>
                <li>Accessibility</li>
                <li>Trust</li>
                <li>Speed</li>
                <li>Simplicity</li>
                <li>Local Communities</li>
              </ul>
            </div>
          </div>
        </div>

        <Divider className="mb-6" />

        {/* Product Highlights */}
        <div className="flex-col mb-6">
          <h3 className="headline-section mb-4 text-center">PRODUCT HIGHLIGHTS</h3>
          <div className="grid-3col body-text--small text-center gap-4">
            <div className="flex-col">
              <span className="form-label mb-1">Platform Type</span>
              <strong>Employment & Services Marketplace</strong>
            </div>
            <div className="flex-col">
              <span className="form-label mb-1">Target Region</span>
              <strong>India</strong>
            </div>
            <div className="flex-col">
              <span className="form-label mb-1">Primary Devices</span>
              <strong>Mobile First</strong>
            </div>
            <div className="flex-col">
              <span className="form-label mb-1">Status</span>
              <strong>In Development</strong>
            </div>
            <div className="flex-col" style={{ gridColumn: 'span 2' }}>
              <span className="form-label mb-1">Category</span>
              <strong>Social Impact Technology</strong>
            </div>
          </div>
        </div>

        <Divider className="mb-6" />

        {/* Grid 2 Column for Bottom Section */}
        <div className="grid-2col mb-6">
          <div className="flex-col">
            <h3 className="headline-section mb-3">DESIGN DECISIONS</h3>
            <p className="body-text mb-3">
              Instead of building a complex messaging system, the platform allows direct communication through:
            </p>
            <div className="body-text--small flex-col gap-2 mb-4" style={{ paddingLeft: '10px', color: 'var(--editorial-red)' }}>
              <div>📞 Phone Calls</div>
              <div>📱 WhatsApp</div>
            </div>
            <p className="body-text mb-3">
              This keeps the user experience familiar and easy for non-technical users.
            </p>
            <p className="body-text">
              The platform prioritizes simplicity over unnecessary complexity.
            </p>
          </div>
          
          <div className="flex-col">
            <h3 className="headline-section mb-3">FUTURE ROADMAP</h3>
            <div className="body-text--small flex-col gap-3">
              <div className="flex-row" style={{ gap: '10px' }}>
                <span className="form-label" style={{ width: '60px' }}>Phase 1</span>
                <span>Local Job Discovery</span>
              </div>
              <Divider />
              <div className="flex-row" style={{ gap: '10px' }}>
                <span className="form-label" style={{ width: '60px' }}>Phase 2</span>
                <span>Service Marketplace</span>
              </div>
              <Divider />
              <div className="flex-row" style={{ gap: '10px' }}>
                <span className="form-label" style={{ width: '60px' }}>Phase 3</span>
                <span>Regional Language Support</span>
              </div>
              <Divider />
              <div className="flex-row" style={{ gap: '10px' }}>
                <span className="form-label" style={{ width: '60px' }}>Phase 4</span>
                <span>Business Verification System</span>
              </div>
              <Divider />
              <div className="flex-row" style={{ gap: '10px' }}>
                <span className="form-label" style={{ width: '60px' }}>Phase 5</span>
                <span>Pan-India Expansion</span>
              </div>
            </div>
          </div>
        </div>

        <Divider className="mb-6" />

        <div className="flex-col mb-6">
          <h3 className="headline-section mb-3 text-center">WHY THIS PROJECT MATTERS</h3>
          <div className="text-center body-text mx-auto" style={{ maxWidth: '80%', lineHeight: '1.8' }}>
            <p className="mb-4">DeshKaRojgar is not just a technical project.</p>
            <p className="mb-4">It is an attempt to solve a real-world problem by helping local businesses and workers connect more efficiently through technology.</p>
            <p>The platform focuses on accessibility, simplicity, and practical value for everyday users.</p>
          </div>
        </div>

      </div>
    </PageShell>
  );
}
