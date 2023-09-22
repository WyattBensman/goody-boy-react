import { NavBar } from "../components/menus/NavBar";
import { Footer } from "../components/Footer";
import { DrinksMenu } from "../components/menus/DrinksMenu";

export function Drinks() {
  return (
    <>
      <NavBar />
      <DrinksMenu />
      <Footer />
    </>
  );
}
