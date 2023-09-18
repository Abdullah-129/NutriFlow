import React, {useEffect, useState} from 'react'
import MealList from './MealList';

function Low() {
    function getRandomCalories() {
        return Math.floor(Math.random() * (1501 - 1400) + 1400);
      }
    const [mealData, setMealData] = useState(null);
    const calories = getRandomCalories();
    useEffect(() => {
      const fetchMealData = async () => {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=f56c85bcd6c24ac89da5588178bdc0c8&timeFrame=day&targetCalories=${calories}`
          );
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          setMealData(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchMealData();
    }, [calories]);
  
    return (
      <div>
        {mealData ? <MealList mealData={mealData} /> : <p>Loading...</p>}
      </div>
    );
}

export default Low