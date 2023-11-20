// @ts-nocheck
// import toast from "react-hot-toast";
import Lottie from "lottie-react";
import orderAnimation from "../../assets/orderAnimation.json";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const FoodPurchase = () => {
  const foodItem = useLoaderData();
  const { currentUser } = useAuth();
  const { foodName, price, image } = foodItem;

  const handleorderFood = (event) => {
    event.preventDefault();
    const toastId = toast.loading("Your order is processing..");
    const form = event.target;
    // inputvalues
    const foodName = form.foodName.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const buyerName = form.buyerName.value.toLowerCase();
    const buyerEmail = form.buyerEmail.value;
    const buyingDate = new Date();

    const orderedFood = {
      image,
      foodName,
      price,
      quantity,
      buyerName,
      buyerEmail,
      buyingDate,
    };

    axios
      .post(
        "https://taste-harmony-cafe-server.vercel.app/orderItems",
        orderedFood
      )
      .then((data) => {
        console.log(data?.data?.acknowledged);
        if (data?.data?.acknowledged) {
          toast.success("Successfully Added the Food Item", { id: toastId });
        } else {
          toast.error(data?.data?.message, { id: toastId });
        }
      })
      .catch((error) => console.log(error?.message));
    axios
      .put(
        "https://taste-harmony-cafe-server.vercel.app/orderItem",
        orderedFood
      )
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error?.message));
  };
  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/k5HhTJ3/addFood.jpg')]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center text-white lg:text-left">
          <h1 className="text-5xl font-bold">Order Your Culinary Delight</h1>
          <p className="py-6 w-[500px]">
            Explore our menu, select your favorites, and savor culinary
            perfection with each order. Our chefs are ready to delight your
            taste buds. Start your food journey today!
          </p>
          <Lottie
            className="w-[400px] ml-12"
            animationData={orderAnimation}
          ></Lottie>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-10">
          <form onSubmit={handleorderFood} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Food Name</span>
              </label>
              <input
                type="text"
                name="foodName"
                defaultValue={foodName}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Buyer Name</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                name="buyerName"
                value={currentUser.displayName}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Buyer Email</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                name="buyerEmail"
                value={currentUser.email}
                readOnly
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-outline bg-[#C59D5F] text-white"
              >
                Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodPurchase;
