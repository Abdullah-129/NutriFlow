import React from 'react';
import Meal from './Meal';

function MealList({ mealData }) {
  if (!mealData) {
    return <p>Loading...</p>;
  }

  const { nutrients } = mealData; // Accessing nutrients from mealData

  return (
    <div className='pt-11 pb-11'>
    <div className="    ">
      <section className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h1 className="text-2xl font-bold mb-4 text-center">To facilitate weight gain, the following factors are tailored to your body's needs.</h1>
        <ul>
          <li className="mb-2 font-bold">Calories:<span>{nutrients.calories}</span></li>
          <li className="mb-2 font-bold">Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li className="mb-2 font-bold">Fat: {nutrients.fat.toFixed(0)}</li>
          <li className="mb-2 font-bold">Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>

      
    </div>
    <section className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-bold mb-4">Meals</h2>
        {mealData.meals.map(meal => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </div>
  );
}

export default MealList;
