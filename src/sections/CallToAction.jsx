import SponsorButton from "../components/SponsorButton";
import "./CallToAction.css";
const maracas = require("../images/maracas.png");

export default function CallToAction() {
  return (
    <section className="call-to-action-section">
      <div className="call-to-action">
        <img src={maracas} className="icon-2" />
        <div className="cta-grid">
          <div className="cta-text-container">
            <h2>Why 50 for 50?</h2>
            <p>
              My goal for this year is to raise 50 child sponsorships for
              Children of Hope in Mexico.
            </p>
            <p>
              The work of providing a safe place for these children to sleep,
              eat, get an education, and learn about Jesus requires many people,
              money and resources. I’ve had the privilege of visiting and
              volunteering at several of the orphanages, soup kitchens, and
              community centers that they support, and I want to help in a
              meaningful and powerful way.
            </p>
            <p>
              Will you join me and commit to sponsoring a child for a year?{" "}
            </p>
          </div>
          <div className="cta-button-container">
            <h2>
              Thank you so much for helping to make a difference in these
              children’s lives!
            </h2>
            <SponsorButton />
          </div>
        </div>
      </div>
    </section>
  );
}
