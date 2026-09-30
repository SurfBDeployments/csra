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

  // Extract parameters matching form fields
  const keywords = (url.searchParams.get("keywords") ?? "").trim().toLowerCase();
  const contractVehicle = (url.searchParams.get("contractVehicle") ?? "").trim().toLowerCase();
  const contractType = (url.searchParams.get("contractType") ?? "").trim().toLowerCase();
  const projectId = (url.searchParams.get("projectId") ?? url.searchParams.get("govwinId") ?? "").trim().toLowerCase();
  const solicitationStatus = (url.searchParams.get("solicitationStatus") ?? "").trim().toLowerCase();
  const customer = (url.searchParams.get("customers") ?? url.searchParams.get("customer") ?? "").trim().toLowerCase();
  const submittedWithin = url.searchParams.get("submittedWithin");

  let results: ProposalDetails[] = sampleProposalDetails;

  // Filter: Keywords (General Search)
  if (keywords) {
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(keywords) ||
        p.description.toLowerCase().includes(keywords) ||
        p.proposalManager.toLowerCase().includes(keywords) ||
        p.group.toLowerCase().includes(keywords)
    );
  }

  // Filter: Contract Vehicle
  if (contractVehicle) {
    results = results.filter(
      (p) => p.contractVehicle && p.contractVehicle.toLowerCase().includes(contractVehicle)
    );
  }

  // Filter: Contract Type
  if (contractType) {
    results = results.filter(
      (p) => p.contractType && p.contractType.toLowerCase().includes(contractType)
    );
  }

  // Filter: Solicitation / Proposal ID / GovWin ID
  if (projectId) {
    results = results.filter(
      (p) =>
        p.projectId.toLowerCase().includes(projectId) ||
        (p.govWinId && p.govWinId.toLowerCase().includes(projectId)) ||
        p.id.toLowerCase().includes(projectId)
    );
  }

  // Filter: Solicitation Status
  if (solicitationStatus) {
    results = results.filter(
      (p) => p.solicitationStatus && p.solicitationStatus.toLowerCase().includes(solicitationStatus)
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

  // Filter: Submission Date
  if (submittedWithin) {
    const yearsBack = parseInt(submittedWithin, 10);
    if (!isNaN(yearsBack)) {
      const now = new Date();
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

  return {
    keywords,
    contractVehicle,
    contractType,
    projectId,
    solicitationStatus,
    customer,
    submittedWithin,
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

      <div className="projectshome-container">


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
                    <strong>Proposal ID:</strong> {proposal.projectId} | <strong>Customer:</strong> {proposal.customer}
                  </p>

                  {/* Metadata Row with Artifact */}
                  <p style={{ margin: "2px 0", color: "#666", fontSize: "0.85rem" }}>
                    <strong>Solicitation Status:</strong> {proposal.solicitationStatus} |{" "}

                    <strong>Date:</strong> {proposal.submissionDate} |{" "}
                    <strong>Contract Type:</strong> {proposal.contractType} |{" "}
                    <strong>Contract Vehicle:</strong> {proposal.contractVehicle}
                  </p>

                  <p style={{ margin: "6px 0", fontSize: "0.95rem" }}>{proposal.description}</p>

                  <p style={{ margin: "2px 0", fontSize: "0.85rem", color: "#3F688C" }}>
                    <code>/Proposals/2026/{proposal.projectId.toLowerCase()}.pdf</code>
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