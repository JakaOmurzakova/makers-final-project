import React, { useEffect, useState } from "react";
import Cross from "../components/images/cross.svg";
import Down from "../components/images/down.svg";
import Up from "../components/images/up.svg";
import { useCartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import "../cart.css";

const CartPage = () => {
  const { cart, getCart, deleteFromCart, decreaseCount, increaseCount } =
    useCartContext();
  const navigate = useNavigate();
  useEffect(() => {
    getCart();
  }, []);
  return (
    <section className="section-cart">
      {/* <header classNameName="section-cart__header">
        <div classNameName="container">
          <h1 classNameName="title-1">Cart</h1>
        </div>
      </header> */}
      <div className="section-cart__body">
        <div className="container">
          <section className="cart">
            <header className="cart-header">
              <div className="cart-header__title">Eda</div>
              <div className="cart-header__count">Price</div>
              <div className="cart-header__cost">Amount</div>
              <div className="cart-header__cost">SubPrice</div>
            </header>
            {cart.orders.map((item) => (
              <section className="product" key={item.id}>
                <div className="product__img">
                  <img width={50} src={item.image_product} alt="" />
                </div>
                <div className="product__title">{item.title}</div>
                <div className="product__price">${item.price}</div>
                <div className="product__count">
                  <div className="count">
                    <div className="count__box">
                      <input
                        type="number"
                        className="count__input"
                        min="1"
                        max="100"
                        value={item.count}
                      />
                    </div>
                    <div className="count__controls">
                      <button
                        type="button"
                        className="count__up"
                        onClick={() => increaseCount(item.id)}
                      >
                        <img src={Up} alt="Increase" />
                      </button>
                      <button
                        type="button"
                        className="count__down"
                        onClick={() => {
                          if (item.count <= 1) {
                            return;
                          } else {
                            decreaseCount(item.id);
                          }
                        }}
                      >
                        <img src={Down} alt="Decrease" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product__price">${item.subPrice}</div>
                <div className="product__controls">
                  <button type="button" onClick={() => deleteFromCart(item.id)}>
                    <img src={Cross} alt="Delete" />
                  </button>
                </div>
              </section>
            ))}

            <footer className="cart-footer">
              <div className="cart-footer__price">${cart.totalPrice}</div>
            </footer>
            <section>
              <div className="cart-order">
                <button
                  className="order-btn"
                  onClick={() => navigate("/payment")}
                >
                  <p className="text">Order</p>
                </button>
              </div>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
