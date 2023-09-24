import { Footer } from "../Footer";
import { NavBar } from "../menus/NavBar";

export function ContactLocationPage() {
  return (
    <>
      <NavBar />
      <section className="mt-40 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
        <div className="flex justify-center">
          <div className="w-1/2">
            <h1 className="text-2xl">Reservation Inquiry</h1>
          </div>
          <div className="w-1/2">
            <h1>Hey</h1>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-2xl">Reservation Inquiry</h1>
      </section>
      <Footer />
    </>
  );
}
