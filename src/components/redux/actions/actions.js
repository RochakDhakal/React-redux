export const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};
export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
export const addItems = (items) => {
  return {
    type: "ADDITEMS",
    payload: items,
  };
};
export const delItems = (index) => {
  return {
    type: "DELETEITEMS",
    payload: index,
  };
};
