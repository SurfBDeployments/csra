

interface NavLink {
  label: string;
  href: string;
  id?: string;
}

const ProjHeader = () => {


  return (
    <>

      <nav aria-label="Main navigation">
        <p className="searchlinks"><a href="#">Corporate Sites</a> | <a href="/projects" className="searchon">Projects</a> | <a href="#">People</a> | <a href="/proposal">Proposals</a> |  <a href="#">Corporate Documents</a> | <a href="#">Resumes</a> | <a href="#">Policies &amp; Guidelines</a> | <a href="#">Advanced</a></p>
      </nav>


    </>
  );
};

export default ProjHeader;