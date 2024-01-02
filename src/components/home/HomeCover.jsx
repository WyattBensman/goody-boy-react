export function HomeCover() {
  return (
    <section className="flex flex-wrap w-full mt-28 md:mt-32">
      <div className="w-full lg:w-1/2 px-4 flex justify-center items-center">
        <img
          src="/images/branding/goody-boy-logo.png"
          className="lg:w-3/4 md:w-1/2 sm:w-3/5 w-3/4 mt-5 mb-5 sm:mb-5 lg:mb-32"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2 px-4 flex flex-col justify-start lg:justify-center items-center">
        <img
          src="/images/text/header-text.png"
          className="lg:w-11/12 md:w-5/8 sm:w-2/3"
          alt=""
        />
        <a
          className="px-5 py-2 mt-5 mb-8 bg-[#ED2122] border border-4 border-[#ED2122] duration-200 hover:border-4 hover:border-[#F3EC18] text-white font-medium"
          href="https://www.ubereats.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/text/order-delivery.png" className="w-48" alt="" />
        </a>
      </div>
    </section>
  );
}
