import React, { useState, useEffect } from "react";
import Layout from "../../Admin/Layout";
import { MdPreview } from "react-icons/md";
import { AiOutlinePlus, AiFillShopping } from "react-icons/ai";
import { FaUserFriends, FaCartPlus } from "react-icons/fa";
import { userData } from "../dashboard/data";
import { firestore } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
function Dashboard() {
  const [documents, setDocuments] = useState([]);
  console.log(documents);
  const collectionName = "users";
  const docsCollectionRef = collection(firestore, collectionName);

  const readDocs = async () => {
    let array = [];
    const querySnapshot = await getDocs(docsCollectionRef);
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      // console.log("document id => ", doc.id)
      // console.log("document data => ", doc.data())
      // const serverTime = doc.document.;
      // var d = serverTime.toDate().toDateString();
      // console.log(serverTime);
      // console.log(doc.data().dateCreated.toDate())
      array.push({
        ...doc.data(),
        id: doc.id,
        times: doc
          .data()
          .dateCreated.toDate()
          .toLocaleString([], { hour12: true }),
      });
    });

    setDocuments(array);
  };

  useEffect(() => {
    readDocs();
  }, []);
  return (
    <>
      <Layout>
        <div
          style={{
            backgroundColor: "whitesmoke",
          }}
        >
          <div className="container">
            <h1 className="py-4">Dashboard</h1>
            <div className="row ">
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card bg-info border-0 text-white mb-5">
                  <div className="card-body">
                    <h5 className="card-title fs-3 d-flex justify-content-between ">
                      <MdPreview />
                      <MdPreview />
                    </h5>
                    <p className="card-subtitle mt-3">Total Views</p>
                    <h6 className="card-text fs-3">308.41</h6>
                    <hr />
                    <p>Start from 1 jan 2022</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card  border-0 mb-5">
                  <div className="card-body">
                    <h5 className="card-title fs-3 d-flex justify-content-between text-success">
                      <AiFillShopping />
                      <AiFillShopping />
                    </h5>
                    <p className="card-subtitle mt-3">Total Products</p>
                    <h6 className="card-text fs-3">10.41</h6>
                    <hr />
                    <p className="text-info">
                      {" "}
                      <AiOutlinePlus />
                      Add New Product
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card  border-0 mb-5">
                  <div className="card-body">
                    <h5 className="card-title fs-3 d-flex justify-content-between text-primary">
                      <FaUserFriends />
                      <FaUserFriends />
                    </h5>
                    <p className="card-subtitle mt-3">Total Users</p>
                    <h6 className="card-text fs-3">8.41</h6>
                    <hr />
                    <p>Start from 1 jan 2022</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card  border-0 mb-5">
                  <div className="card-body">
                    <h5 className="card-title fs-3 d-flex justify-content-between text-success">
                      <FaCartPlus />
                      <FaCartPlus />
                    </h5>
                    <p className="card-subtitle mt-3">Total sells</p>
                    <h6 className="card-text fs-3">203.41</h6>
                    <hr />
                    <p>Start from 1 jan 2022</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="opacity-50 my-3">Recent Products</h4>
              <table className="table table-hover bg-white">
                <thead>
                  <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Added Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((item) => {
                    return (
                      <tr>
                        <td>
                          {" "}
                          <img
                            className="me-3"
                            src={item.image}
                            style={{
                              width: "4rem",
                            }}
                            alt="productimg"
                          />
                          {item.productTitle}
                        </td>
                        <td>{item.category}</td>
                        <td>{item.times}</td>
                        <td>${item.price}</td>
                        <td className="text-primary">Active</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
