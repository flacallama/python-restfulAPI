export default (state = '', action) => {
  switch (action.type) {
    case "SELECT_STORE":
    console.log('reducer selectStore', action.payload);
      return action.payload
    default:
      return state;
  }
}
