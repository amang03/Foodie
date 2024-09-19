import "./about.css";
import HeaderImage from "../../images/about-header.jpg";
import Header from "../../components/Header";
import StoryImage from "../../images/about-people-1.jpg";
import VisionImage from "../../images/about-people-2.jpg";
import MissionImage from "../../images/about-people-3.jpg";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        This reveals our passion for exceptional cuisine, commitment to quality
        ingredients, and dedication to customer satisfaction.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt=" Our Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Welcome to our culinary adventure! At <strong>FoodCrave</strong>,
              we believe that good food has the power to bring people together,
              spark joy, and create unforgettable memories. Our story began with
              a passion for flavors from around the world and a desire to share
              them with food enthusiasts like you.
              <br /> <br />
              From handpicked ingredients to chef-curated recipes, we strive to
              deliver a delightful experience straight to your doorstep. With
              each bite, embark on a gastronomic journey that celebrates
              diversity, craftsmanship, and the love for extraordinary meals.
              Join us as we redefine the way you experience food, one
              subscription at a time. Together, let's savor the taste of
              discovery and indulge in a world of culinary delights.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              At <strong>FoodCrave</strong>, our vision is to revolutionize the
              way people engage with food. We envision a world where everyone
              has access to exceptional, thoughtfully crafted meals that inspire
              and nourish. We strive to bridge the gap between convenience and
              quality, offering a seamless experience that brings the excitement
              of culinary exploration right to your doorstep.
              <br /> <br />
              Our vision is to create a community where individuals can discover
              new flavors, embrace diverse cuisines, and ignite their passion
              for cooking. We believe that by connecting people through the
              universal language of food, we can foster a deeper appreciation
              for cultural richness and create a more vibrant, inclusive
              culinary landscape. Join us on this journey as we transform the
              way you experience food and empower you to unleash your inner
              chef. Together, let's redefine the art of dining and savor the
              extraordinary.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt=" Our Vision" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Our mission at <strong>FoodCrave</strong> is to make exceptional
              culinary experiences accessible to all. We are dedicated to
              offering high-quality ingredients, chef-curated recipes, and
              convenient delivery, all at an affordable price. We believe that
              everyone, regardless of their budget, should have the opportunity
              to enjoy gourmet meals and elevate their dining experience. By
              providing a service that caters to the needs of the middle class,
              we aim to simplify their lives and bring joy to their tables.
              <br /> <br />
              We strive to empower individuals to unleash their inner food
              enthusiast, create memorable moments, and savor the pleasures of
              extraordinary meals without breaking the bank. Join us as we
              bridge the gap between affordability and exceptional quality,
              making culinary delight an everyday experience for all.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
