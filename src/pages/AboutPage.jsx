import { PageShell } from '../components/PageShell';
import { ABOUT } from '../data/content';
import { SectionLabel } from '../components/SectionLabel';
import { PullQuote } from '../components/PullQuote';
import { Divider } from '../components/Divider';

export function AboutPage({ currentPage, onNavigate }) {
  return (
    <PageShell currentPage={currentPage} onNavigate={onNavigate} compact={true}>
      <div className="flex-col mt-6 flex-1">
        <SectionLabel text="PROFILE // FEATURE ARTICLE" className="align-self-start mb-4" style={{ alignSelf: 'flex-start' }} />
        
        <h2 className="headline-main mb-2">{ABOUT.headline}</h2>
        <div className="subtitle mb-4">{ABOUT.subtitle}</div>
        
        <div className="grid-2col--wide-left flex-1 mt-4">
          {/* Main Article */}
          <div className="flex-col">
            <div className="text-2col flex-1">
              <p className="body-text drop-cap">{ABOUT.article.split('\n\n')[0]}</p>
              <p className="body-text mt-4">{ABOUT.article.split('\n\n')[1]}</p>
              <p className="body-text mt-4">{ABOUT.article.split('\n\n')[2]}</p>
              <p className="body-text mt-4">{ABOUT.article.split('\n\n')[3]}</p>
            </div>
            <PullQuote text={ABOUT.pullQuote} className="mt-8 mb-4" />
          </div>

          {/* Sidebar */}
          <div className="flex-col">
            <div className="img-placeholder mb-6" style={{ height: '300px' }}>
              <span className="caption">Portrait</span>
            </div>
            
            <SectionLabel text="QUICK FACTS" variant="outline" className="mb-4 text-center" />
            <Divider />
            
            {ABOUT.quickFacts.map((fact, idx) => (
              <div key={idx} className="flex-col py-3 border-bottom">
                <div className="table-header mb-1">{fact.label}</div>
                <div className="table-cell table-cell--bold">{fact.value}</div>
                {idx < ABOUT.quickFacts.length - 1 && <Divider className="mt-3" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
