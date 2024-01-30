import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const IngredientList = () => {
  const { ingredient } = useParams();
  const [ingredientData, setIngredientData] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then((data) => {
        setIngredientData(data.meals || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [ingredient]);

  return (
    <>
        <h1 className='pb-3 mb-3 border-bottom'>{ingredient} Meals</h1>
        <div className="row gap-3 justify-content-center">
        {ingredientData.map((item) => (
            <Link
            key={item.idMeal}
            to={`/inggredient/${ingredient}/${item.idMeal}/detail`}
            className="col-lg-3 position-relative text-white cat-card d-flex align-items-center justify-content-center overflow-hidden rounded-4 link-opacity-50-hover"
            >
            <img src={item.strMealThumb} className="object-fit-cover" alt="" />
            <div className="object-fit-cover bg-dark position-absolute w-100 h-100 bg-opacity-50"></div>
            <div className="fs-5 fw-bold position-absolute">{item.strMeal}</div>
            </Link>
        ))}
        </div>
    </>
  );
};

export default IngredientList;
