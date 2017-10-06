export default (state = [], action) => {
  switch (action.type){
    case "GET_STORES_PENDING":
      return state;
    case "GET_STORES_FULFILLED":
      return [...action.payload.data];
    default:
      return state;
  }
}
