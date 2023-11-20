// @ts-nocheck
import loadingAnimation from "../assets/loadinAnimation.json";
import { useState } from "react";
import FoodCard from "../Components/FoodCard";
import Container from "../Components/UI/Container";
import { useEffect } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const AllFoodItems = () => {
  const [originalFoodItems, setOriginalFoodItems] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { count } = useLoaderData();
  const foodItemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPages = Math.ceil(count / foodItemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    axios
      .get(
        `https://taste-harmony-cafe-server.vercel.app/fooditems?page=${currentPage}&size=${foodItemsPerPage}`
      )
      .then((response) => {
        setOriginalFoodItems(response.data);
        setFoodItems(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage]);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFoodItems(originalFoodItems);
    } else {
      const filteredItems = originalFoodItems.filter((foodItem) =>
        foodItem.foodName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFoodItems(filteredItems);
    }
  };

  // pagination features
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Food Items | TasteHarmony Cafe</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {isLoading ? (
        <div className="w-[400px] flex ml-96 items-center h-screen">
          <Lottie animationData={loadingAnimation}></Lottie>
        </div>
      ) : (
        <div>
          <div className="my-20 text-center">
            <h2 className="text-5xl font-dancing font-extrabold">
              All Food Items
            </h2>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search Your Favourite Food..."
              className="input input-bordered w-full max-w-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="btn btn-outline bg-[#C59D5F] text-white ml-2"
            >
              Search
            </button>
          </div>
          <div className="my-20 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {foodItems?.map((foodItem) => (
              <FoodCard key={foodItem._id} foodItem={foodItem}></FoodCard>
            ))}
          </div>
          <div className="text-center mb-20">
            <button onClick={handlePrevPage} className="btn btn-outline btn-sm">
              Prev
            </button>
            {pages?.map((page) => (
              <button
                onClick={() => setCurrentPage(page)}
                className="btn btn-sm btn-outline mx-2"
                style={{
                  backgroundColor: currentPage === page ? "black" : "initial",
                  color: currentPage === page ? "white" : "initial",
                }}
                key={page}
              >
                {page + 1}
              </button>
            ))}
            <button onClick={handleNextPage} className="btn btn-outline btn-sm">
              Next
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default AllFoodItems;
