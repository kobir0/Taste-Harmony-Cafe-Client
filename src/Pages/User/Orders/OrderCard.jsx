/* eslint-disable react/prop-types */
// @ts-nocheck
import propTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const OrderCard = ({ order, orders, setOrders }) => {
  const { _id, image, foodName, price, buyerName, buyingDate } = order;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://taste-harmony-cafe-server.vercel.app/deleteFood/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your order has been deleted.",
                icon: "success",
              });
              const remainingOrders = orders.filter(
                (foodOrder) => foodOrder._id !== _id
              );
              setOrders(remainingOrders);
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{foodName}</div>
          </div>
        </div>
      </td>
      <td>${price}</td>
      <td>{buyingDate}</td>
      <td>{buyerName}</td>
      <th>
        <button onClick={() => handleDelete(_id)}>
          <AiFillDelete className="text-2xl ml-6"></AiFillDelete>
        </button>
      </th>
    </tr>
  );
};
OrderCard.propTypes = {
  order: propTypes.object,
};

export default OrderCard;
