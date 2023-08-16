import React from "react";
import "../../menuStyleCard.css";

const MenuItem = () => {
  return (
    <div className="menu_card">
      <div className="card_position">
        <div className="card_size">
          <div className="card__img">
            <img src="https://avatars.mds.yandex.net/i?id=4067fcfdefab1098ef6525254f9c98157a9e04c2-9262149-images-thumbs&n=13" />
          </div>
          <div className="card__title">PINOT NOIR</div>
          <div className="card__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
          <div className="card__wrapper">
            <div className="card__price">$16.95</div>
            <div className="card__order">
              <button className="card__btn">Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
