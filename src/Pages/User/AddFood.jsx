// @ts-nocheck
import Lottie from "lottie-react";
import addFoodItemAnimation from "../../assets/addFoodItemAnimation.json";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";

// @ts-nocheck
const AddFood = () => {
  const { currentUser } = useAuth();
  const handleAddFood = (event) => {
    event.preventDefault();
    const toastId = toast.loading("Processing..");
    const form = event.target;
    // inputvalues
    const foodName = form.foodName.value.toLowerCase();
    const image = form.image.value;
    const category = form.category.value.toLowerCase();
    const quantity = parseInt(form.quantity.value);
    const price = parseInt(form.price.value);
    const userName = form.userName.value.toLowerCase();
    const userEmail = form.userEmail.value.toLowerCase();
    const country = form.country.value;
    const shortDescription = form.shortDescription.value;
    const description = form.description.value;

    const newFoodItem = {
      foodName,
      image,
      category,
      quantity,
      price,
      userName,
      userEmail,
      country,
      count: 0,
      shortDescription,
      description,
    };

    axios
      .post("https://taste-harmony-cafe-server.vercel.app/addFood", newFoodItem)
      .then((res) => {
        const data = res.data;
        if (data.insertedId) {
          toast.success("Successfully Added the Food Item", { id: toastId });
        } else {
          toast.error(data.message, { id: toastId });
        }
      })
      .catch((error) => {
        console.log("Error adding food item:", error, { id: toastId });
      });
  };

  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/k5HhTJ3/addFood.jpg')]">
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
          <Lottie
            className="w-[400px] ml-12"
            animationData={addFoodItemAnimation}
          ></Lottie>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-10">
          <form onSubmit={handleAddFood} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Food Name</span>
              </label>
              <input
                type="text"
                name="foodName"
                placeholder="Food Name"
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
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-outline bg-[#C59D5F]">
                Add Food Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
