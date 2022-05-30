import React, { useState } from "react";
import { storage ,firestore} from "../../config/Firebase";
import { addDoc,collection } from "firebase/firestore/lite";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";

function Admin() {
  const [product, setproduct] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [img, setImg] = useState(null);

  const [progress, setProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState("");
  const collectionName = "users";
  const docsCollectionRef = collection(firestore, collectionName);
  const uploadImage = (e) => {
    e.preventDefault();
    if (!img) return;

    console.log(img);

    const imagesRef = ref(storage, `images/${img.name}`);

    const uploadTask = uploadBytesResumable(imagesRef, img);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
            toast.success("Upload is " + progress  + " %done", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
        setcategory("")
        setdescription("")
        setprice("")
        setproduct("")
        setImg("")
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
    let formData = { product, category, price, description };
    formData.image = downloadURL;

    try {
      const docRef = await addDoc(docsCollectionRef, formData);
      toast.success("User has been added!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Document written with ID: ", docRef.id);
      
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

  return (
    <div className="d-flex justify-content-center">
      <div
        className="col-md-8 my-4"
        style={{
          border: "1px solid black",
        }}
      >
        <form className="row g-3 py-4 px-4 ">
          <div>
            <h2 className="text-uppercase">Add Products</h2>
          </div>
          <div className="col-md-6">
            <label className="form-label text-uppercase ">Product Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Product Title"
              value={product}
              onChange={(e) => setproduct(e.target.value)}
            />
          </div>
          <div className="col-md-6">
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
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label text-uppercase">
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
          <div className="col-md-6">
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

          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Images
            </label>
            <input
              className="form-control"
              type="file"
              multiple
              accept="image/*"
              onChange={(e)=>setImg(e.target.files[0])}
            />
          </div>

          <div className="col-12">
            <button
              type="button"
              className="btn text-white"
              style={{
                backgroundColor: "#f57224",
              }}
              onClick={uploadImage}
            >
              Create New Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin;











