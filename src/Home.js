import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt=""
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id={1}
            title="The lean Startup"
            price={9.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
            key={1}
          />
          <Product
            id={2}
            title="Fire TV Stick 4K streaming device with Alexa built in, Dolby Vision, includes Alexa Voice Remote, latest release"
            price={49.99}
            image="https://m.media-amazon.com/images/I/51CgKGfMelL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
            key={2}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="Tecno Spark 6 Air (Ocean Blue, 3GB RAM, 32GB Storage)"
            price={300}
            image="https://m.media-amazon.com/images/I/41XaHsa5uML.__AC_SY200_.jpg"
            rating={3}
            key={3}
          />
          <Product
            id={4}
            title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg"
            rating={4}
            key={4}
          />
          <Product
            id={5}
            title="Lenovo IdeaPad Flex 5 14' Convertible Laptop, FHD (1920 x 1080) Touch Display, Intel Core i5-1035G1 Processor, 8GB DDR4 OnBoard RAM, 128GB SSD"
            price={698.1}
            image="https://images-na.ssl-images-amazon.com/images/I/81x%2B9uFY1QL._AC_SL1500_.jpg"
            rating={5}
            key={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Hisense 40-Inch 40H5500F Class H55 Series Android Smart TV with Voice Remote (2020 Model)"
            price={199.99}
            image="https://m.media-amazon.com/images/I/71ZRTMwE3NL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
            key={6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
