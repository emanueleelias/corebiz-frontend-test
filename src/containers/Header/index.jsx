import React, { useEffect } from 'react'
import "./header.scss";
import {images} from "../../constants";
import ContainerSection from '../../components/ContainerSection';
import { useDispatch, useSelector } from 'react-redux';
import { setCounterValue } from '../../store/slices/cartSlice';

const Header = () => {

  const dispatch = useDispatch();
  const {counter} = useSelector((state) => state.cartCounter);
  useEffect(() => {
    if (localStorage.getItem("counter") === null) {
      dispatch(setCounterValue(0));
    } else {
      dispatch(setCounterValue(Number(localStorage.getItem("counter"))));
    }
  }, [])
  

  return (
    <ContainerSection>
      <div className="header">

        <div className='header__menu'>
            <img src={images.menu} alt="Icono menu hamburguesa" />
        </div>

        <div className="header__logo">
          <img src={images.logoBlack} alt="logo de corebiz" />
        </div>

        <form className='header__form' action="">
          <input type="text" placeholder='¿Que estas buscando?' />
          <img src={images.search} alt="" />
        </form>

        <div className="header__icons">
          <div className="header__icons-account">
            <img src={images.user} alt="Logo de usuario" />
            <span>Elias Daniel</span>
          </div>
          <div className="header__icons-cart">
            <img src={images.cart} alt="Logo de carrito" />
            <div className='count'>{counter}</div>
          </div>
        </div>
        
      </div>
    </ContainerSection>
  )
}

export default Header