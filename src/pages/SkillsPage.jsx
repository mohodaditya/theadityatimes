import { PageShell } from '../components/PageShell';
import { SKILLS } from '../data/content';
import { SectionLabel } from '../components/SectionLabel';
import { ArticleCard } from '../components/ArticleCard';
import { Divider } from '../components/Divider';

export function SkillsPage({ currentPage, onNavigate }) {
  return (
    <PageShell currentPage={currentPage} onNavigate={onNavigate} compact={true}>
      <div className="flex-col mt-4 flex-1">
        <SectionLabel text="SPECIAL SUPPLEMENT // TECHNOLOGY SECTOR" className="align-self-start mb-4" style={{ alignSelf: 'flex-start' }} />
        
        <h2 className="headline-main text-center mb-2">{SKILLS.headline}</h2>
        <div className="subtitle text-center mb-6" style={{ maxWidth: '80%', margin: '0 auto 24px' }}>
          {SKILLS.subtitle}
        </div>
        
        <div className="grid-2col flex-1">
          {/* Left Column */}
          <div className="flex-col">
            <ArticleCard featured className="mb-6">
              <h3 className="headline-section mb-4 text-center">Frontend Ecosystems</h3>
              <Divider className="mb-4" />
              <div className="flex-col gap-4">
                {SKILLS.frontend.map((skill, idx) => (
                  <div key={idx} className="flex-row justify-between align-center" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div className="headline-article mb-1">{skill.name}</div>
                      <div className="body-text--small text-muted">{skill.desc}</div>
                    </div>
                    <span className={`badge ${skill.level === 'Expert' ? 'badge--expert' : 'badge--proficient'}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </ArticleCard>

            <div className="img-placeholder flex-1 min-h-0" style={{ minHeight: '150px' }}>
              <span className="caption">Code visualization diagram</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-col">
            <h3 className="headline-section mb-2">Tech Market Snapshot</h3>
            <div className="byline mb-4">LATEST PERFORMANCE METRICS</div>
            
            <table className="stats-table mb-6">
              <thead>
                <tr>
                  <th className="table-header">Skill Index</th>
                  <th className="table-header text-right">Score</th>
                  <th className="table-header text-right">Trend</th>
                </tr>
              </thead>
              <tbody>
                {SKILLS.techSnapshot.map((stat, idx) => (
                  <tr key={idx}>
                    <td className="table-cell table-cell--bold">{stat.skill}</td>
                    <td className="table-cell text-right">{stat.score}</td>
                    <td className={`table-cell text-right ${stat.trend.startsWith('+') ? 'table-cell--positive' : 'table-cell--negative'}`}>
                      {stat.trend}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <ArticleCard className="mb-6">
              <SectionLabel text="BACKEND INFRASTRUCTURE" variant="text" className="mb-2 text-center" />
              <Divider className="mb-3" />
              <div className="flex-col gap-3">
                {SKILLS.backend.map((skill, idx) => (
                  <div key={idx} className="text-center">
                    <div className="headline-small">{skill.name}</div>
                    <div className="body-text--small text-muted">{skill.desc}</div>
                  </div>
                ))}
              </div>
            </ArticleCard>

            <ArticleCard className="mt-auto">
              <SectionLabel text="DEVELOPMENT TOOLS" variant="text" className="mb-2 text-center" />
              <Divider className="mb-3" />
              <div className="flex-col gap-3">
                {SKILLS.tools.map((skill, idx) => (
                  <div key={idx} className="text-center">
                    <div className="headline-small">{skill.name}</div>
                    <div className="body-text--small text-muted">{skill.desc}</div>
                  </div>
                ))}
              </div>
            </ArticleCard>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
