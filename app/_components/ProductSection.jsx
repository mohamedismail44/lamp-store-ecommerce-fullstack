"use client";

import { useEffect, useState } from "react";
import ProductApis from "../_utils/ProductApis";
import ProductList from "./ProductList";

export default function ProductSection() {
  const [getApiData, setgetApiData] = useState([]);
  const getLatestProducts_ = () => {
    ProductApis.getLatestProduct().then((res) => {
      // console.log(res.data.data);
      setgetApiData(res.data.data);
    });
  };
  useEffect(() => {
    getLatestProducts_();
  }, []);

  return (
    <>
      <div className="mx-auto py-4 w-[88%]" id="shop">
        <h1 className="text-2xl">Our Latest Product</h1>
        <ProductList getApiData={getApiData} />
      </div>
    </>
  );
}
