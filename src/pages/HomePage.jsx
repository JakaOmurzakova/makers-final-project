import React, { useEffect } from "react";
import { useHotelContext } from "../contexts/HotelContext";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage_container">

      {/*<img className="figna" src="https://i.gifer.com/XlNl.gif" alt="" />*/}

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


      <div className="homepage_content">
        <img
          className="homepage_content_item1"
          src="https://www.jetsetter.com//uploads/sites/7/2018/04/cZ_XUOLK.jpeg"
          alt=""
        />
        <img
          className="homepage_content_item1"
          src="https://i.travelapi.com/lodging/18000000/17690000/17680800/17680731/b52043f0_z.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePage;
