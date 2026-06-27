import { useState } from 'react';
import '../styles/default.css';
import Button from '@mui/material/Button';
import MediaControlCard from './videocard';
import Footer from '~/footer';


interface NavLink {
  label: string;
  href: string;
}

interface FeaturedBox {
  title: string;
  image: string;
  links: NavLink[];
}

const format = (seconds: number): string => {
  if (Number.isNaN(seconds)) {
    return '00:00'
  }

  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");

  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`
  } else {
    return `${mm}:${ss}`
  }
};
function HomePage() {
  // ...
  const [likes, setlikes] = useState(0);

  function handleClick() {
    setlikes(likes + 1);
  }

  const topNavLinks: NavLink[] = [
    { label: 'Our Org', href: '#' },
    { label: 'What We Do', href: '#' },
    { label: 'Winning Work', href: '#' },
    { label: 'Project Execution', href: '/projectsummary' },
    { label: 'Collab & Community', href: '#' },
    { label: 'Benefits & Comp', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Help', href: '#' },
  ];

  const sidebarLinks: NavLink[] = [
    { label: 'Wellness Program', href: '/benefits/wellness' },
    { label: 'Timecard Support', href: '/benefits/timecard' },
    { label: 'Pay Dates & Holidays', href: '/benefits/payroll' },
    { label: 'Lync Communication', href: '/support/lync' },
    { label: 'SRA Connects', href: '/collab/sra-connects' },
    { label: 'Spark Community', href: 'https://spark.sra.com/' },
  ];

  const featuredBoxes: FeaturedBox[] = [
    {
      title: 'Collaboration & Community',

      image: '/CollaborateBanner400.jpg',
      links: [
        { label: 'Best Teams at SRA', href: '/collab/bestteams' },
        { label: "Bill's Blog", href: 'https://spark.sra.com/' },
        { label: 'Communities of Practice', href: '/collab/cops' },
        { label: 'Employee Resource Groups', href: '/collab/erg' },
        { label: 'IS THERE', href: '/collab/isthere' },
        { label: 'Lync', href: '/support/infotech/pe/lync' },
        { label: 'SRA Connects', href: '/collab/sra-connects' },
        { label: 'Spark', href: 'https://spark.sra.com/' },
      ],
    },
    {
      title: 'Winning Work',
      image: '/WinningWorkBanner400.jpg',
      links: [
        { label: 'Find Staff', href: '/careers/findstaff' },
        { label: 'Find Projects', href: '/projectsummary' },
        { label: 'GovWin CRM', href: 'https://govwin.sra.com/' },
        { label: 'Marketing Collateral', href: '/winwork' },
        { label: 'Recompetes', href: '/winwork/recompetes' },
        { label: 'Reusable Proposal Content', href: '/winwork/propdev' },
      ],
    },
    {
      title: 'What We Do',
      image: '/whatwedomain400.jpg',
      links: [
        { label: 'Business Intelligence / Big Data', href: '/whatwedo/bibd' },
        { label: 'Cloud Computing', href: '/whatwedo/cloud' },
        { label: 'Cyber Security', href: '/whatwedo/cybersec' },
        { label: 'Engineering & Logistics', href: '/whatwedo/englog' },
        { label: 'Infrastructure Services', href: '/whatwedo/is' },
        { label: 'Management & Consulting', href: '/whatwedo/mgmtcons' },
        { label: 'Mobile Solutions', href: '/whatwedo/mobilesol' },
        { label: 'Research & Analysis', href: '/whatwedo/research' },
        { label: 'Software & System Development', href: '/whatwedo/softsysdev' },
      ],
    },
  ];

  return (
    <>
      {/* Header */}
      <header>
        <div className="container mx-auto py-4">

          <img src="/csra-banner.png" alt="CSRA Banner" />
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

        {/* Top Navigation */}
        <div className="topnav container">
          <a href="/">Home</a>
          {topNavLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </header>

      {/* Main Container */}
      <div className="container">
        <div className="page-layout">
          {/* Sidebar */}
          <aside>
            <h3>My CSRA</h3>
            <ul>
              {sidebarLinks.map((link) => (

                <li key={link.label}>
                  <a href={link.href} target={link.href.startsWith('http') ? '_blank' : '_self'} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="ethics-hotline">
              <strong>Ethics Hotline</strong>
              <br />
              <a href="https://secure.ethicspoint.com/" target="_blank" rel="noopener noreferrer">
                Report Online
              </a>
              <br />
              or call <strong>866-384-4277</strong>
            </div>


            <section className="todo-section" style={{ marginTop: '20px' }}>
              <h3>Employee To-Do</h3>
              <div className="todo-item">
                <a href="/benefits/wellness">Participate to earn Bright Rewards Credits</a>
                <small>Due: 8/31/2025</small>
              </div>
            </section>
            <div className="jobs-section">
              <h3>Hot Jobs</h3>
              <div className="job-item">
                <a href="/careers/jobs">Internal Job Opportunities</a>
              </div>
              <div className="job-item">
                <a href="/careers/jobs">Current Openings</a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            {/* Featured Content Section */}
            <section className="featured-section">
              <h2>Featured Content</h2>
              <div className="three-col">
                {featuredBoxes.map((box) => (
                  <div key={box.title} className="col-box">
                    <h3>{box.title}</h3>
                    <div className="col-box-image">
                      <img src={box.image} alt={box.title} />
                    </div>
                    <ul>
                      {box.links.map((link) => (
                        <li key={link.label}>
                          <a href={link.href} target={link.href.startsWith('http') ? '_blank' : '_self'} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* News Section */}
            <section className="featured-section">
              <h2>Latest News & Updates</h2>
              <div className="news-section">
                <div>
                  <div className="news-item">
                    <h4>Company Announcements</h4>
                    <p>
                      Stay up to date with the latest CSRA announcements, policy updates, and important company information. Check back regularly for updates.
                    </p>
                    <a href="/news">View All News →</a>
                  </div>
                  <div className="news-item">
                    <h4>Featured Story</h4>
                    <p>
                      SRA highlights achievements and featured content from across the organization. Celebrate wins and learn from peers.
                    </p>

                  </div>
                </div>
                <div>
                  <div className="highlights">
                    <h3>SRA Highlights</h3>
                    <span>Excellence in Innovation</span>
                    <span>Committed to Success</span>
                  </div>
                  <div className="in-focus">
                    <h3>In Focus</h3>
                    <span>Featured Content Updates</span>
                  </div>

                </div>
              </div>
            </section>



            {/* Video Section */}



            <section className="video-section">
              <MediaControlCard />
              {/* <h3>Featured Video: SRA Get Covered</h3>
              <p>Congratulations to our <strong>Affordable Care Act program team</strong> for putting together a commercial supporting the mission of the customer to drive traffic to enrollment assistance centers and increase enrollment in qualified health plans.</p>
              <div className="video-placeholder">
                <div className="video_section">
                  <video
                    src={
                      "https://www.youtube.com/watch?v=F34Vlqtv0lQ"
                    }
                    poster="../affordablecarescreen.png"
                    controls={true}
                    className="video_player"
                  >
                    <track kind="captions" src="captions.vtt" srcLang="en" label="English" />
                  </video>
                </div>
              </div> */}
            </section>

            {/* Social Media Section */}
            <section className="featured-section">

              <h2>Connect With Us</h2>
              <div className="social-media">
                <p>Follow SRA on social media for company updates and news</p>
                <div className="social-icons">
                  <p><img src="./socialicons.png" alt="Social Media" height="30" /></p>
                </div>


                <Button variant="contained" onClick={handleClick} size="medium">Like ({likes})</Button>




              </div>
            </section>
          </main>
        </div>

        {/* Footer */}
     <Footer />
      </div>
    </>
  );
};

export default HomePage;
