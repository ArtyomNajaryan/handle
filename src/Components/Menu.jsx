import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

export let Menu = () => {

  let [search, setSearch] = useState(false)
  let [open, setOpen] = useState(false)

  return <div>

    <nav className="fixed w-full z-40  bg-white border-b border-gray-100">
      <div className="border-b-gray-900 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 md:h-24 lg:h-24">

          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/"><img className="h-16 md:h-24 lg:h-24" src="https://thumbs.dreamstime.com/b/door-handle-logo-vector-door-handle-icon-logo-vector-174095378.jpg" alt="" /></Link>

            </div>
            <div className="hidden sm:hidden md:hidden lg:block sm:ml-6">
              <div className="flex justify-center  text-lg font-medium 	space-x-4">

                <Link to="/shop"
                  className="px-3 py-2 hover:text-yellow-400 ease-in-out duration-300">SHOP</Link>
                <Link to="/"
                  className="px-3 py-2 hover:text-yellow-400 ease-in-out duration-300" aria-current="page">BLOG</Link>
                <Link to="/"
                  className="px-3 py-2 hover:text-yellow-400 ease-in-out duration-300">ABOUT</Link>
                <Link to="/contuct"
                  className="px-3 py-2 hover:text-yellow-400 ease-in-out duration-300">CONTUCT</Link>
              </div>
            </div>



            <div className="flex items-center">

              <Link to="/cart" className="px-5">
                <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 hover:text-yellow-400 ease-in-out duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>

              <Link to="#" onClick={() => setSearch(!search)}>
                <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 hover:text-yellow-400 ease-in-out duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>
              <input className={!search ? "hidden" : null + " border ml-2 "} type="text" />

              {/* <!-- Profile dropdown --> */}
              <div className="ml-3 flex relative">

                <div className=" inset-y-0 left-0 flex items-center sm:block md:block lg:hidden">
                  {/*  Mobile menu button */}
                  <button type="button" id="menuToggle"
                    onClick={() => setOpen(!open)}
                    className="navBar inline-flex items-center justify-center p-2 rounded-md text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu" aria-expanded="false">

                    <span className="sr-only color-red-200">Open main menu</span>
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={!open ? "hidden" : null + "  bg-gray-900 mx-4 rounded-2xl ease-in-out absolute text-center left-0 right-0 top-20 text-white shadow-lg shadow-gray-600/40"}
        id="mobile-menu">
        <div className="wm-port px-2 pt-6 pb-3 space-y-1 justify-center">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

          <Link to="/shop" className=" block px-3 py-2 rounded-md text-base font-medium">SHOP</Link>
          <Link to="/" className="  block px-3 py-2 rounded-md text-base font-medium">PAGES</Link>
          <Link to="/" className="  block px-3 py-2 rounded-md text-base font-medium">BLOG</Link>
          <Link to="/contact" className="  block px-3 py-2 rounded-md text-base font-medium">CONTUCT</Link>

        </div>
      </div>
    </nav >


  </div >
}