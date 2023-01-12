import React from "react";
import { elon, master } from "../../utils";
import "./Card.scss";
import Items from "./Items";

function Card() {
  return (
    <section className="card-section">
      <div className="container">
        <div className="card">
          <h4 className="card__title">Oxirgi e’lonlar</h4>
          <Items />
          <Items reverse={"reverse"} />
          <Items />
          <div className="card__btn">
            <button>Ko’proq ko’rish</button>
          </div>
          <div className="card__static-wrapper">
            <div className="card__static">
              <p>E’LONLARINGIZNI BIZNI SAYTDA BERING</p>
              <img src={elon} alt="E'lonlar" />
            </div>
            <div className="card__static">
              <p>
                ENG SO’NGI <br /> MASTER KLASLAR BIZNING SAYTDA
              </p>
              <img src={master} alt="Master classlar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
