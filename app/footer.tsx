

const Footer = () => {
;

  return (
    <>
      {/* Header */}
      <footer>
          <p>&copy; 2026 Portfolio Project — UI Modernization of CSRA International</p>
          <div className="footer-content">
            <div className="footer-column">
              <div className="tocheader">
                <strong>Emergency Hotline</strong>
                <br />
                Toll Free 888-467-7211
              </div>
              <div>
                <strong>Emergency Resources</strong>
              </div>
              <div>
                <a href="/support/emergency">First Responders</a>
              </div>
              <div>
                <a href="/support/emergency">Emergency Procedures</a>
              </div>
            </div>
            <div className="footer-column">
              <div className="tocheader">
                <a href="/org">Our Org</a>
              </div>
              <div>
                <a href="/org/about">About CSRA</a>
              </div>
              <div>
                <a href="/org/groups">Groups</a>
              </div>
              <div>
                <a href="/org/support">Support Teams</a>
              </div>
              <div>
                <a href="/org/charts">Org Charts</a>
              </div>
              <div>
                <a href="/org/locations">Locations</a>
              </div>
              <div>
                <a href="/org/policies">Policies & Guidance</a>
              </div>
            </div>
            <div className="footer-column">
              <div className="tocheader">
                <a href="/whatwedo">What We Do</a>
              </div>
              <div>
                <a href="/whatwedo/services">Our Services</a>
              </div>
              <div>
                <a href="/whatwedo/solutions">Solutions</a>
              </div>
            </div>
          </div>
        </footer>
    </>
  );
};

export default Footer;