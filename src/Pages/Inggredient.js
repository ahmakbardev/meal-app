import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Inggredient = () => {
  const [ingredients, setIngredients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((response) => response.json())
      .then((data) => {
        setIngredients(data.meals || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const groupIngredientsAlphabetically = () => {
    const groupedIngredients = {};
    ingredients.forEach((ingredient) => {
      const firstLetter = ingredient.strIngredient.charAt(0).toUpperCase();
      if (!groupedIngredients[firstLetter]) {
        groupedIngredients[firstLetter] = [];
      }
      groupedIngredients[firstLetter].push(ingredient.strIngredient);
    });
    return groupedIngredients;
  };

  const alphabetKeys = Object.keys(groupIngredientsAlphabetically()).sort();

  const isIngredientFound = alphabetKeys.some((letter) =>
    groupIngredientsAlphabetically()[letter].some((ingredient) =>
      ingredient.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="mb-3">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control"
              id="ingredientSearch"
              placeholder="Enter ingredient name..."
              aria-describedby="basic-addon3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="form-text" id="basic-addon4">
            See All The Foods Ingredients.
          </div>
        </div>
      </div>
      {!isIngredientFound && (
        <div className="display-4 text-center fw-bold mt-5">Ingredient not found.</div>
      )}

      {isIngredientFound &&
        alphabetKeys.map((letter) => {
          const filteredLetterIngredients = groupIngredientsAlphabetically()[letter].filter(
            (ingredient) =>
              ingredient.toLowerCase().includes(searchTerm.toLowerCase())
          );

          return (
            <div key={letter} className="mt-3">
              {filteredLetterIngredients.length > 0 && (
                <>
                  <div className="display-6 fw-bold">{letter}</div>
                  <div className="row mt-2">
                    {filteredLetterIngredients.map((ingredient, index) => (
                      <div className="col-lg-3" key={index}>
                        <Link to={`/inggredient/${ingredient}`} className='text-decoration-none'>
                          <p className="fw-bold text-black">{ingredient}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Inggredient;