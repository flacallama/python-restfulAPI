export default (state = '', action) => {
  switch(action.type) {
    case "SELECT_DONUT":
      return action.payload;
    default:
      return state;
  }
}
