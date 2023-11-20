// @ts-nocheck
import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";

// @ts-nocheck
const FoodDetails = () => {
  const foodItems = useLoaderData();
  const { foodName } = useParams();
  const foodItem = foodItems.find((foodItem) => foodItem.foodName === foodName);
  const {
    image,
    category,
    price,
    userName,
    country,
    shortDescription,
    description,
  } = foodItem;
  const name = userName.toUpperCase();

  return (
    <div className="mt-20 max-w-6xl mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{foodName}-Details | TasteHarmony Cafe</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="mt-14 text-start mb-10">
        <h2 className="text-[#0B0B0B] text-[40px] font-semibold">{foodName}</h2>
        <div className="mt-4">
          <div className="badge badge-outline font-semibold ">{category}</div>
          <div className="badge badge-outline ml-2 font-semibold ">
            {country}
          </div>
        </div>
      </div>
      <div className="mb-32">
        <h1 className="text-4xl font-bold my-5">Added By {name}</h1>
        <div className="w-full p-2 :h-[700px] relative">
          <img className="w-full h-[700px]" src={image} alt="" />
        </div>
      </div>
      <div className="hero mb-20 -mt-10">
        <div className="hero-content p-4 flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="w-full">
            <p className="text-3xl font-bold font-dancing">
              {shortDescription}
            </p>
            <p className="py-6">{description}</p>

            <Link to={`/user/FoodOrder/${foodName}`}>
              <button className="btn btn-outline bg-[#C59D5F] text-white">
                ${price} - Order now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;

// onClick={() => addTocart(_id)}
