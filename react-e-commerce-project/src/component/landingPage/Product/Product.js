import React,{useEffect,useState} from 'react';

function Product() {
const [productsData, setproductsData] = useState([]);
const [isLoading, setisLoading] = useState(false);
    useEffect(() => {
     async function Products() {
         setisLoading(true);
         const productFetch = await fetch("https://fakestoreapi.com/products");
         const productJosn = await productFetch.json();
         console.log(productJosn);
         setproductsData(productJosn);
         setisLoading(false);
     }
     Products();
    }, [])
    

  return (
    <>
      <div className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center heading">Our Feature</h2>
          <p className="text-center ">Online Shopping Platforms</p>
        </div>

        <div className=" mb-3 container-fluid">
          <div className="row">
            {isLoading ? (
              <div className='d-flex justify-content-center'>
                <span className="spinner-grow spinner-grow-lg"></span>
              </div>
            ) : (
              productsData.map((item) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div
                      className="card card-margin my-2"
                      style={{ height: "25rem" }}
                    >
                      <img
                        src={item.image}
                        style={{
                          margin: "auto",
                          display: "block",
                          width: "10rem",
                          height: "50%",
                        }}
                        className="py-3 img-fluid"
                        alt="prod"
                      />
                      <div className="card-body text-center ">
                        <h5 className="card-title text-uppercase">
                          {item.category}
                        </h5>

                        <p>${item.price}</p>

                        <button
                          className="btn text-white"
                          style={{ backgroundColor: "#f57224" }}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product