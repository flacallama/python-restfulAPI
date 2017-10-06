export default (state = [], action) => {
  switch(action.type){
    case "GET_DONUTS_PENDING":
      return state;
    case "GET_DONUTS_FULFILLED":
      return [...action.payload.data];
    default:
      return state;
  }
}
