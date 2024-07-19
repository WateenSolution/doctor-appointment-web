// import React from "react";
// import { footerArray1, footerArray2 } from "../../utilities";
// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div className="footer-container">
//       <div className="footer_wrapper">
//         <div className="footer_flex">
//           <div className="footer_left">
//             <div className="list">
//               <h3 className="title">Wateen Solution</h3>
//               <ul>
//                 {footerArray1.map((item) => {
//                   return <Link className="subtitle">{item?.title}</Link>;
//                 })}
//               </ul>
//             </div>
//             <div className="list">
//               <h3 className="title">Useful Links</h3>
//               <ul>
//                 {footerArray2.map((item) => {
//                   return <Link className="subtitle">{item?.title}</Link>;
//                 })}
//               </ul>
//             </div>
//           </div>
//           <div className="footer_right">
//             <div className="get_in_touch">
//               <h3 className=" get_in">Get in Touch with Us</h3>
//               <h5 className="touch">+123 345123 556</h5>
//               <h5 className="touch">support@wateensolution.com</h5>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mini-footer">
//         <div className="f-container">
//           <p> Helpicon &copy; 2020 All Rights Reserved</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import { Col, Row } from "react-bootstrap";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { CgInstagram } from "react-icons/cg";
import "./style.css";
const Footer = () => {
  return (
    <footer id="contact" className="horiContainer footer__container">
      <Col className="about">
        <h2>Wateen Solutions</h2>
        <p className="regularText">
          We appreciate your interest in our products and services and hope that
          you have found everything you were looking for. We are always striving
          to improve and provide the best possible experience for our customers.
        </p>
        <ul className="footer__socials">
          <li>
            <a href="https://www.facebook.com/WateenTelecomLtd" target="_blank">
              <AiFillFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/wateentel/" target="_blank">
              <CgInstagram />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/WateenTel" target="_blank">
              <AiFillTwitterSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/wateen-telecom-limited/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </li>
        </ul>
      </Col>
      <Col className="services">
        <h3>Services</h3>
        <ul>
          <li>
            <a href="#tab_2" className="text">
              Software Development
            </a>
          </li>
          <li>
            <a href="#tab_2" className="text">
              AI/ML Solutions
            </a>
          </li>
          <li>
            <a href="#tab_2" className="text">
              Managed Security Services
            </a>
          </li>
          <li>
            <a href="#tab_2" className="text">
              Business Intelligence
            </a>
          </li>
          <li>
            <a href="#tab_2" className="text">
              IOT Solutions
            </a>
          </li>
          <li>
            <a href="#tab_2" className="text">
              ERP Implementation
            </a>
          </li>
        </ul>
      </Col>
      <Col className="contact">
        <h3>Get in Touch with Us</h3>
        <ul>
          <li>
            <a
              href="https://www.google.com/maps/place/Wateen+Telecom+Limited/@31.4798131,74.3583022,17z"
              className="text"
              target="_blank"
            >
              Office: Main Walton Road, Opp. Bab-e-Pakistan, Walton Cantt,
              Lahore, Pakistan.
            </a>
          </li>
          <li>
            <a href="tel:+9242111365111" className="text">
              Tel : +92-326-80-03-798
            </a>
          </li>
          <li>
            <a href="mailto:lormail@gmail.com" className="text">
              Email: services@wateen.com
            </a>
          </li>
        </ul>
      </Col>
    </footer>
  );
};

export default Footer;
