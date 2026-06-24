import { PageShell } from '../components/PageShell';
import { PROJECTS } from '../data/content';
import { SectionLabel } from '../components/SectionLabel';
import { ArticleCard } from '../components/ArticleCard';

export function ProjectsPage({ currentPage, onNavigate }) {
  return (
    <PageShell currentPage={currentPage} onNavigate={onNavigate} compact={true}>
      <div className="flex-col mt-4 flex-1">
        <SectionLabel text="ARCHIVE // PROJECT BUREAU" className="align-self-start mb-6" style={{ alignSelf: 'flex-start' }} />
        
        <div className="grid-3col-equal flex-1">
          {PROJECTS.map((project, idx) => (
            <ArticleCard key={idx} className="flex-col justify-between">
              <div>
                <div className="img-placeholder mb-4" style={{ height: '140px' }}>
                  <span className="caption">Project Visual</span>
                </div>
                <h3 className="headline-article mb-2">{project.title}</h3>
                <p className="body-text mb-4">{project.desc}</p>
              </div>
              
              <div className="mt-auto">
                <div className="flex-row gap-4 flex-wrap" style={{ flexWrap: 'wrap', gap: '4px' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} className="tag tag--outline">{t}</span>
                  ))}
                </div>
                <div className="divider-h mt-4 mb-2" />
                <div className="flex-row justify-between align-center" style={{ justifyContent: 'space-between' }}>
                  <span className="ref-code text-muted">REF: {idx + 101}</span>
                  <span className="editorial-link">View Details →</span>
                </div>
              </div>
            </ArticleCard>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
