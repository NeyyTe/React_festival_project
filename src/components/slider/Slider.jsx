import React from "react";
import "./slider.css";

function Slider() {
  return (
    <>
    
    <div className="slider_wrapper">
      <h2>Les Artistes</h2>
      <div className="slider">
        <div className="item ">
          <a className="items " href="">
            <img
              alt="logo"
              src="https://i.pinimg.com/736x/71/45/fa/7145fa77c73fe3421de13d4c0f1498a2.jpg"
            />
            <div className="item_body">
              <h2>David Guetta</h2>
              <p>23 février</p>
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
              <h2>Dj Snake</h2>
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
              <h2>ACDC</h2>
              <p>23 février</p>
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
              <h2>James Brown</h2>
              <p>23 février</p>
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
              <h2>Stewie Wonder</h2>
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
              <h2>David Guetta</h2>
            </div>
          </a>
        </div>
      </div>
      <div className="link_artistes_wrapper">
        <a className="link_artistes" href=""> Notre programmation </a>
      </div>
    </div>


</>
  );
}

export default Slider;
