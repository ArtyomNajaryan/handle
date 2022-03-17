import { HeaderBackground } from "./HeaderBackground"

export let Checkout = () => {
  return <div>
    <HeaderBackground />
    <section className=" max-w-7xl mx-auto py-24 md:py-24 lg:py-36   px-4 sm:px-6 lg:px-8">
      <div className="grid  md:grid-cols-5 lg:grid-cols-5 gap-8">
        {/* left part */}
        <div className="col-span-5 md:col-span-3 lg:col-span-3">
          <h3 className="text-gray-900 font-bold text-2xl">BILLING DETAILS</h3>
          <form className="py-5">

            <div className="mb-3 w-full group">
              <label for="floating_first_name" className=" text-sm text-gray-500  ">First name</label>
              <input type="text" name="floating_first_name" id="floating_first_name" className="mt-2 block py-2.5  px-2 w-full text-sm text-gray-900 bg-transparent border border-gray-300 focus:outline-none  focus:border " placeholder=" " />
            </div>

            <div className="grid xl:grid-cols-2 xl:gap-4 ">
              <div className=" mb-3 w-full group">
                <label for="floating_email" className=" text-sm text-gray-500  ">Email</label>
                <input type="email" name="floating_email" id="floating_email" className=" mt-2 block py-2.5  px-2 w-full text-sm text-gray-900 bg-transparent border border-gray-300 focus:outline-none  focus:border " placeholder=" " />
              </div>
              <div className="mb-3 w-full group">
                <label for="floating_phone" className=" text-sm text-gray-500">Phone Number</label>
                <input type="text" name="floating_phone" id="floating_phone" className="mt-2 block py-2.5  px-2 w-full text-sm text-gray-900 bg-transparent border border-gray-300 focus:outline-none  focus:border " placeholder=" " />
              </div>
            </div>

            <div className="grid xl:grid-cols-2 xl:gap-4 ">
              <div className=" mb-3 w-full group">
                <label for="floating_country" className=" text-sm text-gray-500  ">Country</label>
                <input type="text" name="floating_country" id="floating_country" className=" mt-2 block py-2.5  px-2 w-full text-sm text-gray-900 bg-transparent border border-gray-300 focus:outline-none  focus:border " placeholder=" " />
              </div>
              <div className="mb-3 w-full group">
                <label for="floating_city" className=" text-sm text-gray-500">City</label>
                <input type="text" name="floating_city" id="floating_city" className="mt-2 block py-2.5  px-2 w-full text-sm text-gray-900 bg-transparent border border-gray-300 focus:outline-none  focus:border " placeholder=" " />
              </div>
            </div>

            <div className="mb-5 w-full group">
              <label for="floating_delivery" className=" text-sm text-gray-500  ">Delivery</label>
              <input type="text" name="floating_delivery" id="floating_delivery" className="mt-2 block py-2.5  px-2 w-full text-sm text-gray-900 bg-transparent border border-gray-300 focus:outline-none  focus:border " placeholder=" " />
            </div>

          
          </form>
        </div>


        {/* Right Part */}
        <div className="col-span-5 md:col-span-2 lg:col-span-2  bg-gray-50">
          <h3 className="text-gray-900 font-bold text-2xl px-8 pt-8">YOUR ORDER</h3>
          <ul className="px-8 pt-2">
            <li class="flex border-b font-bold py-2  border-gray-300  items-center justify-between">
              <p>PRODUCT</p>
              <p>TITLE</p>
            </li>

            <li class="flex border-b text-lg  border-gray-300 py-2 items-center justify-between">
              <p>Vestibulum dictum magna × 1</p>
              <p>100 <span>$</span></p>
            </li>
            <li class="flex border-b  border-gray-300 py-2  items-center justify-between">
              <p>Vestibulum suscipit × 1</p>
              <p>100 <span>$</span></p>
            </li>
            <li class="flex border-b font-bold py-2  border-gray-300  items-center justify-between">
              <p>Cart Subtotal</p>
              <p>200<span>$</span></p>
            </li>
            <li class="flex border-b font-bold py-2  border-gray-300  items-center justify-between">
              <p>Cart Subtotal</p>
              <p>200<span>$</span></p>
            </li>
           
           {/* cards */}
            <div className="flex mt-4">
              <a href="#"><img className="h-8 mr-2" src="https://icon-library.com/images/cash-on-delivery-icon/cash-on-delivery-icon-14.jpg" alt="" /></a>
              <a href="#"><img className="h-8 mr-2" src="https://www.fearless-flyer.com/_fofunnel/_res_fearlessflyer_com/images/VISAMasterCard-icons.png" alt="" /></a>
            </div>
           
           
            <button className="border-2 ease-in mt-8 w-full duration-300 border-gray-900 py-1 px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 text-sm md:text-md lg:text-md  hover:bg-gray-900 hover:text-white">
              <a href="#">Order</a>
            </button>

          </ul>
        </div>




      </div>
    </section>
  </div>
}