import React, { useState } from "react";

const Model = () => {
  const [queryImage, setQueryImage] = useState(null);
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("query_img", e.target.query_img.files[0]);

    try {
      const response = await fetch("/model", {
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
    <div className="container mx-auto p-4 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Image Recommendation System</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="file"
          name="query_img"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs mb-4"
          required
        />
        <br />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Submit
        </button>
      </form>

      {queryImage && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Query Image:</h2>
          <img
            src={queryImage}
            alt="Query"
            className="my-4 border border-white rounded"
            width="300"
          />
        </div>
      )}

      {results.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold">Results:</h2>
          <div className="flex flex-wrap">
            {results.map(({ score, path }, index) => (
              <div key={index} className="p-4">
                <img
                  src={path}
                  alt={`Result ${index}`}
                  className="h-48 w-auto border border-gray-700 rounded"
                />
                <p className="text-center mt-2 text-gray-300">Score: {score.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Model;
