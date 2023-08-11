import React from "react";
import img1 from "../components/images/photo.JPG";
import img3 from "../components/images/havchikk.png";
import img4 from "../components/images/wine.jpeg";
import img5 from "../components/images/chefg.jpeg";
import img6 from "../components/images/restaurant.webp";
import "../components/restaurant.css";

const RestaurantPage = () => {
  return (
    <div className="restaurant-page">
      <header className="header"></header>
      <div className="image-container">
        <img className="photo1" src={img1} alt="" />
        <div className="text-center">
          <div className="centered-content">
            <h1>Dobro Pojalovat` v restoran!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              voluptatibus deserunt maiores fugiat consequuntur quos excepturi
              libero, culpa ad ut, facere cum corporis magnam saepe? Accusantium
              cum incidunt nemo similique asperiores enim labore quia corrupti.
              Soluta pariatur obcaecati tempore amet optio ea assumenda ducimus
              totam accusamus. Perferendis pariatur praesentium quam aspernatur
              impedit a ab sunt sequi officia provident, aliquam mollitia
              excepturi autem adipisci nisi quae ullam odio vero consequatur
              nihil.
            </p>
          </div>
        </div>
      </div>
      <div className="about-restaurant">
        <img className="restaurant" src={img6} alt="" />
        <div className="about-rest">
          <h1>Аbout Rswasxacxa</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            veritatis quia suscipit! Voluptatibus soluta ut, enim magni eius
            necessitatibus nisi itaque alias error nihil. Suscipit ipsam
            accusamus quo? Eius earum hic maxime? Vel ullam libero facere
            obcaecati qui, dolorum sequi veritatis eos expedita, suscipit
            voluptatibus, similique nostrum aliquid culpa quas illum! Modi ullam
            fugiat voluptate aut ex architecto temporibus molestiae cumque,
            explicabo aliquam corrupti asperiores fuga et iusto, velit
            doloremque ipsum incidunt vitae maxime tempora obcaecati dicta,
            laborum eaque praesentium. Deleniti deserunt tenetur laboriosam,
            itaque totam doloremque culpa asperiores ducimus praesentium maxime
            eos, enim perferendis?
          </p>
          <button className="btn-menu">VIEW MENU</button>
        </div>
      </div>

      <div className="food-drink">
        <div className="food-info">
          <h1>Food and Buhlo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quibusdam exercitationem aperiam sit dolores placeat repellat velit
            vitae quia, minus aliquam doloremque qui dicta vero amet laboriosam
            ullam magnam harum voluptas? Culpa ut officiis nobis, porro atque
            consectetur est animi, ab distinctio autem hic et libero, incidunt
            eos vel magni impedit ipsa laudantium amet. Quis, hic expedita? Odit
            obcaecati explicabo repellendus perferendis, velit quasi earum iste,
            adipisci sequi beatae porro.
          </p>
          <button className="btn-reserv">MAKE A RESERVATION</button>
        </div>
        <div className="food-images">
          <img className="photo4" src={img4} alt="" />
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
            necessitatibus nisi itaque alias error nihil. Suscipit ipsam
            accusamus quo? Eius earum hic maxime? Vel ullam libero facere
            obcaecati qui, dolorum sequi veritatis eos expedita, suscipit
            voluptatibus, similique nostrum aliquid culpa quas illum! Modi ullam
            fugiat voluptate aut ex architecto temporibus molestiae cumque,
            explicabo aliquam corrupti asperiores fuga et iusto, velit
            doloremque ipsum incidunt vitae maxime tempora obcaecati dicta,
            laborum eaque praesentium. Deleniti deserunt tenetur laboriosam,
            itaque totam doloremque culpa asperiores ducimus praesentium maxime
            eos, enim perferendis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
