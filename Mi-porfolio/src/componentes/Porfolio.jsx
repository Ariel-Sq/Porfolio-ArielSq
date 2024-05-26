import { Header } from "./Header";
import { NavSections } from "./NavSections";
import { Intro } from "./Intro";
import { Proyectos } from "./Proyectos";
import { SectionCards } from "./SectionCards";

export const Porfolio = () => {
  return (
    <>
      <Header />
      <hr />
      <NavSections />
      <section id="inicio">
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
