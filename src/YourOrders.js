import React from "react";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import OrderList from "./OrderList";

const YourOrders = (props) => {
  const { orders, deleteOrder } = props;
  return (
    <div>
      <div>Your Orders</div>
      {orders.map((order) => {
        return (
          <OrderList order={order} key={order.id} deleteOrder={deleteOrder} />
        );
      })}
    </div>
  );
};

export default YourOrders;
