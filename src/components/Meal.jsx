import Card from "../UI/Card";

const Meal = ({ image, name, job, socials }) => {
  return (
    <Card className="meal">
      <div className="meal__img">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="meal__icons">
          {socials.map(({ icon, link }, index) => {
            return (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
              >
                {icon}
              </a>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default Meal;
