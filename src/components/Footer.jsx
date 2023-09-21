export function Footer() {
  return (
    /* Contact & Hours of Operations */
    <section className="bg-blue-300 pt-14 md:pt-20 pb-6 sm:pb-0 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 flex flex-wrap justify-center">
      {/* Left Column */}
      <div className="md:w-1/3 w-full flex flex-col items-center ">
        <img
          src="./images/text/hours-of-operation.png"
          className="h-8 mb-4"
          alt=""
        />
        <h3 className="text-xl">Monday - Wednesday</h3>
        <h3 className="text-xl font-light mb-4">CLOSED</h3>
        <h3 className="text-xl">Thursday - Friday</h3>
        <h3 className="text-xl font-light mb-4">4:00 PM - 2:00 AM</h3>
        <h3 className="text-xl">Saturday - Sunday</h3>
        <h3 className="text-xl font-light">1:00 PM - 2:00 AM</h3>
      </div>

      {/* Image */}
      <div className="hidden md:inline-block md:w-1/3 lg:w-1/5 w-full flex flex-col items-center">
        <img src="./images/branding/goody-boy-colored.png" alt="" />
      </div>

      {/* Right Column */}
      <div className="md:w-1/3 w-full flex flex-col items-center mt-12 mb-2 md:my-0">
        <img
          src="./images/text/location-contact.png"
          className="h-6 mb-6"
          alt=""
        />
        <h3 className="text-xl mb-10">813-993-3926</h3>
        <h3 className="text-xl font-light">1144 North High Street</h3>
        <h3 className="text-xl font-light">Columbus, Ohio 43201</h3>
        <button className="px-5 py-3 mt-5 mb-8 bg-[#ED2122] border border-4 border-[#ED2122] duration-200 hover:border-4 hover:border-[#F3EC18] text-white font-medium">
          <img src="./images/text/get-directions.png" className="w-36" alt="" />
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-white mt-4 md:w-3/4 xl:w-1/2 flex justify-center items-center flex-wrap hidden sm:flex">
        <img
          src="./images/establishments/forno.png"
          className="h-20 mt-4 md:mt-0 mx-4 hover:opacity-75 duration-200 hover:cursor-pointer"
          alt=""
        />
        <img
          src="./images/establishments/pint-house.png"
          className="h-20 mt-4 md:mt-0 mx-4 hover:opacity-75 duration-200 hover:cursor-pointer"
          alt=""
        />
        <img
          src="./images/establishments/standard-annex.png"
          className="h-20 mt-4 md:mt-0 mx-4 hover:opacity-75 duration-200 hover:cursor-pointer"
          alt=""
        />
        <img
          src="./images/establishments/standard-hall.png"
          className="h-20 mb-4 md:mb-0 mx-4 hover:opacity-75 duration-200 hover:cursor-pointer"
          alt=""
        />
        <img
          src="./images/establishments/standard-live.png"
          className="h-20 mb-4 md:mb-0 mx-4 hover:opacity-75 duration-200 hover:cursor-pointer"
          alt=""
        />
        <img
          src="./images/establishments/urban-meyer-pint-house.png"
          className="h-20 mb-4 md:mb-0 mx-4 hover:opacity-75 duration-200 hover:cursor-pointer"
          alt=""
        />
      </div>
    </section>
  );
}
