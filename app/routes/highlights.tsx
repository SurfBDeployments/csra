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
              <h1>CSRA News Highlights</h1>
              <h2>Committed to Success</h2>
              <h3>Overview</h3>
              <p>CSRA&rsquo;s commitment to success is rooted in a culture of integrity, mission focus, and unwavering dedication to the clients and communities we serve. This Highlights page showcases achievements, milestones, and stories that reflect our promise to deliver excellence across every engagement.</p>
              <div>

              </div>
              <h2>Mission Commitment Statement</h2>
              <p>CSRA remains steadfast in its mission to support government agencies with reliable, secure, and innovative solutions. Our teams work collaboratively to ensure every project aligns with client goals, regulatory standards, and the highest levels of operational integrity.</p>
              <div>

              </div>
              <h2>Program Success Stories</h2>
              <ul data-tight="true">
                <li className='bullets'>
                  <p><strong>Modernization Wins:</strong> Successful deployment of cloud‑ready infrastructure for federal partners, improving scalability and security.</p>
                </li>
               <li className='bullets'>
                  <p><strong>Cyber Resilience:</strong> Enhanced cybersecurity posture for multiple agencies through proactive threat detection and rapid response frameworks.</p>
                </li>
                <li className='bullets'>
                  <p><strong>Operational Efficiency:</strong> Streamlined workflows and automated processes that reduced administrative overhead and improved mission readiness.</p>
                </li>
              </ul>
              <div>

              </div>
              <h2>Employee Excellence Highlights</h2>
              <ul data-tight="true">
                <li className='bullets'>
                  <p><strong>Leadership in Action:</strong> Recognizing employees who demonstrate exceptional leadership in mission‑critical environments.</p>
                </li>
               <li className='bullets'>
                  <p><strong>Innovation Champions:</strong> Celebrating team members who introduce new ideas, tools, or methods that elevate client outcomes.</p>
                </li>
                <li className='bullets'>
                  <p><strong>Service Milestones:</strong> Honoring long‑standing employees whose dedication strengthens CSRA&rsquo;s legacy of service.</p>
                </li>
              </ul>
              <div>

              </div>
              <h2>Client Partnership Wins</h2>
              <ul data-tight="true">
                <li className='bullets'>
                  <p><strong>Strategic Collaborations:</strong> Strengthened partnerships with federal agencies through transparent communication and consistent delivery.</p>
                </li>
                <li className='bullets'>
                  <p><strong>High‑Impact Results:</strong> Achieved measurable improvements in service delivery, system performance, and mission support.</p>
                </li>
              <li className='bullets'>
                  <p><strong>Client Satisfaction:</strong> Positive feedback from partners acknowledging CSRA&rsquo;s reliability, responsiveness, and commitment to excellence.</p>
                </li>
              </ul>
              <div>

              </div>
              <h2>Operational Improvements</h2>
              <ul data-tight="true">
               <li className='bullets'>
                  <strong>Process Optimization:</strong> Introduced new internal frameworks that enhance project tracking, reporting, and quality assurance.
                </li>
                <li className='bullets'>
                  <strong>Technology Enhancements:</strong> Adoption of modern tools and platforms to support faster, more secure operations.
                </li>
                <li className='bullets'>
                  <p><strong>Training &amp; Development:</strong> Expanded professional development programs to ensure teams remain equipped with the latest skills and certifications.</p>
                </li>
              </ul>
              <div>

              </div>
              <h2>Recognition &amp; Awards</h2>
              <ul data-tight="true">
             <li className='bullets'>
                  <strong>Industry Honors:</strong> Awards for innovation, cybersecurity leadership, and outstanding government service.
                </li>
                <li className='bullets'>
                  <strong>Team Achievements:</strong> Celebrations of cross‑functional teams who delivered exceptional results on high‑visibility projects.
                </li>
             <li className='bullets'>
                  <strong>Community Impact:</strong> Recognition for volunteer efforts and community engagement initiatives.
                </li>
              </ul>
              <div>

              </div>
              <h2>Upcoming Success‑Driven Initiatives</h2>
              <ul data-tight="true">
              <li className='bullets'>
                  Expansion of mission‑critical support programs.
                </li>
                <li className='bullets'>
                  New innovation labs focused on emerging technologies.
                </li>
               <li className='bullets'>
                  Enhanced client engagement strategies to strengthen collaboration and transparency.
                </li>
              </ul>
                   <div style={{paddingTop: '10px'}}>
                Check out <a href='/infocus' className="newsitem">Featured Content Updates...</a>
              </div>
            </section>



            {/* Social Media Section */}
            <section className="featured-section">

              <h2>Connect With Us</h2>
              <div className="social-media">
                <p>Follow CSRA on social media for company updates and news</p>
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
