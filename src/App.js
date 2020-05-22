import React, { useState, useEffect } from "react";
import Form from "./Form";
import Home from "./Home";
import YourOrders from "./YourOrders";
import formSchema from "./formSchema";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";

const Nav = styled.nav`
  margin: auto;
  text-align: center;
  padding: 1%;

  .nav-link {
    text-decoration: none;
    padding: 2%;
    font-size: 1.5rem;
  }
  img {
    width: 50%;
  }
`;

const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  toppings: {
    pepperoni: false,
    dicedtomatoes: false,
    sausage: false,
    blackolives: false,
    canadianbacon: false,
    roastedgarlic: false,
    spicyitaliansausage: false,
    artichokehearts: false,
    grilledchicken: false,
    threecheese: false,
    onions: false,
    pineapple: false,
    greenpeppers: false,
    extracheese: false,
    pepperoni: false,
  },
  instructions: "",
  toggleSwitch: false,
};

const initialFormErrors = {
  name: "",
  size: "",
  sauce: "",
};

const initialOrders = [];
const InitialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  console.log("App -> orders", orders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(InitialDisabled);

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        setOrders([res.data, ...orders]);
      })
      .catch((error) => {
        console.error("Server Error", error);
      })
      .finally(() => {
        alert(`Thank you ${newOrder.name} Your Order has been received!`);
        console.log(`Thank you ${newOrder.name} Your Order has been received!`);
        setFormValues(initialFormValues);
      });
  };

  const onInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });

    setFormValues({ ...formValues, [name]: value });
  };

  const onCheckboxChange = (event) => {
    const { name } = event.target;
    const { checked } = event.target;
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      },
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newOrder = { ...formValues };
    postNewOrder(newOrder);
  };

  const deleteOrder = (orderNumber) => {
    const valueToRemove = orderNumber;
    const filteredItems = orders.filter((item) => item.id !== valueToRemove);
    setOrders(filteredItems);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="container">
      <Nav>
        <h1>Lambda's Pizza</h1>
        <div className="nav-links">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/your-orders">
            Your Orders
          </Link>
        </div>
      </Nav>

      <Switch>
        <Route path="/your-orders">
          <YourOrders orders={orders} deleteOrder={deleteOrder} />
        </Route>
        <Route path="/order">
          <Form
            errors={formErrors}
            values={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            disabled={disabled}
            onCheckboxChange={onCheckboxChange}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
