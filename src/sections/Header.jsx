
import SponsorButton from "../components/SponsorButton";
import "./Header.css";
const phil = require('../images/phil-4.jpg')
const sombrero = require("../images/sombrero.png");

export default function Header() {
  return (
    <section className="header">
      <img src={sombrero} className="icon-1" />
      <img className="image-phil" src={phil} />
      <div className="header-title">
        <h1>50 for Phil's 50</h1>
        <h2>Celebrating a birthday milestone in an impactful&nbsp;way!</h2>
        <p>50 child sponsorships for Phil's 50th birthday</p>
        <SponsorButton />
      </div>
    </section>
  );
}