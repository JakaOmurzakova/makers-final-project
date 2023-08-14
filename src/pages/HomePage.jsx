import React, { useEffect } from "react";
import { useHotelContext } from "../contexts/HotelContext";
import { useSearchParams } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="homepage_container">
      <div className="homepage_map_container">
        <div className="map_container_description1">
          <div className="description1">
            <div className="description1_image"></div>
            <span>Restaraunt</span>
            <span>wqyiegfiewhu</span>
          </div>
        </div>
        <div className="map_container_description2">
          <div className="description2">
            <div className="description1_image"></div>
            <span>Conference Hall</span>
            <span>wqyiegfiewhu</span>
          </div>
        </div>
        <div className="map_container_description3">
          <div className="description3">
            <div className="description1_image"></div>
            <span>Yacht</span>
            <span>wqyiegfiewhu</span>
          </div>
        </div>
        <div className="map_container_description4">
          <div className="description4">
            <div className="description1_image"></div>
            <span>Yacht</span>
            <span>wqyiegfiewhu</span>
          </div>
        </div>
        <div className="map_container_description5">
          <div className="description5">
            <div className="description1_image"></div>
            <span>Swimming Pool</span>
            <span>wqyiegfiewhu</span>
          </div>
        </div>
        <div className="map_container_description6">
          <div className="description6">
            <div className="description1_image"></div>
            <span>Tennis Court</span>
            <span>wqyiegfiewhu</span>
          </div>
        </div>
        <div className="map_container_description7">
          <div className="description7">
            <div className="description1_image"></div>
            <span>GYM</span>
            <span>wqyiegfiewhu</span>
          </div>
        </div>
        <div className="map_container_description8">
          <div className="description8">
            <div className="description1_image"></div>
            <span>Aquapark</span>
            <span>wqyiegfiewhu</span>
          </div>
        </div>
        <div className="map_container_description9">
          <div className="description9">
            <div className="description1_image"></div>
            <span>Baby concept</span>
            <span>wqyiegfiewhu</span>
          </div>
        </div>
        <div className="map_container_description10">
          <div className="description10">
            <div className="description1_image"></div>
            <span>SPA</span>
            <span>wqyiegfiewhu</span>
          </div>
        </div>
        <div className="map_container_description11">
          <div className="description11">
            <div className="description1_image"></div>
            <span>Golf</span>
            <span>wqyiegfiewhu</span>
          </div>
        </div>
        <div className="map_container_description12">
          <div className="description12">
            <div className="description1_image"></div>
            <span>Cottages</span>
            <span>wqyiegfiewhu</span>
          </div>
        </div>
      </div>

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
            {" "}
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
