import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import News1 from "../../assets/news_1.jpg";
import News2 from "../../assets/news_2.jpeg";
import News3 from "../../assets/news_3.jpg";
import News4 from "../../assets/news_4.jpg";
import Event1 from "../../assets/event_1.jpg";
import Event2 from "../../assets/event_2.jpg";
import Event3 from "../../assets/event_3.jpg";
import Event4 from "../../assets/news_4.jpg";
import "./style.css";

function News() {
  const responsive = {
    0: { items: 1 },
    600: {
      items: 2,
    },
    1550: { items: 3 },
  };

  function generateItems(array) {
    let items = array.map((e) => (
      <div className="item">
        <div className="imageContainerNews">
          <img
            src={e.image}
            alt=""
            height="100%"
            width="100%"
            className="image"
          />
          <p className="textCard">{e.text}</p>
        </div>
      </div>
    ));
    return items;
  }

  return (
    <div className="news">
      {[
        {
          text: "Latest News",
          items: [
            {
              image: News1,
              text: "ENS organized the virtual Graduation Ceremony",
            },
            { image: News2, text: "Our Virtual Tours are live" },
            { image: News3, text: "ENS launched the center of excellence" },
            { image: News4, text: "ENS student social funds" },
          ],
        },
        {
          text: "Events",
          items: [
            { image: Event1, text: "Month of Reading" },
            { image: Event2, text: "National Identity Project Finals" },
            { image: Event3, text: "Arabic Writing Challenge Ceremony" },
            { image: Event4, text: "Art Exibition 2020" },
          ],
        },
      ].map((e, i) => (
        <div key={i} className="cardNews">
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
