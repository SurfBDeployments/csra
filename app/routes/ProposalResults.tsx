import { useLoaderData, Link } from "react-router";

import NavHeader from "~/navheader";
import Footer from "~/footer";
import ProjHeader from "~/propheader";
import PropSearchForm from "~/propsearchform";

import { sampleProposalDetails } from "~/data/sampleProposalDetails";
import type { ProposalDetails } from "~/data/sampleProposalDetails";



import "../styles/project-home.css";
import "../styles/default.css";

// -------------------------------------------------------
// LOADER (filtering + multi-field search)
// -------------------------------------------------------
export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);

  // Extract parameters matching the form field names
  const keywords = (url.searchParams.get("keywords") ?? "").trim().toLowerCase();
  const capability = (url.searchParams.get("capabilities") ?? url.searchParams.get("capability") ?? "").trim().toLowerCase();
  const artifact = (url.searchParams.get("artifact") ?? url.searchParams.get("artifacts") ?? "").trim().toLowerCase();
  const tools = (url.searchParams.get("tools") ?? url.searchParams.get("tool") ?? "").trim().toLowerCase();
  const govWinId = (url.searchParams.get("govwinId") ?? url.searchParams.get("projectId") ?? "").trim().toLowerCase();
  const customer = (url.searchParams.get("customers") ?? url.searchParams.get("customer") ?? "").trim().toLowerCase();

  let results: ProposalDetails[] = sampleProposalDetails;

  // Filter: Keywords (General Search across Name, Description, Group, Managers)
  if (keywords) {
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(keywords) ||
        p.description.toLowerCase().includes(keywords) ||
        p.proposalManager.toLowerCase().includes(keywords) ||
        p.technicalLead.toLowerCase().includes(keywords) ||
        p.group.toLowerCase().includes(keywords)
    );
  }

  // Filter: Capabilities (Searches Group, Business Program, Proposal Type, and Description)
  if (capability) {
    results = results.filter(
      (p) =>
        p.group.toLowerCase().includes(capability) ||
        p.businessProgram.toLowerCase().includes(capability) ||
        p.proposalType.toLowerCase().includes(capability) ||
        p.description.toLowerCase().includes(capability)
    );
  }

  // Filter: Proposal Artifacts (Exact or partial match against artifactType)
  if (artifact) {
    results = results.filter(
      (p) => p.artifactType.toLowerCase().includes(artifact)
    );
  }

  // Filter: Tools (Searches Technical Lead, Description, and Name)
  if (tools) {
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(tools) ||
        p.description.toLowerCase().includes(tools) ||
        p.technicalLead.toLowerCase().includes(tools)
    );
  }

  // Filter: GovWin ID / Project ID
  if (govWinId) {
    results = results.filter(
      (p) =>
        p.projectId.toLowerCase().includes(govWinId) ||
        p.id.toLowerCase().includes(govWinId)
    );
  }

  // Filter: Customers (Searches Account and Customer fields)
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
    artifact,
    tools,
    govWinId,
    customer,
    total: results.length,
    results,
  };
}

// -------------------------------------------------------
// COMPONENT
// -------------------------------------------------------
export default function ProposalResults() {
  const { results } = useLoaderData() as {
    results: ProposalDetails[];
  };

  return (
    <>
      <NavHeader />

      <div className="projects-header container">
        <h2 className="h2proj">Proposals Summary Results</h2>
        <p className="search-info">
          This search looks for matches in the Proposals repository.
        </p>
        <ProjHeader />
      </div>

      <div className="projects-container">
        {/* LEFT SIDEBAR */}
        <aside className="projects-sidebar">
          <div className="refinement-panel">
            <h2 className="zone-title">Group</h2>
            <ul className="refinement-list">
              <li>Software Engineering</li>
              <li>Business Intelligence Group</li>
              <li>Infrastructure Team</li>
            </ul>
          </div>

          <div className="refinement-panel">
            <h2 className="zone-title">Contract Type</h2>
            <ul className="refinement-list">
              <li>Fixed Price</li>
              <li>Time & Materials</li>
              <li>Cost Plus</li>
            </ul>
          </div>

          <div className="refinement-panel">
            <h2 className="zone-title">Customer</h2>
            <ul className="refinement-list">
              <li>Acme Corporation</li>
              <li>Global Finance Partners</li>
              <li>Federal Agencies</li>
            </ul>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="projects-main">
          <PropSearchForm />

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
              <h3 className="zone-title">Proposal Search Results</h3>

              {results.map((proposal) => (
                <div key={proposal.projectId} className="proposal-result-card" style={{ marginBottom: "24px" }}>
                  <h3 className="proposal-title" style={{ margin: "0 0 6px 0" }}>
                    <Link
                      to={`/proposals/${proposal.projectId}`}
                      style={{
                        color: "#0056b3",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                      className="proposal-link"
                    >
                      {proposal.name}
                    </Link>
                  </h3>

                  <p style={{ margin: "2px 0", color: "#555", fontSize: "0.9rem" }}>
                    <strong>Project ID:</strong> {proposal.projectId} | <strong>Customer:</strong> {proposal.customer}
                  </p>

                  {/* Metadata Row with Artifact */}
                  <p style={{ margin: "2px 0", color: "#666", fontSize: "0.85rem" }}>
                    <strong>Author:</strong> {proposal.group || proposal.proposalManager} |{" "}
                    <strong>Artifact:</strong> {proposal.artifactType || "N/A"} |{" "}
                    <strong>Date:</strong> {proposal.submissionDate} |{" "}
                    <strong>Evaluation Score:</strong> {proposal.evaluationScore}
                  </p>

                  <p style={{ margin: "6px 0", fontSize: "0.95rem" }}>{proposal.description}</p>

                  <p style={{ margin: "2px 0", fontSize: "0.85rem", color: "#2b6cb0" }}>
                    <code>/Proposals/2026/{proposal.projectId.toLowerCase()}.pdf</code>
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="right-sidebar-container">
          <div className="sidebar right-sidebar">
            <div className="refinement-panel">
              <h2 className="zone-title">Proposal Contacts</h2>
              <p>
                <span className="search-info">
                  For questions or access to restricted materials, contact:{" "}
                  <a href="mailto:ProposalSupport@csra.com">
                    ProposalSupport@csra.com
                  </a>
                </span>
              </p>
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
}