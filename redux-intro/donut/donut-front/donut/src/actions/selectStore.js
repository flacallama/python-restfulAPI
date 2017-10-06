export const selectStore = (store) => {
  console.log('action: selectStore');
  return{
    type: "SELECT_STORE",
    payload: store
  }
}
