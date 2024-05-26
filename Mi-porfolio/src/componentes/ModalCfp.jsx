import diplomaUno from "../assets/img/diplomaUno.jpg";
import { AiOutLineClose } from "react-icons/ai";
import "../styles/modalCfp.css";

export const ModalCfp = ({ isShow, closeModal }) => {
  if (!isShow) return null;
  return (
    <div className="modal">
      <AiOutLineClose
        onClick={closeModal}
        size={30}
        color="#fff"
        cursor={"pointer"}
      />
      <img className="diploma-modal" src={diplomaUno} alt="Cetificado" />
    </div>
  );
};
