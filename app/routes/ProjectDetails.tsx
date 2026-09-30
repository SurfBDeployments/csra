import "../styles/project-home.css";
import "../styles/default.css";

import NavHeader from "~/navheader";
import PropHeader from "~/propheader";
import Footer from "~/footer";

import { useLoaderData, Link } from "react-router";


// ---------------- LOADER ----------------
import { sampleProjectDetails } from "~/data/sampleProjectDetails"; //

export async function loader({ params }: { params: { projectId?: string } }) {
  // Access params.projectId matching the route parameter ":projectId"
  const { projectId } = params;

  const project = sampleProjectDetails.find((p) => p.projectId === projectId); //

  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }

  return project;
}

// ---------------- COMPONENT ----------------

export default function ProjectDetails() {
  const project = useLoaderData<typeof loader>();

  return (
    <>
      <NavHeader />

      <div className="projects-header container">
        <h2 className="h2proj">Project Details</h2>
        <PropHeader />
      </div>

      <div className="projectshome-container">
        <main className="projects-main">
          <article>
            <div className="project-header">
              <h2>{project.name}</h2>


              <div className="data">
                <strong>Project ID:</strong> {project.projectId}
              </div>

              <div className="data">
                <strong>Customer:</strong> {project.customer}
              </div>

              <div className="data">
                <strong>Project Type:</strong> {project.projectType}
              </div>

              <div className="data">
                <strong>Submission Date:</strong> {project.submissionDate}
              </div>
            </div>

            <section className="full-width">
              <h3>Description</h3>
              <p>{project.description}</p>
            </section>

            <div className="project-details">
              <section>
                <h4>Group</h4>
                <p>{project.group}</p>
              </section>
              <section>
                <h4>Business Program</h4>
                <p>{project.businessProgram}</p>
              </section>
              <section>
                <h4>Account</h4>
                <p>{project.account}</p>
              </section>

              <section>
                <h4>Contract Name</h4>
                <p>{project.contractName}</p>
              </section>

              <section>
                <h4>Project Manager</h4>
                <p>{project.projectManager}</p>
              </section>

              <section>
                <h4>Project Size</h4>
                <p>{project.projectSize}</p>
              </section>

              <section>
                <h4>Capabilities</h4>
                <p>{project.capabilities}</p>
              </section>
              <section>
                <h4>Tools</h4>
                <p>{project.tools}</p>
              </section>

              <section>
                <h4>Risk Level</h4>
                <p>{project.riskLevel}</p>
              </section>
            </div>

            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <Link to="/projectresults">
                <button className="button shadow-md">Back to Results</button>
              </Link>
            </div>
          </article>
        </main>

        <aside className="righthome-sidebar-container">
          <div className="sidebar right-sidebar">
            <div className="refinement-panel">
              <h2 className="zone-title">Project Contacts</h2>
              <p>
                <span className="search-info">
                  For questions or access to restricted materials, contact:{" "}
                  <a href="mailto:ProjectSupport@csra.com">
                    ProjectSupport@csra.com
                  </a>
                </span>
              </p>
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
}