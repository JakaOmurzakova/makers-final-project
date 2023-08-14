import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import tiktok from "../assets/tiktok.svg";
import instagram from "../assets/instagram_icon.svg";
import twitter from "../assets/twitter_icon.svg";
import youtube from "../assets/youtube_icon.svg";
import facebook from "../assets/facebook_logo_icon.svg";
import linkedIn from "../assets/linkedin_logo_icon.svg";
import threads from "../assets/threads_logo_brand_sign_icon.svg";
import telegram from "../assets/telegram_icon.svg";

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
          <img width={50} src={tiktok} alt="" />

          <img width={50} src={youtube} alt="" />

          <img width={50} src={facebook} alt="" />

          <img width={50} src={instagram} alt="" />

          <img width={50} src={twitter} alt="" />
          <img width={50} src={linkedIn} alt="" />
          <img width={50} src={threads} alt="" />
          <img width={50} src={telegram} alt="" />
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
