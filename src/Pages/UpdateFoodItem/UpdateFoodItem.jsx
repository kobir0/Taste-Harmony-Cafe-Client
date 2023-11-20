// @ts-nocheck
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Lottie from "lottie-react";

import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateFoodItem = () => {
  const [foodItem, setFoodItem] = useState([]);
  const { currentUser, setIsLoading } = useAuth();
  const { name } = useParams();
  console.log(name);
  useEffect(() => {
    axios
      .get(`https://taste-harmony-cafe-server.vercel.app/fooditems/${name}`)
      .then((response) => setFoodItem(response.data))
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [name, setIsLoading]);
  console.log(foodItem);

  const {
    foodName,
    image,
    category,
    quantity,
    price,
    country,
    shortDescription,
    description,
  } = foodItem;
  console.log(foodName);
  const handleUpdateFood = (event) => {
    event.preventDefault();
    // const toastId = toast.loading("Processing..");
    const form = event.target;
    // inputvalues
    const foodName = form.foodName.value;
    const image = form.image.value;
    const category = form.category.value.toLowerCase();
    const quantity = parseInt(form.quantity.value);
    const price = parseInt(form.price.value);
    const userName = form.userName.value.toLowerCase();
    const userEmail = form.userEmail.value.toLowerCase();
    const country = form.country.value;
    const shortDescription = form.shortDescription.value;
    const description = form.description.value;

    const updatedFoodItem = {
      foodName,
      image,
      category,
      quantity,
      price,
      userName,
      userEmail,
      country,
      shortDescription,
      description,
    };

    fetch(`https://taste-harmony-cafe-server.vercel.app/fooditems/${name}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFoodItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Your foodItem has been updated.",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/F8XHtrZ/update.jpg')]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center text-white lg:text-left">
          <h1 className="text-5xl font-bold">Add Your Favourite Food Now!</h1>
          <p className="py-6 w-[500px]">
            Get ready to tantalize taste buds and elevate your restaurants menu!
            Our Add Food Item page is your gateway to culinary creativity. With
            just a few clicks, you can introduce mouthwatering dishes that will
            leave your customers craving for more. Whether it is a savory
            delight, a sweet treat, or an exotic creation, this is where you
            bring your gastronomic visions to life. And the best part? The Add
            By fields are automatically filled with your name and email, making
            it a breeze to showcase your culinary genius. Prepare to dazzle,
            amaze, and satisfy – it is time to add your masterpiece to the menu!
          </p>
          <Lottie className="w-[400px] ml-12"></Lottie>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-10">
          <form onSubmit={handleUpdateFood} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Food Name</span>
              </label>
              <input
                type="text"
                name="foodName"
                placeholder="Food Name"
                defaultValue={foodName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Food Image</span>
              </label>
              <input
                type="text"
                name="image"
                defaultValue={image}
                placeholder="Image URL of IMGBB"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Food Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Food Category"
                defaultValue={category}
                className="input input-bordered"
                required
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
                defaultValue={quantity}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                defaultValue={price}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">User Name</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                name="userName"
                value={currentUser.displayName}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">User Email</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                name="userEmail"
                value={currentUser.email}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Food Origin</span>
              </label>
              <input
                type="text"
                name="country"
                placeholder="Food Origin"
                defaultValue={country}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Short Description</span>
              </label>
              <input
                type="text"
                name="shortDescription"
                placeholder="Short Description"
                defaultValue={shortDescription}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                defaultValue={description}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-outline bg-[#C59D5F]">
                Update Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateFoodItem;
