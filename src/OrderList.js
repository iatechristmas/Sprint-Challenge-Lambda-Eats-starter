import React from "react";
import styled from "styled-components";

const OrderList = (props) => {
  const { order, deleteOrder } = props;

  if (!order) {
    return <h3>Waiting for you to add an order.</h3>;
  }

  return (
    <div>
      <h2>Name: {order.name}</h2>
      <p>{order.size} Pizza</p>
      <p>{order.sauce} Sauce</p>
      <p>Toppings: </p>
      <p>Special Instructions: {order.instructions} </p>
      <button onClick={() => deleteOrder(order.id)}>Cancel Order</button>
    </div>
  );
};

export default OrderList;
