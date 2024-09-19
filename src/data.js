import { BiLeaf } from "react-icons/bi";
import { TbHomeInfinity } from "react-icons/tb";
import { FaRecycle } from "react-icons/fa";
import { BsPauseFill } from "react-icons/bs";
import { Bs1Circle } from "react-icons/bs";
import { Bs2Circle } from "react-icons/bs";
import { Bs3Circle } from "react-icons/bs";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Meals",
    path: "/meals",
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const steps = [
  {
    id: 1,
    icon: <Bs1Circle />,
    title: "Just say what you like & what you don't :)",
    info: "Say goodbye to mealtime indecision! FoodCrave AI crafts customized weekly meal plans to meet your dietary needs, ensuring optimal nutrition without the hassle.",
    path: "/programs/111",
  },
  {
    id: 2,
    icon: <Bs2Circle />,
    title: "Give your weekly meal plan the green light :)",
    info: "Every week, review and approve the meal plan created by FoodCrave AI. Customize it by modifying ingredients, substituting entire meals, or incorporating your own recipes.",
    path: "/programs/222",
  },
  {
    id: 3,
    icon: <Bs3Circle />,
    title: "Choose a convenient time to receive your meals :)",
    info: "Experience daily meals prepared by top chefs of the city and delivered to your door at your preferred time. You can modify your delivery schedule and address as often as and whenever needed.",
    path: "/programs/333",
  },
];

export const values = [
  {
    id: 1,
    icon: <BiLeaf />,
    title: "Local and Organic",
    desc: "Discover the exceptional taste of locally sourced organic ingredients, delivering freshness and quality to your plate.",
  },
  {
    id: 2,
    icon: <TbHomeInfinity />,
    title: "Never Cook Again",
    desc: "Indulge in the luxury of never cooking again, even on public holidays, as we ensure seamless meal deliveries directly to you.",
  },
  {
    id: 3,
    icon: <FaRecycle />,
    title: "No Waste",
    desc: "Go waste-free with our eco-friendly approach to dining, minimizing waste through portioned ingredients and sustainable packaging.",
  },
  {
    id: 4,
    icon: <BsPauseFill />,
    title: "Pause Anytime",
    desc: "Control your schedule and enjoy the flexibility of pausing anytime, giving you the freedom to manage your dining experience on your terms.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Are the meals personalized to my dietary preferences?",
    answer:
      "Absolutely! FoodCrave's AI-based system takes into account your dietary preferences and restrictions to provide personalized meal recommendations that cater to your specific needs.",
  },
  {
    id: 2,
    question: "How fresh are the ingredients used in the meals?",
    answer:
      "At FoodCrave, freshness is a top priority. We source high-quality, fresh ingredients from local farms and suppliers to ensure that each meal is made with the finest and most flavorful ingredients.",
  },
  {
    id: 3,
    question: "How does the delivery process work?",
    answer:
      "FoodCrave provides doorstep delivery for your convenience. Our meals are carefully packaged and delivered in insulated boxes to ensure freshness and quality upon arrival. Delivery schedules can be customized based on your preferences.",
  },
  {
    id: 4,
    question: "Is there a minimum subscription commitment?",
    answer:
      "No, FoodCrave offers flexible subscription plans with no minimum commitment. You have the freedom to pause, modify, or cancel your subscription at any time to suit your needs.",
  },
  {
    id: 5,
    question:
      "Are there options for specific dietary requirements (e.g., gluten-free, vegetarian)?",
    answer:
      "Absolutely! FoodCrave offers a variety of dietary options, including gluten-free, vegetarian, and other special dietary considerations. You can filter and select meals based on your specific requirements.",
  },
  {
    id: 6,
    question: "What if I have further questions or need assistance?",
    answer:
      "We're here to help! FoodCrave has a dedicated customer support team ready to assist you with any questions or concerns. You can reach out to us through the 'Contact' section of our website, and we'll be happy to assist you.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Taylor",
    quote:
      "I can't express how much I enjoy the meals from FoodCrave. The diverse menu, exceptional flavors, and prompt delivery have made it my go-to food subscription service.",
    job: "Professor",
    avatar: require("./images/avatar1.jpg"),
  },
  {
    id: 2,
    name: "Daniel Watson",
    quote:
      "I love the convenience of FoodCrave. The subscription plans are flexible, and the meals are always fresh, delicious, and tailored to my dietary preferences.",
    job: "Software Engineer",
    avatar: require("./images/avatar2.jpg"),
  },
  {
    id: 3,
    name: "Edem Quist",
    quote:
      "As a busy professional, FoodCrave has saved me so much time and effort. I get to enjoy gourmet-quality meals without the hassle of meal planning and cooking.",
    job: "University Lecturer",
    avatar: require("./images/avatar3.jpg"),
  },
  {
    id: 4,
    name: "Dr. Alfiya Khan",
    quote:
      "FoodCrave has made it possible for me to maintain a healthy lifestyle without compromising on taste. Their nutritious meals are a game-changer.",
    job: "Doctor",
    avatar: require("./images/avatar4.jpg"),
  },
  {
    id: 5,
    name: "Nana Yaa Dankwa",
    quote:
      "Being a vegetarian, it's often challenging to find exciting meal options. FoodCrave offers a wide variety of tasty vegetarian dishes that never disappoint.",
    job: "Pharmacist",
    avatar: require("./images/avatar5.jpg"),
  },
];

export const plans = [
  {
    id: 1,
    name: "Silver Box",
    desc: "This package is perfect for beginners who need constant help",
    price: 299,
    features: [
      { feature: "1 meals per day", available: true },
      { feature: "Order from 10am to 10pm ", available: true },
      { feature: "Free Delivery", available: true },
      { feature: "Access to latest recipes", available: false },
      { feature: "Access to expert nutritionist", available: false },
      { feature: "Can customize your meal", available: false },
    ],
  },
  {
    id: 2,
    name: "Gold Box",
    desc: "Perfect package for beginners who know what their doing",
    price: 449,
    features: [
      { feature: "2 meal per day", available: true },
      { feature: "Order 24/7", available: true },
      { feature: "Free Delivery", available: true },
      { feature: "Access to latest recipes", available: true },
      { feature: "Access to expert nutritionist", available: false },
      { feature: "Can customize your meal", available: false },
    ],
  },
  {
    id: 3,
    name: "Platinum Box",
    desc: "This package is perfect for busy people who need home service",
    price: 749,
    features: [
      { feature: "3 meals per day", available: true },
      { feature: "Order 24/7", available: true },
      { feature: "Free Delivery", available: true },
      { feature: "Access to latest recipes", available: true },
      { feature: "Access to expert nutritionist", available: true },
      { feature: "Can customize your meal", available: true },
    ],
  },
];

const Meal1 = require("./images/meal1.jpg");
const Meal2 = require("./images/meal2.jpg");
const Meal3 = require("./images/meal3.jpg");
const Meal4 = require("./images/meal4.jpg");
const Meal5 = require("./images/meal5.jpg");
const Meal6 = require("./images/meal6.jpg");

export const meals = [
  {
    id: 1,
    image: Meal1,
    name: "French Toast",
    job: "French toast is a breakfast dish made by soaking bread in a mixture of beaten eggs and milk, then frying it.",
    socials: ["https://nutrition.com/", "https://wikipedia.com/"],
  },
  {
    id: 2,
    image: Meal2,
    name: "Salad",
    job: "Salad is a dish made from a mixture of raw or cooked vegetables, often topped with dressing, and served cold.",
    socials: ["https://nutrition.com/", "https://wikipedia.com/"],
  },
  {
    id: 3,
    image: Meal3,
    name: "Vegan Tacos",
    job: "Vegan tacos are filled with ingredients like beans, vegetables which provides a alternative to traditional tacos.",
    socials: ["https://nutrition.com/", "https://wikipedia.com/"],
  },
  {
    id: 4,
    image: Meal4,
    name: "Masala Dosa",
    job: "Dosa is a traditional Indian breakfast made from fermented rice and lentil batter, usually served with chutney and sambar.",
    socials: ["https://nutrition.com/", "https://wikipedia.com/"],
  },
  {
    id: 5,
    image: Meal5,
    name: "Chicken Pockets",
    job: "Chicken pockets are handheld treats made by stuffing seasoned chicken, along with ingredients, into dough and baking or frying it.",
    socials: ["https://nutrition.com/", "https://wikipedia.com/"],
  },
  {
    id: 6,
    image: Meal6,
    name: "Cupcakes",
    job: "Cupcakes are small, single-sized cakes, topped with frosting or decorations, making them a delightful dessert option.",
    socials: ["https://nutrition.com/", "https://wikipedia.com/"],
  },
];
