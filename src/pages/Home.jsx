import { GoodyTime } from "../components/home/GoodyTime";
import { HomeHeader } from "../components/home/HomeHeader";
import { OurMenus } from "../components/home/OurMenus";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <OurMenus />
      <GoodyTime />
      <Footer />
    </>
  );
}
