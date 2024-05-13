import React from "react";
import style from "../TwoSection/TwoSection.module.css";

const Banner = () => {
  return (
    <div>
      <section className={style.banner}>
        <div className={style.bannerContainer}>
        <div className={style.bannerContainerCart}>
            <h2>Women</h2>
            <p>Spring 2018</p>
          </div>
          <div className={style.bannerContainerCartTWo}>
            <h2>Women</h2>
            <p>Spring 2018</p>
          </div>
          <div className={style.bannerContainerCartThree}>
            <h2>Women</h2>
            <p>Spring 2018</p>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Banner;