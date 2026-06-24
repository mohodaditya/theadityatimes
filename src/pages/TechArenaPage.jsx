import { PageShell } from '../components/PageShell';
import { SectionLabel } from '../components/SectionLabel';
import { Divider } from '../components/Divider';

export function TechArenaPage({ currentPage, onNavigate }) {
  return (
    <PageShell currentPage={currentPage} onNavigate={onNavigate} compact={false}>
      
      {/* Header */}
      <div className="text-center mb-6 mt-4">
        <SectionLabel text="FEATURED PROJECT" className="mb-4" />
        <h2 className="headline-main mb-2" style={{ fontSize: '46px', textTransform: 'uppercase' }}>
          TECH ARENA
        </h2>
        <div className="subtitle mb-2" style={{ fontSize: '20px' }}>
          Interactive Learning Platform For Technical Education
        </div>
      </div>

      <Divider className="mb-6" />

      {/* Scrollable inner container since this page is very tall */}
      <div className="flex-col flex-1" style={{ overflowY: 'auto', paddingRight: '10px' }}>
        
        {/* Project Overview */}
        <div className="flex-col mb-6">
          <h3 className="headline-section mb-3 text-center">Project Overview</h3>
          <div className="text-2col body-text">
            <p>Tech Arena is a web-based learning platform designed to help students improve their technical knowledge through interactive quizzes and challenges.</p>
            <p className="mt-2">The platform covers topics such as DSA, DBMS, Operating Systems, OOP, Aptitude, AI, Machine Learning, and Web Development.</p>
            <p className="mt-2">Built to make technical learning more engaging and accessible.</p>
          </div>
        </div>

        <Divider className="mb-6" />

        {/* Live Preview */}
        <div className="flex-col mb-6">
          <h3 className="headline-section mb-3 text-center">LIVE PREVIEW</h3>
          <div className="img-placeholder mb-4" style={{ height: '300px', backgroundColor: '#e0dcd7' }}>
            <span className="caption">[ Large Project Screenshot ]</span>
          </div>
          <div className="flex-row gap-8 justify-center body-text--small">
            <button className="editorial-link">▶ Live Demo</button>
            <button className="editorial-link">💻 GitHub Repository</button>
            <button className="editorial-link">📄 Project Documentation</button>
          </div>
        </div>

        <Divider className="mb-6" />

        {/* 3 Columns Grid */}
        <div className="grid-3col mb-6">
          {/* Left Column */}
          <div className="flex-col gap-6">
            <div className="flex-col">
              <h4 className="headline-small mb-2">Problem</h4>
              <p className="body-text--small">Students often struggle to find a single platform for practicing multiple technical subjects in an interactive manner.</p>
            </div>
            
            <Divider />
            
            <div className="flex-col">
              <h4 className="headline-small mb-2">Solution</h4>
              <p className="body-text--small">Tech Arena provides categorized quizzes and learning experiences that help students practice technical concepts effectively.</p>
            </div>
            
            <Divider />
            
            <div className="flex-col">
              <h4 className="headline-small mb-2">My Role</h4>
              <ul className="body-text--small flex-col gap-2" style={{ listStyleType: 'none' }}>
                <li>Full Stack Developer</li>
                <li>UI Design</li>
                <li>Frontend Development</li>
                <li>Project Architecture</li>
                <li>Deployment</li>
              </ul>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex-col gap-6">
            <div className="flex-col">
              <h4 className="headline-small mb-3 text-center">Key Features</h4>
              <ul className="body-text--small flex-col gap-3 mx-auto" style={{ listStyleType: 'none' }}>
                <li>✓ Multiple Technical Categories</li>
                <li>✓ Interactive Quiz System</li>
                <li>✓ Modern Responsive Interface</li>
                <li>✓ Mobile Friendly Design</li>
                <li>✓ Smooth User Experience</li>
                <li>✓ Scalable Architecture</li>
                <li>✓ Fast Performance</li>
              </ul>
            </div>
            
            <Divider />
            
            <div className="flex-col">
              <h4 className="headline-small mb-3 text-center">Technologies Used</h4>
              <div className="flex-row justify-center" style={{ flexWrap: 'wrap', gap: '8px' }}>
                <span className="badge">React</span>
                <span className="badge">Vite</span>
                <span className="badge">JavaScript</span>
                <span className="badge">Tailwind CSS</span>
                <span className="badge">Framer Motion</span>
                <span className="badge">GitHub Pages</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-col gap-6">
            <div className="flex-col">
              <h4 className="headline-small mb-3 text-center">Project Highlights</h4>
              <ul className="body-text--small flex-col gap-3 text-center" style={{ listStyleType: 'none' }}>
                <li>Hackathon Project</li>
                <li>Second Prize Winner</li>
                <li>Responsive Design</li>
                <li>Performance Optimized</li>
              </ul>
            </div>
            
            <Divider />
            
            <div className="flex-col text-center">
              <h4 className="headline-small mb-3">Development Process</h4>
              <div className="body-text--small flex-col gap-2">
                <div>Research</div>
                <div style={{ color: 'var(--editorial-red)' }}>↓</div>
                <div>Design</div>
                <div style={{ color: 'var(--editorial-red)' }}>↓</div>
                <div>Development</div>
                <div style={{ color: 'var(--editorial-red)' }}>↓</div>
                <div>Testing</div>
                <div style={{ color: 'var(--editorial-red)' }}>↓</div>
                <div>Deployment</div>
              </div>
            </div>
          </div>
        </div>

        <Divider className="mb-6" />

        {/* Project Metrics & Lessons Learned */}
        <div className="grid-2col mb-6">
          <div className="flex-col">
            <h3 className="headline-section mb-3">PROJECT METRICS</h3>
            <table className="stats-table">
              <tbody>
                <tr>
                  <td className="table-header">Category:</td>
                  <td className="table-cell table-cell--bold">Educational Technology</td>
                </tr>
                <tr>
                  <td className="table-header">Platform:</td>
                  <td className="table-cell table-cell--bold">Web Application</td>
                </tr>
                <tr>
                  <td className="table-header">Status:</td>
                  <td className="table-cell table-cell--bold">Live</td>
                </tr>
                <tr>
                  <td className="table-header">Year:</td>
                  <td className="table-cell table-cell--bold">2025</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex-col">
            <h3 className="headline-section mb-3">LESSONS LEARNED</h3>
            <p className="body-text" style={{ lineHeight: '1.8' }}>
              This project strengthened my skills in React development, responsive design, project structuring, deployment workflows, and creating engaging user experiences.
            </p>
          </div>
        </div>

      </div>
    </PageShell>
  );
}
