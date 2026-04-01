import React from "react";
import ImageCarousel from "../../components/Carousel";
import "./Home.scss";

import img1 from "../../static/carousel/1.jpg";
import img2 from "../../static/carousel/2.jpg";
import img3 from "../../static/carousel/3.jpg";
import img4 from "../../static/carousel/4.jpg";
import img5 from "../../static/carousel/5.jpg";
import img6 from "../../static/carousel/6.jpg";
import FixedCenter from "../../components/FixedCenter";

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
      <FixedCenter>
        <section className="home-story">
          <h1 className="text-xl text-bold text-tight">
            It Started in The Stands...
          </h1>

          <p className="text-md text-normal">
            Big Blue Cooler was built to support live events with the equipment and manpower needed to keep product moving. We work with venues, concerts, and large-scale events to provide reliable, on-the-ground distribution through trained hawkers and mobile setups designed for high-volume environments.
          </p>
          <p className="text-md text-normal">
            The company comes from real experience in the field. I worked as a beer hawker at COTA and sold $20,000 in beer in my first year. That experience showed me what actually works in a live event setting, and led me to start my own company built around that approach. No shortcuts. No fluff. Just learning what actually works.
          </p>
          <p className="text-md text-normal">
            Today, we plug directly into your existing operation and focus on execution. We use your POS system, bring our own coolers and hawkers, and operate within your setup without adding extra work for your team. There is no need to hire or manage additional staff. Whether you need one hawker or a full crew, we scale to fit the event and keep things running smoothly.
          </p>
        </section>
        <ImageCarousel images={carouselImages} />
      </FixedCenter>
    </div >
  );
};

export default Home;