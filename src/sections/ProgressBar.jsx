import ProgressLine from "../components/ProgressLine";
import "./ProgressBar.css";

export default function ProgressBar() {
  const amountOfSponsors = 3;
  const percentage = ((amountOfSponsors / 50) * 100).toString() + "%";
  return (
    <section className="progress-bar">
      <h2>{amountOfSponsors} out of 50 Sponsors Raised</h2>
      <ProgressLine percentage={percentage} />
    </section>
  );
}
