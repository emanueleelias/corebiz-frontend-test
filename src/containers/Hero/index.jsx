import {images} from "../../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.scss";

const Hero = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }
  
  return (
    <Slider {...settings}>
      <div>
        <div className="texts slide">
          <h2 className='title__one'>¡Hola! ¿Qué es lo que buscas?</h2>
          <h3 className='title__two'>Crear o migrar tu comercio electrónico</h3>
        </div> 
        <img 
          className='img__slide'
          src={images.hero} 
          srcset={`${images.heroMobile} 319w, ${images.hero} 1920w`}
          sizes="(max-width: 768px) 319px, (max-width: 769px) 1920px" 
          alt="Imagen hero 1" />
      </div>
      <div className='slide'>
        <img 
          className='img__slide' 
          src={images.hero} 
          srcset={`${images.heroMobile} 319w, ${images.hero} 1920w`}
          sizes="(max-width: 768px) 319px, (max-width: 769px) 1920px" 
          alt="Imagen hero2" />
      </div>
      <div className='slide'>
        <img 
        className='img__slide' 
        src={images.hero} 
        srcset={`${images.heroMobile} 319w, ${images.hero} 1920w`}
        sizes="(max-width: 768px) 319px, (max-width: 769px) 1920px" 
        alt="Imagen hero 3" />
      </div>
      <div className='slide'>
        <img 
        className='img__slide' 
        src={images.hero} 
        srcset={`${images.heroMobile} 319w, ${images.hero} 1920w`}
        sizes="(max-width: 768px) 319px, (max-width: 769px) 1920px" 
        alt="Imagen hero 4" />
      </div>
    </Slider>
  )
}

export default Hero;