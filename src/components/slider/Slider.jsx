import React from "react";
import "./slider.css";

function Slider() {
  return (
    <>
    
    <div className="slider_wrapper">
      <h2>Les <span>Artistes</span></h2>
      <div className="slider">
        <div className="item ">
          <a className="items " href="">
            <img
              alt="logo"
              src="https://i.pinimg.com/736x/71/45/fa/7145fa77c73fe3421de13d4c0f1498a2.jpg"
            />
            <div className="item_body">
              <h3>David Guetta</h3>
              <p>15 Juillet</p>
            </div>
          </a>
        </div>
        <div className="item">
          <a className="items" href="">
            <img
              alt="logo"
              src="https://img.lemde.fr/2019/07/26/0/0/5304/7952/664/0/75/0/619691a_x2lrCTmifjx801mbfTcMyd4n.jpg"
            />
            <div className="item_body">
              <h3>Dj Snake</h3>
              <p>15 Juillet</p>
            </div>
          </a>
        </div>
        <div className="item">
          <a className="items" href="">
            <img
              alt="logo"
              src="https://m.media-amazon.com/images/I/41soqdQyqOL.jpg"
            />
            <div className="item_body">
              <h3>ACDC</h3>
              <p>15 Juillet</p>
            </div>
          </a>
        </div>
        <div className="item">
          <a className="items" href="">
            <img
              alt="logo"
              src="https://www.rollingstone.fr/wp-content/uploads/2021/12/james-brown-1980.jpg"
            />
            <div className="item_body">
              <h3>James Brown</h3>
              <p>15 Juillet</p>
            </div>
          </a>
        </div>
        <div className="item">
          <a className="items" href="">
            <img
              alt="logo"
              src="https://www.kuvo.org/wp-content/uploads/2020/05/STEVIE-WONDER.jpg"
            />
            <div className="item_body">
              <h3>Stewie Wonder</h3>
              <p>23 février</p>
            </div>
          </a>
        </div>
        <div className="item">
          <a className="items" href="">
            <img
              alt="logo"
              src="https://m.media-amazon.com/images/I/41soqdQyqOL.jpg"
            />
            <div className="item_body">
              <h3>David Guetta</h3>
            </div>
          </a>
        </div>
      </div>
      <div className="link_artistes_wrapper">
        <a className="link_artistes" href=""> Découvrir la programmation </a>
      </div>
    </div>


</>
  );
}

export default Slider;
