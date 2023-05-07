import React from "react";
import "./homePage.css";
import Header from "../../components/header/Header";
import Home from "../../components/home/Home";
import Slider from "../../components/slider/Slider";

//IMPORT IMAGES

import car from "./images/car.png";
import lockers from "./images/lockers.png";
import camping from "./images/camping.png";
import water from "./images/water.png";

function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <Slider />
      <div className="features_wrapper">
        <div className="features">
          <div className="features_cards">
            <div>
              <img src={car} alt="car" />
            </div>
            <p>Parking facile</p>
            <span>
              Garez vous sur notre parking de 2500 places à 5mn de la gare
            </span>
          </div>

          <div className="features_cards">
            <div>
              <img src={camping} alt="camping" />
            </div>
            <p>Espace tentes</p>
            <span>
              Profitez de 3000 m² de terrain pour vous installer confortablement
            </span>
          </div>

          <div className="features_cards">
            <div>
              <img src={lockers} alt="lockers" />
            </div>
            <p>Vestiaires</p>
            <span>
              Rangez vos affaires en toute sécurité en utilisant nos vestiaires
              dédiés
            </span>
          </div>

          <div className="features_cards">
            <div>
              <img src={water} alt="water" />
            </div>
            <p>Stands d'eau</p>
            <span>Restez hydraté en vous rendant dans nos nombreux stands</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
