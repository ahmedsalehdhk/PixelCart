import React from 'react'
import ItemCard from '../components/ItemCard'

export default function ProductsMen() {
  return (
    <div className='px-5 lg:px-12 py-20'>
      <h1 className='uppercase font-medium text-6xl mb-10'>Men's Apparel</h1>
      <hr className='mb-10'/>
      <div className="items flex justify-center lg:justify-start gap-8 flex-wrap">
      <ItemCard title="DOUBLE SLEEVE CARCOAT IN BLACK" price="$ 6,950"/>
      </div>
    </div>
  )
}
