import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import Category from "./components/Category";
import ShowFullItem from "./components/ShowFullItem";
import { items } from './Data';

const App = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [reserve, setReserve] = useState([...items]);
  const [showItem, setShowItem] = useState(false);
  const [fullItem, setFullItem] = useState([]);

  const onShowItem = (item) => {
    setFullItem(item);
    setShowItem(!showItem);
  }

  const deleteOrder = (idToDelete) => {
    const updatedItems = orderItems.filter((orderItems) => orderItems.id !== idToDelete);
    setOrderItems(updatedItems);
  }

  const chooseCategory = (category) => {
    const choose =
      category === 'all' ? items : items.filter((item) => item.category === category);
    setReserve(choose);
  };

  const addToOrder = (item) => {
    let isInArray = false;
    orderItems.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setOrderItems([...orderItems, item]);
    }
  }

  return (
    <div className="wrapper">
      <Header orders={orderItems} onDelete={deleteOrder} />
      <Category chooseCategory={chooseCategory} />
      <Items items={reserve} onAdd={addToOrder} onShowItem={onShowItem} />
      {showItem && <ShowFullItem item={fullItem} onAdd={addToOrder} ShowItem={onShowItem} />}
      <Footer />
    </div>
  );
};

export default App;
