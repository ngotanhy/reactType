import React from 'react'
import { Product } from '../../redux/productReduce/productReduce'

type Props = {
    prod:Product
}

export default function ProductCart({prod}: Props) {
  return (
    <div className="card">
        <img src={prod.image} alt='...' className=''/>
        <div className="card-body text-white bg-dark">
            <p>{prod.name}</p>
            <p>{prod.price}</p>
            <button className='btn btn-success'>Add to Cart</button>
        </div>
    </div>
  )
}