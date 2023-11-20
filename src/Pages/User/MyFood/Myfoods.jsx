// @ts-nocheck
import { useEffect, useState } from "react";
import Container from "../../../Components/UI/Container";
import MyFoodCard from "./MyFoodCard";
import useAuth from "../../../Hooks/useAuth";

const Myfoods = () => {
  const { currentUser } = useAuth();
  const [foodItems, setFoodItems] = useState([]);
  const url = `https://taste-harmony-cafe-server.vercel.app/user/addedfooditems?email=${currentUser.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoodItems(data));
  }, [url]);
  return (
    <Container>
      <h2 className="text-5xl font-dancing my-20 text-center">
        My Added Food Items
      </h2>
      <div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {foodItems?.map((foodItem) => (
          <MyFoodCard key={foodItem._key} foodItem={foodItem}></MyFoodCard>
        ))}
      </div>
    </Container>
  );
};

export default Myfoods;
