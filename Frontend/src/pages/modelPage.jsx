import React, { useState } from "react";

const ModelPage = () => {
  const [queryImage, setQueryImage] = useState(null);
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("query_img", e.target.query_img.files[0]);

    try {
      const response = await fetch("/api/recommend", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        setQueryImage(data.query_path);
        setResults(data.results);
      } else {
        console.error("Failed to fetch results");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#040514] text-white flex items-start p-8 justify-center">
      <div className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-7xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
          Image Recommendation System
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-8"
        >
          <input
          type="file"
          name="query_img"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs mb-4"
          required
        />
          <button
            type="submit"
            className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full border-2 border-white transition-transform transform active:scale-95"
          >
            Submit
          </button>
        </form>

        <div className="flex flex-col lg:flex-row mt-8 gap-6">
          {queryImage && (
            <div className="w-[30%]">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                Query Image:
              </h2>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex justify-center items-center">
                <img
                  src={queryImage}
                  alt="Query"
                  className="border border-gray-700 rounded max-h-80"
                />
              </div>
            </div>
          )}

          {results.length > 0 && (
            <div className="w-[70%]">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                Results:
              </h2>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                {results.map(({ score, path }, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col justify-center items-center"
                  >
                    <img
                      src={path}
                      alt={`Result ${index}`}
                      className="h-64 w-auto border border-gray-700 rounded mb-2 object-contain"
                    />
                    <p className="text-gray-300">Score: {score.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelPage;
