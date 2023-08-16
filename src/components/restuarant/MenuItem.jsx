import React from "react";
import "../../menuStyleCard.css";
import { useFoodContext } from "../../contexts/FoodContext";
import { useNavigate, useParams } from "react-router-dom";

const MenuItem = ({ item }) => {
  const { deleteDish } = useFoodContext();
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="menu_card">
      <div className="card_position">
        <div className="card_size">
          <div className="card_buttons">
            <button onClick={() => deleteDish(item.id)} className="btn">
              <svg
                viewBox="0 0 15 17.5"
                height="17.5"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <path
                  transform="translate(-2.5 -1.25)"
                  d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                  id="Fill"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => navigate(`/edit-dish/${item.id}`)}
              className="button"
            >
              <svg
                className="svg-icon"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#a649da" strokeLinecap="round" strokeWidth="2">
                  <path d="m20 20h-16"></path>
                  <path
                    clipRule="evenodd"
                    d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z"
                    fillRule="evenodd"
                  ></path>
                </g>
              </svg>
              <span className="lable">Edit</span>
            </button>
          </div>

          <div className="card__img">
            <img src={item.image_product} />
          </div>
          <div className="card__title">{item.title}</div>
          <div className="card__subtitle">{item.description}</div>
          <div className="card__wrapper">
            <div className="card__price">${item.price}</div>
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
