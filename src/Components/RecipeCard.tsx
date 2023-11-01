import React from 'react';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  id: string;
  name: string;
  imageUrl: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ id, name, imageUrl }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: 'url(/images/cardBackground.jpg)',
        backgroundPosition: 'center center',
      }}
    >
      <img
        src={imageUrl}
        className="card-img-top img-fluid w-100 fixed-height"
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold text-white">{name}</h5>
        <Link to={`/recipe/${id}`} className="btn btn-danger fw-bold">
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
