import "../styles/sectionCards.css";
import diplomaUno from "../assets/img/diplomaUno.jpg";
import diplomaDos from "../assets/img/diplomaDos.jpg";
//import { useState } from "react";
//import { ModalCfp } from "./ModalCfp";

export const SectionCards = () => {
  /*const [showLargeImage, setShowLargeImage] = useState(false);

  <ModalCfp
    isShow={showLargeImage}
    closeModal={() => setShowLargeImage(false)}
  />;*/

  return (
    <>
      <div className="section-cards">
        <h2 className="titulo">BootCamps</h2>
        <p className="description-bootscamp">
          Estos son algunos de los bootscamps con los que aprendí a programar.{" "}
        </p>
        <div className="contenedor-videos">
          <iframe
            width="250"
            height="160"
            src="https://www.youtube.com/embed/ladwC6Lrs-M?si=8bYGACN8Dxyy-WH9"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="250"
            height="160"
            src="https://www.youtube.com/embed/6Jfk8ic3KVk?si=Ukru9pgeArd_Fqam"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="250"
            height="160"
            src="https://www.youtube.com/embed/ivdTnPl1ND0?si=VyOO9asHjse4JFfh"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            width="250"
            height="160"
            src="https://www.youtube.com/embed/uobZctyylMs?si=BUpFFBLV_1N2dw3g"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="diplomas-cont">
          <h3>Certificaciones</h3>
          <img
            className="diploma"
            width="180"
            height="120"
            src={diplomaUno}
            alt="Certificado"
            //onClick={() => setShowLargeImage(true)}
          />
          <img
            className="diploma"
            width="180"
            height="120"
            src={diplomaDos}
            alt="Certificado"
          />
        </div>
      </div>
    </>
  );
};
