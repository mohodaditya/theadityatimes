import { PageShell } from '../components/PageShell';
import { SectionLabel } from '../components/SectionLabel';
import { Divider } from '../components/Divider';
import { ArticleCard } from '../components/ArticleCard';
import { PERSONAL } from '../data/content';

export function BackCoverPage({ currentPage, onNavigate }) {
  return (
    <PageShell currentPage={currentPage} onNavigate={onNavigate} compact={false}>
      
      {/* Header */}
      <div className="text-center mb-6 mt-4">
        <SectionLabel text="Special Technology Edition // 2026" className="mb-4" />
        <h2 className="headline-main mb-2" style={{ fontSize: '46px', textTransform: 'uppercase' }}>
          THANK YOU FOR READING
        </h2>
      </div>

      <Divider className="mb-6" />

      {/* Main Container */}
      <div className="flex-col flex-1" style={{ overflowY: 'auto', paddingRight: '10px' }}>
        
        {/* Intro */}
        <div className="flex-col mb-8 text-center mx-auto" style={{ maxWidth: '85%', lineHeight: '1.8' }}>
          <p className="body-text mb-4">
            Over the past few pages, you've explored my journey as a developer, my education, skills, projects, experiences, and ideas.
          </p>
          <p className="body-text mb-4">
            Every project featured in this edition represents a challenge, a lesson, and a step forward in my growth as a software engineer.
          </p>
          <p className="body-text drop-cap" style={{ fontSize: '20px', fontWeight: 'bold', fontStyle: 'italic' }}>
            This newspaper may be reaching its final page, but my journey is only beginning.
          </p>
        </div>

        <Divider className="mb-8" />

        <div className="grid-2col mb-8 gap-8">
          {/* Left Column: Next Chapter */}
          <div className="flex-col">
            <h3 className="headline-section mb-4 text-center">NEXT CHAPTER BEGINS HERE</h3>
            <p className="body-text mb-4 text-center">I am actively seeking opportunities to:</p>
            <ul className="body-text flex-col gap-3 mx-auto" style={{ listStyleType: 'none' }}>
              <li>✓ Build impactful products</li>
              <li>✓ Solve meaningful problems</li>
              <li>✓ Collaborate with talented teams</li>
              <li>✓ Learn from experienced engineers</li>
              <li>✓ Grow as a software developer</li>
            </ul>
            
            <ArticleCard className="mt-8 text-center">
              <h4 className="headline-small mb-4">CURRENTLY OPEN TO</h4>
              <ul className="body-text--small flex-col gap-2" style={{ listStyleType: 'none', color: 'var(--editorial-red)', fontWeight: 'bold' }}>
                <li>Software Engineering Roles</li>
                <li>Frontend Development Positions</li>
                <li>Full Stack Opportunities</li>
                <li>Freelance Projects</li>
                <li>Technical Collaborations</li>
              </ul>
            </ArticleCard>
          </div>

          {/* Right Column: Personal Note & Quick Access */}
          <div className="flex-col gap-6">
            <div className="flex-col">
              <h3 className="headline-section mb-3">A PERSONAL NOTE</h3>
              <div className="body-text" style={{ lineHeight: '1.6' }}>
                <p className="mb-3">Thank you for taking the time to read through my work.</p>
                <p className="mb-3">Whether you're a recruiter, developer, founder, or fellow learner, I truly appreciate your time and attention.</p>
                <p className="mb-3">I believe technology has the power to create meaningful change when used to solve real problems for real people.</p>
                <p>I look forward to contributing, learning, and building the future—one project at a time.</p>
              </div>
            </div>

            <Divider />

            <div className="flex-col">
              <h3 className="headline-section mb-4 text-center">QUICK ACCESS</h3>
              <div className="grid-2col gap-6 text-center">
                <a href={PERSONAL.resume} download="Aditya_Mohod_Resume.pdf" target="_blank" rel="noopener noreferrer" className="editorial-link" style={{ fontWeight: 'bold', display: 'block' }}>📄 Download Resume</a>
                <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="editorial-link" style={{ fontWeight: 'bold', display: 'block' }}>💻 View GitHub</a>
                <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="editorial-link" style={{ fontWeight: 'bold', display: 'block' }}>💼 Connect On LinkedIn</a>
                <a href={`mailto:${PERSONAL.email}`} className="editorial-link" style={{ fontWeight: 'bold', display: 'block' }}>📧 Send Email</a>
              </div>
            </div>
          </div>
        </div>

        <Divider className="mb-6" />

        {/* Final Quote & Footer */}
        <div className="flex-col text-center mt-auto pb-6">
          <h3 className="headline-section mb-4">FINAL QUOTE</h3>
          <div className="pull-quote-text mb-4" style={{ fontSize: '24px' }}>
            "Every great product starts with a simple idea and the courage to build it."
          </div>
          <div className="byline mb-6">— Aditya Mohod</div>
          
          <Divider className="mb-6 mx-auto" style={{ width: '60%' }} />
          
          <div className="body-text--small mb-6">
            <strong>THE ADITYA TIMES</strong><br/>
            END OF EDITION<br/>
            Pune, Maharashtra, India<br/>
            2026
          </div>
          
          <a href={PERSONAL.resume} download="Aditya_Mohod_Resume.pdf" target="_blank" rel="noopener noreferrer" className="form-submit mx-auto text-center" style={{ width: 'fit-content', textDecoration: 'none', display: 'inline-block' }}>
            [ DOWNLOAD RESUME ]
          </a>
        </div>

      </div>
    </PageShell>
  );
}
