import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useState, useEffect } from 'react';

import Slider from "react-slick";
import Cards from './Cards';

const FreeBook = () => {
  const[book, setBook] = useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:3000/book")
        console.log(res.data);
        const data = res.data.filter((data)=> data.category === "Free")
        setBook(data);
      } catch (error) {
        console.log(error)
        
      }

    }
    getBook();
  },[])
    // console.log(filterdata);
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
                <h1 className='mb-12 font-bold text-xl pb-2'>Free Books available on Kindle</h1>
            </div>
        
        <div>
            <div className="slider-container">
            <Slider {...settings}>
              {book.map((item)=>(
                <Cards item = {item} key = {item.id}/>
              ))}  
            </Slider>
            </div>
            </div>
        </div>
    </>
    
  )
}

export default FreeBook
// console.log("hi");