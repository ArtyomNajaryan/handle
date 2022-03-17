import { useState } from 'react'
import { HeaderBackground } from './HeaderBackground'
import handle1 from './images/handle1.png'
import handle2 from './images/handle2.png'
import handle3 from './images/handle3.png'
import door1 from './images/door1.png'
import door2 from './images/door2.jpg'
import door3 from './images/door3.jpg'
export let Single = () => {

  let [Door, setDoor] = useState('door1')
  let [Handle, setHandle] = useState('handle1')
  return <div>
    <HeaderBackground />
    <section>
      <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-7  lg:grid-rows-1 lg:gap-x-8">
        {/* Left part */}
        <div className="py-10   lg:pt-8 lg:pb-16 lg:col-span-3 lg:lg:col-end-4  ">
          <div className="relative flex justify-center mb-5">
            <img className=" h-96 cursor-pointer " src={door1} alt="" />
            <img className="absolute w-12 top-[12.1rem] left-[6.5rem] sm:left-[15rem] md:left-[15.5rem] lg:left-[11.5rem]" src={handle1} alt="" />
          </div>
          <div className=" flex items-center  justify-between">
            <img className="h-56 cursor-pointer" src={door2} alt="img" onClick={() => setDoor(door1 = door2)} />
            <img className="h-56 cursor-pointer" src={door3} alt="img" onClick={() => setDoor(door1 = door3)} />
            <img className="h-56 cursor-pointer" src={door2} alt="img" onClick={() => setDoor(door1 = door2)} />
            <img className="h-56 cursor-pointer" src={door3} alt="img" onClick={() => setDoor(door1 = door3)} />
          </div>
        </div>
        {/* Right Part */}
        <div className="mt-4 lg:mt-0 lg:col-span-3 lg:col-end-8 lg:border-l lg:border-gray-200 lg:pl-8">

          <div className="mt-10">
            <div className="">
              <h3 className="text-gray-900 font-medium text-lg md:text-2xl lg:text-2xl pb-3">About The Handle</h3>
              <p className="text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis pariatur sed delectus magni praesentium eius?</p>
            </div>

            <div className="my-4 text-gray-900 font-medium text-sm md:text-lg lg:text-lg">
              <h3 className="py-5">Choose a handle</h3>
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4 items-center">
                <img src={handle2} onClick={() => setDoor(handle1 = handle2)} alt="img" className='border rounded-sm cursor-pointer	' />
                <img src={handle3} onClick={() => setDoor(handle1 = handle3)} alt="img" className='rounded-sm cursor-pointer	' />
                <img src={handle2} onClick={() => setDoor(handle1 = handle2)} alt="img" className=' rounded-sm cursor-pointer	' />
                <img src={handle3} onClick={() => setDoor(handle1 = handle3)} alt="img" className=' rounded-sm cursor-pointer	' />
              </div>
            </div>
            <button className="border-2 my-5 ease-in w-full duration-300 border-gray-900 py-1 px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 text-sm md:text-md lg:text-md  hover:bg-gray-900 hover:text-white">
              <a href="#">Order Now</a>
            </button>
          </div>
        </div>

      </div>
    </section>
  </div>
}