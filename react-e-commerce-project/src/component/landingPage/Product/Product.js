import React,{useEffect,useState} from 'react';
import { CartState } from '../../../context/Context';
import SingleProduct from './SingleProducts';

function Product() {
// const [productsData, setproductsData] = useState([]);
// const [isLoading, setisLoading] = useState(false);

  
   const {
     state: { fetchProducts, isLoading },
   } = CartState();
  if (isLoading) {
    return (
      <h4 className="text-center">
        <img
          className="img-fluid"
          src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
        />
      </h4>
    );
  }
 
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center heading">Our Feature</h2>
        <hr className="mx-auto" />
        <p className="text-center ">Online Shopping Platforms</p>
      </div>

      <div className=" mb-3 container-fluid">
        <div className="row">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            fetchProducts.map((item) => {
              return <SingleProduct products={item} key={item.id} />;
            })
          )}
        </div>
      </div>
    </div>
  );


}

export default Product