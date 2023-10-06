const initState = [];
const toDo = (state = initState, action) => {
  switch (action.type) {
    case "ADDITEMS":
      return (state = [...state, action.payload]);
    case "DELETEITEMS":
        const updatedList = state.filter((_, index) => {
            return action.payload != index;
        });
        return updatedList;
    default:
      return state;
  }
};
export default toDo;
