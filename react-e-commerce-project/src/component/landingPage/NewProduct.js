import React, { useState, useEffect } from "react";
import { firestore } from "../config/Firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { CartState } from "../../context/Context";

function NewProduct() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const collectionName = "users";
  const docsCollectionRef = collection(firestore, collectionName);

  const readDocs = async () => {
    let array = [];

    const querySnapshot = await getDocs(docsCollectionRef);
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      // console.log("document id => ", doc.id)
      // console.log("document data => ", doc.data())

      array.push({ ...doc.data(), id: doc.id });
    });

    setDocuments(array);
    setIsLoading(false);
  };

  useEffect(() => {
    readDocs();
  }, []);
  return (
    <>
      <div className=" mb-3 container-fluid bg-light">
        <h1 className="text-center">New Product</h1>
        <div className="row">
          {documents.map((item) => {
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
                    <div className="d-flex justify-content-center ">
                      <button
                        className="btn text-white  btn-sm text-uppercase"
                        style={{ backgroundColor: "#f57224" }}
                        onClick={() => {
                          dispatch({
                            type: "Add_TO_CART",
                            payload: item,
                          });
                        }}
                      >
                        Add To Cart
                      </button>

                      <button
                        className="btn text-white  btn-sm text-uppercase mx-1 bg-danger"
                        style={{ backgroundColor: "#f57224" }}
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_CART",
                            payload: item,
                          });
                        }}
                      >
                        Remove Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NewProduct;
