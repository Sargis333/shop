import React from 'react'

export default function ShowItem(props) {
  return (
    <div className='fullitem'>
      <div>
          <img src={"/img/" + props.item.img} alt={props.item.title} onClick={()=>props.ShowItem(props.item)}/>
          <h2>{props.item.title}</h2>
          <p>{props.item.desc}</p>
          <b>{props.item.price}$</b>
          <div className='add-to-cart' onClick={() => props.onAdd(props.item)}>+</div>
      </div>
    </div> 
  )
}
