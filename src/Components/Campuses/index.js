import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Campus1 from "../../assets/campus_1.jpg";
import Campus2 from "../../assets/campus_2.jpg";
import Campus3 from "../../assets/campus_3.jpg";
import Campus4 from "../../assets/campus_4.jpg";
import Campus5 from "../../assets/campus_5.jpg";
import Campus6 from "../../assets/campus_6.jpg";
import "./style.css";

const responsive = {
  635: { items: 1 },
  730: { items: 2 },
  1500: { items: 4 },
};

function generateItems(array) {
  let items = array.map((e) => (
    <div className="item">
      <div className="imageContainerCampus">
        <img
          src={e.image}
          alt=""
          height="100%"
          width="100%"
          className="image"
        />
        <p className="textCardCampus">{e.text}</p>
      </div>
    </div>
  ));
  return items;
}

function News() {
  return (
    <div className="campuses">
      {[
        {
          text: "Our Campuses",
          items: [
            {
              image: Campus1,
              text: "MBZ City Campus",
            },
            { image: Campus2, text: "Abu Dhabi City Campus" },
            { image: Campus3, text: "Al Ain City Campus" },
            { image: Campus4, text: "Sharjah Campus" },
            {
              image: Campus5,
              text: "Ras Al Khaimah Campus",
            },
            { image: Campus6, text: "Dubai Campus" },
          ],
        },
      ].map((e, i) => (
        <div key={i} className="cardCampus">
          <p className="titleNews">{e.text}</p>
          <AliceCarousel
            mouseTracking
            autoPlay
            autoPlayInterval="3000"
            animationDuration="800"
            infinite
            disableButtonsControls
            items={generateItems(e.items)}
            responsive={responsive}
            autoHeight
          />
        </div>
      ))}
    </div>
  );
}

export default News;
