import { UserContext } from "./UserContext";
import { useReducer } from "react";
const UserProvider = ({ children }) => {
  const initialUser = {
    name: "",
    lastname: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
  };
  const reducer = (user, action) => {
    if (action.type === "addUser") {
      const updatedUser = {
        ...user,
        [action.payload.name]: action.payload.value,
      };
      return updatedUser;
    }
  };
  const createUser = (name, value) => {
    dispatch({ type: "addUser", payload: { name, value } });
  };
  const [user, dispatch] = useReducer(reducer, initialUser);
  return (
    <UserContext.Provider value={{ user, createUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
