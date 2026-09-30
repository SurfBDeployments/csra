import { useSearchParams } from "react-router";

const PropSearchForm = () => {
  return (
    <>
      <article className="search-article">
        <h3>Search Proposals</h3>
        <p className="search-description">
          Enter a Proposal name (or partial Proposal name) to find matching Proposal and hit enter.
        </p>

        <div className="search-form-container">
          <form id="ProposalSearchForm" method="get" action="/proposalresults">

            <div className="form-grid">
              <div className="form-group keyword-group">
                <label htmlFor="keywords" className="form-label">Keyword(s):</label>
                <input type="text" id="keywords" name="keywords" placeholder="Search proposals..." />
              </div>
            </div>

            <hr className="form-divider" />

            <div className="form-grid search-fields-grid">

              <div className="form-group">
                <label htmlFor="submittedWithin" className="form-label">Submitted within the last:</label>
                <select id="submittedWithin" name="submittedWithin">
                  <option value="">Select timeframe</option>
                  <option value="1">last year</option>
                  <option value="2">last 2 years</option>
                  <option value="3">last 3 years</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contractVehicle" className="form-label">Contract Vehicle:</label>
                <select id="contractVehicle" name="contractVehicle">
                  <option value="">Select Contract Vehicle</option>
                  <option value="IDIQ">IDIQ</option>
                  <option value="GSA">GSA</option>
                  <option value="BPA">BPA</option>
                  <option value="GWAC">GWAC</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contractType" className="form-label">Contract Type:</label>
                <select id="contractType" name="contractType">
                  <option value="">Select Contract Type</option>
                  <option value="Fixed Price">Fixed Price</option>
                  <option value="Time & Materials">Time & Materials</option>
                  <option value="Cost Plus">Cost Plus</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="projectId" className="form-label">Solicitation / Proposal ID:</label>
                <input type="text" id="projectId" name="projectId" placeholder="Solicitation or Proposal Number" />
              </div>

              <div className="form-group">
                <label htmlFor="solicitationStatus" className="form-label">Solicitation Status:</label>
                <select id="solicitationStatus" name="solicitationStatus">
                  <option value="">Select Status</option>
                  <option value="Draft">Draft</option>
                  <option value="Active (Accepting Bids)">Active (Accepting Bids)</option>
                  <option value="Closed / Under Evaluation">Closed / Under Evaluation</option>
                  <option value="Awarded">Awarded</option>
                  <option value="Cancelled / Archived">Cancelled / Archived</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="customers" className="form-label">Customers:</label>
                <input type="text" id="customers" name="customers" placeholder="Enter customers" />
              </div>

            </div>

            <div className="form-actions">
              <button type="submit" className="button shadow-md">Search</button>
              <button type="reset" className="button shadow-md">Clear</button>
            </div>

          </form>

        </div>
      </article>
    </>
  );
};

export default PropSearchForm;