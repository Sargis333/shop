import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';

const showOrders = (props) => {
  let sum = 0;
  
  props.orders.forEach(el => 
    sum += Number.parseFloat(el.price)
  );
  return(
    <div className='empty'>
      {props.orders.map(el =>(
            <Order key = {el.id}  item ={el} onDelete = {props.onDelete}/>
      ))}
      <p className='sum'>Total: {new Intl.NumberFormat().format(sum)}$ </p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div>
      There are no products here yet
    </div>
  )
}

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>About us</li>
          <li>Contacts</li>
          <li>Email</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={'shop-cart-button'}
        />

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
            showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  );
}
