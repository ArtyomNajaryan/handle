import { createStore } from "redux";
import { Cart } from "../Components/Cart";

const initialState = {
  product: [
    { title: "The Handle Name", price: "48", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg", },
    { title: "The Handle Name", price: "88", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg", },
    { title: "The Handle Name", price: "908", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg" },
    { title: "The Handle Name", price: "48", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg" },
    { title: "The Handle Name", price: "48", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg" },
    { title: "The Handle Name", price: "48", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg", },
    { title: "The Handle Name", price: "48", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg" },
    { title: "The Handle Name", price: "48", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg", }
  ],

  shop: [
    { title: "The Handle Name", price: "4778", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg", },
    { title: "The Handle Name", price: "88", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg", },
    { title: "The Handle Name", price: "908", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg" },
    { title: "The Handle Name", price: "48", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg" },
    { title: "The Handle Name", price: "48", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg" },
    { title: "The Handle Name", price: "48", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg", },
    { title: "The Handle Name", price: "48", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg" },
    { title: "The Handle Name", price: "48", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg", }
  ],

  single: [
    { title: "The Handle Name", price: "4778", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg", },
    { title: "The Handle Name", price: "88", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg", },
    { title: "The Handle Name", price: "908", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg" },
    { title: "The Handle Name", price: "48", path: "https://danubehome.com/media/catalog/product/cache/791856a0cde4f5a194b9d5d7de8b3d94/8/1/811600700083_3dyubqeyzktkekrs.jpg" },
  ],

  order: [
    { path: 'https://freepikpsd.com/file/2019/10/handle-png.png', name: "Hanggggggggggtdel", price: "10", Quantity: "1", total: '8', },
    { path: 'https://freepikpsd.com/file/2019/10/handle-png.png', name: "Handel", price: "10", Quantity: "1", total: '8' },
    { path: 'https://freepikpsd.com/file/2019/10/handle-png.png', name: "Handel", price: "10", Quantity: "1", total: '8' },
    { path: 'https://freepikpsd.com/file/2019/10/handle-png.png', name: "Handel", price: "10", Quantity: "1", total: '8' },

  ],

  footerIcons: [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
      title: 'Free delivery', text: 'Lorem ipsum dolor sit amet.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
      title: 'Free delivery', text: 'Lorem ipsum dolor sit amet.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
      title: 'Free delivery', text: 'Lorem ipsum dolor sit amet.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
      title: 'Free delivery', text: 'Lorem ipsum dolor sit amet.'
    }
  ]

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setProduct": {
      return {
        ...state,
        product: action.data
      }
    }
    case "setShop": {
      return {
        ...state,
        shop: action.data
      }
    }
    case "setSingle": {
      return {
        ...state,
        shop: action.data
      }
    }
    case "setorder": {
      return {
        ...state,
        order: action.data
      }
    }

    case "setfooterIcons": {
      return {
        ...state,
        footerIcons: action.data
      }
    }

    default: {
      return state
    }
  }

}

const store = createStore(reducer)
window.store = store

export default store