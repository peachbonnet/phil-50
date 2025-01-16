import "./FAQ.css";
const mexico = require("../images/mexico.png");

export default function FAQ() {
  const list = [
    {
      question: <h3>How much does a sponsorship child cost?</h3>,
      answer: (
        <p>
          "Our child sponsorship program is a monthly donation of a minimum of
          $40 per month. This donation goes directly to the home that cares for
          the child. This donation will provide a loving home, nutritious food,
          clothing, education, spiritual and medical care for the child."
        </p>
      ),
    },
    {
      question: <h3>Will I have contact with my sponsored child?</h3>,
      answer: (
        <div>
          <p>
            "Our sponsorship program is designed to provide an opportunity to
            connect personally with a child! As a child sponsor, you can expect
            to receive a personal Christmas Letter every year from your child,
            an updated photo, and a Report Card which updates you on their
            health and growth in different areas of their lives! Sponsors love
            having a snapshot into the life of their sponsor child! In return,
            sponsors have the opportunity to correspond with their children and
            even visit them through our short-term missions teams!"
          </p>
        </div>
      ),
    },
    {
      question: <h3>Tell me more about Children of Hope!</h3>,
      answer: (
        <>
          <p>
            "Children who come from a background of neglect, abuse, or trauma
            see little hope. The goal of Children of Hope is as the name
            suggests – to give children hope, hope above all in our Lord and
            Savior Jesus Christ. Through caring for the physical, emotional, and
            spiritual needs of children, we are able to spark hope. We desire to
            see freedom from their past life of pain and be transformed into a
            restored child who sees their life as valuable. Children of Hope
            works toward this by showing each child that they are loved,
            supported and that their needs are being&nbsp;met.
          </p>
          <p>
            Children of Hope desires to be the beginning of a healthy cycle of
            change. These children grow up in orphanages and are taught to love,
            care, and build up themselves and others. We believe that through
            teaching these Christian values to the children, they will carry
            this on into their future home, work, and community. Our ministries
            allow children to grow up in a Christian setting to become
            responsible citizens of their communities."
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq">
        <img src={mexico} className="icon-3" />
        <h2>FAQ</h2>
        <p>
          These answers and more information can also be found on the{" "}
          <a
            href="https://childrenofhope.info"
            className="coh-link"
            target="_blank"
            rel="noreferrer"
          >
            Children of Hope website
          </a>
          .
        </p>
        <div className="faq-container">
          {list.map((item, i) => (
            <div key={i} className="faq-qa-container">
              <>{item.question}</>
              <div className="faq-answer-container">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
