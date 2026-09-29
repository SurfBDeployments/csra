import { useState } from 'react';
import '../styles/project-home.css';
import '../styles/default.css';
import ProjHeader from '~/projheader';
import SearchForm from '../searchform';
import Footer from '../footer';
import NavHeader from '../navheader';




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
        <h2 className='h2proj'>Projects Center</h2>

        <p className="search-info">This search looks for matches in the Project repository.</p>
        <ProjHeader />
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

          <SearchForm />

        </main>

      </div>

      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default ProjectSummary;
