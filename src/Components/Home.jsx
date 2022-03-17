import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"


export let Home = () => {


  /* -------------------- */
  const { product } = useSelector((state) => {
    return {
      product: state.product
    }
  }
  )

  const render = () => {
    return product.map((card) => {
      return <div>
        <Link to='/Single' className="group">
          <div className="flex justify-center  items-center w-full aspect-w-1 aspect-h-1 bg-gray-200  xl:aspect-w-7 xl:aspect-h-8">
            <button className="absolute hidden p-6 rounded-full bg-gray-50 group-hover:block ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-3  text-gray-700 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <img className="ease-linear	 duration-200 group-hover:opacity-25" src={card.path} alt="img" />

          </div>
          <h3 className="mt-2 text-lg text-gray-900 font-medium">{card.title}</h3>
          <p className=" text-md font-medium text-gray-600">{card.price} <small>$</small></p>
        </Link>
      </div>
    })

  }

  /* ------------------- */



  return <div>

    <section className=" bg-gray-50">
      <div className="flex justify-between max-w-7xl mx-auto py-24 md:py-24 lg:py-36   px-4 sm:px-6 lg:px-8">

        <div className="w-1/2">
          <img className="w-2/3 bg-cover opacity-75" src="https://pngimg.com/uploads/chair/chair_PNG6862.png" alt="img" />
        </div>

        <div className="w-2/5 flex items-center text-left">
          <div>
            <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold">FURNITURE GALLERY</h1>
            <p className="py-8 text-sm md:text-md lg:text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repellendus, culpa suscipit ut provident earum.</p>
            <button className="border-2 ease-in duration-300 border-gray-900 py-1 px-2 md:py-2 md:px-3 lg:py-2 lg:px-6 text-sm md:text-md lg:text-md  hover:bg-gray-900 hover:text-white">
              <a href="#">Order Service</a>
            </button>
          </div>

        </div>

      </div>

    </section>

    <section>
      <div className="max-w-7xl mx-auto py-8 md:py-16 lg:py-24   px-4 sm:px-6 lg:px-8">

        <div className="flex justify-center ">
          <a href="#" className="w-1/3 mx-5 flex items-center relative">
            <img className=" " src="https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg" alt="img" />
            <h3 className="absolute font-medium bottom-0 left-0 bg-white bg-opacity-75  text-xs md:text-2xl lg:text-2xl  right-0  p-1 md:p-3 lg:p-3">Golden handles</h3>
          </a>

          <a href="#" className="tex-end w-1/3 mx-5 relative">
            <img src="https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg" alt="img" />
            <h3 className="absolute font-medium  bottom-0 left-0 bg-white bg-opacity-75 text-xs  md:text-2xl lg:text-2xl  right-0 p-1 md:p-3 lg:p-3">Room doors handles</h3>
          </a>
        </div>

      </div>
    </section>



    <section>
      <div className="max-w-7xl mx-auto py-8 md:py-16 lg:py-24   px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center pb-10">FURNITURE GALLERY</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {render()}

        </div>
      </div>
    </section>





  </div >
}
