export default (state = [], action) => {
  switch (action.type) {
    case "GET_SHOPS_DONUTS_PENDING":
      return state;
    case "GET_SHOPS_DONUTS_FULFILLED":
      return [...action.payload.data.rows]
    default:
      return state
  }
}
