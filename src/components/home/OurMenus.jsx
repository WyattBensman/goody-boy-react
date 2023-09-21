export function OurMenus() {
  return (
    /* Menu Section */
    <section className="my-20 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 flex flex-col justify-center items-center">
      <img
        src="./images/text/menus-header.png"
        className="h-8 md:h-10 mb-10"
        alt=""
      />
      <div className="flex flex-wrap justify-center">
        {/* FOOD */}
        <div className="md:w-1/4 w-3/4 mx-5 mt-10 md:mt-0">
          <a
            href="##"
            className="flex flex-col items-center hover:opacity-80 transition-opacity duration-200 ease-in-out"
          >
            <img
              src="./images/random/food-image.jpeg"
              className="rounded border border-4 border-blue-300"
              alt=""
            />
            <img src="./images/text/menu-food.png" class="h-6 mt-3" alt="" />
          </a>
        </div>
        {/* DRINKS */}
        <div className="md:w-1/4 w-3/4 mx-5 mt-10 md:mt-0">
          <a
            href="##"
            className="flex flex-col items-center hover:opacity-80 transition-opacity duration-200 ease-in-out"
          >
            <img
              src="./images/random/drinks-image.png"
              className="rounded border border-4 border-blue-300"
              alt=""
            />
            <img
              src="./images/text/menu-drinks.png"
              className="h-6 mt-3"
              alt=""
            />
          </a>
        </div>
        {/* HAPPY HOUR */}
        <div className="md:w-1/4 w-3/4 mx-5 mt-10 md:mt-0">
          <a
            href="##"
            className="flex flex-col items-center hover:opacity-80 transition-opacity duration-200 ease-in-out"
          >
            <img
              src="./images/random/happy-hour-image.png"
              className="rounded border border-4 border-blue-300"
              alt=""
            />
            <img
              src="./images/text/menu-happy-hour.png"
              className="h-6 mt-3"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
}
