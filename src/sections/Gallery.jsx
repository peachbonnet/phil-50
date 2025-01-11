import "./Gallery.css"
const philhand = require('../images/phil-hand.jpg');
const philhat = require('../images/phil-hat.jpg');

export default function Gallery() {
  return (
    <section className="gallery gallery-test">
      <img className="gallery__img gallery-test1" src={philhand} />
      <img className="gallery__img gallery-test2" src={philhat} />
    </section>
  )
}