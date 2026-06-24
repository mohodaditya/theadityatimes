import { PageShell } from '../components/PageShell';
import { ACHIEVEMENTS } from '../data/content';
import { SectionLabel } from '../components/SectionLabel';
import { ArticleCard } from '../components/ArticleCard';
import { Divider } from '../components/Divider';
import { ClassifiedBox } from '../components/ClassifiedBox';

export function AchievementsPage({ currentPage, onNavigate }) {
  const hackathons = ACHIEVEMENTS.items.filter(i => i.type === 'hackathon');
  const others = ACHIEVEMENTS.items.filter(i => i.type !== 'hackathon');

  return (
    <PageShell currentPage={currentPage} onNavigate={onNavigate} compact={true}>
      <div className="breaking-banner my-4">BREAKING NEWS</div>
      
      <div className="flex-col flex-1">
        <h2 className="headline-main text-center mb-2">{ACHIEVEMENTS.headline}</h2>
        <div className="subtitle text-center mb-6">{ACHIEVEMENTS.subtitle}</div>
        
        <div className="grid-2col flex-1">
          {/* Left Column: Hackathons */}
          <div className="flex-col">
            <SectionLabel text="COMPETITIVE PROGRAMMING" className="mb-4" />
            
            {hackathons.map((item, idx) => (
              <ArticleCard key={idx} featured className="mb-6">
                <div className="byline text-muted mb-2" style={{ color: 'var(--editorial-red)' }}>{item.date}</div>
                <h3 className="headline-section mb-3">{item.title}</h3>
                <p className="body-text">{item.desc}</p>
                <div className="img-placeholder mt-4" style={{ height: '120px' }}>
                  <span className="caption">Event Photography</span>
                </div>
              </ArticleCard>
            ))}
          </div>

          {/* Right Column: Other Achievements */}
          <div className="flex-col">
            <h3 className="headline-section mb-4 text-center">Honors & Recognition</h3>
            <Divider className="mb-4" />
            
            <div className="flex-col gap-4 mb-6">
              {others.map((item, idx) => (
                <ClassifiedBox key={idx}>
                  <div className="flex-row justify-between mb-1" style={{ justifyContent: 'space-between' }}>
                    <div className="headline-small">{item.title}</div>
                    <div className="form-label">{item.date}</div>
                  </div>
                  <p className="body-text--small text-muted">{item.desc}</p>
                </ClassifiedBox>
              ))}
            </div>

            <ArticleCard className="mt-auto text-center">
              <SectionLabel text="RECORDS SUMMARY" variant="outline" className="mb-4" />
              <div className="grid-3col-equal">
                <div className="flex-col">
                  <div className="headline-section">1st</div>
                  <div className="form-label">Hackathons</div>
                </div>
                <div className="flex-col">
                  <div className="headline-section">Top 5%</div>
                  <div className="form-label">Academics</div>
                </div>
                <div className="flex-col">
                  <div className="headline-section">100+</div>
                  <div className="form-label">Mentored</div>
                </div>
              </div>
            </ArticleCard>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
