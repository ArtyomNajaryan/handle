export let HeaderBackground = () => {
  return <div>
    <section className="h-80 md:h-96 lg:h-96 bg-gray-100 flex">
      <div className="max-w-7xl mx-auto w-full  flex justify-between ">
        <div className=" md:w-2/5 lg:w-2/5 py-28 md:py-32 lg:py-36   px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl pb-4">About The HandLes And So More</h2>
          <p className="py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, praesentium?</p>
        </div>
        <div className="flex justify-end py-24 md:py-24 lg:py-24   px-4 sm:px-6 lg:px-8  md:w-2/5  lg:w-2/5">
          <img className="h-48 opacity-25" src="https://media.megalamps.ru/uploads_images/products/NVD_9147.jpg" alt="img" />
        </div>
      </div>
    </section>
  </div>
}