import "../pages/home/home.css";

const Featured = () => {
  const featurelength = 5;
  const fimg = [];

  for (let i = 1; i <= featurelength; i++) {
    fimg.push(require(`../images/blogo-${i}.png`));
  }

  return (
    <section className="feature__section">
      <h4 className="feature__heading">AS FEATURED IN</h4>
      <div className="container feature__container">
        {fimg.map((image, index) => {
          return (
            <article key={index}>
              <img
                src={image}
                alt={`Featured In ${index + 1}`}
                className="feature__img"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Featured;
