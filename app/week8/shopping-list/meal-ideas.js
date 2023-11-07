
"use strict";

import React, { useEffect, useState } from 'react';


const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
};

const MealIdeas = ({ ingredient }) => {

  const [meals, setMeals] = useState([]);

  
  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <ul>
        {meals.map(meal => (
          <li key={meal.idMeal}>
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;