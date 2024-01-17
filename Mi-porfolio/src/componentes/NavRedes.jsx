import "../styles/navRedes.css";

import linkImg from "../assets/img/link2.png";
import gitImg from "../assets/img/gitneon.png";
import igImg from "../assets/img/igneon.png";
import gmailImg from "../assets/img/gmail.png";

const redes = [
  {
    id: "linkedin",
    link: "#",
    img: linkImg,
  },

  {
    id: "GitHub",
    link: "#",
    img: gitImg,
  },

  {
    id: "WhatsApp",
    link: "#",
    img: igImg,
  },

  {
    id: "Gmail",
    link: "#",
    img: gmailImg,
  },
];

export const NavRedes = () => {
  return (
    <>
      <ul className="list-redes">
        {redes.map((red) => (
          <li key={red.id}>
            <a href={red.link} rel="noopener noreferrer">
              <img className="logo-redes" src={red.img} alt={red.id} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
