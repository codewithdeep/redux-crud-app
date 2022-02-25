import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions/productAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [costPrice, setCostPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [gst, setGst] = useState("");

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const new_product = {
    id: shortid.generate(),
    name: name,
    category: category,
    description: description,
    expiryDate: expiryDate,
    costPrice: costPrice,
    sellPrice: sellPrice,
    discount: discount,
    gst: gst,
  };

  const createProduct = (e) => {
    e.preventDefault();
    setFormErrors(validate(new_product));
    setIsSubmit(true);

    if (
      name &&
      category &&
      description &&
      expiryDate &&
      costPrice &&
      sellPrice &&
      discount &&
      gst &&
      Object.keys(formErrors).length === 0
    ) {
      dispatch(addProduct(new_product));
      toast.success("Product Added Successfully");
      setTimeout(() => history.push("/"), 500);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(new_product);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Product name is required!";
    } else if (values.name.length > 20) {
      errors.name = "Product name cannot exceed more than 20 characters";
    }
    if (!values.category) {
      errors.category = "Category is required!";
    }
    if (!values.description) {
      errors.description = "Description is required!";
    } else if (values.description.length > 250) {
      errors.description = "Description cannot exceed more than 250 characters";
    }
    if (!values.expiryDate) {
      errors.expiryDate = "Date of expiry is required!";
    }
    if (!values.costPrice) {
      errors.costPrice = "Cost price is required!";
    }
    if (!values.sellPrice) {
      errors.sellPrice = "Sell price is required!";
    }
    if (!values.discount) {
      errors.discount = "Discount is required!";
    }
    if (!values.gst) {
      errors.gst = "GST is required!";
    }
    return errors;
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Product</div>
      <div className="card-body">
        <form onSubmit={(e) => createProduct(e)}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Product Name</label>
            <input
              id="exampleFormControlInput1"
              type="text"
              className="form-control"
              placeholder="enter product name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <p>{formErrors.name}</p>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Category</label>
            <select
              className="form-control"
              id="exampleFormControlSelect2"
              value={category}
              name="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select product category</option>
              <option>Home</option>
              <option>Mobile</option>
              <option>Fashion</option>
              <option>Grocery</option>
              <option>Electronics</option>
            </select>
          </div>
          <p>{formErrors.category}</p>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea3">Description</label>
            <textarea
              className="form-control"
              placeholder="enter product description"
              id="exampleFormControlTextarea3"
              rows="3"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <p>{formErrors.description}</p>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput4">Expiry Date</label>
            <input
              id="exampleFormControlInput4"
              type="date"
              className="form-control"
              name="expiryDate"
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="dd/MM/yyyy"
              min="1997-01-01"
              max="2030-12-31"
            />
          </div>
          <p>{formErrors.expiryDate}</p>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput5">Cost Price</label>
            <input
              id="exampleFormControlInput5"
              type="number"
              className="form-control"
              placeholder="enter product cost price"
              name="costPrice"
              onChange={(e) => setCostPrice(e.target.value)}
            />
          </div>
          <p>{formErrors.costPrice}</p>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput6">Sell Price</label>
            <input
              id="exampleFormControlInput6"
              type="number"
              className="form-control"
              placeholder="enter product sell price"
              name="sellPrice"
              onChange={(e) => setSellPrice(e.target.value)}
            />
          </div>
          <p>{formErrors.sellPrice}</p>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput7">Discount (%)</label>
            <input
              id="exampleFormControlInput7"
              type="number"
              className="form-control"
              placeholder="enter discount on product"
              name="discount"
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          <p>{formErrors.discount}</p>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput8">GST (%)</label>
            <input
              id="exampleFormControlInput8"
              type="number"
              className="form-control"
              placeholder="enter gst on product"
              name="gst"
              onChange={(e) => setGst(e.target.value)}
            />
          </div>
          <p>{formErrors.gst}</p>
          <button className="btn btn-primary" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
