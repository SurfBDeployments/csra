


interface NavLink {
  label: string;
  href: string;
  id?: string;
}

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
                <label htmlFor="capabilities" className="form-label">Capabilities:</label>
                <input type="text" id="capabilities" name="capabilities" placeholder="Enter capabilities" />
              </div>

              <div className="form-group">
                <label htmlFor="artifact" className="form-label">Proposal Artifacts:</label>
                <select id="artifact" name="artifact">
                  <option value="">All Artifacts</option>
                  <option value="Full Project">Full Project</option>
                  <option value="Gold Standard">Gold Standard</option>
                  <option value="Oral Presentation">Oral Presentation</option>
                  <option value="Past Performance">Past Performance</option>
                  <option value="Project Graphic">Project Graphic</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="tools" className="form-label">Tools:</label>
                <input type="text" id="tools" name="tools" placeholder="Enter tools" />
              </div>

              <div className="form-group">
                <label htmlFor="govwinId" className="form-label">GovWin ID:</label>
                <input type="text" id="govwinId" name="govwinId" placeholder="Enter GovWin ID" />
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