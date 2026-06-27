import React, { useState } from 'react';
import '../styles/project-home.css';
import '../styles/default.css';

import Footer from '../footer';
import NavHeader from '../navheader';

interface ProposalDetails {
  id: string;
  name: string;
  projectId: string;
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
  // Sample project data - replace with actual data from API
  const [proposals, setProposals] = useState<ProposalDetails[]>([
    {
      id: 'PROJ-2026-001',
      name: 'AI Platform - Bold Standard',
      projectId: 'PROJ-2024-001',
      startDate: 'February 8, 2026',
      endDate: 'December 31, 2026',
      description: 'Gold standard Proposal template for data analytics platforms. Contains best practices, lessons learned, and proven methodologies for similar Proposals.',
      customer: 'Acme Corporation Enterprise Solutions',
      group: 'Solutions & Services',
      businessProgram: 'Enterprise Services Division',
      account: 'Enterprise Clients - North America',
      proposalManager: 'Sarah Johnson',
      technicalLead: 'Michael Davis',
      proposalSize: 'Large (200+ person-hours)',
      contractName: 'Enterprise Portal Development Contract',
      contractType: 'Fixed Price',
      proposalType: 'Development',
      riskLevel: 'Medium'
    }
  ]);

  const [selectedProposal, setSelectedProposal] = useState<ProposalDetails | null>(
    proposals.length > 0 ? proposals[0] : null
  );

  return (
    <>
      <NavHeader />

      {/* Main Container */}


      <div className="projects-header container">
        <h2>Project Summary Tool Center</h2>
        <nav aria-label="Main navigation">
          <p className="searchlinks"><a href="#">Corporate Sites</a> | <a href="#">Project Sites</a> | <a href="#">People</a> | <a href="/proposal">Proposals</a> | <a href="/projectsummary" className='searchon'>Project Summaries</a> | <a href="#">Corporate Documents</a> | <a href="/ppt">Resumes</a> | <a href="#">Policies &amp; Guidelines</a> | <a href="#">Advanced</a></p>
        </nav>
      </div>



      <div className="projectshome-container">


        <main className="projects-main">


          {selectedProposal && (
            <article>
              <h2>Proposal Summary Tool</h2>

              <div className="project-header">
                <h2>{selectedProposal.name}</h2>
                <div className="identifier">Project ID: {selectedProposal.projectId}</div>
                <div className="date-range">
                  <strong>Period of Performance:</strong> {selectedProposal.startDate} - {selectedProposal.endDate}
                </div>
              </div>

              <section className="full-width">
                <h3>Proposal Description</h3>
                <p>{selectedProposal.description}</p>
              </section>

              <div className="project-details">
                <section>
                  <h4>Customer</h4>
                  <p>{selectedProposal.customer}</p>
                </section>

                <section>
                  <h4>Group</h4>
                  <p>{selectedProposal.group}</p>
                </section>

                <section>
                  <h4>Business Program</h4>
                  <p>{selectedProposal.businessProgram}</p>
                </section>

                <section>
                  <h4>Account</h4>
                  <p>{selectedProposal.account}</p>
                </section>

                <section>
                  <h4>Proposal Manager</h4>
                  <p>{selectedProposal.proposalManager}</p>
                </section>

                <section>
                  <h4>Technical Lead</h4>
                  <p>{selectedProposal.technicalLead}</p>
                </section>

                <section>
                  <h4>Proposal Size</h4>
                  <p>{selectedProposal.proposalSize}</p>
                </section>

                <section>
                  <h4>Contract Name</h4>
                  <p>{selectedProposal.contractName}</p>
                </section>

                <section>
                  <h4>Contract Type</h4>
                  <p>{selectedProposal.contractType}</p>
                </section>

                <section>
                  <h4>Proposal Type</h4>
                  <p>{selectedProposal.proposalType}</p>
                </section>

                <section>
                  <h4>Risk Level</h4>
                  <p>{selectedProposal.riskLevel}</p>
                </section>
              </div>


              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <a href={`/projects/${selectedProposal.id}/edit`}> <button type="submit" className="button shadow-md">Edit Project</button></a>
                <a href={`#`}><button type="reset" className="button shadow-md">View Full Details</button></a>
              </div>
            </article>
          )}

          {!selectedProposal && (
            <article>
              <h2>No Projects Available</h2>
              <p>Please select a project from the sidebar or create a new one.</p>
            </article>
          )}
        </main>
        <aside className="righthome-sidebar-container">
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

export default ProposalHome;
