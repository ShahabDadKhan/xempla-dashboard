import "./Card.scss";
import CardUpperSection from "./CardUpperSection/CardUperSection";
import CardMiddleSection from "./CardMiddleSection/CardMiddleSection";
import CardLowerSection from "./CardLowerSection/CardLowerSectionn";

export default function Card() {
  return (
    <div className="CardContainer">
      <CardUpperSection />
      <CardMiddleSection />
      <CardLowerSection />
    </div>
  );
}
