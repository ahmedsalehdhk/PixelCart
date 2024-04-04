import React from 'react'
import  { Link } from 'react-router-dom'

export default function ItemCard(props) {
  return (
    <Link className='max-w-72'>
        <div className="image bg-green-500 h-96 w-72 mb-3"></div>
        <div className="title font-semibold uppercase">{props.title}</div>
        <div className="price font-medium text-neutral-500">$ {props.price}</div>
    </Link>
  )
}
