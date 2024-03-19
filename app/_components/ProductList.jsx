import Link from "next/link";
import ProductItems from "./ProductItems";
import Laoding from "./Laoding";

export default function ProductList({ getApiData }) {
  return (
    <>
      {getApiData.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 p-4">
          {getApiData.map((ele) => (
            <div key={ele.id}>
              <Link href={`/product-details/${ele.id}`}>
                <ProductItems Product={ele} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <Laoding />
      )}
    </>
  );
}
