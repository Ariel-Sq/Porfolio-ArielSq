import "../styles/proyectos.css";

export const Proyectos = () => {
  return (
    <>
      <section className="proyectos-Cont">
        <h2>Proyectos</h2>
        <p className="proyect-text">
          En esta sección podrás ingresar a los distintos proyectos que creé a
          modo de poner en práctica mis habilidades.
        </p>
        <div className="card-links-cont">
          <a className="link" href="#">
            <div className="card">
              <h3>Jugar Mokepon</h3>
              <p>Proyecto de PLatzi con html, css y js</p>
            </div>
          </a>
          <a className="link" href="#">
            <div className="card">
              <h3>Carro de compras</h3>
              <p>Con jsx, css y React</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};
