import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { HeaderBackground } from "./HeaderBackground"
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export let Shop = () => {

  const { shop } = useSelector((state) => {
    return {
      shop: state.shop
    }
  }
  )

  const render = () => {
    return shop.map((card) => {
      return <div>
        <Link to='/Single' className="">
          <div className="flex justify-center group  items-center w-full aspect-w-1 aspect-h-1 bg-gray-200  xl:aspect-w-7 xl:aspect-h-8">
            <button className="absolute hidden p-6 rounded-full bg-gray-50 group-hover:block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-3  text-gray-700 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <img className="ease-linear	 duration-200 hover:opacity-25" src={card.path} alt="img" />

          </div>
          <h3 className="mt-2 text-xl md:text-lg lg:text-lg text-gray-900 font-medium">{card.title}</h3>
          <p className=" text-md font-medium text-gray-600">{card.price} <small>$</small></p>
        </Link>
      </div>
    })

  }

  /* Price Range */


  function RangeSlider() {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ maxWidth: 270 }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
        />
      </Box>
    );
  }


  /* start */
  return <div>
    <HeaderBackground />
    <section>
      <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-12 max-w-7xl mx-auto py-24 md:py-24 lg:py-36   px-4 sm:px-6 lg:px-8">
        {/* left part */}
        <div className="col-span-4 md:col-span-1 lg:col-span-1 order-2 ">

          <div className=" mb-5">
            <form className="flex  items-center">
              <input type="text" className="border w-full rounded-none border-gray-300 px-2 py-1 focus:outline-none  focus:border" placeholder="Search here..." />
              <button className="bg-yellow-400 px-2 py-2 border-none"><svg xmlns="http://www.w3.org/2000/svg" className="h-5  w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg></button>
            </form>
          </div>

          <div className=" mb-8">
            <h3 className="text-gray-900 font-bold text-lg">Category</h3>
            <ul className="py-2">
              <li className="border-gray-300 border-b text-gray-700 py-2 ">
                <a href="#" className="flex items-center eazy-in-out duration-300  hover:ml-2 hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  Handle
                </a>
              </li>

              <li className="border-gray-300 border-b text-gray-700 py-2 ">
                <a href="#" className="flex items-center eazy-in-out duration-300  hover:ml-2 hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  Handle
                </a>
              </li>

              <li className="border-gray-300 border-b text-gray-700 py-2 ">
                <a href="#" className="flex items-center eazy-in-out duration-300  hover:ml-2 hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  Handle
                </a>
              </li>

              <li className="border-gray-300 border-b text-gray-700 py-2 ">
                <a href="#" className="flex items-center eazy-in-out duration-300  hover:ml-2 hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  Handle
                </a>
              </li>

            </ul>
          </div>

          <div className=" mb-8">
            <h3 className="text-gray-900 font-bold text-lg mb-8">Price</h3>
            {RangeSlider()}
          </div>

          <div className="single-sidebar mb-8">
            <h3 className="text-gray-900 font-bold text-lg">COLOR</h3>
            <ul className="">

              <li className=" w-full border-gray-300 border-b text-gray-700 py-2 flex items-center  ">
                <a href="" className="flex items-center eazy-in-out duration-300 hover:ml-2"><span className="rounded-full px-1.5 py-1.5 bg-red-600"></span><span className="px-2 hover:text-yellow-400 eazy-in-out duration-300  text-gray-600">Red</span></a>
              </li>
              <li className="border-gray-300 border-b text-gray-700 py-2 flex items-center ">
                <a href="" className="flex items-center  eazy-in-out duration-300 hover:ml-2"><span className="rounded-full px-1.5 py-1.5 bg-blue-600"></span><span className="px-2 text-gray-600 hover:text-yellow-400 eazy-in-out duration-300">Blue</span></a>
              </li>
              <li className="border-gray-300 border-b text-gray-700 py-2 flex items-center  ">
                <a href="" className="flex items-center  eazy-in-out duration-300 hover:ml-2"><span className="rounded-full px-1.5 py-1.5 bg-yellow-600"></span><span className="px-2 text-gray-600 hover:text-yellow-400 eazy-in-out duration-300">Yellow</span></a>
              </li>
              <li className="border-gray-300 border-b text-gray-700 py-2 flex items-center ">
                <a href="" className="flex items-center  eazy-in-out duration-300 hover:ml-2"><span className="rounded-full px-1.5 py-1.5 bg-red-600"></span><span className="px-2 text-gray-600 hover:text-yellow-400 eazy-in-out duration-300">Red</span></a>
              </li>

            </ul>
          </div>



        </div>
        {/* right part */}

        <div className="col-span-4 md:col-span-3  lg:col-span-3  order-1 md:order-2 lg:order-2 ">
          <div className="flex justify-end mb-5">
            <select class=" w-1/6 block  px-3  py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none" >
              <option >Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {render()}

          </div>
        </div>


      </div>

      <div className="max-w-7xl mx-auto pb-24 md:pb-24 lg:pb-16   px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <button className="py-3 px-3 mr-1 hover:text-yellow-400 font-semibold bg-gray-200 " >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="py-2 px-3 mr-1 hover:text-yellow-400 font-semibold bg-gray-200">1</button>
        <button className="py-2 px-3 mr-1 hover:text-yellow-400 font-semibold bg-gray-200">2</button>
        <button className="py-2 px-3 mr-1 hover:text-yellow-400 font-semibold bg-gray-200">3</button>
        <button className="py-3 px-3 mr-1 hover:text-yellow-400 font-semibold bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>


  </div>
}