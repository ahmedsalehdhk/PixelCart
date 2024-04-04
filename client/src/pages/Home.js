import React, { useEffect, useState } from 'react'
import ItemCard from '../components/ItemCard'

export default function Home() {

  const [products, setProducts] = useState(null)
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products/')
      const json = await response.json()  //turns the objects into an array of objects
      
      if(response.ok){
        setProducts(json)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className='px-5 lg:px-12 py-20'>
      <h1 className=' font-medium text-6xl mb-3'>Welcome to Pixel Cart</h1>
      <p className='mb-10'>Browse from the latest apparel currently in style</p>
      <hr className='mb-10'/>
      <div className="items flex justify-center lg:justify-start gap-8 flex-wrap">
        {products && products.map((product, index) => {
          return <ItemCard key={index} title={product.title} price={product.price}/>
        })}
      </div>
    </div>
  )
}
