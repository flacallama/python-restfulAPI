import axios from 'axios';

export const getDonuts = (donuts) => {
  return {
    type: "GET_DONUTS",
    payload: axios.get("http://localhost:8000/donuts")
  }
}
