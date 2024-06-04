import { Header } from "./Header";
import { Intro } from "./Intro";
import { Proyectos } from "./Proyectos";
import { SectionCards } from "./SectionCards";

import "../styles/porfolio.css";

export const Porfolio = () => {
  return (
    <>
      <Header />
      <hr />
      <section id="introCont">
        <Intro />
      </section>
      <section id="proyectos">
        <Proyectos />
      </section>
      <section id="cursos">
        <SectionCards />
      </section>
    </>
  );
};
