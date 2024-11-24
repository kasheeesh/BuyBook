import React from 'react'

const Cards = ({item}) => {
  return (
    <>
    <div>
    <div className="m-auto w-44 card bg-base-100 h-fit md:w-72 shadow-xl">
        <figure>
            <img
            src={item.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            {item.title}
            <div className="badge badge-secondary bg-pink-500">{item.category}</div>
            </h2>
            <p>{item.name}</p>
            <div className="card-actions justify-between">
            <div className="badge badge-outline">{item.price}</div>
            <div className="badge badge-outline hover:text-pink-500">Products</div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Cards