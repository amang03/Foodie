import SectionHead from "./SectionHead";
import { values } from "../data";
import Card from "../UI/Card";

const Values = () => {
  const valuelength = 8;
  const vimg = [];

  for (let i = 1; i <= valuelength; i++) {
    vimg.push(require(`../images/value-img${i}.jpg`));
  }
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            {vimg.map((image, index) => {
              return (
                <article key={index}>
                  <img
                    src={image}
                    alt={`Value ${index + 1}`}
                    className="value__img"
                  />
                </article>
              );
            })}
          </div>
        </div>
        <div className="values__right">
          <SectionHead title="Values" />
          <p className="values__p">
            We have full dedication to provide high-quality, delicious meals at
            affordable prices, ensuring exceptional culinary experiences for
            all.
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card key={id} className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
