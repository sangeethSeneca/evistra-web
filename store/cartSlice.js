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
            let obj = action.payload;
            let itemsTemp = [...state.items];
            let findIndex = itemsTemp.findIndex((item) => item.modelName === obj.modelName)
            if (findIndex !== -1) {
                console.log(obj.quantity);
                itemsTemp[findIndex].quantity = itemsTemp[findIndex].quantity + 1;
            }
            else {
                itemsTemp.push({ ...obj, quantity: 1 })
            }
            state.items = itemsTemp;
        },
        removeItem: (state, action) => {
            let itemsTemp = [...state.items];
            console.log(action.payload);
            let findIndex = itemsTemp.findIndex(item => item._id === action.payload);

            itemsTemp.splice(findIndex, 1);
            state.items = [...itemsTemp];
        },
        clearCart: (state, action) => {
            state.items = [];
            state.discount = 0;
            state.total = 0;
        },
    },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer