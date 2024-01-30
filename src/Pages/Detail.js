import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import { FaHome } from "react-icons/fa";


const Detail = () => {
  const [menuItem, setMenuItem] = useState({});
  const { category, idMeal } = useParams();
  const [modalShow, setModalShow] = useState(false);

  const fetchMenuItem = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenuItem(data.meals ? data.meals[0] : {});
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchMenuItem();
  }, [idMeal]);

  const openModal = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  const videoId = menuItem.strYoutube && menuItem.strYoutube.split('v=')[1];

  return (
    <>
      <nav
        style={{
          '--bs-breadcrumb-divider':
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E")',
        }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item d-flex align-items-center gap-3">
           <FaHome/> <Link to="/" className='text-decoration-none text-black'> Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/foods/${category}`} className='text-decoration-none text-black'>{category}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {menuItem.strMeal}
          </li>
        </ol>
      </nav>

      <h1 className="display-4 fw-bold mb-4">{menuItem.strMeal}</h1>
      <div className="fs-4 fw-bold ">Category: {category}</div>
      <span className="badge bg-warning my-3">{menuItem.strArea}</span>
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <img src={menuItem.strMealThumb} className="img-fluid rounded-4 left-title" alt={menuItem.strMeal} />
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="display-5 fw-bold">Instructions</div>
              <div className="fs-5">{menuItem.strInstructions}</div>
              <div className="display-5 fw-bold">Ingredients</div>
              <ul className="fs-5">
                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                  const ingredient = menuItem[`strIngredient${index}`];
                  const measure = menuItem[`strMeasure${index}`];

                  if (ingredient && measure) {
                    return (
                      <li key={index}>
                        {measure} {ingredient}
                      </li>
                    );
                  }

                  return null;
                })}
              </ul>
            </div>
            <div className="col-lg-12"></div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="text-center fw-bold display-4">Tutorial</div>
        <div className="row justify-content-center">
          <div className="col-lg-8 d-flex justify-content-center">
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="Video Thumbnail"
              className="img-fluid rounded-4"
              onClick={openModal}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>

      <div className="modal" tabIndex="-1" role="dialog" style={{ display: modalShow ? 'block' : 'none' }}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <YouTube videoId={videoId} opts={{ width: '100%' }} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
