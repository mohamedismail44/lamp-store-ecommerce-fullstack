const { default: axiosClient } = require("./AxiosClient");

const getLatestProduct = () => axiosClient.get("/products?populate=*");
const getProductyId = (id) => axiosClient.get(`/products/${id}?populate=*`);
const getProductByCategory = (cat) =>
  axiosClient.get(`/products?filters[category][$eq]=${cat}&populate=*`);

export default {
  getLatestProduct,
  getProductyId,
  getProductByCategory,
};
