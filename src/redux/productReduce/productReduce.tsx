import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../util/config';
import { AppDispatch } from '../configStore';

export interface Product{
    id:               number;
    name:             string;
    alias:            string;
    price:            number;
    description:      string;
    size:             string;
    shortDescription: string;
    quantity:         number;
    deleted:          boolean;
    categories:       string;
    relatedProducts:  string;
    feature:          boolean;
    image:            string;
}

export interface ProductState{
    arrProduct: Product[]
}

const initialState:ProductState = {
     arrProduct:[]
}

const productReduce = createSlice({
  name: 'productReduce',
  initialState,
  reducers: {
    getProductAction:(state,action:PayloadAction<Product[]>) =>{
        state.arrProduct=action.payload
    }
  }
});

export const {getProductAction,} = productReduce.actions

export default productReduce.reducer

//-------thunk call api --------------------------------

export const getArrProduct=()=>{
    return async (dispatch:AppDispatch)=>{
        try{ 
            const result= await http.get('/Product');
            const action= getProductAction(result.data.content);
            dispatch(action)
        } 
        catch(err){
            console.log(err)
        }
    }
}