// @ts-nocheck
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const MyFoodCard = ({ foodItem }) => {
  const { _id, image, foodName, category, price, shortDescription } = foodItem;
  return (
    <div className="w-96 h-[450px] bg-base-100 shadow-xl hover:scale-105 transform transition-transform">
      <figure>
        <img className="w-full h-[250px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {foodName}
          <div className="badge badge-secondary">{category}</div>
        </h2>
        <p>{shortDescription}</p>
        <p className="font-medium">${price}</p>
        <div className="card-actions justify-start pt-4">
          <div>
            <Link to={`../updateFoodItem/${_id}`}>
              <button className="btn btn-sm btn-outline bg-[#C59D5F] text-white">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
MyFoodCard.propTypes = {
  foodItem: propTypes.object,
};

export default MyFoodCard;
