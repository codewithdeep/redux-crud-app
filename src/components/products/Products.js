import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Product from "./Product";
import {
  selectAllProduct,
  clearAllProduct,
  deleteAllProduct,
} from "../../actions/productAction";

const Products = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const products = useSelector((state) => state.product.products);
  const selectedProducts = useSelector(
    (state) => state.product.selectedProducts
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllProduct(products.map((product) => product.id)));
    } else {
      dispatch(clearAllProduct());
    }
  }, [selectAll]);

  const handleDeleteAll = () => {
    if (
      window.confirm("Are you sure that you wanted to delete all products ?")
    ) {
      dispatch(deleteAllProduct());
      toast.success("Selected Products Deleted Successfully");
    }
  };

  return (
    <div>
      <div className="container" style={{ display: "flex" }}>
        <div className="form-group col-md-3">
          <label htmlFor="sortByCat">Sort By Category</label>
          <select
            className="form-control"
            id="sortByCat"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          >
            <option value="">Choose...</option>
            <option>Home</option>
            <option>Mobile</option>
            <option>Fashion</option>
            <option>Grocery</option>
            <option>Electronics</option>
          </select>
        </div>
        <div className="container">
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              marginTop: 20,
              marginBottom: 20,
              width: "50%",
              height: 50,
              marginLeft: "auto",
            }}
          />
        </div>
      </div>
      {selectedProducts.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => handleDeleteAll()}
        >
          delete all
        </button>
      ) : null}
      <table className="table shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Expiry Date</th>
            <th>Cost Price</th>
            <th>Sell Price</th>
            <th>Discount(%)</th>
            <th>Discounted Sell Price</th>
            <th>GST(%)</th>
            <th>Final Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.category.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((product) => (
              <Product
                product={product}
                key={product.id}
                selectAll={selectAll}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
