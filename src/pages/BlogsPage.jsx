import { PageShell } from '../components/PageShell';
import { SectionLabel } from '../components/SectionLabel';
import { ArticleCard } from '../components/ArticleCard';
import { Divider } from '../components/Divider';

export function BlogsPage({ currentPage, onNavigate }) {
  return (
    <PageShell currentPage={currentPage} onNavigate={onNavigate} compact={false}>
      
      {/* Header */}
      <div className="text-center mb-6 mt-4">
        <SectionLabel text="EDITORIAL SECTION // Pune, Maharashtra" className="mb-4" />
        <h2 className="headline-main mb-2" style={{ fontSize: '46px', textTransform: 'uppercase' }}>
          THOUGHTS, LESSONS & EXPERIENCES
        </h2>
        <div className="subtitle mb-2" style={{ fontSize: '20px' }}>
          Exploring Technology, Development, Projects, Career Growth & Personal Learning
        </div>
      </div>

      <Divider className="mb-6" />

      {/* Scrollable container */}
      <div className="flex-col flex-1" style={{ overflowY: 'auto', paddingRight: '10px' }}>
        
        {/* Intro */}
        <div className="flex-col mb-6">
          <h3 className="headline-section mb-3 text-center">FROM THE NOTEBOOK OF ADITYA MOHOD</h3>
          <div className="body-text text-center mx-auto" style={{ maxWidth: '80%', lineHeight: '1.8' }}>
            <p><strong>Every project teaches a lesson. Every mistake teaches a skill.</strong></p>
            <p className="mt-2">This section contains articles, experiences, development insights, project stories, career lessons, and technical observations gathered throughout my journey as a software developer.</p>
          </div>
        </div>

        <Divider className="mb-6" />

        <div className="grid-3col mb-6 gap-8">
          {/* Left/Center Column: Featured Article & Metadata */}
          <div className="flex-col gap-6" style={{ gridColumn: 'span 2' }}>
            <div className="flex-col">
              <SectionLabel text="FEATURED ARTICLE" className="mb-4" />
              <ArticleCard featured className="p-6">
                <div className="form-label mb-2" style={{ color: 'var(--editorial-red)' }}>[ EDITOR'S PICK ]</div>
                <h3 className="headline-article mb-4" style={{ fontSize: '32px' }}>How Building Tech Arena Changed My Approach To Learning</h3>
                
                <div className="grid-3col gap-4 mb-6 pb-4" style={{ borderBottom: '1px solid var(--divider)' }}>
                  <div className="flex-col">
                    <span className="form-label text-muted mb-1">Reading Time:</span>
                    <span className="body-text--small"><strong>6 Minutes</strong></span>
                  </div>
                  <div className="flex-col">
                    <span className="form-label text-muted mb-1">Published:</span>
                    <span className="body-text--small"><strong>June 2026</strong></span>
                  </div>
                  <div className="flex-col">
                    <span className="form-label text-muted mb-1">Views:</span>
                    <span className="body-text--small"><strong>2,540</strong></span>
                  </div>
                  <div className="flex-col">
                    <span className="form-label text-muted mb-1">Likes:</span>
                    <span className="body-text--small"><strong>128 ❤</strong></span>
                  </div>
                  <div className="flex-col">
                    <span className="form-label text-muted mb-1">Rating:</span>
                    <span className="body-text--small"><strong>4.9 ★</strong></span>
                  </div>
                </div>
                
                <h4 className="headline-small mb-2">Brief Summary:</h4>
                <p className="body-text mb-6">
                  Building Tech Arena taught me that great products are not just about code—they are about understanding users, solving problems, and continuously improving through feedback.
                </p>
                <button className="editorial-link" style={{ fontWeight: 'bold' }}>[ READ FULL ARTICLE ]</button>
              </ArticleCard>
            </div>

            <div className="grid-2col gap-8 mt-4">
              {/* Categories */}
              <div className="flex-col">
                <h3 className="headline-section mb-3 text-center">ARTICLE CATEGORIES</h3>
                <div className="flex-row justify-center" style={{ flexWrap: 'wrap', gap: '8px' }}>
                  <span className="badge">Development</span>
                  <span className="badge">React</span>
                  <span className="badge">JavaScript</span>
                  <span className="badge">Projects</span>
                  <span className="badge">Career</span>
                  <span className="badge">UI / UX</span>
                  <span className="badge">Hackathons</span>
                  <span className="badge">Personal Journey</span>
                </div>
              </div>

              {/* Community Insights */}
              <div className="flex-col">
                <h3 className="headline-section mb-3 text-center">COMMUNITY INSIGHTS</h3>
                <table className="stats-table">
                  <tbody>
                    <tr>
                      <td className="table-header">Articles Published:</td>
                      <td className="table-cell table-cell--bold text-right">12</td>
                    </tr>
                    <tr>
                      <td className="table-header">Total Reads:</td>
                      <td className="table-cell table-cell--bold text-right">5,000+</td>
                    </tr>
                    <tr>
                      <td className="table-header">Total Likes:</td>
                      <td className="table-cell table-cell--bold text-right">850+</td>
                    </tr>
                    <tr>
                      <td className="table-header">Average Rating:</td>
                      <td className="table-cell table-cell--bold text-right">4.8★</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: Recent Articles & Utilities */}
          <div className="flex-col gap-6">
            <div className="flex-col">
              <SectionLabel text="RECENT ARTICLES" className="mb-4" />
              
              <div className="flex-col gap-5">
                <div>
                  <h4 className="headline-small mb-2 editorial-link" style={{ lineHeight: '1.4' }}>React Performance Tips Every Frontend Developer Should Know</h4>
                  <div className="flex-row justify-between body-text--small text-muted mt-2">
                    <span>5 min read</span>
                    <span>❤ 84  |  ★ 4.8</span>
                    <span className="editorial-link" style={{ fontWeight: 'bold' }}>Read →</span>
                  </div>
                </div>
                <Divider />
                <div>
                  <h4 className="headline-small mb-2 editorial-link" style={{ lineHeight: '1.4' }}>My Experience Building DeshKaRojgar</h4>
                  <div className="flex-row justify-between body-text--small text-muted mt-2">
                    <span>7 min read</span>
                    <span>❤ 103  |  ★ 4.9</span>
                    <span className="editorial-link" style={{ fontWeight: 'bold' }}>Read →</span>
                  </div>
                </div>
                <Divider />
                <div>
                  <h4 className="headline-small mb-2 editorial-link" style={{ lineHeight: '1.4' }}>Lessons Learned From My First Hackathon</h4>
                  <div className="flex-row justify-between body-text--small text-muted mt-2">
                    <span>4 min read</span>
                    <span>❤ 95  |  ★ 4.8</span>
                    <span className="editorial-link" style={{ fontWeight: 'bold' }}>Read →</span>
                  </div>
                </div>
                <Divider />
                <div>
                  <h4 className="headline-small mb-2 editorial-link" style={{ lineHeight: '1.4' }}>Frontend Development Roadmap For Beginners</h4>
                  <div className="flex-row justify-between body-text--small text-muted mt-2">
                    <span>8 min read</span>
                    <span>❤ 142  |  ★ 4.9</span>
                    <span className="editorial-link" style={{ fontWeight: 'bold' }}>Read →</span>
                  </div>
                </div>
              </div>
            </div>

            <Divider />

            {/* Search Archive */}
            <div className="flex-col">
              <h3 className="headline-section mb-3 text-center">SEARCH ARCHIVE</h3>
              <div style={{ display: 'flex', border: '1px solid var(--card-border)', padding: '12px 16px', borderRadius: '2px' }}>
                <input 
                  type="text" 
                  placeholder="Search Articles..." 
                  style={{ 
                    border: 'none', 
                    background: 'transparent', 
                    flex: 1, 
                    fontFamily: 'var(--font-ui)', 
                    fontSize: '14px',
                    outline: 'none',
                    color: 'var(--ink)'
                  }} 
                />
                <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '14px' }}>🔍</button>
              </div>
            </div>

            <Divider />

            {/* Write to Editor */}
            <ArticleCard className="text-center mt-auto">
              <h3 className="headline-small mb-3">WRITE TO THE EDITOR</h3>
              <div className="body-text--small mb-4 text-muted">Readers can:</div>
              <ul className="body-text flex-col gap-3" style={{ listStyleType: 'none' }}>
                <li>❤ Like Articles</li>
                <li>★ Rate Articles</li>
                <li>💬 Leave Feedback</li>
                <li>📤 Share Articles</li>
              </ul>
            </ArticleCard>

          </div>
        </div>

      </div>
    </PageShell>
  );
}
