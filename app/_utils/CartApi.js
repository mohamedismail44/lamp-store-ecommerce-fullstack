const { default: axiosClient } = require("./AxiosClient");

const addToCart = (payload) => axiosClient.post("/carts", payload);
const getUserCartItems = (email) =>
  axiosClient.get(
    `/carts?populate[products][populate]=image&filters[email][$eq]=${email}`
  );
const deleteItemsFeomCart = (id) => axiosClient.delete(`/carts/${id}`);
export default { addToCart, getUserCartItems, deleteItemsFeomCart };
