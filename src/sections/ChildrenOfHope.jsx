import "./ChildrenOfHope.css";
const volleyball = require("../images/phil-volleyball2.jpg");

export default function ChildrenOfHope() {
  return (
    <section className="children-of-hope">
      <img src={volleyball} className="coh-pic" />
      <div className="coh-text-container">
        <h2>Children of Hope</h2>
        <p>
          Children of Hope has a vision to give children in Mexico a brighter
          tomorrow. Their goal is to train children up to be responsible
          Christian citizens in their communities and see them succeed in
          society. They raise support for their children’s ministries and
          community centers through child sponsorships, short-term mission
          groups, and donors.
        </p>
        <h3 className="coh-h3">
          It takes a community of people like us for them to reach the goal of
          helping children!
        </h3>
      </div>
    </section>
  );
}
