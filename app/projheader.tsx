

interface NavLink {
  label: string;
  href: string;
  id?: string;
}

const ProjHeader = () => {


  return (
    <>

      <nav aria-label="Main navigation">
        <p className="searchlinks">
          <a href="/projects" className="searchon">Projects</a> | <a href="/proposal">Proposals</a>
        </p>
      </nav>


    </>
  );
};

export default ProjHeader;