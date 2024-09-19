import SectionHead from "./SectionHead";
import { steps } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

const Steps = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead title="How It Works" />
        <p className="steps__text">
          Follow these simple steps to experience culinary delight with
          FoodCrave:
        </p>
        <div className="programs__wrapper">
          {steps.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs__program" key={id}>
                <span className="step__icon">{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn More
                  <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
