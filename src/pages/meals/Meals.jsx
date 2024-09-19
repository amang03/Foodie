import Header from "../../components/Header";
import HeaderImage from "../../images/meals-header.jpg";
import Meal from "../../components/Meal";
import { meals } from "../../data";
import { IoNutritionOutline } from "react-icons/io5";
import { BsWikipedia } from "react-icons/bs";
import "./meals.css";

const Meals = () => {
  return (
    <>
      <Header title="Meals" image={HeaderImage}>
        We offer diverse, chef-crafted options for breakfast, lunch, and dinner,
        catering to various dietary preferences.
      </Header>
      <section className="meals">
        <div className="container meals__container">
          {meals.map(({ id, image, name, job, socials }) => {
            return (
              <Meal
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <IoNutritionOutline />, link: socials[0] },
                  { icon: <BsWikipedia />, link: socials[1] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Meals;
