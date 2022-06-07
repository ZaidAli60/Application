import React, { useState, useEffect } from "react";
import Layout from "../../Admin/Layout";
import { storage, firestore } from "../../config/firebase";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore/lite";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";

function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [productTitle, setproductTitle] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [productImg, setproductImg] = useState(null);
  const [documents, setDocuments] = useState([]);
  const collectionName = "users";
  const docsCollectionRef = collection(firestore, collectionName);

  const uploadImage = (e) => {
    e.preventDefault();
    if (!productImg) return;

    // console.log(img);

    const imagesRef = ref(storage, `images/${productImg.name}`);

    const uploadTask = uploadBytesResumable(imagesRef, productImg);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
        toast.success("Upload is " + progress + "% done", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      },
      (error) => {
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          createdoc(downloadURL);
        });
      }
    );
  };
  const createdoc = async (downloadURL) => {
    let formData = {
      productTitle,
      category,
      price,
      description,
      dateCreated: serverTimestamp(),
    };
    console.log(formData)
    formData.image = downloadURL;

    try {
      const docRef = await addDoc(docsCollectionRef, formData);
      // console.log(docRef)
      toast.success("User has been added!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
       console.log("Document written with ID: ", docRef.id);
      setproductTitle("");
      setcategory("");
      setprice("");
      setdescription("");
      setproductImg("");
    } catch (e) {
      toast.error("Something went wrong.", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("Error adding document: ", e);
    }
  };

  // Data Read

  const readDocs = async () => {
    setLoading(true);
    let array = [];
    const querySnapshot = await getDocs(docsCollectionRef);
    // console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      // console.log("document id => ", doc.id)
      // console.log("document data => ", doc.data())
      array.push({ ...doc.data(), id: doc.id });
    });

    setDocuments(array);
    setLoading(false);
  };

  useEffect(() => {
    readDocs();
  }, []);

  const deleteDocument = async (document) => {
    // console.log(document);
    await deleteDoc(doc(firestore, collectionName, document.id));

    let newArray = documents.filter((doc) => {
      return document.id !== doc.id;
    });
         toast.error("Product Delete.", {
           position: "bottom-right",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
         });

    setDocuments(newArray);
  };

  return (
    <>
      <Layout>
        <div className="container">
          <h3>Add New Product</h3>
          <div className="mt-5">
            {/* Button trigger modal  */}
            <button
              type="button"
              className="btn text-white "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{
                backgroundColor: "#f57224",
              }}
            >
              Create New Product
            </button>

            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Add New Product
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form className="row g-3 py-4 px-4 ">
                      <div className="col-md-12">
                        <label className="form-label text-uppercase ">
                          Product Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Product Title"
                          value={productTitle}
                          onChange={(e) => setproductTitle(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <label
                          htmlFor="inputPassword4"
                          className="form-label text-uppercase"
                        >
                          Category
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                          placeholder=" Category"
                          value={category}
                          onChange={(e) => setcategory(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <label
                          htmlFor="inputEmail4"
                          className="form-label text-uppercase"
                        >
                          Price
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="inputEmail4"
                          placeholder=" Price"
                          value={price}
                          onChange={(e) => setprice(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <label
                          htmlFor="inputPassword4"
                          className="form-label text-uppercase"
                        >
                          Description
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="Description "
                          value={description}
                          onChange={(e) => setdescription(e.target.value)}
                        />
                      </div>

                      <div className="col-md-12">
                        <label htmlFor="inputPassword4" className="form-label">
                          Images
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={(e) => setproductImg(e.target.files[0])}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn text-white"
                      data-bs-dismiss="modal"
                      style={{
                        backgroundColor: "#f57224",
                      }}
                      onClick={uploadImage}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          {loading ? (
            <div className="d-flex justify-content-center mt-5">
              <div className="spinner-grow" role="status"></div>
            </div>
          ) : (
            <table className="table table-hover bg-white ">
              <thead
                style={{
                  backgroundColor: "#f57224",
                  color: "white",
                }}
              >
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <th>{index}</th>
                      <td>
                        {/* <img
                          src={item.image}
                          style={{
                            width: "4rem",
                          }}
                          alt="product"
                        /> */}
                        {item.productTitle}
                      </td>
                      <td>{item.category}</td>
                      <td>${item.price}</td>
                      <td className="text-primary">Active</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteDocument(item)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </Layout>
    </>
  );
}

export default AddProduct;
