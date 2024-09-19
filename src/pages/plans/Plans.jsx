import "./plans.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/plans-header.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";

const Plans = () => {
  return (
    <>
      <Header title="Subscription Plans" image={HeaderImage}>
        We provide convenient access to delicious meals, offering flexibility
        and customization options for a personalized dining experience.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$ ${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
