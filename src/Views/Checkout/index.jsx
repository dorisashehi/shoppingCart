import { useContext, useState } from "react";
import Banner from "../Banner";
import Button from "../../Components/buttons";
import InputItem from "../../Components/InputItem";
import OrderSidebar from "../../Components/OrderSidebar";
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [inputError, setInputError] = useState({});
  const { user, createUser } = useContext(UserContext);
  const [formData, setFormData] = useState(user);

  const navigate = useNavigate();
  const changeFormData = ({ name, value }) => {
    //SET THE INPUT CHANGED VALUE TO THE formData state
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    createUser(name, value); //SAVE FORM DATA USING CONTEXT
  };

  const validateInput = () => {
    let isValid = true;
    //ON FORM SUBMIT
    Object.entries(formData).forEach((input) => {
      //VALIDATE IF FIELD IS EMPTY, SET ERROR
      if (input[1] === "") {
        setInputError((prevErrors) => ({
          ...prevErrors,
          [input[0]]: "That is a required field",
        }));
        isValid = false;
      } else {
        setInputError((prevErrors) => ({ ...prevErrors, [input[0]]: "" }));
      }
    });
    return isValid;
  };
  const removeError = (name) => {
    //REMOVE ERROR FROM ERROR OBJ
    setInputError((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const setError = (name, errorMsg) => {
    //SET ERROR TO ERROR OBJ
    setInputError((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const handleSubmit = (event) => {
    //HANDLE FORM SUBMIT
    event.preventDefault();
    const isValid = validateInput(); //VALIDATE FORM INPUTS
    if (isValid) {
      navigate("/order-confirmation");
    }
  };
  return (
    <>
      <Banner title="Checkout" path="Home / Shopping Card / Checkout" />
      <div className="full-screen">
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
                      setError={setError}
                      value={formData.name}
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
                      setError={setError}
                      value={formData.lastname}
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
                      removeError={removeError}
                      setError={setError}
                      value={formData.company}
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
                      setError={setError}
                      value={formData.country}
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
                      setError={setError}
                      value={formData.street}
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
                      setError={setError}
                      value={formData.city}
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
                      setError={setError}
                      value={formData.state}
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
                      setError={setError}
                      value={formData.zip}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <InputItem
                      label="Phone"
                      placeholder="Enter Phone"
                      id="shipping-phone"
                      type="tel"
                      name="phone"
                      changeFormData={changeFormData}
                      inputError={inputError.phone}
                      removeError={removeError}
                      setError={setError}
                      value={formData.phone}
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
                      value={formData.email}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="w-full md:w-[350px] pr-5 lg:block border-2 border-borderColor px-7 py-5 h-fit mt-[80px]">
              <OrderSidebar>
                <Button
                  classN="cart-btn justify-center text-[0.9rem] md:text-sm"
                  text="Order"
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
