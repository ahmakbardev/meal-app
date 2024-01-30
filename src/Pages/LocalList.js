import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const LocalList = () => {
    const { strMeal } = useParams();
    const [strMealData, setStrMealData] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${strMeal}`)
            .then((response) => response.json())
            .then((data) => {
                setStrMealData(data.meals || []);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [strMeal]);

    return (
        <>
            <h1 className='pb-3 mb-3 border-bottom'>{strMeal} Meals</h1>
            <div className="row gap-3 justify-content-center">
                {strMealData.map((item) => (
                    <Link
                        key={item.idMeal}
                        to={`/location/${strMeal}/${item.idMeal}/detail`}
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

export default LocalList;
