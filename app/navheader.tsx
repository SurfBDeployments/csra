


interface NavLink {
  label: string;
  href: string;
  id?: string;
}

const NavHeader = () => {
  const topNavLinks: NavLink[] = [
    { label: 'Our Org', href: '#', id: 'our-org' },
    { label: 'What We Do', href: '#', id: 'what-we-do' },
    { label: 'Winning Work', href: '#', id: 'winning-work' },
    { label: 'Project Execution', href: '/projectsummary', id: 'project-execution' },
    { label: 'Collab & Community', href: '#', id: 'collab-community' },
    { label: 'Benefits & Comp', href: '#', id: 'benefits-comp' },
    { label: 'Careers', href: '#', id: 'careers' },
    { label: 'Help', href: '#', id: 'help' },
  ];

  return (
    <>
      {/* Header */}
      <header>
        <div className="container mx-auto py-4">
            <a href="/" className="logo">
          <img src="/csra-banner.png" alt="CSRA Banner" />
          </a>
          <div className="search">
            <input
              type="search"
              name="search"
              id="search"
              className="searchbox"
              placeholder="Search"
              aria-label="Search"
            /> 
          
            <img src="/searchicon2.png" width="28" height="28" alt="Search Icon" className="search-icon"/> 
          </div>
        </div>        
        
        {/* Top Navigation */}
        <div className="topnav container">
          <a href="/">Home</a>
          {topNavLinks.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </header>
    </>
  );
};

export default NavHeader;