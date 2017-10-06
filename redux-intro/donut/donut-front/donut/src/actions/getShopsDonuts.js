import axios from 'axios';

export const getShopsDonuts = (shopsDonuts) => {
  return {
    type: "GET_SHOPS_DONUTS",
    payload: axios.get("http://localhost:8000/shopsDonuts")
  }
}
