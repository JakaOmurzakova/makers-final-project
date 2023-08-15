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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_container_block1__navigation">
        <div className="footer_container_block1__navigation_item">
          <h2>Services:</h2>
          <Link
            to="/services"
            className="footer_container_block1__navigation_item_sub"
          >
            Services
          </Link>
          <Link
            to="/restaurant"
            className="footer_container_block1__navigation_item_sub"
          >
            Restaraunt
          </Link>
          <Link
            to="/cottages"
            className="footer_container_block1__navigation_item_sub"
          >
            Cottages
          </Link>
          <Link className="footer_container_block1__navigation_item_sub">
            Medical aid
          </Link>
        </div>

        <div className="footer_container_block1__navigation_item"></div>
      </div>
      <div className="footer_container_block2__social-networks">
        <h2> Social Networks</h2>
        <div className="footer_container_block2__social-networks_sub_container">
          <Link to="https://www.tiktok.com/explore" target="_blank">
            <img src={tiktok} alt="" />
          </Link>

          <Link
            to="https://www.youtube.com/watch?v=BqC92i1yXoI&pp=ygUOaG90ZWwgbWFsZGl2ZXM%3D"
            target="_blank"
          >
            <img src={youtube} alt="" />
          </Link>
          <Link
            to="https://www.facebook.com/exploremaldiveshotels/"
            target="_blank"
          >
            <img src={facebook} alt="" />
          </Link>
          <Link to="https://www.instagram.com/maldives/" target="_blank">
            <img src={instagram} alt="" />
          </Link>
          <Link
            to="https://twitter.com/visitmaldives?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
          >
            <img src={twitter} alt="" />
          </Link>
          <Link
            to="https://mv.linkedin.com/company/visitmaldives"
            target="_blank"
          >
            <img src={linkedIn} alt="" />
          </Link>
          <Link to="https://www.threads.net/" target="_blank">
            <img src={threads} alt="" />
          </Link>
          <Link to="https://t.me/Harrmony_Haven_bot" target="_blank">
            <img src={telegram} alt="" />
          </Link>
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
