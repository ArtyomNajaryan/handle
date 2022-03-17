import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { HeaderBackground } from "./HeaderBackground"
/* import { Headerbackground } from "./Headerbackground" */

export let Cart = () => {

  let [Quantity, setQuantity] = useState(1)
  let [Del, setDel] = useState("barev")
  /* ---- */
  const { order } = useSelector((state) => {
    return {
      order: state.order
    }
  }
  )

  const render = () => {
    return order.map((orderPrice) => {
      return (
        <tr key={orderPrice.id} id='delete `{orderPrice.id}`' className="border  border-gray-300">
          <td className=" border-b  border-r border-gray-300 w-1/6 text-center"><div className="flex justify-center"><img className="text-center h-10  md:h-24 lg:h-24" src={orderPrice.path} alt="Image" /></div></td>
          <td className=" border-b  border-r border-gray-300 w-1/6"><a href="product-details.html">{orderPrice.name}</a></td>
          <td className="  border-r border-gray-300 w-1/12"><span className="amount">${orderPrice.price}</span></td>
          <td className="border-b  border-r w-1/5 border-gray-300 ">
            <div className="product-quantity   float-none inline-block relative  px-12 ">
              <button className="absolute left-3 bottom-0 top-0 " onClick={() => setQuantity(Quantity - 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <input type="text" value={Quantity} className="py-5 text-center h-5 w-8 block " />
              <button className="absolute top-0 bottom-0  right-3 " onClick={() => setQuantity(Quantity + 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </td>
          <td className=" border-b  border-r border-gray-300 w-1/12"><span>$</span>{orderPrice.total * Quantity}</td>
          <td className="border-b w-1/12 border-r border-gray-300 " onClick={() => { setDel(document.getElementById("delete").innerHTML = '') }}><a className="text-2xl text-red-600" href="#/">×</a></td>
        </tr>)
    })

  }


  return <div>

    <HeaderBackground />
    <section className="" >
      <div className=" max-w-7xl mx-auto py-8 md:py-16 lg:py-24   px-4 sm:px-6 lg:px-8  text-center">
        <table className="w-2/3 md:w-full lg:w-full">
          <thead>
            <tr className=" border border-gray-300">
              <th className="py-2  border border-gray-300">Image</th>
              <th className="py-2  border border-gray-300">Product</th>
              <th className="py-2  border border-gray-300">Price</th>
              <th className="py-2   border border-gray-300">Quantity</th>
              <th className=" border  py-2  border-gray-300">Total</th>
              <th className="border  py-2  border-gray-300">Remove</th>
            </tr>
          </thead>
          <tbody className=" border  border-gray-300" >
            {render()}
          </tbody>
        </table>
        <div className="flex justify-end ">
          <Link to="/checkout" className=" mt-5 border-2 ease-in duration-300 border-gray-900 py-2 px-10 text-sm md:text-md lg:text-md  hover:bg-gray-900 hover:text-white">
            Order Service</Link>
        </div>
      </div>



    </section>

  </div>
}

