import "../styles/header.css";
import gitHubImage from "../assets/img/github.png";
import instaImage from "../assets/img/instagram.png";
import twImage from "../assets/img/gorjeo.png";

export const Header = () => {
  return (
    <>
      <header className="headerCont">
        <h1 className="tittle">Ariel Sq</h1>
        <nav className="navList">
          <svg
            className="logoRedes-link"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            fill="#fff"
            stroke="#fff"
            viewBox="-143 145 512 512"
          >
            <path d="M329 145h-432c-22.1 0-40 17.9-40 40v432c0 22.1 17.9 40 40 40h432c22.1 0 40-17.9 40-40V185c0-22.1-17.9-40-40-40zm10 472c0 5.5-4.5 10-10 10h-432c-5.5 0-10-4.5-10-10V185c0-5.5 4.5-10 10-10h432c5.5 0 10 4.5 10 10v432z" />
            <path d="M-8.5 348.4h49.9v159.7H-8.5zM177.7 346.9c-28.6 0-46.5 15.6-49.8 26.6v-25.1H71.8c.7 13.3 0 159.7 0 159.7h56.1v-86.3c0-4.9-.2-9.7 1.2-13.1 3.8-9.6 12.1-19.6 27-19.6 19.5 0 28.3 14.8 28.3 36.4v82.6H241v-88.8c0-49.4-27.8-72.4-63.3-72.4zM15.4 273c-18.4 0-30.5 11.9-30.5 27.7 0 15.5 11.7 27.7 29.8 27.7h.4c18.8 0 30.5-12.3 30.4-27.7-.4-15.8-11.7-27.7-30.1-27.7z" />
          </svg>
          <a href="">
            {" "}
            <img
              className="logoRedes-git"
              src={gitHubImage}
              alt="GitHub"
            />{" "}
          </a>
          <a href="">
            {" "}
            <img
              className="logoRedes-ig"
              src={instaImage}
              alt="Instagram"
            />{" "}
          </a>
          <a href="">
            {" "}
            <img className="logoRedes-x" src={twImage} alt="X" />{" "}
          </a>
        </nav>
      </header>
      <hr />
    </>
  );
};
