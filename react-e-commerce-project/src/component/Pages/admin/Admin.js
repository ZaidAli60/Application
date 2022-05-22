import React, { useState } from "react";

function Admin() {
  const [product, setproduct] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
co
// console.log(product)
  return (
    <div className="d-flex justify-content-center">
      <div
        className="col-md-8 my-4"
        style={{
          border: "1px solid black",
        }}
      >
        <form className="row g-3 py-4 px-4 " >
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
              value={image}
              onChange={(e)=> setimage(e.target.value)}
            />
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn text-white"
              style={{
                backgroundColor: "#f57224",
              }}
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
