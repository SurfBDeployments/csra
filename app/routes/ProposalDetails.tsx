import "../styles/project-home.css";
import "../styles/default.css";

import NavHeader from "~/navheader";
import PropHeader from "~/propheader";
import Footer from "~/footer";

import { useLoaderData, Link } from "react-router";


// ---------------- LOADER ----------------
import { sampleProposalDetails } from "~/data/sampleProposalDetails"; //

export async function loader({ params }: { params: { projectId?: string } }) {
  // Access params.projectId matching the route parameter ":projectId"
  const { projectId } = params;

  const proposal = sampleProposalDetails.find((p) => p.projectId === projectId); //

  if (!proposal) {
    throw new Response("Not Found", { status: 404 });
  }

  return proposal;
}

// ---------------- COMPONENT ----------------

export default function ProposalDetails() {
  const proposal = useLoaderData<typeof loader>();

  return (
    <>
      <NavHeader />

      <div className="projects-header container">
        <h2 className="h2proj">Proposal Details</h2>
        <PropHeader />
      </div>

      <div className="projectshome-container">
        <main className="projects-main">
          <article>
            <div className="project-header">
              <h2>{proposal.name}</h2>

              <div className="data">
                <strong>Proposal ID:</strong> {proposal.id}
              </div>

              <div className="data">
                <strong>Project ID:</strong> {proposal.projectId}
              </div>

              <div className="data">
                <strong>Customer:</strong> {proposal.customer}
              </div>

              <div className="data">
                <strong>Proposal Type:</strong> {proposal.proposalType}
              </div>

              <div className="data">
                <strong>Submission Date:</strong> {proposal.submissionDate}
              </div>
            </div>

            <section className="full-width">
              <h3>Description</h3>
              <p>{proposal.description}</p>
            </section>

            <div className="project-details">
              <section>
                <h4>Group</h4>
                <p>{proposal.group}</p>
              </section>

              <section>
                <h4>Contract Name</h4>
                <p>{proposal.contractName}</p>
              </section>

              <section>
                <h4>Proposal Manager</h4>
                <p>{proposal.proposalManager}</p>
              </section>

              <section>
                <h4>Solicitation Status</h4>
                <p>{proposal.solicitationStatus}</p>
              </section>

              <section>
                <h4>Evaluation Score</h4>
                <p>{proposal.evaluationScore}</p>
              </section>

              <section>
                <h4>Risk Level</h4>
                <p>{proposal.riskLevel}</p>
              </section>
              <section>
                <h4>Contract Type</h4>
                <p>{proposal.contractType}</p>
              </section>
              <section>
                <h4>Contract Vehicle</h4>
                <p>{proposal.contractVehicle}</p>
              </section>
              <section>
                <h4>Proposal Type</h4>
                <p>{proposal.proposalType}</p>
              </section>


            </div>

            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <Link to="/proposalresults">
                <button className="button shadow-md">Back to Results</button>
              </Link>
            </div>
          </article>
        </main>

        <aside className="righthome-sidebar-container">
          <div className="sidebar right-sidebar">
            <div className="refinement-panel">
              <h2 className="zone-title">Proposal Contacts</h2>
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