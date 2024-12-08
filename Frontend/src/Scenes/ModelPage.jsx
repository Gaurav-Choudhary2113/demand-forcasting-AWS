import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ModelPage = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <section
      id="projects"
      className="h-[60vh] pt-24 lg:w-2/3 md:w-[80%] w-2/3 mx-auto"
    >
      {/* HEADINGS */}
      <motion.div
        className="flex flex-col w-full justify-center items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="inter text-[#e3e3e3] font-semibold md:text-5xl text-3xl sm:text-4xl">
            Our model
          </p>
        </div>
        <p className="mb-20 mt-4 codesemi text-[#a9a9a9] md:text-lg text-sm flex text-center">
          Predict the Next Trend
        </p>
      </motion.div>

      <div className="w-full mt-10 flex justify-center items-center">
        <Link to="/modelPage">
          <button
            type="button"
            className="px-3 py-2 m-10 rounded border-2 text-black bg-[#e0e0e0] font-bold shadow-md shadow-black transition-transform transform active:scale-95"
          >
            Go to Model Page
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ModelPage;
