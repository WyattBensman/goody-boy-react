export function DrinksMenu() {
  return (
    <>
      {/* Title */}
      <div className="flex items-center justify-center mt-40 mb-6">
        <img src="./images/text/DRINKS.png" className="h-10" alt="" />
      </div>

      <section className="mb-16 flex flex-col items-center justify-center">
        <div className="w-11/12 lg:w-1/2 p-4 text-center border-l border-r border-t border-gray-800 bg-yellow-300">
          <img
            src="./images/text/HAPPY-HOUR-EVERYDAY.png"
            className="h-5 mx-auto my-4 "
            alt=""
          ></img>
          <img
            src="./images/text/HALF-OFF.png"
            className="h-6 mx-auto my-4 "
            alt=""
          ></img>
          {/* <h1 className="text-2xl pb-4 font-semibold">HAPPY HOUR EVERYDAY</h1> */}
          <div className="flex justify-center space-x-12 font-medium">
            <div>
              <p>MONDAY - FRIDAY</p>
              <p>3PM-6PM</p>
            </div>
            <div>
              <p>SATURDAY - SUNDAY</p>
              <p>11PM-2PM</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-11/12 lg:w-1/2 border border-gray-800 text-center">
          {/* Cocktails Container */}
          <div className="lg:w-1/2 w-full bg-[#ED2122] bg-opacity-95 h-fit text-white">
            <img
              src="./images/text/COCKTAILS.png"
              className="h-6 mx-auto mt-8 mb-4 "
              alt=""
            ></img>
            {/* <h1 className="text-2xl pt-8 pb-4 font-semibold">COCKTAILS $10</h1> */}
            {/* Drink 1 */}
            <p className="text-lg">Goody Boy Mule</p>
            <p className="text-sm font-light">
              <i>(Add Freshblueberries $1)</i>
            </p>
            <p className="text-sm font-light mx-10">
              <i>Belvedere Vodka, Ginger Beer, Fresh Lime Juice</i>
            </p>
            {/* Drink 2 */}
            <p className="text-lg mt-2">Blueberry Mint Lemonade</p>
            <p className="text-sm font-light mx-10">
              <i>
                Blueberry Smirnoff Vodka, Fresh Muddled Blueberries and Mint,
                Fresh Sequeezed Lemon Juice and Topped with House Lemonade
              </i>
            </p>
            {/* Drink 3 */}
            <p className="text-lg mt-2">Gin & Juice</p>
            <p className="text-sm font-light mx-10">
              <i>
                Tanqueray 10, Fresh Squeezed Grapefruit Juice, Elderflower
                Syrup, Steigl Grapefruit Radler
              </i>
            </p>
            {/* Drink 4 */}
            <p className="text-lg mt-2">Cucumber Spritzer</p>
            <p className="text-sm font-light mx-10">
              <i>Tito's, Muddled Cucumber, Fresh Mint, Lemon</i>
            </p>
            {/* Drink 5 */}
            <p className="text-lg mt-2">The Goody Cosmopolitan</p>
            <p className="text-sm font-light mx-10">
              <i>Vohio Vodka, Noble Cut Orangecello, Cranberry</i>
            </p>
            {/* Drink 6 */}
            <p className="text-lg mt-2">No Diving!</p>
            <p className="text-sm font-light mx-10">
              <i>Captain White Rum, Malibu, Blue Curacao, Tropical Red Bull</i>
            </p>
            {/* Drink 7 */}
            <p className="text-lg mt-2">Peach Daly</p>
            <p className="text-sm font-light mx-10">
              <i>Crown Peach, Lemonade, Iced Tea</i>
            </p>
            {/* Drink 8 */}
            <p className="text-lg mt-2">Water Boi</p>
            <p className="text-sm font-light mx-10">
              <i>
                El Jimador, Watermelon Schnapps, Lime Juice, Sour Mix, Sprite
              </i>
            </p>
            {/* Drink 8 */}
            <p className="text-lg mt-2">Strawberry Smash</p>
            <p className="text-sm font-light mx-10">
              <i>Jack Daniel's, Lemon Juice, Strawberries, Sprite</i>
            </p>
            {/* Drink 9 */}
            <p className="text-lg mt-2">Lemon Drop Shot $7</p>
            <p className="text-sm font-light mx-10">
              <i>
                Noble Cut Liimoncello, Triple Sec, Sour Mix, Lemonade, and Fresh
                Lemon Wedge
              </i>
            </p>
            {/* Drink 10 */}
            <p className="text-lg mt-2">Mexican Candy Shot $7</p>
            <p className="text-sm font-light mx-10 pb-8">
              <i>
                Ghost Tequila, Watermelon Schnapps, Sour Mix, Sprite, with a
                Tajin Rim
              </i>
            </p>
            <div className="bg-white text-black text-left px-8">
              <h1 className="text-2xl pt-8 text-center font-semibold">
                BOTTLES
              </h1>
              <p className="pt-2 pb-4 text-sm text-center">
                <i>(Also available in draft)</i>
              </p>
              <h2 className="italic pl-4 text-lg font-medium text-left border-t-2 border-b-2">
                $5.50
              </h2>
              {/* Bottles 1 */}
              <div className="flex justify-between items-center">
                <p className="text-lg">Bud Light</p>
                <p className="text-sm">
                  <i>4.2%</i>
                </p>
              </div>
              <p className="text-sm font-light">
                <i>Light, Refreshing American Lager</i>
              </p>
              {/* Bottles 2 */}
              <div className="flex justify-between items-center mt-1">
                <p className="text-lg">Budweiser</p>
                <p className="text-sm">
                  <i>5.0%</i>
                </p>
              </div>
              <p className="text-sm font-light">
                <i>Crisp, Refreshing American Lager</i>
              </p>
              {/* Bottles 3 */}
              <div className="flex justify-between items-center mt-1">
                <p className="text-lg">Miller Lite</p>
                <p className="text-sm">
                  <i>4.2%</i>
                </p>
              </div>
              <p className="text-sm font-light">
                <i>Light, Refreshing American Lager</i>
              </p>
              {/* Bottles 4 */}
              <div className="flex justify-between items-center mt-1">
                <p className="text-lg">Coors Light</p>
                <p className="text-sm">
                  <i>4.2%</i>
                </p>
              </div>
              <p className="text-sm font-light">
                <i>Light, Refreshing American Lager</i>
              </p>
              {/* Bottles 5 */}
              <div className="flex justify-between items-center mt-1">
                <p className="text-lg">Coors Banquet</p>
                <p className="text-sm">
                  <i>5.0%</i>
                </p>
              </div>
              <p className="text-sm font-light">
                <i>Be a Part of the Golden Standard</i>
              </p>
            </div>
          </div>
          {/* Draft Beer Container */}
          <div className="lg:w-1/2 w-full text-left px-8">
            <img
              src="./images/text/DRAFT-BEER.png"
              className="h-5 mx-auto mt-8 mb-4 "
              alt=""
            ></img>
            {/* <h1 className="text-2xl pt-8 pb-4 text-center font-semibold">
              DRAFT BEER
            </h1> */}
            <h2 className="italic pl-4 text-lg font-medium text-left border-t-2 border-b-2">
              $5
            </h2>
            {/* Drink 1 */}
            <div className="flex justify-between items-center">
              <p className="text-lg">Goody Boy IPA</p>
              <p className="text-sm">
                <i>6.1%</i>
              </p>
            </div>
            <p className="text-sm font-light">
              <i>North High - Columbus, OH</i>
            </p>
            <p className="text-sm font-light">
              <i>Light & Fruity with a Wheat Finish</i>
            </p>
            {/* Drink 2 */}
            <p className="text-lg">Truth IPA</p>
            <p className="text-sm font-light">
              <i>Rhinegeist - Cincinnati, OH</i>
            </p>
            <p className="text-sm font-light">
              <i>Our Truth is Found in the Brilliance of Hops</i>
            </p>
            {/* $6 */}
            <h2 className="italic pl-4 text-lg font-medium text-left border-t-2 border-b-2 mt-4">
              $6
            </h2>
            {/* Drink 1 */}
            <div className="flex justify-between items-center">
              <p className="text-lg">Cheetah Lager</p>
              <p className="text-sm">
                <i>4.8%</i>
              </p>
            </div>
            <p className="text-sm font-light">
              <i>Rhinegeist - Cincinnati, OH</i>
            </p>
            <p className="text-sm font-light">
              <i>A tinge of Malt & Citrus, this Brew is Crazily Crushable</i>
            </p>
            {/* Drink 2 */}
            <div className="flex justify-between items-center mt-1">
              <p className="text-lg">Hazy Jane IPA</p>
              <p className="text-sm">
                <i>7.2%</i>
              </p>
            </div>
            <p className="text-sm font-light">
              <i>Brewdog - Columbus, OH</i>
            </p>
            <p className="text-sm font-light">
              <i>Hoppiness Brewed with Pineapple & Mango</i>
            </p>
            {/* Drink 3 */}
            <div className="flex justify-between items-center mt-1">
              <p className="text-lg">Sunshine Daydream Session IPA</p>
              <p className="text-sm">
                <i>4.9%</i>
              </p>
            </div>
            <p className="text-sm font-light">
              <i>Fathead - Cleveland, OH</i>
            </p>
            <p className="text-sm font-light">
              <i>
                Big Hoppy Flavor with Little Bitterness Fades Quickly into a
                Clean Finish
              </i>
            </p>
            {/* Drink 4 */}
            <div className="flex justify-between items-center mt-1">
              <p className="text-lg">Banana Bread Ale</p>
              <p className="text-sm">
                <i>5.2%</i>
              </p>
            </div>
            <p className="text-sm font-light">
              <i>Wells - England, UK</i>
            </p>
            <p className="text-sm font-light">
              <i>Just Think Banana Bread :)</i>
            </p>
            {/* Drink 5 */}
            <div className="flex justify-between items-center mt-1">
              <p className="text-lg">Pseudo Sue Pale Ale</p>
              <p className="text-sm">
                <i>5.8%</i>
              </p>
            </div>
            <p className="text-sm font-light">
              <i>Toppling Goliath - Decorah, IA</i>
            </p>
            <p className="text-sm font-light">
              <i>
                Flagship Citra-Hopped Pale Ale That is Medium in Body with a
                Mild Bitterness in the Finish
              </i>
            </p>
            {/* Cans Container */}
            <img
              src="./images/text/CANS.png"
              className="h-5 mx-auto mt-8 lg:mt-10 mb-4 "
              alt=""
            ></img>
            {/* <h1 className="text-2xl pt-8 pb-4 text-center font-semibold">
              CANS
            </h1> */}
            <h2 className="italic pl-4 text-lg font-medium text-left border-t-2 border-b-2">
              $5
            </h2>
            {/* Drink 1 */}
            <div className="flex justify-between items-center">
              <p className="text-lg">Whiteclaw Hard Seltezer</p>
              <p className="text-sm">
                <i>5.0%</i>
              </p>
            </div>
            <p className="text-sm font-light">
              <i>Chicago, IL</i>
            </p>
            <p className="text-sm font-light">
              <i>Rotating Flavors</i>
            </p>
            {/* Drink 2 */}
            <div className="flex justify-between items-center mt-1">
              <p className="text-lg">Truly Hard Seltzer</p>
              <p className="text-sm">
                <i>5.8%</i>
              </p>
            </div>
            <p className="text-sm font-light">
              <i>Boston, MA</i>
            </p>
            <p className="text-sm font-light">
              <i>Flavors: Strawberry Lemonade</i>
            </p>
            {/* Drink 3 */}
            <div className="flex justify-between items-center mt-1">
              <p className="text-lg">Mamitas Tequila Soda</p>
              <p className="text-sm">
                <i>5.0%</i>
              </p>
            </div>
            <p className="text-sm font-light">
              <i>Chicago, IL</i>
            </p>
            <p className="text-sm font-light">
              <i>Flavors: Pineapple, Paloma</i>
            </p>
            {/* Drink 4 */}
            <div className="flex justify-between items-center mt-1">
              <p className="text-lg">High Noon Hard Seltzer</p>
              <p className="text-sm">
                <i>4.5%</i>
              </p>
            </div>
            <p className="text-sm font-light">
              <i>Modesto, CA</i>
            </p>
            <p className="text-sm font-light">
              <i>Rotating Flavors</i>
            </p>
            {/* Drink 5 */}
            <div className="flex justify-between items-center mt-1">
              <p className="text-lg">Happy Dad Hard Seltzer</p>
              <p className="text-sm">
                <i>5.0%</i>
              </p>
            </div>
            <p className="text-sm font-light">
              <i>Orange County, CA</i>
            </p>
            <p className="text-sm font-light">
              <i>Low Carbs, Calories & Sugar, Packed with Electrolytes</i>
            </p>
            {/* Drink 5 */}
            <div className="flex justify-between items-center mt-1">
              <p className="text-lg">Happy Dad Hard Seltzer</p>
              <p className="text-sm">
                <i>5.0%</i>
              </p>
            </div>
            <p className="text-sm font-light">
              <i>Orange County, CA</i>
            </p>
            <p className="text-sm font-light">
              <i>Low Carbs, Calories & Sugar, Packed with Electrolytes</i>
            </p>
            {/* Drink 6 */}
            <div className="flex justify-between items-center mt-1">
              <p className="text-lg">Fresca Tequila Paloma</p>
              <p className="text-sm">
                <i>5.0%</i>
              </p>
            </div>
            <p className="text-sm font-light pb-8">
              <i>Authentic Tequila Blanco & the Citrus Taste of Fresca</i>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
