import {images} from "../../constants";
import { useGetProductsQuery } from "../../store/apis/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../store/slices/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import Slider from "react-slick";
import Spinner from "../../components/Spinner/Spinner";
import "./products.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';

const SampleNextArrow = ({ onClick, className }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={images.arrowRight} alt="Icono de flecha a la derecha" />
    </div>
  );
}
  
const SamplePrevArrow = ({ onClick, style, className }) => {
  return (
    <div className={className} onClick={onClick} >
      <img src={images.arrowLeft} alt="Icono de flecha a la izquierda" />
    </div>
  );
}
  
const Products = () => {

  const notify = () => toast.success('¡Genial!, haz agregado el producto al carrito.', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  const dispatch = useDispatch()
  const {counter} = useSelector((state) => state.cartCounter);
  const {data, isLoading} = useGetProductsQuery();

  const rate = (starts) => {
    let i;
    let keyStart=0;
    let keySpan=0;

    const stars=[];
    for(i=1;i<=5;i++){
        if(i<=starts){
            stars.push(<span key={keyStart}>{<img src={images.starFilled} alt="Icono de estrella pintada" />}</span>)
            keyStart+=1;
        }else{
            stars.push(<span key={keyStart}><img src={images.startUnfilled} alt="Icono de estrella sin pintar" /></span>)   
            keyStart+=1;             
        }
    }

    return(stars.map( rate => {
      keySpan+=1;
      return(
        <span key={keySpan}> { rate }</span>
      )
    }))
  }

  const incrementCart = () => {
    dispatch(increment());
    localStorage.setItem('counter', counter + 1);
    notify();
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (     
    <div className="container__products">
      <h2>Mas Vendidos</h2>
      <div className="divisor__products"></div>

      <div className="products">
        {isLoading 
          ? 
            <div className="container__spinner">
              <Spinner />
            </div>
          :
          <Slider {...settings}>
            {data.map( item => (
              <div key={item.productId}  className="productCard">

                <img src={item.imageUrl} alt={item.productName} />

                <div className="info" key={item?.productId}>
                  <div>
                    <span className="name">{item.productName}</span>
                    <span className="rate">{rate(item.stars)}</span>
                    { item.listPrice ? ( <span className="priceOld">De $ {item.listPrice}</span> ):( <span className="priceOld"></span>) }
                    <span className="priceNew">por: $ {item?.price}</span>
                    {item?.installments[0]?.value ? (
                    <span className="priceInstallments">o en {item.installments[0]?.quantity}x de $ {item.installments[0]?.value}</span>):(<span></span>) }
                  </div>                
                  <div>
                    <button onClick={() => incrementCart()}>Comprar</button>
                  </div>
                </div>   
              </div>
            ))}
          </Slider>
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default Products;