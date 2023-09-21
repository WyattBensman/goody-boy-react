import { FoodMenu } from "../components/menus/FoodMenu";
import { NavBar } from "../components/menus/NavBar";
import { Footer } from "../components/Footer";

export function Food() {
  return (
    <>
      <NavBar />
      <FoodMenu />
      <Footer />
    </>
  );
}
