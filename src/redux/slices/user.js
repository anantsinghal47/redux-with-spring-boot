import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const user = {
    isLoading : false,
    data : null,
    isError:false
    
}

//Action 
export const fetchCompanies = createAsyncThunk('fetchCompanies' , async () => {
    const response = await fetch('http://localhost:8081/getAllRegisteredCompanies');
    const response2 = await axios.get('http://localhost:8081/getAllRegisteredCompanies');
    console.log(response , response2);
    
    return response.json();
})

const userSlice = createSlice({
    name : 'user',
    initialState:user,
    extraReducers : (builder) => {
        builder.addCase(fetchCompanies.pending , (state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchCompanies.fulfilled , (state,action)=>{

            console.log("Fulfilled" , action);
            state.isLoading=false;
            state.data = action.payload;

        })
        builder.addCase(fetchCompanies.rejected , (state,action)=>{
            console.log("Error" , action.payload);
            state.isError=true;
        })


    }

})

export const getCompanies = (state) => state.user.data;

export default userSlice.reducer;