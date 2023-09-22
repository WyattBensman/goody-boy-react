export function DrinksMenu() {
  return (
    <>
      {/* Title */}
      <div className="flex items-center justify-center mt-40 mb-6">
        <img src="./images/text/menu-food-bold.png" className="h-10" alt="" />
      </div>

      <section className="mb-16 flex justify-center">
        <div className="flex flex-col md:flex-row w-11/12 lg:w-1/2 border border-gray-800 text-center">
          {/* Cocktails Container */}
          <div className="lg:w-1/2 w-full bg-red-400">
            <h1 className="text-2xl pt-8 pb-4 font-semibold">COCKTAILS $10</h1>
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
          </div>
          {/* Draft Beer Container */}
          <div className="lg:w-1/2 w-full text-left px-8">
            <h1 className="text-2xl pt-8 pb-4 text-center font-semibold">
              DRAFT BEER
            </h1>
            <h2 className="text-lg text-left">$5</h2>
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
            {/* Drink 1 */}
            <p className="text-lg">Goody BOY IPA</p>
            <p className="text-sm font-light">
              <i>North High - Columbus, OH</i>
            </p>
            <p className="text-sm font-light">
              <i>Light & Fruity with a Wheat Finish</i>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
