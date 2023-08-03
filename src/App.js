import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import Category from "./components/Category";
import ShowFullItem from "./components/ShowFullItem";

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Gray chair',
      img: 'chair-gray.jpeg',
      desc: 'Lorem ipsum',
      category: 'chairs',
      price: '49.99'
    },
    {
      id: 2,
      title: 'Table',
      img: 'table.jpeg',
      desc: 'lorem ipsum',
      category: 'tables',
      price: '159.99'
    },
    {
      id: 3,
      title: 'Sofa',
      img: 'sofa.jpeg',
      desc: 'lorem ipsum',
      category: 'sofa',
      price: '599.99'
    },
    {
      id: 4,
      title: 'Light',
      img: 'light.jpeg',
      desc: 'lorem ipsum',
      category: 'light',
      price: '30.00'
    },
    {
      id: 5,
      title: 'White chair',
      img: 'white-chair.jpeg',
      desc: 'lorem ipsum',
      category: 'chairs',
      price: '90.00'
    },
    {
      id: 6,
      title: 'Bedside table',
      img: 'bedside-table.jpeg',
      desc: 'lorem ipsum',
      category: 'tables',
      price: '159.99'
    },
  ]);

  const [orderItems, setOrderItems] = useState([]);
  const [reserve, setReserve] = useState([...items]);
  const [showItem, setShowItem] =  useState(false);
  const [fullItem, setFullItem]  = useState([]);


  const onShowItem = (item) =>{
    setFullItem(item)
    setShowItem(!showItem)
  }

  const deleteOrder = (idToDelete) => {
      const updatedItems = orderItems.filter((orderItems) => orderItems.id !== idToDelete);
      setOrderItems(updatedItems)
  }

  const chooseCategory = (category) => {
    const choose =
      category === 'all' ? items : items.filter((item) => item.category === category);
    setReserve(choose);
  };
  

  

  const addToOrder = (item) => {
    let isInArray = false
    orderItems.forEach(el => {
      if(el.id === item.id){
        isInArray = true 
      }
    })
    if(!isInArray){
      setOrderItems([...orderItems, item]);
    }
  }

  return (
    <div className="wrapper">
      <Header orders = {orderItems} onDelete = {deleteOrder} />
      <Category chooseCategory = {chooseCategory}/>
      <Items items={reserve} onAdd={addToOrder} onShowItem = {onShowItem} />
      {showItem && <ShowFullItem item = {fullItem} onAdd={addToOrder} ShowItem = {onShowItem} />}
      <Footer />
    </div>
  );
};

export default App;
