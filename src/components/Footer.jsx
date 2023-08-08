import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_container_block1__navigation">
        <div className="footer_container_block1__navigation_item">
          <h2>Services:</h2>
          <span className="footer_container_block1__navigation_item_sub">
            Cleaning
          </span>
          <span className="footer_container_block1__navigation_item_sub">
            Restaraunt
          </span>
          <span className="footer_container_block1__navigation_item_sub">
            Beach entertainmnet
          </span>
          <span className="footer_container_block1__navigation_item_sub">
            Medical aid
          </span>
        </div>

        <div className="footer_container_block1__navigation_item"></div>
      </div>
      <div className="footer_container_block2__social-networks">
        <h2> Social Networks</h2>
        <div className="footer_container_block2__social-networks_sub_container">
          <img
            src="https://img.icons8.com/?size=1x&id=32292&format=png"
            alt=""
          />

          <img
            src="https://img.icons8.com/?size=1x&id=9R1sV3QvY18K&format=png"
            alt=""
          />

          <img
            src="https://img.icons8.com/?size=1x&id=16712&format=png"
            alt=""
          />

          <img
            src="https://img.icons8.com/?size=1x&id=37325&format=png"
            alt=""
          />

          <img
            src="https://img.icons8.com/?size=1x&id=84521&format=png"
            alt=""
          />

          <img src="https://img.icons8.com/?size=1x&id=447&format=png" alt="" />
          <img src="https://img.icons8.com/?size=1x&id=435&format=png" alt="" />
          <img src="https://img.icons8.com/?size=1x&id=437&format=png" alt="" />
        </div>
      </div>
      <div className="footer_container_block3__about-us">
        <div className="footer_container_block3__about-us_item">
          <h2>Contact us</h2>
          <span>
            <PhoneAndroidIcon /> +1 628-282-1816
          </span>
          <span>
            <PhoneIcon /> 66-88-78-80
          </span>
          <span>
            <AlternateEmailIcon /> royaleplage@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
