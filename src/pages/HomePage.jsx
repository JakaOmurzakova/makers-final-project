import React, { useEffect } from "react";
import { useHotelContext } from "../contexts/HotelContext";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import MenuItem from "../components/restuarant/MenuItem";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage_container">
      <div className="homepage_map_container">
        <div className="map_container_description1">
          <div onClick={() => navigate("/restaurant")} className="description1">
            <div className="description1_image"></div>
            <span>Restaraunt</span>
          </div>
        </div>
        <div className="map_container_description2">
          <div onClick={() => navigate("/services")} className="description2">
            <div className="description2_image"></div>

            <span>Conference Hall</span>
          </div>
        </div>
        <div className="map_container_description3">
          <div onClick={() => navigate("/services")} className="description3">
            <div className="description3_image"></div>

            <span>Yacht</span>
          </div>
        </div>
        <div className="map_container_description4">
          <div onClick={() => navigate("/services")} className="description4">
            <div className="description4_image"></div>

            <span>Yacht</span>
          </div>
        </div>
        <div className="map_container_description5">
          <div onClick={() => navigate("/services")} className="description5">
            <div className="description5_image"></div>

            <span>Swimming Pool</span>
          </div>
        </div>
        <div className="map_container_description6">
          <div onClick={() => navigate("/services")} className="description6">
            <div className="description6_image"></div>

            <span>Tennis Court</span>
          </div>
        </div>
        <div className="map_container_description7">
          <div onClick={() => navigate("/services")} className="description7">
            <div className="description7_image"></div>

            <span>GYM</span>
          </div>
        </div>
        <div className="map_container_description8">
          <div onClick={() => navigate("/services")} className="description8">
            <div className="description8_image"></div>

            <span>Aquapark</span>
          </div>
        </div>
        <div className="map_container_description9">
          <div onClick={() => navigate("/services")} className="description9">
            <div className="description9_image"></div>

            <span>Baby concept</span>
          </div>
        </div>
        <div className="map_container_description10">
          <div onClick={() => navigate("/services")} className="description10">
            <div className="description10_image"></div>

            <span>SPA</span>
          </div>
        </div>
        <div className="map_container_description11">
          <div onClick={() => navigate("/services")} className="description11">
            <div className="description11_image"></div>

            <span>Golf</span>
          </div>
        </div>
        <div className="map_container_description12">
          <div onClick={() => navigate("/cottages")} className="description12">
            <div className="description12_image"></div>

            <span>Cottages</span>
          </div>
        </div>
      </div>

      <div className="homepage_crud-container">
        <div className="homepage_crud-container_item">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/527/403/663/maldives-resort-sea-madives-paradise-wallpaper-preview.jpg"
            alt=""
          />
          <h2>2 bedroom</h2>
          <h5>179$ / day</h5>
          <h6>Bathroom, kitchen, TV section...</h6>
        </div>
        <div className="homepage_crud-container_item ">
          <img
            src="https://www.tourism-of-india.com/blog/wp-content/uploads/2022/01/Six-Senses-Laamu.jpg"
            alt=""
          />
          <h2>2 bedroom</h2>
          <h5>179$ / day</h5>
          <h6>Bathroom, kitchen, TV section...</h6>
        </div>
        <div className="homepage_crud-container_item blur2">
          <img
            src="https://media.cnn.com/api/v1/images/stellar/prod/220707113925-17-maldives-best-overwater-villas-velaa.jpg?c=original&q=w_1280,c_fill"
            alt=""
          />
          <h2>2 bedroom</h2>
          <h5>179$ / day</h5>
          <h6>Bathroom, kitchen, TV section...</h6>
        </div>
        <div className="homepage_crud-container_item blur3">
          <img
            src="https://ik.imgkit.net/3vlqs5axxjf/TAW/uploadedImages/All_Gateways/ASPAC/Hotel_Review/FourSeasonsMaldives_Hero.jpg?tr=w-1200%2Cfo-auto"
            alt=""
          />
          <h2>2 bedroom</h2>
          <h5>179$ / day</h5>
          <h6>Bathroom, kitchen, TV section...</h6>
        </div>
      </div>
      <Link to="/cottages" className="homepage_crud-container_item_span">
        View More&#8680;
      </Link>
      <div className="homepage_card_container">
        <h2 className="homepage_text">THE BEST HOTEL FOR YOU</h2>
        <div className="homepage_content_container">
          <div className="homepage_card item1">
            <img
              src="https://i0.wp.com/blog.bambatravel.com/wp-content/uploads/2015/08/Ibiza-Spain-e1438694304394.jpg?fit=800%2C470&ssl=1"
              alt=""
            />
          </div>
          <span>
            The best option for your vacation. More than 20 years this hotel
            provides the best holiday expirience for many people
          </span>
        </div>
        <div className="homepage_content_container">
          <span className="homepage_content_container_span_2 span_for_undisplay">
            Nestled in nature, our spa offers a calm escape from the
            everyday.Discover therapies that harness the island's natural gifts
            for total renewal.Experience plush robes, calming scents, and an
            atmosphere of pure luxury.
          </span>
          <div className="homepage_card item1">
            <img
              src="https://hauteliving.com/wp-content/uploads/2014/10/LPI_Spa-shells_hr.jpg"
              alt=""
            />
          </div>
          <span className="span_for_display homepage_content_container_span_2">
            Nestled in nature, our spa offers a calm escape from the
            everyday.Discover therapies that harness the island's natural gifts
            for total renewal.Experience plush robes, calming scents, and an
            atmosphere of pure luxury.
          </span>
        </div>
        <div className="homepage_content_container">
          <div className="homepage_card item1">
            <img
              src="https://mb.cision.com/Public/15396/2220317/9abaad02c1cdbacf_800x800ar.jpg"
              alt=""
            />
          </div>
          <span>
            Discover Tranquility: Immerse yourself in the soothing sounds of
            waves and gentle ocean breezes. Our strategically designed rooms
            provide stunning panoramic views of the sparkling turquoise waters
            and pristine sandy beaches.
          </span>
        </div>
        <h2 className="homepage_text">More about life in Laoma Island</h2>
        <div className="homepage_content_container2">
          <div className="homepage_card item2">
            <img
              src="https://www.dotwnews.com/uploads/posts/72281.jpg"
              alt=""
            />
          </div>
          <div className="homepage_card item2">
            <img
              src="https://media.resources.festicket.com/www/magazine/Zrce_L.png"
              alt=""
            />
          </div>
          <div className="homepage_card item2">
            <img
              src="https://yachtwatersports.com/wp-content/uploads/2019/11/960x0.jpg"
              alt=""
            />
          </div>
          <div className="homepage_card item2">
            <img
              src="https://beachatlas.s3.us-east-2.amazonaws.com/7acc56b4-8793-464c-91d6-5fde3c50444e.jpeg"
              alt=""
            />
          </div>
          <div className="homepage_card item3">
            <img
              src="https://i0.wp.com/hicartagena.com/wp-content/uploads/2020/03/cholon-party-boat-e1602960244128.jpg?fit=1742%2C1118&ssl=1"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="homepage_iframe_container" style={{ marginTop: "100px" }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/WdMjWg3E_e4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default HomePage;
