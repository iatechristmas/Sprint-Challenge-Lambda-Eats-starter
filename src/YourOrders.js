import React from "react";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import OrderList from "./OrderList";

const OrdersDiv = styled.div`
  margin: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

const YourOrders = (props) => {
  const { orders, deleteOrder } = props;
  return (
    <OrdersDiv>
      <div>Your Orders</div>
      {orders.map((order) => {
        return (
          <OrderList order={order} key={order.id} deleteOrder={deleteOrder} />
        );
      })}
    </OrdersDiv>
  );
};

export default YourOrders;
