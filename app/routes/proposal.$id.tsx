import { useLoaderData } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import { sampleProposalDetails } from "~/data/sampleProposalDetails";
import NavHeader from "~/navheader";
import Footer from "~/footer";
import ProjHeader from "~/projheader";
import "../styles/project-home.css";
import "../styles/default.css";

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.id;
  const proposal = sampleProposalDetails.find(p => p.id === id);

  if (!proposal) {
    throw new Response("Not Found", { status: 404 });
  }

  return proposal;
}

export default function ProposalDetailPage() {
  const proposal = useLoaderData<typeof loader>();

  return (
    <>
      <NavHeader />

      <div className="projects-header container">
        <h2 className="h2proj">Proposals Center</h2>
        <ProjHeader />
      </div>

      <div className="projectshome-container">
        <main className="projects-main">
          <article>
            <div className="project-header">
              <h2>{proposal.name}</h2>
              <div className="data">
                <strong>Proposal ID:</strong> {proposal.projectId}
              </div>
              <div className="date-range">
                <strong>Submission Window:</strong> {proposal.submissionDate} – {proposal.dueDate}
              </div>
            </div>

            <section className="full-width">
              <h3>Proposal Description</h3>
              <p>{proposal.description}</p>
            </section>

            <div className="project-details">
              <section>
                <h4>Customer</h4>
                <p>{proposal.customer}</p>
              </section>

              <section>
                <h4>Group</h4>
                <p>{proposal.group}</p>
              </section>

              <section>
                <h4>Business Program</h4>
                <p>{proposal.businessProgram}</p>
              </section>

              <section>
                <h4>Account</h4>
                <p>{proposal.account}</p>
              </section>

              <section>
                <h4>Proposal Manager</h4>
                <p>{proposal.proposalManager}</p>
              </section>

              <section>
                <h4>Technical Lead</h4>
                <p>{proposal.technicalLead}</p>
              </section>

              <section>
                <h4>Contract Name</h4>
                <p>{proposal.contractName}</p>
              </section>

              <section>
                <h4>Contract Type</h4>
                <p>{proposal.contractType}</p>
              </section>

              <section>
                <h4>Proposal Type</h4>
                <p>{proposal.proposalType}</p>
              </section>

              <section>
                <h4>Evaluation Score</h4>
                <p>{proposal.evaluationScore}</p>
              </section>

              <section>
                <h4>Risk Level</h4>
                <p>{proposal.riskLevel}</p>
              </section>
            </div>

            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <a href={`/proposals/${proposal.id}/edit`}>
                <button type="submit" className="button shadow-md">
                  Edit Proposal
                </button>
              </a>
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
                  <a href="mailto:ProposalSupport@csra.com">
                    ProposalSupport@csra.com
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
