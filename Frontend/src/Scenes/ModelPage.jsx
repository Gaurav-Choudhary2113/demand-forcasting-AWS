import { motion } from "framer-motion";
import React, { useState } from "react";

const ModelPage = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <section
      id="projects"
      className="h-[40vh] pt-24 lg:w-2/3 md:w-[80%] w-2/3 mx-auto"
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

      <div className="w-full mt-10 flex justify-center items-center ">
       
          <button
            type="submit"
            className="px-3 py-2 m-10 rounded border-2 shadow-md shadow-black"
          >
            Submit
          </button>
      
      </div>
      <div className="image-container">
        {loading && <div className="loader"></div>}
        <img
          src="https://footware0711.s3.amazonaws.com/sarima_predictions_vs_actual1.png"
          alt="Loaded content"
          className="w-[80vw]"
          onLoad={handleImageLoad}
          style={{ display: loading ? "none" : "block" }}
        />
      </div>
    </section>
  );
};

export default ModelPage;
