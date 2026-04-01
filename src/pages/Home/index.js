import React from "react";
import ImageCarousel from "../../components/Carousel";
import "./Home.scss";

import img1 from "../../static/carousel/1.jpg";
import img2 from "../../static/carousel/2.jpg";
import img3 from "../../static/carousel/3.jpg";
import img4 from "../../static/carousel/4.jpg";
import img5 from "../../static/carousel/5.jpg";
import img6 from "../../static/carousel/6.jpg";

const carouselImages = [
  { src: img1, alt: "Thumbs up photo with two people" },
  { src: img2, alt: "4 happy people in front of the American flag" },
  { src: img3, alt: "Jersey swap" },
  { src: img4, alt: "3 bros" },
  { src: img5, alt: "Man carrying two coolers" },
  { src: img6, alt: "Two happy guys" },
];

const Home = () => {
  return (
    <div className="home-page page-offset">
      <ImageCarousel images={carouselImages} />
    </div>
  );
};

export default Home;