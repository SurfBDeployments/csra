
interface NavLink {
  label: string;
  href: string;
  id?: string;
}

const PropHeader = () => {


  return (
    <>

      <nav aria-label="Main navigation">
        <p className="searchlinks"><a href="/projects">Projects</a> | <a href="/proposal" className="searchon">Proposals</a> </p>
      </nav>



    </>
  );
};

export default PropHeader;