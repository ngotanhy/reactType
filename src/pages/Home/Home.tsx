import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { AppDispatch, RootState } from '../../redux/configStore'
import { getArrProduct, Product } from '../../redux/productReduce/productReduce'
import ProductCart from './ProductCart'

type Props = {
    title?: string
}

export default function Home({}: Props) {
    const {arrProduct}=useSelector((state:RootState)=>state.productReduce)
    const dispatch:AppDispatch =useDispatch();
    console.log(arrProduct);
    useEffect(() =>{
       const action= getArrProduct();
       dispatch(action);
    },[])
  return (
    <div className='container'>
        <h3 className='text-center'>Product List</h3>
        <div className='row'>
        {arrProduct.map((item:Product,index:number)=>{
             return <div className='col-4 mb-3 ' key={index}>
                <ProductCart prod={item}/>
             </div>
            })
        }
        </div>
    </div>
  )
}