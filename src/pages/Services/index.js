import React from 'react';

import FixedCenter from "../../components/FixedCenter";

export default function Services() {
  return (
    <div className="home-page page-offset">
      <FixedCenter>
        <section className="home-story">
          <h1 className="text-xl text-bold text-tight">
            Beer Hawkers that WORK
          </h1>

          <p className="text-md text-normal">
            Our team is made up of trained hawkers who know how to move through crowds,
            keep lines short, and keep product moving. We operate in high-volume
            environments like concerts, sporting events, and large gatherings where
            speed and efficiency matter.
          </p>

          <h2 className="text-lg text-medium text-tight text-uppercase">
            How It Works
          </h2>

          <p className="text-md text-normal">
            We plug directly into your existing operation.
          </p>

          <p className="text-md text-normal">
            We use your POS system and work within your setup, so there is no disruption
            to your current workflow. Our goal is to add volume without adding complexity.
          </p>

          <p className="text-md text-normal">
            We bring our own coolers and equipment, along with a trained team that is
            ready to go from the moment we arrive.
          </p>

          <h2 className="text-lg text-medium text-tight text-uppercase">
            What We Provide
          </h2>

          <div>
            <p className="text-md">Trained beer hawkers</p>
            <p className="text-md">Mobile cooler setups</p>
            <p className="text-md">High-energy, professional staff</p>
            <p className="text-md">
              Flexible crew sizing based on event needs
            </p>
            <p className="text-md">
              Whether you need one person or a full crew, we scale to match the size and
              flow of your event.
            </p>
          </div>


          <h2 className="text-lg text-medium text-tight text-uppercase">
            Why It Works
          </h2>

          <p className="text-md text-normal">
            We are focused on one thing: moving product.
          </p>

          <p className="text-md text-normal">
            This is not passive service. Our team is trained to operate inside a crowd,
            reach customers where they are, and increase overall sales without slowing
            down your existing operation.
          </p>

          <p className="text-md text-normal">
            No extra hiring. No added management. Just a crew that shows up ready to work.
          </p>

        </section>
      </FixedCenter>
    </div>
  );
}
