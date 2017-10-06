import axios from 'axios';

export const getStores = (stores) => {
  return {
    type: "GET_STORES",
    payload: axios.get("http://localhost:8000/shops")
  }
}
