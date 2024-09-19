import MainHeader from "../../components/MainHeader";
import Steps from "../../components/Steps";
import Values from "../../components/Values";
import "./home.css";
import FAQs from "../../components/FAQs";
import Testimonials from "../../components/Testimonials";
import Featured from "../../components/Featured";
const Home = () => {
  return (
    <>
      <MainHeader />
      <Featured />
      <Steps />
      <Values />
      <Testimonials />
      <FAQs />
    </>
  );
};

export default Home;
