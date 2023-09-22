import React from "react";

export function FoodMenu() {
  return (
    <>
      {/* Title */}
      <div className="flex items-center justify-center mt-40 mb-6">
        <img src="./images/text/menu-food-bold.png" className="h-10" alt="" />
      </div>

      <section className="mb-16 flex justify-center">
        <div className="w-11/12 md:w-1/2 border border-gray-800 text-center">
          {/* Shareables */}
          <div className="m-8">
            <h3 className="text-3xl font-medium">Shareables</h3>
            {/* Item 1 */}
            <p className="mt-1 text-lg">Jumbo Popcorn Chicken</p>
            <p className="text-md font-light">
              <i>Panko Breaded, Honey Mustard</i>
            </p>
            {/* Item 1 */}
            <p className="mt-4 text-lg">Waffle Fry Nachos</p>
            <p className="text-md font-light">
              <i>
                House Made Cheese Sauce, House Pickled Jalapeños, Tomato,
                Southwest Sour Cream, Scallions
              </i>
            </p>
            {/* Item 1 */}
            <p className="mt-4 text-lg">Grilled Cheese Bites and Soup</p>
            <p className="text-md font-light">
              <i>
                Mozzarella, Fontina, Provolone, Feta, Tomato, Basil, Sourdough
                cut for Sharing, Tomato Basil
              </i>
            </p>
            {/* Item 1 */}
            <p className="mt-4 text-lg">Rueben Rolls</p>
            <p className="text-md font-light">
              <i>
                House-Cooked Corned Beef, Sauerkraut, Swiss, Russian Dressing
              </i>
            </p>
            {/* Item 1 */}
            <p className="mt-4 text-lg">Wings</p>
            <p className="text-md font-light">
              <i>
                1 Pound of Wings Tossed in Buffalo, BBQ, or House-Made Dry Rub,
                Bleu Cheese Dressing, Celery, and Carrots
              </i>
            </p>
            {/* Item 1 */}
            <p className="mt-4 text-lg">Chicken Tenders</p>
            <p className="text-md font-light">
              <i>
                Crispy and tender chicken tenders, perfectly seasoned and fried
                to golden perfection. Served with a side of our signature
                Russian dressing for an extra burst of flavor.
              </i>
            </p>
          </div>

          {/* Sandwiches */}
          <div className="m-8">
            <h3 className="text-3xl font-medium">Sandwiches</h3>
            {/* Item 1 */}
            <p className="mt-1 text-lg">Goody Boy Burger</p>
            <p className="text-md font-light">
              <i>
                Double Patty, American Cheese, House Made Aioli, House Made BBQ,
                Toasted Brioche Bun
              </i>
            </p>
            {/* Item 1 */}
            <p className="mt-4 text-lg">Cheeseburger</p>
            <p className="text-md font-light">
              <i>
                Lettuce, Tomato, Onion, Pickle, American Cheese, Toasted Brioche
                Bun
              </i>
            </p>
            {/* Item 1 */}
            <p className="mt-4 text-lg">The Goody Club</p>
            <p className="text-md font-light">
              <i>
                Turkey, Bacon, Cheddar Cheese, Mayo, Lettuce, Tomato, Onion,
                Toasted Sourdough
              </i>
            </p>
            {/* Item 1 */}
            <p className="mt-4 text-lg">Gourmet Cheese Melt</p>
            <p className="text-md font-light">
              <i>
                Mozzarella, Fontina, Provolone, Feta, Tomato, Basil, Toasted
                Sourdough
              </i>
            </p>
            {/* Item 1 */}
            <p className="mt-4 text-lg">Pesto Grilled Chicken Delight</p>
            <p className="text-md font-light">
              <i>
                Feta Cheese, Pesto Aioli, Roasted Red Peppers, Avocado, Mixed
                Greens, Toasted Ciabatta Roll
              </i>
            </p>
            {/* Item 1 */}
            <p className="mt-4 text-lg">Roasted Veggie Portobello</p>
            <p className="text-md font-light">
              <i>
                Hummus, Mixed Greens, Tomato, Red Onion, Cucumber, Roasted Red
                Peppers, Toasted Wheat Roll
              </i>
            </p>
            {/* Item 1 */}
            <p className="mt-4 text-lg">Classic Bologna Stack</p>
            <p className="text-md font-light">
              <i>
                Caramelized Onions, American Cheese, Lettuce, Tomato, Mayo,
                Toasted Sourdough
              </i>
            </p>
          </div>

          {/* Pizzas */}
          <div className="m-8">
            <h3 className="text-3xl font-medium">Pizzas</h3>
            {/* Item 1 */}
            <p className="mt-4 text-lg">Meat Lovers</p>
            <p className="text-md font-light">
              <i>
                Hand Stretched Dough, San Marzano Tomato Sauce,
                Mozzarella-Provolone Mix, Pepperoni, Bacon, Ground Beef, Red
                Onion{" "}
              </i>
            </p>
            {/* Item 1 */}
            <p className="mt-4 text-lg">Buffalo Chicken</p>
            <p className="text-md font-light">
              <i>
                Hand Stretched Dough, House-Made Ranch, Mozzarella-Provolone
                Mix, Grilled Chicken, Red Onion, Celery, Buffalo Drizzle
              </i>
            </p>
            {/* Item 1 */}
            <p className="mt-4 text-lg">El Niño</p>
            <p className="text-md font-light">
              <i>
                Hand Stretched Dough, San Marzano Tomato Sauce, Cheddar-Jack
                Cheese, Chicken, House Pickled Tomatoes and Jalapeños, Southwest
                Sour Cream Drizzle, Cilantro
              </i>
            </p>
            {/* Item 1 */}
            <p className="mt-4 text-lg">White Pizza</p>
            <p className="text-md font-light">
              <i>
                Hand Stretched Dough, Garlic Butter, Mozzarella-Provolone Mix,
                Mushrooms, Caramelized Onions, Crispy Garlic, Scallions
              </i>
            </p>
            {/* Item 1 */}
            <p className="mt-4 text-lg">BBQ Chicken</p>
            <p className="text-md font-light">
              <i>
                Hand Stretched Dough, House Made BBQ Sauce, Mozzarella-Provolone
                Mix, Cheddar Jack Cheese, Red Onions, Scallions
              </i>
            </p>
          </div>

          {/* Side Dishes */}
          <div className="m-8">
            <h3 className="text-3xl font-medium">Side Dishes</h3>
            <p className="mt-1 text-lg">Shoestring French Fries</p>
            <p className="mt-1 text-lg">Waffle Fries</p>
            <p className="mt-1 text-lg">Mashed Potatoes</p>
            <p className="mt-1 text-lg">Side Salad</p>
          </div>
        </div>
      </section>
    </>
  );
}
