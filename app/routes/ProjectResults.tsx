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

const ProjectResults: React.FC = () => {
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

        <h2>Project Summary Results</h2>
        <p className="search-info">This search looks for matches in the Project repository.</p>
        <nav aria-label="Main navigation">
          <p className="searchlinks"><a href="#">Corporate Sites</a> | <a href="#">Project Sites</a> | <a href="#">People</a> | <a href="/proposal">Proposals</a> | <a href="/projectsummary" className='searchon'>Project Summaries</a> | <a href="#">Corporate Documents</a> | <a href="#">Resumes</a> | <a href="#">Policies &amp; Guidelines</a> | <a href="#">Advanced</a></p>
        </nav>
      </div>

      <div className="projects-container">
        <aside className="projects-sidebar">
          <div className="refinement-panel">
            <h2>Refine Results</h2>

            <div className="refinement-category">
              <h3>Result Type</h3>
              <ul className="filter-list">
                <li><a href="#adobe">Adobe PDF</a> <span className="filter-count">(42)</span></li>
                <li><a href="#word">Word Document</a> <span className="filter-count">(28)</span></li>
                <li><a href="#excel">Excel Sheet</a> <span className="filter-count">(15)</span></li>
                <li><a href="#webpage">Webpage</a> <span className="filter-count">(31)</span></li>
              </ul>
            </div>

            <div className="refinement-category">
              <h3>Document Type</h3>
              <ul className="filter-list">
                <li><a href="#Project">Project</a> <span className="filter-count">(52)</span></li>
                <li><a href="#response">Response</a> <span className="filter-count">(18)</span></li>
                <li><a href="#template">Template</a> <span className="filter-count">(9)</span></li>
                <li><a href="#standard">Standard</a> <span className="filter-count">(11)</span></li>
              </ul>
            </div>

            <div className="refinement-category">
              <h3>Capabilities</h3>
              <ul className="filter-list">
                <li><a href="#engineering">Engineering</a> <span className="filter-count">(25)</span></li>
                <li><a href="#software">Software</a> <span className="filter-count">(30)</span></li>
                <li><a href="#management">Management</a> <span className="filter-count">(22)</span></li>
                <li><a href="#deployment">Deployment</a> <span className="filter-count">(16)</span></li>
              </ul>
            </div>

            <div className="refinement-category">
              <h3>Customer</h3>
              <ul className="filter-list">
                <li><a href="#dod">DoD</a> <span className="filter-count">(35)</span></li>
                <li><a href="#civilian">Civilian</a> <span className="filter-count">(24)</span></li>
                <li><a href="#other">Other Federal</a> <span className="filter-count">(15)</span></li>
              </ul>
            </div>
          </div>
        </aside>

        <main className="projects-main">


          <article>

            <h2>Search Projects</h2>
            <p style={{ fontWeight: 'bold' }}>Enter a project name (or partial project name) to find matching projects and hit enter.</p>
            <div className="search-form-container">
              <form id="ProjectSearchForm" method="get" action="/search/">
                <table className="people-search-form">
                  <tbody>
                    <tr>
                      <th className="label">Keyword(s):</th>
                      <th className="inlinefilter">
                        <input type="text" id="keywords" name="keywords" placeholder="Enter keywords" />
                      </th>
                      <th className="label" style={{ verticalAlign: 'middle', textAlign: 'left', width: '100%' }}>
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <label htmlFor="checkbox">Match any Keyword</label>
                      </th>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td className="label" style={{ verticalAlign: 'middle', textAlign: 'left', width: '100%' }}>
                        <input type="checkbox" name="checkbox2" id="checkbox2" />
                        Match All Keywords
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4}>
                        <hr />
                      </td>
                    </tr>
                    <tr>
                      <td className="label">Submitted within the last:</td>
                      <td className="inlinefilter">
                        <select id="submittedWithin" name="submittedWithin">
                          <option value="">Select timeframe</option>
                          <option value="1">last year</option>
                          <option value="2">last 2 years</option>
                          <option value="3">last 3 years</option>
                        </select>
                      </td>
                      <td className="label">
                        <a href="https://corpteams.sranet.sra.com/search/Documents/Capability%20Terms.xlsx" target="_blank" rel="noreferrer">Capabilities:</a>
                      </td>
                      <td className="inlinefilter">
                        <span id="capabilitiesExperienceInput">
                          <input type="text" id="capabilities" name="capabilities" placeholder="Enter capabilities" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="label">Project Artifacts:</td>
                      <td className="inlinefilter" style={{ verticalAlign: 'top' }}>
                        <select id="ProjectArtifacts" name="ProjectArtifacts" multiple>
                          <option value="2f9bf6c8-0be6-41e6-94c2-9ae23d024c67">Full Project</option>
                          <option value="d705534a-3bd5-4eb8-b21d-7d3851e5ae1">Gold Standard</option>
                          <option value="3050a2aa-2924-4e14-a501-fcf1428d9941">Oral Presentation</option>
                          <option value="a85f5364-b69c-4b5c-aeeb-1d99ea573bcb">Past Performance</option>
                          <option value="3050a2aa-2924-4e14-a501-fcf1428d9941">Project Graphic</option>
                          <option value="57ccb577-e226-4c74-acf8-64d2045bd36c">RFI Response</option>
                        </select>
                      </td>
                      <td className="label">Tools:</td>
                      <td className="inlinefilter" style={{ width: '250px' }}>
                        <span id="toolsInput">
                          <input type="text" id="tools" name="tools" placeholder="Enter tools" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="label">GovWin ID:</td>
                      <td className="inlinefilter">
                        <span id="certificationsInput">
                          <input type="text" id="govwinId" name="govwinId" placeholder="Enter GovWin ID" />
                        </span>
                      </td>
                      <td className="label">
                        <a href="https://corpteams.sranet.sra.com/search/Documents/Customers Terms.xlsx" target="_blank" rel="noreferrer">Customers:</a>
                      </td>
                      <td className="inlinefilter" style={{ width: '250px' }}>
                        <span id="customerExperienceInput">
                          <input type="text" id="customers" name="customers" placeholder="Enter customers" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                  <button type="submit" className="button shadow-md"><a href="/projectresults">Search</a></button>
                  <button type="reset" className="button">Clear</button>

                </div>
              </form>
            </div>
          </article>

          <section className="main-content">
            <div className="search-controls">
              <div className="results-count">
                <strong>Showing 1&laquo;10 of 90 results</strong> (0.23 seconds)
              </div>
              <select className="sort-dropdown" title='Filters'>
                <option value="relevance">Sort by Relevance</option>
                <option value="date">Sort by Date Modified</option>
                <option value="title">Sort by Title</option>
              </select>
            </div>

            <div className="search-results">
              <h2 className="zone-title">Project Search Results</h2>
              <p>Your search results will be displayed in this area.</p>

              <div className="result-item">
                <div className="result-title"><a href="">Enterprise Management System - Project Document</a></div>
                <div className="result-description">This comprehensive Project outlines the design and implementation of an enterprise-level management system for DoD operations. It covers system architecture, cloud infrastructure,security requirements, and deployment strategy.</div>
                <div className="result-metadata">
                  <div className="metadata-item"><span className="metadata-label">Author:</span><span>Software Engineering Team</span></div>
                  <div className="metadata-item"><span className="metadata-label">Date:</span><span>March 15, 2026</span></div>
                  <div className="metadata-item"><span className="metadata-label">Size:</span><span>2.4 MB</span></div>
                </div>
                <div className="result-url">/Projects/2026/enterprise-management-system.pdf</div>
              </div>

              <div className="result-item">
                <div className="result-title"><a href="/projectdetails">Cloud Infrastructure Implementation - Technical Response</a></div>
                <div className="result-description">Technical response document addressing government requirements for cloud infrastructure deployment. Includes security assessment, scalability analysis, and cost Projections.</div>
                <div className="result-metadata">
                  <div className="metadata-item"><span className="metadata-label">Author:</span><span>Infrastructure Team</span></div>
                  <div className="metadata-item"><span className="metadata-label">Date:</span><span>March 10, 2026</span></div>
                  <div className="metadata-item"><span className="metadata-label">Size:</span><span>1.8 MB</span></div>
                </div>
                <div className="result-url">/Projects/2026/cloud-infrastructure-response.docx</div>
              </div>

              <div className="result-item">
                <div className="result-title"><a href="#">Data Analytics Platform - Gold Standard</a></div>
                <div className="result-description">Gold standard Project template for data analytics platforms. Contains best practices, lessons learned, and proven methodologies for similar Projects.</div>
                <div className="result-metadata">
                  <div className="metadata-item"><span className="metadata-label">Author:</span><span>Business Intelligence Group</span></div>
                  <div className="metadata-item"><span className="metadata-label">Date:</span><span>February 28, 2026</span></div>
                  <div className="metadata-item"><span className="metadata-label">Size:</span><span>3.1 MB</span></div>
                </div>
                <div className="result-url">/Projects/standards/data-analytics-gold-standard.pdf</div>
              </div>
            </div>

            <div className="pagination">
              <span className="disabled">&laquo; Previous</span>
              <span className="current">1</span>
              <a href="#page-2">2</a>
              <a href="#page-3">3</a>
              <a href="#page-4">4</a>
              <span>...</span>
              <a href="#page-9">9</a>
              <a href="#page-2">Next &laquo;</a>
            </div>
          </section>
        </main>

        <aside className="right-sidebar-container">
          <div className="sidebar right-sidebar">
            <div className="refinement-panel">
              <h2 className="zone-title">Project Contacts</h2>
              <p><span className="search-info">For questions or access to restricted materials, contact: <a href="mailto:ProjectSupport@sra.com">ProjectSupport@sra.com</a></span></p>
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
      </div>


      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default ProjectResults;
