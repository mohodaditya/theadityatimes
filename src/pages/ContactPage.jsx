import { PageShell } from '../components/PageShell';
import { SectionLabel } from '../components/SectionLabel';
import { ArticleCard } from '../components/ArticleCard';
import { Divider } from '../components/Divider';
import { ClassifiedBox } from '../components/ClassifiedBox';
import { PERSONAL } from '../data/content';

export function ContactPage({ currentPage, onNavigate }) {
  return (
    <PageShell currentPage={currentPage} onNavigate={onNavigate} compact={false}>
      
      {/* Header */}
      <div className="text-center mb-6 mt-4">
        <SectionLabel text="FINAL EDITION // Pune, Maharashtra" className="mb-4" />
        <h2 className="headline-main mb-2" style={{ fontSize: '46px', textTransform: 'uppercase' }}>
          LET'S BUILD SOMETHING TOGETHER
        </h2>
        <div className="subtitle mb-2" style={{ fontSize: '20px' }}>
          Software Developer Open To Opportunities, Collaborations & Meaningful Projects
        </div>
      </div>

      <Divider className="mb-6" />

      {/* Scrollable container */}
      <div className="flex-col flex-1" style={{ overflowY: 'auto', paddingRight: '10px' }}>
        
        {/* A Message from the Editor */}
        <div className="flex-col mb-6">
          <h3 className="headline-section mb-3 text-center">A MESSAGE FROM THE EDITOR</h3>
          <div className="text-center body-text mx-auto" style={{ maxWidth: '80%', lineHeight: '1.8' }}>
            <p className="mb-2">Thank you for reading The Aditya Times.</p>
            <p className="mb-2">I hope this newspaper provided insight into my journey, projects, skills, and experiences as a software developer.</p>
            <p>If you believe I can contribute to your team, project, or organization, I would love to connect.</p>
          </div>
        </div>

        <Divider className="mb-6" />

        <div className="grid-3col mb-6 gap-8">
          
          {/* Left Column */}
          <div className="flex-col gap-6">
            <div className="flex-col">
              <h3 className="headline-section mb-3">AVAILABLE FOR</h3>
              <ul className="body-text flex-col gap-2" style={{ listStyleType: 'none' }}>
                <li>✓ Software Engineering Roles</li>
                <li>✓ Frontend Development Roles</li>
                <li>✓ Full Stack Opportunities</li>
                <li>✓ Freelance Projects</li>
                <li>✓ Startup Collaborations</li>
                <li>✓ Technical Discussions</li>
              </ul>
            </div>
            
            <Divider />
            
            <div className="flex-col">
              <h3 className="headline-section mb-3">CONTACT DIRECTORY</h3>
              <div className="body-text--small flex-col gap-4">
                <div>
                  <div className="form-label mb-1">📧 Email</div>
                  <a href={`mailto:${PERSONAL.email}`} className="editorial-link" style={{ fontWeight: 'bold' }}>{PERSONAL.email}</a>
                </div>
                <Divider />
                <div>
                  <div className="form-label mb-1">📱 Phone</div>
                  <div className="font-bold">+91 XXXXX XXXXX</div>
                </div>
                <Divider />
                <div>
                  <div className="form-label mb-1">💼 LinkedIn</div>
                  <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="editorial-link" style={{ fontWeight: 'bold' }}>LinkedIn Profile</a>
                </div>
                <Divider />
                <div>
                  <div className="form-label mb-1">💻 GitHub</div>
                  <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="editorial-link" style={{ fontWeight: 'bold' }}>GitHub Profile</a>
                </div>
                <Divider />
                <div>
                  <div className="form-label mb-1">📍 Location</div>
                  <div className="font-bold">Pune, Maharashtra, India</div>
                </div>
              </div>
            </div>
            
            <Divider />
            
            <div className="flex-col">
              <h3 className="headline-section mb-3">QUICK ACTIONS</h3>
              <div className="flex-col gap-3">
                <a href={PERSONAL.resume} download="Aditya_Mohod_Resume.pdf" target="_blank" rel="noopener noreferrer" className="editorial-link" style={{ textAlign: 'left', fontWeight: 'bold', display: 'block' }}>[ VIEW RESUME ]</a>
                <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="editorial-link" style={{ textAlign: 'left', fontWeight: 'bold', display: 'block' }}>[ VIEW GITHUB ]</a>
                <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="editorial-link" style={{ textAlign: 'left', fontWeight: 'bold', display: 'block' }}>[ LINKEDIN PROFILE ]</a>
                <a href={`mailto:${PERSONAL.email}`} className="editorial-link" style={{ textAlign: 'left', fontWeight: 'bold', display: 'block' }}>[ SEND EMAIL ]</a>
              </div>
            </div>
          </div>

          {/* Center Column: Contact Form */}
          <div className="flex-col gap-6">
            <ArticleCard className="flex-col">
              <h3 className="headline-section text-center mb-4">LETTER TO THE EDITOR</h3>
              <form className="flex-col gap-4" onSubmit={e => e.preventDefault()}>
                <div className="flex-col gap-2">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" className="form-input" required />
                </div>
                
                <div className="flex-col gap-2">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" className="form-input" required />
                </div>
                
                <div className="flex-col gap-2">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" id="subject" className="form-input" required />
                </div>
                
                <div className="flex-col gap-2">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" className="form-textarea" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="form-submit mt-2">[ SEND MESSAGE ]</button>
              </form>
            </ArticleCard>

            <Divider />

            <div className="flex-col">
              <h3 className="headline-section mb-3 text-center">PROFESSIONAL SUMMARY</h3>
              <div className="body-text text-center" style={{ lineHeight: '1.8' }}>
                <p className="mb-3">B.Tech Computer Science Engineering Graduate passionate about building modern web applications using React, JavaScript, Node.js, and contemporary development tools.</p>
                <p>Interested in creating products that solve real-world problems while delivering excellent user experiences.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Classifieds & Final Words */}
          <div className="flex-col gap-6">
            <div className="flex-col">
              <h3 className="headline-section mb-3 text-center">NEWSPAPER CLASSIFIEDS</h3>
              <div className="form-label mb-3 text-center" style={{ color: 'var(--editorial-red)' }}>SEEKING</div>
              
              <div className="flex-col gap-4">
                <ClassifiedBox>
                  <div className="table-cell table-cell--bold text-center">Software Engineer Opportunities</div>
                </ClassifiedBox>
                <ClassifiedBox>
                  <div className="table-cell table-cell--bold text-center">Frontend Developer Positions</div>
                </ClassifiedBox>
                <ClassifiedBox>
                  <div className="table-cell table-cell--bold text-center">Freelance Development Work</div>
                </ClassifiedBox>
                <ClassifiedBox>
                  <div className="table-cell table-cell--bold text-center">Technical Collaborations</div>
                </ClassifiedBox>
              </div>
            </div>

            <Divider />

            <div className="flex-col text-center mt-auto pb-4">
              <h3 className="headline-section mb-4">FINAL WORDS</h3>
              <div className="pull-quote-text mb-4" style={{ fontSize: '18px' }}>
                "Technology becomes meaningful when it solves real problems for real people."
              </div>
              <div className="byline mb-6">— Aditya Mohod</div>
              
              <Divider className="mb-4 mx-auto" style={{ width: '50%' }} />
              
              <div className="body-text--small">
                Thank You For Reading<br/>
                <strong>THE ADITYA TIMES</strong><br/>
                Special Technology Edition<br/>
                2026
              </div>
            </div>
            
          </div>
        </div>
        
        <Divider className="mt-auto mb-4" />
        
        <div className="text-center mb-4">
          <div className="form-label" style={{ letterSpacing: '0.2em' }}>END OF EDITION</div>
        </div>

      </div>
    </PageShell>
  );
}
