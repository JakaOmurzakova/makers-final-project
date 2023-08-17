import React from "react";
import { useHotelContext } from "../../contexts/HotelContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { Calendar } from "react-calendar";

const Details = ({ item }) => {
  const { user } = useAuthContext();
  const { oneRoom } = useHotelContext();
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="detailPage_container">
      <div className="detailPage_container_carousel">
        <Carousel data-bs-theme="dark" className="img-fluid">
          <Carousel.Item>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img className="img-fluid" src={item.image1} alt="First slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img className="img-fluid" src={item.image2} alt="Second slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img className="img-fluid" src={item.image3} alt="Third slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img className="img-fluid" src={item.image4} alt="Fourth slide" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="detailPage_container_info">
        <div className="detailPage_container_info_left">
          <h2>{item.title}</h2>
          <h3>{item.category}</h3>
          <h4>{item.description}</h4>
          <button>BOOK</button>
        </div>
        <div className="detailPage_container_info_right">
          <img
            src="https://camo.githubusercontent.com/366e44bda8cd8313fa3043f9ad8c50a205696527268fb410e22db006a917afa9/68747470733a2f2f70726f6a656374732e776f6a74656b6d616a2e706c2f72656163742d63616c656e6461722f72656163742d63616c656e6461722e6a7067"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
