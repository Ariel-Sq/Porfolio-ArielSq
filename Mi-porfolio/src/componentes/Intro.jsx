import fotoIntro from '../assets/img/fotoUno.jpg'
import '../styles/intro.css'

export const Intro = () => {
  return (
    <>
        <section className="introCont">
            <p className='intro-text'>Hola, ¿como estás? Mi nombre es Jorge Ariel Squatrito y es un placer darte la bienvenida a mi porfolio Soy de Buenos Aires - Argentina, tengo 35 años y como verás estoy introducido en este mundo fasciannte de la programación y el desarrollo web.</p>
            <div className='foto-perfil-cont'>
                 <img className='foto-perfil' src={fotoIntro} alt="Foto de perfil" />
            </div>
        </section>
    </>
  )
}
