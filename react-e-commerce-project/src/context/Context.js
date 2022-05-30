import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
// import loading from "../Assets/loading.gif";
import { cartReducer } from "./reducer";

const Cart = createContext();
const initialState = {
  fetchProducts: [],
  cart: [],
  isLoading: true,
};
function Context({ children }) {
  const [fetchProducts, setfetchProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  // if (isLoading) {
  //   return (
  //     <h4 className="text-center">
  //       <img
  //         className="img-fluid"
  //         src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
  //       />
  //     </h4>
  //   );
  // }
  useEffect(() => {
    setisLoading();
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "INITIALIZE_CART",
          payload: {
            ...initialState,
            fetchProducts: data,
            isLoading: false,
          },
        });
      });
  }, []);

  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <Cart.Provider value={{ state, dispatch, isLoading }}>
        {children}
      </Cart.Provider>
    </>
  );
}

export default Context;
export const CartState = () => {
  return useContext(Cart);
};
