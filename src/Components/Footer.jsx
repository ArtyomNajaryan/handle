import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export let Footer = () => {
  const { footerIcons } = useSelector((state) => {
    return {
      footerIcons: state.footerIcons
    }
  }
  )

  const render = () => {
    return footerIcons.map((FooterIcon) => {
      return <div>
        <div className="w-full flex items-center justify-center">
          {FooterIcon.icon}
          <div>
            <h3 className=" text-lg font-bold">{FooterIcon.title}</h3>
            <p className="text-md font-sm text-gray-700">{FooterIcon.text}</p>
          </div>
        </div>
      </div>
    })

  }
  return <div>
    <section className="border-t-2 border-gray-100 bg-gray-50" >

      <div className=" max-w-7xl mx-auto py-6 md:py-10 lg:py-12   px-4 sm:px-6 lg:px-8">
        <a href="#" className=" grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {render()}
        </a>
      </div>
    </section>

    <footer className="bg-zinc-800">
      <div className=" max-w-7xl mx-auto py-8  px-4 sm:px-6 lg:px-8">
        <div className="sm:flex md:flex  lg:flex  justify-between pb-16">

          <div className="w-52">
            <img src="https://template.hasthemes.com/furnish/furnish/img/logo.png" alt="img" />
            <p className="text-white text-sm mt-5">Lorem ipsum dolor sit amet, elit adipisicing consectetur .</p>
          </div>

          <div className="w-1/2 sm:flex md:flex  lg:flex justify-between">

            <div className="text-white text-md  font-medium">
              <h2 className="text-xl">Section</h2>
              <ul className="py-3 md:py-0 lg:py-0 ">
                <li><Link to="info/">Info</Link></li>
                <li><a href="#">Information</a></li>
                <li><a href="#">Information</a></li>
                <li><a href="#">Information</a></li>
              </ul>
            </div>

            <div className="text-white text-md  font-medium">
              <h2 className="text-xl">Section</h2>
              <ul className="py-3 md:py-0 lg:py-0 ">
                <li><a href="#">Information</a></li>
                <li><a href="#">Information</a></li>
                <li><a href="#">Information</a></li>
                <li><a href="#">Information</a></li>
              </ul>
            </div>

            <div className="text-white text-md  font-medium">
              <h2 className="text-xl">Section</h2>
              <ul className="py-3 md:py-0 lg:py-0 ">
                <li><a href="#">Information</a></li>
                <li><a href="#">Information</a></li>
                <li><a href="#">Information</a></li>
                <li><a href="#">Information</a></li>
              </ul>
            </div>
          </div>

          <div className="text-white text-md  font-medium">
            <h2 className="text-xl">Section</h2>
            <ul className="py-3 md:py-0 lg:py-0 ">
              <li><a href="#">Information</a></li>
              <li><a href="#">Information</a></li>
              <li><a href="#">Information</a></li>
              <li><a href="#">Information</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-5 border-t-2 opacity-50  sm:flex md:flex  lg:flex justify-between">

          <div className="mt-5">
            <a href="#">
              <p className="text-white">Copyright @ 2021 Webmagnet. All rights reserved</p>
            </a>
          </div>

          <div className="mt-5">
            <ul className="flex   text-white">
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>

  </div>
}