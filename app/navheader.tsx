import { useLocation } from "react-router";
import { Link } from "react-router";

interface NavLink {
  label: string;
  href: string;
  id?: string;
}

const NavHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const topNavLinks: NavLink[] = [
    { label: "Our Org", href: "#", id: "our-org" },
    { label: "What We Do", href: "#", id: "what-we-do" },
    { label: "Winning Work", href: "#", id: "winning-work" },
    { label: "Projects", href: "/projects", id: "projects" },
    { label: "Proposals", href: "/proposal", id: "proposals" },
    { label: "Collab & Community", href: "#", id: "collab-community" },
    { label: "Benefits & Comp", href: "#", id: "benefits-comp" },
    { label: "Careers", href: "#", id: "careers" },
    { label: "News", href: "/highlights", id: "news" },
  ];

  // Helper function to keep active state across related top-level route names
  const isActive = (href: string) => {
    if (href === "#") return false;
    if (href === "/") return currentPath === "/";

    // Keep "Projects" active on /projects, /projectResults, /projects/results, etc.
    if (href === "/projects") {
      return (
        currentPath.startsWith("/projects") ||
        currentPath.startsWith("/projectResults") ||
        currentPath.startsWith("/projectDetails")
      );
    }

    // Keep "Proposals" active on /proposals, /proposalResults, /proposalDetails, etc.
    if (href === "/proposals") {
      return (
        currentPath.startsWith("/proposal") ||
        currentPath.startsWith("/proposalResults") ||
        currentPath.startsWith("/proposalDetails")
      );
    }

    return currentPath.startsWith(href);
  };

  return (
    <header>
      <div className="container mx-auto py-4">
        <Link to="/" className="logo">
          <img src="/csra-banner.png" alt="CSRA Banner" style={{ width: "auto", maxWidth: "100%" }} />
        </Link>

        <div className="search">
          <input
            type="search"
            name="search"
            id="search"
            className="searchbox"
            placeholder="Search"
            aria-label="Search"
          />
          <img src="/searchicon2.png" width="28" height="28" alt="Search Icon" className="search-icon" />
        </div>
      </div>

      <div className="topnav container">
        <Link to="/" className={currentPath === "/" ? "active" : ""}>
          Home
        </Link>
        {topNavLinks.map((link) => (
          <Link
            key={link.id ?? link.href}
            to={link.href}
            className={isActive(link.href) ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default NavHeader;