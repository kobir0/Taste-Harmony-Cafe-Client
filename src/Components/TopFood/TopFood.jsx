// @ts-nocheck
import loadingAnimation from "../../assets/loadinAnimation.json";
import { Link } from "react-router-dom";
import Container from "../UI/Container";
import TopFoodCard from "./TopFoodCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";

// @ts-nocheck
const TopFood = () => {
  const [topFoodItems, setTopFoodItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(topFoodItems);

  useEffect(() => {
    axios
      .get("https://taste-harmony-cafe-server.vercel.app/topfooditems")
      .then((response) => setTopFoodItems(response.data))
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      <div className="text-3xl text-center font-extrabold my-20">
        <h2 className="font-dancing">Top Food Items</h2>
      </div>
      {isLoading ? (
        <div className="w-[400px] flex ml-96 items-center h-screen">
          <Lottie animationData={loadingAnimation}></Lottie>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topFoodItems?.map((topFoodItem) => (
              <TopFoodCard
                key={topFoodItem._id}
                topFoodItem={topFoodItem}
              ></TopFoodCard>
            ))}
          </div>
          <div className="text-center my-16">
            <Link to="/allfooditems">
              <button className="text-white btn btn-outline bg-[#C59D5F]">
                See All
              </button>
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
};

export default TopFood;
