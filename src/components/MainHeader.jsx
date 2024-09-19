import { Link } from "react-router-dom";
import Image from "../images/herofood31.png";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h1 className="hero__header">
            Nourish Your Body, Delight Your Senses!
          </h1>
          <p>
            Discover a world of culinary convenience with our food subscription
            service. Enjoy delicious meals delivered straight to your door,
            saving you time and satisfying your taste buds.
          </p>
          <Link to="/plans" className="btn lg">
            View Plans
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
