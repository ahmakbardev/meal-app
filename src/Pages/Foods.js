import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Foods = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const filteredCategories = data.categories.filter(category => category.strCategory !== 'Pork');
        setCategories(filteredCategories);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleLinkClick = (category) => {
    console.log('Clicked category:', category);
  };

  return (
    <>
      <div className='row gap-3 justify-content-center'>
        {categories.map((category) => (
          <Link
            key={category.idCategory}
            to={`/foods/${category.strCategory}`}
            className="col-lg-3 position-relative text-white cat-card d-flex align-items-center justify-content-center overflow-hidden rounded-4 link-opacity-50-hover"
            onClick={() => handleLinkClick(category)}
          >
            <img src={category.strCategoryThumb} className='object-fit-cover' alt="" />
            <div className="object-fit-cover bg-dark position-absolute w-100 h-100 bg-opacity-50"></div>
            <div className="fs-5 fw-bold position-absolute">{category.strCategory}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Foods;
