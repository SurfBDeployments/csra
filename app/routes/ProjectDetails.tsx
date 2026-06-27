import React, { useState } from 'react';
import '../styles/project-home.css';
import '../styles/default.css';

import Footer from '../footer';
import NavHeader from '../navheader';

interface ProjectDetails {
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
  projectManager: string;
  technicalLead: string;
  projectSize: string;
  contractName: string;
  contractType: string;
  projectType: string;
  riskLevel: string;
}

const ProjectHome: React.FC = () => {
  // Sample project data - replace with actual data from API
  const [projects, setProjects] = useState<ProjectDetails[]>([
    {
      id: 'PROJ-2024-001',
      name: 'Cloud Infrastructure Implementation - Technical Response',
      projectId: 'PROJ-2024-001',
      startDate: 'January 15, 2024',
      endDate: 'December 31, 2024',
      description: 'Technical response document addressing government requirements for cloud infrastructure deployment. Includes security assessment, scalability analysis, and cost Projections.',
      customer: 'Acme Corporation Enterprise Solutions',
      group: 'Solutions & Services',
      businessProgram: 'Enterprise Services Division',
      account: 'Enterprise Clients - North America',
      projectManager: 'Sarah Johnson',
      technicalLead: 'Michael Chen',
      projectSize: 'Large (200+ person-hours)',
      contractName: 'Enterprise Portal Development Contract',
      contractType: 'Fixed Price',
      projectType: 'Development',
      riskLevel: 'Medium'
    }
  ]);

  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(
    projects.length > 0 ? projects[0] : null
  );

  return (
    <>
      <NavHeader />

      {/* Main Container */}


      <div className="projects-header container">
        <h2>Project Summary Tool Center</h2>
        <nav aria-label="Main navigation">
          <p className="searchlinks"><a href="#">Corporate Sites</a> | <a href="#">Project Sites</a> | <a href="#">People</a> | <a href="/proposal">Proposals</a> | <a href="/projectsummary" className='searchon'>Project Summaries</a> | <a href="#">Corporate Documents</a> | <a href="#">Resumes</a> | <a href="#">Policies &amp; Guidelines</a> | <a href="#">Advanced</a></p>
        </nav>
      </div>



      <div className="projectshome-container">


        <main className="projects-main">


          {selectedProject && (
            <article>
              <h2>Project Summary Tool</h2>

              <div className="project-header">
                <h2>{selectedProject.name}</h2>
                <div className="identifier">Project ID: {selectedProject.projectId}</div>
                <div className="date-range">
                  <strong>Period of Performance:</strong> {selectedProject.startDate} - {selectedProject.endDate}
                </div>
              </div>

              <section className="full-width">
                <h3>Project Description</h3>
                <p>{selectedProject.description}</p>
              </section>

              <div className="project-details">
                <section>
                  <h4>Customer</h4>
                  <p>{selectedProject.customer}</p>
                </section>

                <section>
                  <h4>Group</h4>
                  <p>{selectedProject.group}</p>
                </section>

                <section>
                  <h4>Business Program</h4>
                  <p>{selectedProject.businessProgram}</p>
                </section>

                <section>
                  <h4>Account</h4>
                  <p>{selectedProject.account}</p>
                </section>

                <section>
                  <h4>Project Manager</h4>
                  <p>{selectedProject.projectManager}</p>
                </section>

                <section>
                  <h4>Technical Lead</h4>
                  <p>{selectedProject.technicalLead}</p>
                </section>

                <section>
                  <h4>Project Size</h4>
                  <p>{selectedProject.projectSize}</p>
                </section>

                <section>
                  <h4>Contract Name</h4>
                  <p>{selectedProject.contractName}</p>
                </section>

                <section>
                  <h4>Contract Type</h4>
                  <p>{selectedProject.contractType}</p>
                </section>

                <section>
                  <h4>Project Type</h4>
                  <p>{selectedProject.projectType}</p>
                </section>

                <section>
                  <h4>Risk Level</h4>
                  <p>{selectedProject.riskLevel}</p>
                </section>
              </div>


              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <a href={`/projects/${selectedProject.id}/edit`}> <button type="submit" className="button shadow-md">Edit Project</button></a>
                <a href={`/projects/${selectedProject.id}/details`}><button type="reset" className="button shadow-md">View Full Details</button></a>
              </div>
            </article>
          )}

          {!selectedProject && (
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

export default ProjectHome;
