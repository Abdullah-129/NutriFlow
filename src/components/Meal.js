import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=f56c85bcd6c24ac89da5588178bdc0c8&includeNutrition=false`
    )
      .then(response => response.json())
      .then(data => {
        setImageUrl(data.image);
        setLoading(false); // Set loading to false after image is fetched
      })
      .catch(() => {
        console.log("error");
        setLoading(false); // Set loading to false in case of an error
      });
  }, [meal.id]);

  return (
    <article className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h1 className="text-xl font-semibold mb-2">{meal.title}</h1>
      {loading ? (
        <p className="text-gray-600">Loading...</p> // Display a loading message while fetching the image
      ) : (
        <img src={imageUrl} alt="recipe" className="rounded-lg" />
      )}
      <ul className="mt-2">
        <li className="text-gray-600">
          Preparation time: {meal.readyInMinutes} minutes
        </li>
        {/* <li className="text-gray-600">Number of servings: {meal.servings}</li> */}
        
      </ul>

      <a
        href={meal.sourceUrl}
        className="block mt-2 text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to Recipe
      </a>
    </article>
  );
}
