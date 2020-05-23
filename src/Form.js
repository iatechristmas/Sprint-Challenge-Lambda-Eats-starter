import React from "react";
import styled from "styled-components";
import pizza from "./Pizza.jpg";

const ToggleDiv = styled.div`
  padding: 2%;

  .toggle-switch {
    position: relative;
    width: 75px;
    display: inline-block;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    text-align: left;
  }
  .toggle-switch-checkbox {
    display: none;
  }
  .toggle-switch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 0 solid #ccc;
    border-radius: 20px;
    margin: 0;
  }
  .toggle-switch-inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
  }
  .toggle-switch-inner::before,
  .toggle-switch-inner::after {
    display: block;
    float: left;
    width: 50%;
    height: 34px;
    padding: 0;
    line-height: 34px;
    font-size: 14px;
    color: white;
    font-weight: bold;
    box-sizing: border-box;
  }
  .toggle-switch-inner:before {
    content: "Yes";
    text-transform: uppercase;
    padding-left: 10px;
    background-color: #f90;
    color: #fff;
  }
  .toggle-switch-disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  .toggle-switch-disabled::before {
    background-color: #ccc;
    cursor: not-allowed;
  }
  .toggle-switch-inner::after {
    content: "No";
    text-transform: uppercase;
    padding-right: 10px;
    background-color: #ccc;
    color: #fff;
    text-align: right;
  }
  .toggle-switch-switch {
    display: block;
    width: 24px;
    margin: 5px;
    background: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    border: 0 solid #ccc;
    border-radius: 20px;
    transition: all 0.3s ease-in 0s;
  }
  .toggle-switch-checkbox:checked + .toggle-switch-label .toggle-switch-inner {
    margin-left: 0;
  }
  .toggle-switch-checkbox:checked + .toggle-switch-label .toggle-switch-switch {
    right: 0px;
  }
`;

const OrderForm = styled.form`
  color: white;

  div {
    margin: 0 auto 1% auto;
    background-color: grey;
    width: 42%;

    h2 {
      padding: 1%;
    }

    h3 {
      padding: 1%;
      text-align: center;
    }

    img {
      width: 100%;
    }

    button {
      width: 100%;
      background-color: lightgreen;
      border-radius: 10px;
      font-size: 1.5rem;
      padding: 1%;
    }
  }

  .name,
  .sauce,
  .size,
  .toppings,
  .instructions {
    padding: 2%;
    width: 42%;
  }

  .toppings {
    display: flex;
    flex-direction: column;
  }

  .sauce {
    display: flex;
    flex-direction: column;
  }
`;

const Form = (props) => {
  const {
    values,
    onInputChange,
    onSubmit,
    disabled,
    onCheckboxChange,
    errors,
  } = props;

  return (
    <OrderForm onSubmit={onSubmit} className="form-container">
      <div className="title-container">
        <h3>Build Your Own Pizza</h3>
      </div>

      <div className="form-image-container">
        <img src={pizza} alt="" />
      </div>

      <div className="big-title-container">
        <h2>Build Your Own Pizza</h2>
      </div>

      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.size}</div>
        <div>{errors.sauce}</div>
      </div>

      <div className="name">
        <h4>Enter Your Name</h4>
        <label>
          Name
          <input
            onChange={onInputChange}
            type="text"
            name="name"
            value={values.name}
          />
        </label>
      </div>

      <div className="size">
        <label>
          Choice of Size
          <select name="size" onChange={onInputChange} value={values.size}>
            <option value="">- Select an option -</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
          </select>
        </label>
      </div>

      <div className="sauce">
        <h4>Choice of Sauce</h4>
        <label>
          Original Red
          <input
            type="radio"
            name="sauce"
            value="Original Red"
            onChange={onInputChange}
          />
        </label>
        <label>
          Garlic Ranch
          <input
            type="radio"
            name="sauce"
            value="Garlic Ranch"
            onChange={onInputChange}
          />
        </label>
        <label>
          BBQ Sauce
          <input
            type="radio"
            name="sauce"
            value="BBQ Sauce"
            onChange={onInputChange}
          />
        </label>
        <label>
          Spinach Alfredo
          <input
            type="radio"
            name="sauce"
            value="Spinach Alfredo"
            onChange={onInputChange}
          />
        </label>
      </div>

      <div className="toppings">
        <h4>Toppings</h4>
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.toppings.pepperoni}
            onChange={onCheckboxChange}
          />
        </label>
        <label>
          Diced Tomatoes
          <input
            type="checkbox"
            name="dicedtomatoes"
            onChange={onCheckboxChange}
            checked={values.toppings.dicedtomatoes}
          />
        </label>
        <label>
          Sausage
          <input
            type="checkbox"
            name="sausage"
            onChange={onCheckboxChange}
            checked={values.toppings.sausage}
          />
        </label>
        <label>
          Black Olives
          <input
            type="checkbox"
            name="blackolives"
            onChange={onCheckboxChange}
            checked={values.toppings.blackolives}
          />
        </label>
        <label>
          Canadian Bacon
          <input
            type="checkbox"
            name="canadianbacon"
            onChange={onCheckboxChange}
            checked={values.toppings.canadianbacon}
          />
        </label>
        <label>
          Roasted Garlic
          <input
            type="checkbox"
            name="roastedgarlic"
            onChange={onCheckboxChange}
            checked={values.toppings.roastedgarlic}
          />
        </label>
        <label>
          Spicy Italian Sausage
          <input
            type="checkbox"
            name="spicyitaliansausage"
            onChange={onCheckboxChange}
            checked={values.toppings.spicyitaliansausage}
          />
        </label>
        <label>
          Artichoke Hearts
          <input
            type="checkbox"
            name="artichokehearts"
            onChange={onCheckboxChange}
            checked={values.toppings.artichokehearts}
          />
        </label>
        <label>
          Grilled Chicken
          <input
            type="checkbox"
            name="grilledchicken"
            onChange={onCheckboxChange}
            checked={values.toppings.grilledchicken}
          />
        </label>
        <label>
          Three Cheese
          <input
            type="checkbox"
            name="threecheese"
            onChange={onCheckboxChange}
            checked={values.toppings.threecheese}
          />
        </label>
        <label>
          Onions
          <input
            type="checkbox"
            name="onions"
            onChange={onCheckboxChange}
            checked={values.toppings.onions}
          />
        </label>
        <label>
          Pineapple
          <input
            type="checkbox"
            name="pineapple"
            onChange={onCheckboxChange}
            checked={values.toppings.pineapple}
          />
        </label>
        <label>
          Green Peppers
          <input
            type="checkbox"
            name="greenpeppers"
            onChange={onCheckboxChange}
            checked={values.toppings.greenpeppers}
          />
        </label>
        <label>
          Extra Cheese
          <input
            type="checkbox"
            name="extracheese"
            onChange={onCheckboxChange}
            checked={values.toppings.extracheese}
          />
        </label>
      </div>
      <ToggleDiv>
        Subtitute Gluten Free Crust?
        <div className="toggle-switch">
          <input
            type="checkbox"
            className="toggle-switch-checkbox"
            name="toggleSwitch"
            id="toggleSwitch"
            value={values.toggleSwitch}
            onChange={onCheckboxChange}
          />
          <label className="toggle-switch-label" htmlFor="toggleSwitch">
            <span className="toggle-switch-inner"></span>
            <span className="toggle-switch-switch"></span>
          </label>
        </div>
      </ToggleDiv>
      <div className="instructions">
        <h4>Enter Any Special Instructions</h4>
        <label>
          Enter Here
          <input
            onChange={onInputChange}
            type="text"
            name="instructions"
            value={values.instructions}
          />
        </label>
      </div>
      <div className="submit-button">
        <button disabled={disabled} className="submit">
          Add to Order
        </button>
      </div>
    </OrderForm>
  );
};

export default Form;
