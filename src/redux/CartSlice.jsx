import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
name: "cart",

initialState: {
items: [],
},

reducers: {
addItem: (state, action) => {
const plant = action.payload;
const existingPlant = state.items.find(
(item) => item.id === plant.id
);


  if (existingPlant) {
    existingPlant.quantity += 1;
  } else {
    state.items.push({
      ...plant,
      quantity: 1,
    });
  }
},

removeItem: (state, action) => {
  state.items = state.items.filter(
    (item) => item.id !== action.payload
  );
},

updateQuantity: (state, action) => {
  const { id, quantity } = action.payload;

  const plant = state.items.find((item) => item.id === id);

  if (!plant) return;

  if (quantity <= 0) {
    state.items = state.items.filter(
      (item) => item.id !== id
    );
  } else {
    plant.quantity = quantity;
  }
},


},
});

export const { addItem, removeItem, updateQuantity } =
cartSlice.actions;

export default cartSlice.reducer;
