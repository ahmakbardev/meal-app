import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Local = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((response) => response.json())
      .then((data) => {
        setAreas(data.meals || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleLinkClick = () => {
  };

  return (
    <div className='row gap-3 justify-content-center'>
      {areas.map((area) => (
        <Link
          key={area.strArea}
          to={`/location/${area.strArea}`} 
          className="col-lg-3 position-relative text-white cat-card d-flex align-items-center justify-content-center overflow-hidden rounded-4 link-opacity-50-hover"
          onClick={handleLinkClick}
        >
          <div className="object-fit-cover bg-info position-absolute w-100 h-100"></div>
          <div className="fs-5 fw-bold position-absolute">{area.strArea}</div>
        </Link>
      ))}
    </div>
  );
};

export default Local;
