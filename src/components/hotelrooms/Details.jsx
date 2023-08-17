import React from "react";
import { useHotelContext } from "../../contexts/HotelContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { Calendar } from "react-calendar";
import Rating from "../Rating";

const Details = ({ item }) => {
  // const { user } = useAuthContext();
  // const { oneRoom } = useHotelContext();
  // const { id } = useParams();
  // const navigate = useNavigate();
  return (
    <div className="detailPage_container">
      <div className="detailPage_container_carousel">
        <Carousel data-bs-theme="dark" className="img-fluid">
          <Carousel.Item>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                className="img-fluid"
                src="https://ik.imgkit.net/3vlqs5axxjf/TAW/uploadedImages/All_Gateways/ASPAC/Hotel_Review/FourSeasonsMaldives_Hero.jpg?tr=w-1200%2Cfo-auto"
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                className="img-fluid"
                src="https://ik.imgkit.net/3vlqs5axxjf/TAW/uploadedImages/All_Gateways/ASPAC/Hotel_Review/FourSeasonsMaldives_Hero.jpg?tr=w-1200%2Cfo-auto"
                alt="Second slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                className="img-fluid"
                src="https://ik.imgkit.net/3vlqs5axxjf/TAW/uploadedImages/All_Gateways/ASPAC/Hotel_Review/FourSeasonsMaldives_Hero.jpg?tr=w-1200%2Cfo-auto"
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="detailPage_container_info">
        <div
          className="detailPage_container_info_left"
          style={{ marginBottom: "100px" }}
        >
          <h2>TITLE</h2>
          <h3>CATEGORY</h3>
          <h4>DESCRIPTION</h4>
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default Details;
