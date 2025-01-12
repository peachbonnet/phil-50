import "./Gallery.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const images = require.context("../images/carousel");

export default function Gallery() {
  const imageList = images.keys().map((image) => images(image));
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="gallery">
      <div className="carousel-section">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={true}
          infinite={true}
          partialVisible={false}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          className="carousel"
        >
          {imageList.map((img, i) => {
            return (
              <div className="carousel-img" key={i}>
                <img src={img} alt="Phil and Children of Hope"/>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
