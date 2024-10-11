import "bootstrap/dist/css/bootstrap.min.css";
// Importa la imagen local

const classes = [
  {
    title: "Entrenamiento superior",
    img: "https://media.gq.com.mx/photos/62863225500ac81936c484e4/16:9/w_1600,c_limit/pesas.jpg",
    description: "Ganar masa muscular",
  },
  {
    title: "Entrenamiento inferior",
    img: "https://i0.wp.com/evidencebasedmuscle.com/wp-content/uploads/2023/04/4379b-high-proteinvegandietswithmycoproteinandcreatineresultinsimilargainsinmuscleasmeateatingdiet.jpg?resize=1536%2C1024&ssl=1",
    description: "Tailored workouts for you",
  },
  {
    title: "Cardio",
    img: "https://cdn.mos.cms.futurecdn.net/MnXgwNqHPuAiotf4469D9o-650-80.jpg.webp", // Si esta también es local, debes importarla como el ejemplo de arriba
    description: "Plans for every goal",
  },
];

const FitnessClasses = () => {
  return (
    <section id="classes" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          {classes.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card bg-dark text-white">
                <img src={item.img} alt={item.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FitnessClasses;
