import { useState } from 'react';
import '../styles/project-home.css';
import '../styles/default.css';

import Footer from '../footer';
import NavHeader from '../navheader';

interface ProjectItem {
  id: string;
  name: string;
  projectId?: string;
}

const sampleProjects: ProjectItem[] = [
  { id: '1', name: 'Client Portal Development Initiative', projectId: 'PROJ-2024-001' },
  { id: '2', name: 'Quarterly Results Presentation', projectId: 'PROJ-2024-002' },
  { id: '3', name: 'Customer Migration Project', projectId: 'PROJ-2024-003' }
];

const ProjectSummary: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ProjectItem[]>([]);

  const handleSearch = (q: string) => {
    const trimmed = q.trim().toLowerCase();
    if (!trimmed) {
      setResults([]);
      return;
    }
    const matched = sampleProjects.filter(p => p.name.toLowerCase().includes(trimmed));
    setResults(matched);
  };

  return (
    <>
      <NavHeader />

      <div className="projects-header container">
        <h2 className='h2proj'>Projects Summary Tool Center</h2>

        <p className="search-info">This search looks for matches in the Project repository.</p>
        <nav aria-label="Main navigation">
          <p className="searchlinks"><a href="#">Corporate Sites</a> | <a href="#">Project Sites</a> | <a href="#">People</a> | <a href="/proposal">Proposals</a> | <a href="/projectsummary" className="searchon">Project Summaries</a> | <a href="#">Corporate Documents</a> | <a href="#">Resumes</a> | <a href="#">Policies &amp; Guidelines</a> | <a href="#">Advanced</a></p>
        </nav>
      </div>

      <div className="projectshome-container">

        <aside className="righthome-sidebar-container">
          <div className="sidebar right-sidebar">
            <div className="refinement-panel">
              <h2 className="zone-title">Project Contacts</h2>
              <p><span className="search-info">For questions or access to restricted materials, contact: <a href="mailto:ProjectSupport@csra.com">ProjectSupport@csra.com</a></span></p>
            </div>
          </div>
          <div className="sidebar right-sidebar">
            <div className="refinement-panel">
              <h2 className="zone-title">Request Support</h2>
              <p><span className="zone-title"><a href="#">Request Support</a></span></p>
            </div>
          </div>
          <div className="sidebar right-sidebar">
            <div className="refinement-panel">
              <h2 className="zone-title">Project Tools</h2>
              <ul>
                <li className="zone-title"><a href="#">GovWin IQ</a></li>
                <li className="zone-title"><a href="#">GovWin CRM</a></li>
                <li className="zone-title"><a href="#">Salesforce</a></li>
              </ul>
            </div>
          </div>
        </aside>
        <main className="projects-main">


          <article className="search-article">
            <h3>Search Projects</h3>
            <p className="search-description">
              Enter a project name (or partial project name) to find matching projects and hit enter.
            </p>

            <div className="search-form-container">
              <form id="ProjectSearchForm" method="get" action="/search/">

                {/* Top Section: Keywords & Filters */}
                <div className="form-grid">

                  {/* Keywords */}
                  <div className="form-group keyword-group">
                    <label htmlFor="keywords" className="form-label">Keyword(s):</label>
                    <input type="text" id="keywords" name="keywords" placeholder="Enter keywords" />
                  </div>

                  {/* Checkboxes */}
                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" name="checkbox" id="checkbox" />
                      <span>Match any Keyword</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" name="checkbox2" id="checkbox2" />
                      <span>Match All Keywords</span>
                    </label>
                  </div>

                </div>

                <hr className="form-divider" />

                {/* Main Form Inputs Grid */}
                <div className="form-grid search-fields-grid">

                  {/* Left Column Fields */}
                  <div className="form-group">
                    <label htmlFor="submittedWithin" className="form-label">Submitted within the last:</label>
                    <select id="submittedWithin" name="submittedWithin">
                      <option value="">Select timeframe</option>
                      <option value="1">last year</option>
                      <option value="2">last 2 years</option>
                      <option value="3">last 3 years</option>
                    </select>
                  </div>

                  {/* Right Column Fields (Reordered naturally for mobile stack) */}
                  <div className="form-group">
                    <label htmlFor="capabilities" className="form-label">

                      Capabilities:

                    </label>
                    <input type="text" id="capabilities" name="capabilities" placeholder="Enter capabilities" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ProjectArtifacts" className="form-label">Project Artifacts:</label>
                    <select id="ProjectArtifacts" name="ProjectArtifacts" multiple>
                      <option value="2f9bf6c8-0be6-41e6-94c2-9ae23d024c67">Full Project</option>
                      <option value="d705534a-3bd5-4eb8-b21d-7d3851e5ae1e">Gold Standard</option>
                      <option value="3050a2aa-2924-4e14-a501-fcf1428d9941">Oral Presentation</option>
                      <option value="a85f5364-b69c-4b5c-aeeb-1d99ea573bcb">Past Performance</option>
                      <option value="3050a2aa-2924-4e14-a501-fcf1428d9941">Project Graphic</option>
                      <option value="57ccb577-e226-4c74-acf8-64d2045bd36c">RFI Response</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="tools" className="form-label">Tools:</label>
                    <input type="text" id="tools" name="tools" placeholder="Enter tools" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="govwinId" className="form-label">GovWin ID:</label>
                    <input type="text" id="govwinId" name="govwinId" placeholder="Enter GovWin ID" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="customers" className="form-label">

                      Customers:

                    </label>
                    <input type="text" id="customers" name="customers" placeholder="Enter customers" />
                  </div>

                </div>

                {/* Action Buttons */}
                <div className="form-actions">
                  <button type="submit" className="button shadow-md"><a href="/projectresults">Search</a></button>
                  <button type="reset" className="button shadow-md">Clear</button>
                </div>

              </form>
            </div>
          </article>
        </main>

      </div>

      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default ProjectSummary;
