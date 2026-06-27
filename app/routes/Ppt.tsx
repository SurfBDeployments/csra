import React from 'react';
import '../styles/project-home.css';
import '../styles/default.css';

import Footer from '../footer';
import NavHeader from '../navheader';

interface PptItem {
  id: string;
  title: string;
  filename?: string;
}

const Ppt: React.FC = () => {
  const ppts: PptItem[] = [
    { id: '1', title: 'Project Overview Presentation', filename: 'overview.pptx' },
    { id: '2', title: 'Quarterly Results', filename: 'q-results.pptx' }
  ];

  return (
    <>
      <NavHeader />

      <div className="projects-header container">
        <h2>PPT Library</h2>
        <nav aria-label="Main navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">All Projects</a></li>
            <li><a href="/content">Browse Lists</a></li>
          </ul>
        </nav>
      </div>

      <div className="projects-container">
        <aside className="projects-sidebar">
          <nav aria-label="Sidebar navigation">
            <ul>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/content">All Content</a></li>
              <li><a href="/recycle">Recycle Bin</a></li>
            </ul>
          </nav>
        </aside>

        <main className="projects-main">
          <div className="breadcrumb">
            <a href="/">&laquo; Back to Home</a>
          </div>

          <article>
            <h2>Presentations</h2>

            <section className="full-width">
              <p>Project-related PowerPoint presentations and downloads.</p>
              <ul className="ppt-list">
                {ppts.map(ppt => (
                  <li key={ppt.id}>
                    <a href={`#`}>{ppt.title}</a> {ppt.filename && <span>— {ppt.filename}</span>}
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </main>
      </div>

      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default Ppt;
