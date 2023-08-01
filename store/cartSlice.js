import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    discount: 0,
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            console.log(state.items);
            let itemsTemp = [...state.items];
            itemsTemp.push(action.payload)
            state.items = itemsTemp;

        },
        removeItem: (state, action) => {
            let itemsTemp = [...state.items];
            console.log(action.payload);
            let findIndex = itemsTemp.findIndex(item => item._id === action.payload);

            itemsTemp.splice(findIndex, 1);
            state.items = [...itemsTemp];
        },
    },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer