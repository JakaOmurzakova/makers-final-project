import React from "react";
import img1 from "../components/images/albert-YYZU0Lo1uXE-unsplash.jpg";
import img3 from "../components/images/havchik.png";
import img5 from "../components/images/chef.jpeg";
import img6 from "../components/images/scale_1200.webp";
import "../components/Restaurant.css";
import { useNavigate } from "react-router-dom";

const RestaurantPage = () => {
  const navigate = useNavigate();

  return (
    <div className="restaurant-page">
      <div className="image-container">
        <div className="text-center">
          <div className="centered-content">
            <h1>Dobro Pojalovat` v restoran!</h1>
            <p>
              Welcome to a coastal haven where culinary excellence meets the
              serenity of the sea. Our beachfront restaurant invites you to
              relish in a symphony of flavors, expertly crafted by our chefs who
              draw inspiration from both land and ocean. Immerse yourself in an
              unforgettable dining adventure, where each dish is a masterpiece
              and every moment is a seaside escape for your senses.
            </p>
          </div>
        </div>
      </div>
      <div className="about-restaurant">
        <img className="restaurant" src={img6} alt="" />
        <div className="about-rest">
          <h1>Аbout Restaurant </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            veritatis quia suscipit! Voluptatibus soluta ut, enim magni eius
            necessitatibus nisi itaque alias error nihil. Suscipit ipsam
          </p>
          <button onClick={() => navigate("/menu")} className="btn-menu">
            VIEW MENU
          </button>
        </div>
      </div>

      <div className="food-drink">
        <div className="food-images2">
          <img className="photo3" src={img3} alt="" />
        </div>
        <div className="food-info">
          <h1>Food and Buhlo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quibusdam exercitationem aperiam sit dolores placeat repellat velit
            vitae quia, minus aliquam doloremque qui dicta vero amet laboriosam
            ullam magnam harum voluptas? Culpa ut officiis nobis, porro atque
          </p>
          <button className="btn-reserv">MAKE A RESERVATION</button>
        </div>
        <div className="food-images">
          <img className="photo3" src={img3} alt="" />
        </div>
      </div>
      <div className="chef-content">
        <img className="chef" src={img5} alt="" />
        <div className="about-chef">
          <h1>Shama Shama</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            veritatis quia suscipit! Voluptatibus soluta ut, enim magni eius
            necessitatibus nisi itaque alias error nihil. Suscipit ipsam i qui,
            dolorum sequi veritatis eos expedita, suscipit
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
