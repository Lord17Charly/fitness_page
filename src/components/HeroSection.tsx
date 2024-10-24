import "bootstrap/dist/css/bootstrap.min.css";

import backgroundImage from "./BackGroundGym.jpg";

const HeroSection = () => {
  return (
    <div
      className="hero-section d-flex align-items-center text-center bg-dark text-white"
      style={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <h1 className="display-4">Prueba algo nuevo</h1>
        <p className="lead">Entra al mundo fitness HOY.</p>
        <a href="personal-training" className="btn btn-primary btn-lg">
          Empezar
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
