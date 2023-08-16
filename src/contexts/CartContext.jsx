import React, { createContext, useContext, useState } from "react";

const cartContext = createContext();
export function useCartContext() {
  return useContext(cartContext);
}

const initState = { orders: [], totalPrice: 0 };

function getDataFromLS() {
  let data = JSON.parse(localStorage.getItem("cart"));
  if (!data) {
    data = { orders: [], totalPrice: 0 };
  }
  return data;
}

const CartContext = ({ children }) => {
  const [cart, setCart] = useState(initState);
  function getCart() {
    const data = getDataFromLS();
    setCart(data);
  }

  // function addToCart(order) {
  //   const data = getDataFromLS();
  //   data.orders.push({ ...order, count: 1, subPrice: order.price });
  //   data.totalPrice = data.orders.reduce((acc, item) => acc + item.subPrice, 0);
  //   localStorage.setItem("cart", JSON.stringify(data));
  //   getCart();
  // }

  function addToCart(order) {
    const data = getDataFromLS();
    if (!data.orders) {
      data.orders = []; // Инициализируем массив, если его нет
    }
    data.orders.push({ ...order, count: 1, subPrice: order.price });
    data.totalPrice = data.orders.reduce((acc, item) => acc + item.subPrice, 0);
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  function deleteFromCart(id) {
    const data = getDataFromLS();
    data.orders = data.orders.filter((item) => item.id !== id);
    data.totalPrice = data.orders.reduce((acc, item) => acc + item.subPrice, 0);
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  function increaseCount(id) {
    const data = getDataFromLS();
    data.orders = data.orders.map((item) => {
      if (item.id === id) {
        item.count += 1;
        item.subPrice += item.price;
      }
      return item;
    });
    data.totalPrice = data.orders.reduce((acc, item) => acc + item.subPrice, 0);
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  function decreaseCount(id) {
    const data = getDataFromLS();
    data.orders = data.orders.map((item) => {
      if (item.id === id) {
        item.count -= 1;
        item.subPrice -= item.price;
      }
      return item;
    });
    data.totalPrice = data.orders.reduce((acc, item) => acc + item.subPrice, 0);
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  // function isAlreadyInCart(id) {
  //   const data = getDataFromLS();
  //   let isInCart = false;
  //   if (data.orders.length > 0) {
  //     isInCart = data.orders.some((item) => item.id === id);
  //   }
  //   return isInCart;
  // }

  function isAlreadyInCart(id) {
    const data = getDataFromLS();
    if (!data.orders) {
      return false; // Возвращаем false, если корзина пуста или её данные отсутствуют
    }
    return data.orders.some((item) => item.id === id);
  }

  const value = {
    cart,
    getCart,
    addToCart,
    deleteFromCart,
    increaseCount,
    decreaseCount,
    isAlreadyInCart,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartContext;
