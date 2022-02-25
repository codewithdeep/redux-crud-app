import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, updateProduct } from "../../actions/productAction";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditProduct = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [costPrice, setCostPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [gst, setGst] = useState("");

  useEffect(() => {
    if (product != null) {
      setName(product.name);
      setCategory(product.category);
      setDescription(product.description);
      setExpiryDate(product.expiryDate);
      setCostPrice(product.costPrice);
      setSellPrice(product.sellPrice);
      setDiscount(product.discount);
      setGst(product.gst);
    }
    dispatch(getProduct(id));
  }, [product]);

  const onUpdateProduct = (e) => {
    e.preventDefault();

    const update_product = Object.assign(product, {
      name: name,
      category: category,
      description: description,
      expiryDate: expiryDate,
      costPrice: costPrice,
      sellPrice: sellPrice,
      discount: discount,
      gst: gst,
    });
    if (
      name &&
      category &&
      description &&
      expiryDate &&
      costPrice &&
      sellPrice &&
      discount &&
      gst
    ) {
      dispatch(updateProduct(update_product));
      toast.success("Product Updated Successfully");
      setTimeout(() => history.push("/"), 500);
    }
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Update Product</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateProduct(e)}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Product Name</label>
            <input
              id="exampleFormControlInput1"
              type="text"
              className="form-control"
              placeholder="enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Category</label>
            <select
              className="form-control"
              id="exampleFormControlSelect2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>select product category</option>
              <option>Home</option>
              <option>Mobile</option>
              <option>Fashion</option>
              <option>Grocery</option>
              <option>Electronics</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea3">Description</label>
            <textarea
              className="form-control"
              placeholder="enter product description"
              id="exampleFormControlTextarea3"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput4">Expiry Date</label>
            <input
              id="exampleFormControlInput4"
              type="date"
              className="form-control"
              onChange={(e) => setExpiryDate(e.target.value)}
              name="expiryDate"
              value={expiryDate}
              placeholder="dd/mm/yyyy"
              min="1997-01-01"
              max="2030-12-31"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput5">Cost Price</label>
            <input
              id="exampleFormControlInput5"
              type="number"
              className="form-control"
              placeholder="enter product cost price"
              value={costPrice}
              onChange={(e) => setCostPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput6">Sell Price</label>
            <input
              id="exampleFormControlInput6"
              type="number"
              className="form-control"
              placeholder="enter product sell price"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput7">Discount (%)</label>
            <input
              id="exampleFormControlInput7"
              type="number"
              className="form-control"
              placeholder="enter discount on product"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput8">GST (%)</label>
            <input
              id="exampleFormControlInput8"
              type="number"
              className="form-control"
              placeholder="enter gst on product"
              value={gst}
              onChange={(e) => setGst(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
