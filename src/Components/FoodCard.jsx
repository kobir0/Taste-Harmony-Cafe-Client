// @ts-nocheck
import propTypes from "prop-types";
import { Link } from "react-router-dom";
const FoodCard = ({ foodItem }) => {
  const { foodName, image, category, quantity, price } = foodItem;
  return (
    <div className="w-96 h-[550px] bg-base-100 shadow-xl hover:scale-105 transform transition-transform">
      <figure>
        <img className="w-full h-[300px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center space-y-3">
        <h2 className="font-extrabold">{foodName}</h2>
        <p>{category}</p>
        <p className="font-medium">${price}</p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">Available {quantity}</div>
        </div>
        <Link to={`/food/${foodName}`}>
          <button className="btn btn-outline bg-[#C59D5F] btn-sm text-white">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  foodItem: propTypes.node,
};

export default FoodCard;
