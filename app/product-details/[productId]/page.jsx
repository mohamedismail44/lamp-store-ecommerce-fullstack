"use client";

import BreadCrumb from "../../_components/BreadCrumb";
import ProductApis from "../../_utils/ProductApis";
import { useEffect, useState } from "react";
import Details from "../_components/Details";
import ProductList from "../../_components/ProductList";

export default function ProductId({ params }) {
  const [ProductDetails, setProductDetails] = useState({});
  const [ProductFillter, setProductFillter] = useState([]);

 // get product details
  const getProductyId_ = () => {
    ProductApis.getProductyId(params.productId).then((res) => {
      setProductDetails(res?.data?.data);
      getProductByCategory_(res?.data?.data);
    });
  };
  // product fillter by category
  const getProductByCategory_ = (product) => {
    ProductApis.getProductByCategory(product?.attributes?.category).then(
      (res) => {
        setProductFillter(res?.data?.data);
        // console.log(res);
      }
    );
  };
  useEffect(() => {
    getProductyId_();
  }, [params.productId]);

  return (
    <div className="px-[10] md:px-[28px] py-[28px]">
      <BreadCrumb Product={ProductDetails} />
      <Details Product={ProductDetails} />
      <h2 className="text-2xl">Similar Products</h2>
      <ProductList getApiData={ProductFillter} />
    </div>
  );
}
