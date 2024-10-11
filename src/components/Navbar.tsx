import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        FITNESS PAGE
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#classes">
              Clases
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#personal-training">
              Entrenador Personal
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#workout-plans">
              Planes de Entrenamiento
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
