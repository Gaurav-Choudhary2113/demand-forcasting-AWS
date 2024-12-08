import SocialMediaIcons from "../Components/SocialMediaIcons";
import { motion } from "framer-motion";
import TypingText from "../Components/TypingText";
const Landing = () => {
  const texts = [
    "Predict the Future of Footwear.              ",
    "Stay in Style – Forecast the Next Big Shoe Trend.              ",
  ];
  const speed = 50;
  return (
    <section
      id="home"
      className="flex md:justify-between md:items-center justify-center items-center h-screen"
    >
      <div className="md:mx-64 mx-10 sm:mx-20 mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="h-8 ml-2 text-center md:text-left mb-5 sm:block hidden">
            <TypingText texts={texts} speed={speed} delay={1000} />
          </p>
          <p className="inter md:text-7xl text-4xl sm:text-5xl leading-12 text-center md:text-start">
          SoleTrendsAI.
          </p>
          <p className="inter md:text-6xl sm:text-4xl text-3xl text-center md:text-start text-[#ffffffa1]">
          Discover the Next Shoe Trend Before It Hits the Market.
          </p>

          <p className="code mt-10 mb-7 md:px-0 sm:text-md text-sm text-center md:text-start xs:text-center xs:px-12">
          Leveraging cutting-edge AI techniques, we utilize Long Short-Term Memory (LSTM) models and neural networks to accurately forecast shoe demand. By analyzing historical sales data and market trends, our AI-driven approach provides businesses with predictive insights.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};
export default Landing;
