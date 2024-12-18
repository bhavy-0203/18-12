import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/Slice/product";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  let {products}=useSelector(store=>store.product)
  console.log(products);
  
  return <div>Products</div>;
};

export default Products;
