import { Link } from "react-router-dom";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import year from "./date";

const Footer = () => (
  <section id="footer" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[400px] h-[230px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Elevating your online presence
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-col mt-10 md:mt-0">
        <h4 className="font-poppins font-normal text-24 leading-24 text-white text-[30px] mb-4">
          To get started with us:
        </h4>
        <ul className="font-poppins font-normal text-24 leading-24 text-[20px]  text-dimWhite">
          <li>-Email us at admin@reemmarketing.com</li>
          <li>-We will then reply within 24 hours of your email.</li>
          <li>-Normally we use google meets to set up meetings</li>
          <li>-Once we have formulated  our sales plan, we can start the marketing campaign.</li>
        </ul>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-1 border-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-18 leading-27 text-white">
        Copyright Ⓒ{year} Reemmarketing. All Rights Reserved.
      </p>

      <div className="flex flex-row mt-6 md:mt-0">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-21 h-21 object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;

