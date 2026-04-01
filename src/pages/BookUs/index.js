import React from 'react';
import FixedCenter from "../../components/FixedCenter";

import "./BookUs.scss"

export default function BookUs() {
  return (
    <div className="book-us page-offset">
      <FixedCenter>
        <section className="home-story">

          <h1 className="text-xl text-bold text-tight">
            Get in Touch With Us to Book
          </h1>

          <div>
            <p className="text-lg text-uppercase text-medium">
              Phone
            </p>
            <p className="text-md text-medium">
              <a href="tel:8608181043">
                860-818-1043
              </a>
            </p>
          </div>

          <div>
            <p className="text-lg text-uppercase text-medium">
              Email
            </p>
            <p className="text-md text-medium">
              <a href="mailto:joebegley15@gmail.com">
                joebegley15@gmail.com
              </a>
            </p>
          </div>

        </section>
      </FixedCenter>
    </div>
  );
}
