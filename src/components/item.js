import React from 'react';

export default function Item(props) {
  return (
    <div className='item'>
      <img src={"/img/" + props.item.img} alt={props.item.title} onClick={()=>props.onShowItem(props.item)}/>
      <h2>{props.item.title}</h2>
      <p>{props.item.desc}</p>
      <b>{props.item.price}$</b>
      <div className='add-to-cart' onClick={() => props.onAdd(props.item)}>+</div>
    </div>
  );
}
