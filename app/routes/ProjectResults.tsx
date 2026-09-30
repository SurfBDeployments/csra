import { useLoaderData, Link } from "react-router";

import NavHeader from "~/navheader";
import Footer from "~/footer";
import ProjHeader from "~/propheader";
import SearchForm from "~/searchform";

import { sampleProjectDetails } from "~/data/sampleProjectDetails";
import type { ProjectDetails } from "~/data/sampleProjectDetails";


import "../styles/project-home.css";
import "../styles/default.css";

// -------------------------------------------------------
// LOADER (pagination + filtering + search)
// -------------------------------------------------------
export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);


  const keywords = (url.searchParams.get("keywords") ?? "").trim().toLowerCase();
  const capability = (url.searchParams.get("capabilities") ?? url.searchParams.get("capability") ?? "").trim().toLowerCase();
  const artifactType = (url.searchParams.get("artifactType") ?? url.searchParams.get("artifactType") ?? "").trim().toLowerCase();
  const tools = (url.searchParams.get("tools") ?? url.searchParams.get("tool") ?? "").trim().toLowerCase();
  const govWinId = (url.searchParams.get("govwinId") ?? url.searchParams.get("govwinId") ?? "").trim().toLowerCase();
  const customer = (url.searchParams.get("customers") ?? url.searchParams.get("customer") ?? "").trim().toLowerCase();

  const submittedWithin = url.searchParams.get("submittedWithin"); // gets "1", "2", or "3"



  let results: ProjectDetails[] = sampleProjectDetails;

  // sUBMISSION DATE
  if (submittedWithin) {
    const yearsBack = parseInt(submittedWithin, 10);
    if (!isNaN(yearsBack)) {
      const now = new Date();
      // Subtracts N years from today's date
      const cutoffDate = new Date(
        now.getFullYear() - yearsBack,
        now.getMonth(),
        now.getDate()
      );

      results = results.filter((p) => {
        const subDate = new Date(p.submissionDate);
        return !isNaN(subDate.getTime()) && subDate >= cutoffDate;
      });
    }
  }
  // Filter: Keywords
  if (keywords) {
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(keywords) ||
        p.description.toLowerCase().includes(keywords) ||
        p.projectManager.toLowerCase().includes(keywords) ||
        p.technicalLead.toLowerCase().includes(keywords) ||
        p.group.toLowerCase().includes(keywords)
    );
  }

  // Filter: Capabilities
  if (capability) {
    results = results.filter(
      (p) =>
        (p.capabilities && p.capabilities.toLowerCase().includes(capability)) ||
        p.group.toLowerCase().includes(capability) ||
        p.businessProgram.toLowerCase().includes(capability) ||
        p.projectType.toLowerCase().includes(capability) ||
        p.description.toLowerCase().includes(capability)
    );
  }

  // Filter: Artifacts
  if (artifactType) {
    results = results.filter(
      (p) => p.artifactType.toLowerCase().includes(artifactType)
    );
  }



  // Filter: Tools
  if (tools) {
    results = results.filter((p) =>
      p.tools.toLowerCase().includes(tools)
    );
  }


  // Filter: GovWin ID / Project ID
  if (govWinId) {
    results = results.filter(
      (p) =>
        (p.govWinId && p.govWinId.toLowerCase().includes(govWinId)) ||
        p.projectId.toLowerCase().includes(govWinId) ||
        p.id.toLowerCase().includes(govWinId)
    );
  }

  // Filter: Customers
  if (customer) {
    results = results.filter(
      (p) =>
        p.customer.toLowerCase().includes(customer) ||
        p.account.toLowerCase().includes(customer)
    );
  }

  return {
    keywords,
    capability,
    artifactType,
    tools,
    govWinId,
    customer,
    total: results.length,
    submittedWithin,
    results,
  };
}

// -------------------------------------------------------
// COMPONENT
// -------------------------------------------------------
export default function ProjectResults() {
  const { results } = useLoaderData() as {
    results: ProjectDetails[];
  };

  return (
    <>
      <NavHeader />

      <div className="projects-header container">
        <h2 className="h2proj">Projects Summary Results</h2>
        <p className="search-info">
          This search looks for matches in the Projects repository.
        </p>
        <ProjHeader />
      </div>
      <div className="projectshome-container">


        {/* MAIN CONTENT */}
        <main className="projects-main">
          <SearchForm />

          <section className="main-content">
            <div className="search-controls">
              <div className="results-count">
                <strong>Showing {results.length} results</strong>
              </div>
              <select className="sort-dropdown">
                <option value="relevance">Sort by Relevance</option>
                <option value="date">Sort by Date</option>
                <option value="title">Sort by Title</option>
              </select>
            </div>

            <div className="search-results">
              <h3 className="zone-title">Project Search Results</h3>

              {results.map((project) => (
                <div key={project.projectId} className="project-result-card" style={{ marginBottom: "24px" }}>
                  <h3 className="project-title" style={{ margin: "0 0 6px 0" }}>
                    <Link
                      to={`/projects/${project.projectId}`}
                      style={{
                        color: "#0056b3",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                      className="projects-link"
                    >
                      {project.name}
                    </Link>
                  </h3>

                  <p style={{ margin: "2px 0", color: "#555", fontSize: "0.9rem" }}>
                    <strong>Project ID:</strong> {project.projectId} | <strong>Customer:</strong> {project.customer}
                  </p>

                  <p style={{ margin: "2px 0", color: "#666", fontSize: "0.85rem" }}>
                    <strong>Author:</strong> {project.group || project.projectManager} |{" "}
                    <strong>Artifact:</strong> {project.artifactType || "N/A"} |{" "}
                    <strong>Date:</strong> {project.submissionDate} |{" "}
                    <strong>Project Size:</strong> {project.projectSize}
                  </p>

                  <p style={{ margin: "6px 0", fontSize: "0.95rem" }}>{project.description}</p>

                  <p style={{ margin: "2px 0", fontSize: "0.85rem", color: "#2b6cb0" }}>
                    <code>/Projects/2026/{project.projectId.toLowerCase()}.pdf</code>
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* RIGHT SIDEBAR */}
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