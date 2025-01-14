import "./SponsorButton.css";

export default function SponsorButton() {
  return (
    <a
      href="https://childrenofhope.info/donate/?donation-type=child-sponsorship"
      target="_blank"
      rel="noreferrer"
    >
      <button className="button-sponsor">Sponsor a child!</button>
    </a>
  );
}
