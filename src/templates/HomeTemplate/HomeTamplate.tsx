import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header';
type Props={}

export default function HomeTamplate({}:Props) {
  return (
    <>
       <Header/>
       <div>
          <Outlet/>
       </div>
       <footer></footer>
    </>
)
}
