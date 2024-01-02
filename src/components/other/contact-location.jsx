export function ContactLocationPage() {
  return (
    <>
      <section className="mt-28 md:mt-44 w-full md:w-7/8 flex flex-wrap text-center justify-center md:text-left md:justify-center md:space-x-20">
        <iframe
          className="md:flex md:w-[600px] md:h-[400px] w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.018653683063!2d-83.00744738859451!3d39.9856884713934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388f456d967169%3A0x72a9cf07fd6fbb73!2sGoody%20Boy%20Burger%20Club!5e0!3m2!1sen!2sus!4v1695596525673!5m2!1sen!2sus"
          loading="lazy"
        ></iframe>
        <div className="mt-8 md:mt-0">
          {/* Address */}
          <h3 className="text-2xl">1144 North High Street</h3>
          <h3 className="text-xl font-light">Columbus, Ohio 43201</h3>
          {/* Phone Number */}
          <h2 className="text-xl font-light my-4">813-993-3926</h2>
          {/* Hours of Operatio */}
          <h2 className="text-2xl mt-8">Hours</h2>
          <h3 className="text-xl font-light">Monday - Wednesday</h3>
          <h3 className="text-xl font-light mb-4">CLOSED</h3>
          <h3 className="text-xl font-light">Thursday - Friday</h3>
          <h3 className="text-xl font-light mb-4">4:00 PM - 2:00 AM</h3>
          <h3 className="text-xl font-light">Saturday - Sunday</h3>
          <h3 className="text-xl font-light">1:00 PM - 2:00 AM</h3>
        </div>
      </section>
    </>
  );
}
