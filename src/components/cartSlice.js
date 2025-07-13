import {createSlice} from '@reduxjs/toolkit';
const cartSlice= createSlice({
    name: 'cart',
    initialState:{
        items: [],
    },
    reducers:{
        addItem: (state, action) => {
            state.items.push(action.payload);

        },
        removeItem: (state, action) =>{
            state.items.pop()
        },
        clearCart: (state,action) =>{
            // Either or mutate a state or return new state
            state.items.length=0 // state=[]
            // or
            //return []
        }
    }

})
export const {addItem, removeItem, clearCart }= cartSlice.actions;
export default cartSlice.reducer;