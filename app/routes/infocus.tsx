import { useState } from 'react';
import '../styles/default.css';
import Button from '@mui/material/Button';
import type { Route } from "./+types/home";
import Footer from '../footer';
import NavHeader from '../navheader';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "CSRA Modern Intranet" },
    {
      name: "description",
      content: "Modernized CSRA enterprise intranet built with React, TypeScript, and Tailwind CSS.",
    },
  ];
}
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
    { label: 'CSRA Connects', href: '/collab/CSRA-connects' },
    { label: 'Spark Community', href: 'https://spark.CSRA.com/' },
  ];


  return (
    <>
      {/* Header */}
      <NavHeader />

      {/* Main Container */}
      <div className="container">
        <div className="page-layout">
          {/* Sidebar */}
          <aside>
               <section className="todo-section">
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
</section>

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
            <section>
              <h1>CSRA InFocus</h1>

              <h2>Excellence in Innovation</h2>
              <h3>Executive Overview</h3>
              Innovation is at the core of CSRA&rsquo;s mission to support government agencies with forward‑thinking solutions. This InFocus page highlights the initiatives, technologies, and breakthroughs that demonstrate our commitment to delivering excellence through innovation.
              <div>

              </div>
              <h2>Innovation Spotlight</h2>
              <ul data-tight="true">
                <li className="bullets">
                  <strong>Next‑Gen Cloud Integration:</strong> Advancing secure, scalable cloud environments tailored for federal missions.
                </li>
                <li className="bullets">
                  <strong>AI‑Driven Analytics:</strong> Leveraging machine learning to enhance decision‑making, threat detection, and operational efficiency.
                </li>
                <li className="bullets">
                  <strong>Zero‑Trust Security Models:</strong> Implementing modern cybersecurity frameworks that protect critical systems and data.
                </li>
              </ul>
              <div>

              </div>
              <h2>Current Strategic Initiatives</h2>
              <ul data-tight="true">
                <li className="bullets">
                  <strong>Digital Transformation Programs:</strong> Supporting agencies as they modernize legacy systems and adopt emerging technologies.
                </li>
                <li className="bullets">
                  <strong>Mission‑Focused Engineering:</strong> Developing custom solutions that align with unique operational requirements.
                </li>
                <li className="bullets">
                  <strong>Interoperability Enhancements:</strong> Ensuring seamless communication and data exchange across multi‑agency environments.
                </li>
              </ul>
              <div>

              </div>
              <h2>Emerging Technologies in Use</h2>
              <ul data-tight="true">
                <li className="bullets">
                  <strong>Automation &amp; RPA:</strong> Reducing manual workloads and improving accuracy through robotic process automation.
                </li>
                <li className="bullets">
                  <strong>Advanced Data Visualization:</strong> Delivering interactive dashboards that provide real‑time mission insights.
                </li>
                <li className="bullets">
                  <strong>Secure DevOps Pipelines:</strong> Accelerating development cycles while maintaining compliance and security.
                </li>
              </ul>
              <div>

              </div>
              <h2>Client Impact Stories</h2>
              <ul data-tight="true">
                <li className="bullets">
                  <strong>Improved Response Times:</strong> Agencies report faster decision cycles due to enhanced data analytics.
                </li>
                <li className="bullets">
                  <strong>Strengthened Cyber Defense:</strong> Proactive monitoring and automated threat mitigation have reduced incident impact.
                </li>
                <li className="bullets">
                  <strong>Operational Readiness Gains:</strong> Modernized systems have increased reliability and mission support capabilities.
                </li>
              </ul>
              <div>

              </div>
              <h2>Metrics of Excellence</h2>
              <ul data-tight="true">
                <li className="bullets">
                  <strong>99.9% System Uptime</strong> across mission‑critical environments.
                </li>
                <li className="bullets">
                  <strong>30% Reduction in Manual Processes</strong> through automation initiatives.
                </li>
                <li className="bullets">
                  <strong>High Client Satisfaction Scores</strong> reflecting trust in CSRA&rsquo;s innovative solutions.
                </li>
              </ul>
              <div>

              </div>
              <h2>Upcoming Innovation Milestones</h2>
              <ul data-tight="true">
                <li className="bullets">
                  Launch of new AI‑powered mission support tools.
                </li>
                <li className="bullets">
                  Expansion of cloud modernization programs.
                </li>
                <li className="bullets">
                  Introduction of advanced cybersecurity training modules.
                </li>
              </ul>
              <div style={{paddingTop: '10px'}}>
                Check out <a href='/highlights' className='newsitem'>CSRA highlights...</a>
              </div>
            </section>



            {/* Video Section */}




            {/* Social Media Section */}
            <section className="featured-section">

              <h2>Connect With Us</h2>
              <div className="social-media">
                Follow CSRA on social media for company updates and news
                <div className="social-icons">
                  <img src="./socialicons.png" alt="Social Media" height="30" />
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
