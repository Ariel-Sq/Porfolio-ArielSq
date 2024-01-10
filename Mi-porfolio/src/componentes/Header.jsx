import '../styles/header.css'
import linkedinImage from '../assets/img/linkedin.png';
import gitHubImage from '../assets/img/github.png';
import instaImage from '../assets/img/instagram.png';
import twImage from '../assets/img/gorjeo.png';

export const Header = () => {
  return (
    <>
        <header className='headerCont'>
            <h1 className="tittle">Ariel Sq</h1>
            <nav className='navList'>
                <a href=""> <img className='logoRedes' src={linkedinImage} alt="LinkedIn" /> </a>
                <a href=""> <img className='logoRedes' src={gitHubImage} alt="LinkedIn" /> </a>
                <a href=""> <img className='logoRedesC' src={instaImage} alt="LinkedIn" /> </a>
                <a href=""> <img className='logoRedesC' src={twImage} alt="LinkedIn" /> </a>
            </nav>
        </header>
        <hr />
    </>
  )
}
