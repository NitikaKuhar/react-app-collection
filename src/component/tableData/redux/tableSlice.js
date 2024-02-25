import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    data:[]
};

const tableSlice = createSlice({
    name:'table',
    initialState,
    reducers:{
        setTableData:(state, action) =>{
            state.data = action.payload;
        }
    }
});

export const { setTableData} = tableSlice.actions;
export default tableSlice.reducer;