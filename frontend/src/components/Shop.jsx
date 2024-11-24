import React, { useEffect } from 'react'
import Cards from './Cards'
import list from '../assets/list.json'
import { Link } from "react-router-dom"
import axios from 'axios'
import { useState } from 'react'

const Shop = () => {
  const[book, setBook] = useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:3000/book")
        console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log(error)
        
      }

    }
    getBook();
  },[])
  console.log(list);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-36 items-center justify-center text-center'>
        <h1 className='text-3xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here :))</span></h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque facere sit officiis deserunt, voluptatibus aut dolorum rerum? Atque nostrum quia commodi alias est perspiciatis asperiores exercitationem cumque fuga molestiae officia doloribus cupiditate unde quasi inventore dolorem nesciunt, pariatur ratione officiis.</p>
        <Link to="/">
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700'>Back</button>
        </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'> 
        {book.map((item) => {
            console.log(item); 
            return <Cards item={item} key={item.id} />;
        })}

    </div>
    </div>
    </>
  )
}

export default Shop