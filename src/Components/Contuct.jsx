import { HeaderBackground } from "./HeaderBackground"


export let Contuct = () => {
  return <div>
      <HeaderBackground />
    <section className=" max-w-7xl mx-auto py-24 md:py-24 lg:py-36   px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-5 lg:grid-cols-5 gap-8">
        {/* left part */}
        <div className="col-span-2 ">
          <h3 className="text-gray-900 font-bold text-2xl ">Contuct Us</h3>
          <ul className="py-5">
            <li className="flex  py-1 ">
            <svg class="h-5 w-5 text-gray-600 mr-2 hover:text-yellow-400 eazy-in-out duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
              <a className="w-1/2 hover:text-yellow-400 eazy-in-out duration-300" href="www.googlemap.com">Yerevan, Amrenia</a>
            </li>
            <li className="flex items-center py-1 ">
              <svg class="h-5 w-5 text-gray-600 hover:text-yellow-400 eazy-in-out duration-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path>
              </svg>
              <a className="w-1/2 hover:text-yellow-400 eazy-in-out duration-300" href="tel:+37488888">+374 (99) 88-88-88</a>
            </li>
            <li className="flex items-center py-1  ">
              <svg xmlns="http://www.w3.org/2000/svg" className=" hover:text-yellow-400 eazy-in-out duration-300 h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <a className="w-1/2 hover:text-yellow-400 eazy-in-out duration-300" href="mailto:example@gmail.com">example@gmail.com</a>
            </li>

          </ul>
        </div>
        {/* Right Part */}
        <div className="col-span-3">
          <h3 className="text-gray-900 font-bold text-2xl">Contuct Us</h3>
          <form className="py-5">
            <div className="grid xl:grid-cols-3 xl:gap-4 ">
              <div className="mb-3 w-full group">
                <label for="floating_first_name" className=" text-sm text-gray-500  ">First name</label>
                <input type="text" name="floating_first_name" id="floating_first_name" className="mt-2 block py-2.5  px-2 w-full text-sm text-gray-900 bg-transparent border border-gray-300 focus:outline-none  focus:border " placeholder=" " />
              </div>
              <div className=" mb-3 w-full group">
                <label for="floating_email" className=" text-sm text-gray-500  ">Email</label>
                <input type="email" name="floating_email" id="floating_email" className=" mt-2 block py-2.5  px-2 w-full text-sm text-gray-900 bg-transparent border border-gray-300 focus:outline-none  focus:border " placeholder=" " />
              </div>
              <div className="mb-3 w-full group">
                <label for="floating_subject" className=" text-sm text-gray-500">Subject</label>
                <input type="text" name="floating_subject" id="floating_subject" className="mt-2 block py-2.5  px-2 w-full text-sm text-gray-900 bg-transparent border border-gray-300 focus:outline-none  focus:border " placeholder=" " />
              </div>

            </div>
            <div>
              <label for="message" className="text-sm text-gray-500">Message...
              </label>
              <textarea className="mt-2 autoexpand tracking-wide py-2 pb-6 px-2  mb-3 leading-relaxed -none block w-full  border border-gray-300 focus:outline-none  focus:border"
                id="message" type="text" placeholder=""></textarea>
            </div>

            <button className="border-2 ease-in duration-300 border-gray-900 mt-2 py-1 px-2 md:py-2 md:px-3 lg:py-2 lg:px-3 text-sm md:text-md lg:text-md  hover:bg-gray-900 hover:text-white">
              <a href="#">Send Message</a>
            </button>

          </form>
        </div>




      </div>
    </section>

  </div>
}