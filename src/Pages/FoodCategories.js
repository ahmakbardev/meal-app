import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const FoodCategories = () => {
  const [menuItems, setMenuItems] = useState([]);
  const { category } = useParams();

  const fetchMenuItems = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenuItems(data.meals || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchMenuItems();
  }, [category]);

  return (
    <>
      <h1 className='pb-3 mb-3 border-bottom'>{category} Category</h1>
      <div className='row gap-3 justify-content-center'>
        {menuItems.map((menuItem) => (
          <Link
            key={menuItem.idMeal}
            to={`/foods/${category}/${menuItem.idMeal}/detail`}
            className="col-lg-3 position-relative text-white cat-card d-flex align-items-center justify-content-center overflow-hidden rounded-4 link-opacity-50-hover"
          >
            <img src={menuItem.strMealThumb} className='object-fit-cover' alt="" />
            <div className="object-fit-cover bg-dark position-absolute w-100 h-100 bg-opacity-50"></div>
            <div className="fs-5 fw-bold position-absolute">{menuItem.strMeal}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default FoodCategories;
