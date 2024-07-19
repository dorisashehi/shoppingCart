import { useState } from "react";
import Banner from "../Banner";
import Button from "../Elements/buttons";
import InputItem from "../Elements/InputItem";
import OrderSidebar from "../Elements/OrderSidebar";
import { useRef } from "react";
const Checkout = () => {
  const [inputError, setInputError] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
  });

  const changeFormData = ({ name, value }) => {
    //SET THE INPUT CHANGED VALUE TO THE formData state
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const validateInput = () => {
    //ON FORM SUBMIT
    Object.entries(formData).map((input) => {
      //VALIDATE IF FIELD IS EMPTY, SET ERROR
      if (input[1] === "") {
        setInputError((prevErrors) => ({
          ...prevErrors,
          [input[0]]: "That is a required field",
        }));
      } else {
        setInputError((prevErrors) => ({ ...prevErrors, [input[0]]: null }));
      }
    });
  };
  const removeError = (name) => {
    //REMOVE ERROR FROM ERROR OBJ
    setInputError((prevErrors) => ({ ...prevErrors, [name]: null }));
  };
  const setError = (name, errorMsg) => {
    //SET ERROR TO ERROR OBJ
    setInputError((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };
  const handleSubmit = (event) => {
    //HANDLE FORM SUBMIT
    event.preventDefault();
    validateInput(); //VALIDATE FORM INPUTS
  };
  return (
    <>
      <Banner title="Checkout" path="Home / Shopping Card / Checkout" />
      <div className="w-full py-20">
        <div className="content">
          <div className="flex gap-10 flex-col lg:flex-row  max-w-5xl">
            <div className="flex-1">
              <h1 className="font-epilogue text-[1.7rem] font-medium mt-3 mb-9">
                Shipping Address
              </h1>
              <form className="w-full max-w-xl" method="POST">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <InputItem
                      label="First Name"
                      placeholder="Ex. John"
                      errorMsg=" Please fill out this field."
                      id="shipping-first-name"
                      name="name"
                      type="text"
                      changeFormData={changeFormData}
                      inputError={inputError.name}
                      removeError={removeError}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <InputItem
                      label="Last Name"
                      placeholder="Ex. Doe"
                      id="shipping-last-name"
                      type="text"
                      name="lastname"
                      changeFormData={changeFormData}
                      inputError={inputError.lastname}
                      removeError={removeError}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="Company Name (Optional)"
                      placeholder="Ex. Company 1"
                      id="shipping-company"
                      type="text"
                      name="company"
                      changeFormData={changeFormData}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="Country"
                      placeholder="Enter Country"
                      id="shipping-country"
                      type="text"
                      name="country"
                      changeFormData={changeFormData}
                      inputError={inputError.country}
                      removeError={removeError}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="Street Address"
                      placeholder="Enter Street Address"
                      id="shipping-street"
                      type="text"
                      name="street"
                      changeFormData={changeFormData}
                      inputError={inputError.street}
                      removeError={removeError}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="City"
                      placeholder="Enter City"
                      id="shipping-city"
                      type="text"
                      name="city"
                      changeFormData={changeFormData}
                      inputError={inputError.city}
                      removeError={removeError}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="State"
                      placeholder="Enter State"
                      id="shipping-state"
                      type="text"
                      name="state"
                      changeFormData={changeFormData}
                      inputError={inputError.state}
                      removeError={removeError}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="Zip Code"
                      placeholder="Enter Zip"
                      id="shipping-zip"
                      type="text"
                      name="zip"
                      changeFormData={changeFormData}
                      inputError={inputError.zip}
                      removeError={removeError}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="Phone"
                      placeholder="Enter Phone"
                      id="shipping-phone"
                      type="text"
                      name="phone"
                      changeFormData={changeFormData}
                      inputError={inputError.phone}
                      removeError={removeError}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="Email"
                      placeholder="Enter Email Address"
                      id="shipping-emai"
                      type="text"
                      name="email"
                      changeFormData={changeFormData}
                      inputError={inputError.email}
                      removeError={removeError}
                      setError={setError}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="w-full md:w-[350px] pr-5 lg:block border-2 border-borderColor px-7 py-5 h-fit mt-[80px]">
              <OrderSidebar>
                <Button
                  classN="cart-btn justify-center text-[0.9rem] md:text-sm"
                  text="Continue To Payment"
                  clickAction={(event) => handleSubmit(event)}
                ></Button>
              </OrderSidebar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
