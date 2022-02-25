import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../actions/productAction";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Product = ({ product, selectAll }) => {
  const dispatch = useDispatch();
  const {
    id,
    name,
    category,
    description,
    expiryDate,
    costPrice,
    sellPrice,
    discount,
    gst,
  } = product;

  const calc1 = sellPrice - (sellPrice * discount) / 100;
  const discountedSellPrice = parseFloat(calc1).toFixed(2);

  const calc2 = calc1 + (calc1 * gst) / 100;
  const finalPrice = parseFloat(calc2).toFixed(2);

  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that product ?")
    ) {
      dispatch(deleteProduct(id));
      toast.success("Product Deleted Successfully");
    }
  };

  const formatedExpiryDate = expiryDate.split("-").reverse().join("-");

  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            onChange={() => {}}
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td>{formatedExpiryDate}</td>
      <td>{costPrice}</td>
      <td>{sellPrice}</td>
      <td>{discount}</td>
      <td>{discountedSellPrice}</td>
      <td>{gst}</td>
      <td>{finalPrice}</td>
      <td className="actions">
        <Link to={`/products/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        <span
          style={{ cursor: "pointer" }}
          className="material-icons  text-danger"
          onClick={() => handleDelete(id)}
        >
          delete
        </span>
      </td>
    </tr>
  );
};

export default Product;
