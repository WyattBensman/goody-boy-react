import HomeNav from "./HomeNav";
import { HomeCover } from "./HomeCover";

export function HomeHeader() {
  return (
    <header className="bg-blue-300 h-screen flex md:justify-center">
      <HomeNav />
      <HomeCover />
    </header>
  );
}
