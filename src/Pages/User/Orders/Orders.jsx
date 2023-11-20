// @ts-nocheck
import { useEffect, useState } from "react";
import Container from "../../../Components/UI/Container";
import useAuth from "../../../Hooks/useAuth";
import OrderCard from "./OrderCard";

const Orders = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const url = `https://taste-harmony-cafe-server.vercel.app/user/orders?email=${currentUser.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);
  return (
    <Container>
      <h2 className="text-5xl font-dancing my-20 text-center">
        My Ordered Food Items
      </h2>
      <div className="mb-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Food Image</th>
                <th>Food Name</th>
                <th>Order Price</th>
                <th>Added time</th>
                <th>Food Owner</th>
                <th>Delete Order</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => (
                <OrderCard
                  key={order._id}
                  order={order}
                  orders={orders}
                  setOrders={setOrders}
                ></OrderCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Orders;
