import { useLoaderData } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import { sampleProjectDetails } from "~/data/sampleProjectDetails";
import NavHeader from "~/navheader";
import Footer from "~/footer";
import ProjHeader from "~/projheader";
import "../styles/project-home.css";
import "../styles/default.css";

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.id;
  const project = sampleProjectDetails.find(p => p.id === id);

  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }

  return project;
}

export default function ProjectDetailPage() {
  const project = useLoaderData<typeof loader>();

  return (
    <>
      <NavHeader />

      <div className="projects-header container">
        <h2 className="h2proj">Projects Center</h2>
        <ProjHeader />
      </div>

      <div className="projectshome-container">
        <main className="projects-main">
          <article>
            <div className="project-header">
              <h2>{project.name}</h2>
              <div className="data">
                <strong>Project ID:</strong> {project.projectId}
              </div>
              <div className="date-range">
                <strong>Period of Performance:</strong> {project.startDate} – {project.endDate}
              </div>
            </div>

            <section className="full-width">
              <h3>Project Description</h3>
              <p>{project.description}</p>
            </section>

            <div className="project-details">
              <section>
                <h4>Customer</h4>
                <p>{project.customer}</p>
              </section>

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
                <h4>Project Manager</h4>
                <p>{project.projectManager}</p>
              </section>

              <section>
                <h4>Technical Lead</h4>
                <p>{project.technicalLead}</p>
              </section>

              <section>
                <h4>Project Size</h4>
                <p>{project.projectSize}</p>
              </section>

              <section>
                <h4>Contract Name</h4>
                <p>{project.contractName}</p>
              </section>

              <section>
                <h4>Contract Type</h4>
                <p>{project.contractType}</p>
              </section>

              <section>
                <h4>Project Type</h4>
                <p>{project.projectType}</p>
              </section>

              <section>
                <h4>Risk Level</h4>
                <p>{project.riskLevel}</p>
              </section>
            </div>

            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <a href={`/projects/${project.id}/edit`}>
                <button type="submit" className="button shadow-md">
                  Edit Project
                </button>
              </a>
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
        </aside>
      </div>

      <div className="container">
        <Footer />
      </div>
    </>
  );
}
