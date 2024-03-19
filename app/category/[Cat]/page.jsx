"use client";
import ProductApis from "../../_utils/ProductApis";
import ProductList from "../../_components/ProductList";
import { useEffect, useState } from "react";

export default function Cat(props) {
  const [CategryProduct, setCategryProduct] = useState([]);
  const categoryName = props.params.Cat;
  //   console.log(categoryName);

  const ProductApis_ = () => {
    ProductApis.getProductByCategory(categoryName).then((res) =>
      setCategryProduct(res.data.data)
    );
  };
  useEffect(() => {
    ProductApis_();
  }, [categoryName]);

  return (
    <div>
      <h1 className="text-4xl text-gray-900 text-center m-10 capitalize">
        {categoryName} product
      </h1>
      <br />
      <div className="w-[80%] mx-auto mb-4">
        <ProductList getApiData={CategryProduct} />
      </div>
    </div>
  );
}
