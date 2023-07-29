import React, { useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import s from './Header.module.css'
import Order from "../Order/Order";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach(el => {
    summa += Number.parseFloat(el.price)
  });
  return (
  <div> {props.orders.map(el => (
    <Order onDelete={props.onDelete} key={el.id} item={el}/>
    ))}
    <p className={s.summa}>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
  </div>)
}

const showNothing = () => {
  return (
  <div className={s.emty}> 
      <h2>Товаров нет {`:(`}</h2>
  </div>)
}


function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

    return (
      <header>
        <div>
          <span className={s.logo}>House Staff</span>
          <ul className={s.nav}>
            <li>Про нас</li>
            <li>Контакты</li>
            <li>Кабинет</li>
          </ul>
          <CiShoppingBasket onClick={()=>setCartOpen(cartOpen = !cartOpen)}
          className={`${s.shopCartBtn} ${cartOpen && 'active'}`}
          />
          {cartOpen && (
            <div className={s.shopCart}>
              {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </div>
          )}
        </div>
        <div className={s.pressentaion}></div>
      </header>
    );
  }
  
  export default Header;