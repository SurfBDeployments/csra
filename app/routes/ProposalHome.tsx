import React, { useState } from 'react';
import '../styles/project-home.css';
import '../styles/default.css';
import Footer from '../footer';
import PropSearchForm from '~/propsearchform';
import NavHeader from '../navheader';
import PropHeader from '~/propheader';

interface ProposalSummary {
  id: string;
  name: string;
  ProposalId?: string;
  startDate: string;
  endDate: string;
  description: string;
  customer: string;
  group: string;
}
interface ProposalDetails {
  id: string;
  name: string;
  proposalId: string;
  startDate: string;
  endDate: string;
  description: string;
  customer: string;
  group: string;
  businessProgram: string;
  account: string;
  proposalManager: string;
  technicalLead: string;
  proposalSize: string;
  contractName: string;
  contractType: string;
  proposalType: string;
  riskLevel: string;
}

const ProposalHome: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ProposalSummary[]>([]);

  const handleSearch = (q: string) => {
    const trimmed = q.trim().toLowerCase();
    if (!trimmed) {
      setResults([]);
      return;
    }
    const matched = sampleProposal.filter(p => p.name.toLowerCase().includes(trimmed));
    setResults(matched);
  };

  return (
    <>
      <NavHeader />
      <div className="projects-header container">

        <h2 className='h2proj'>Proposals Center</h2>

        <p className="search-info">This search looks for matches in the Proposals repository.</p>

        <PropHeader />
      </div>
      <div className="projectshome-container">

        <main className="projects-main">

          <PropSearchForm />
        </main>
        <aside className="righthome-sidebar-container">
          <div className="sidebar right-sidebar">
            <div className="refinement-panel">
              <h2 className="zone-title">Proposal Contacts</h2>
              <p><span className="search-info">For questions or access to restricted materials, contact: <a href="mailto:ProposalSupport@csra.com">ProposalSupport@csra.com</a></span></p>
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
              <h2 className="zone-title">Proposal Tools</h2>
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

export default ProposalHome;
