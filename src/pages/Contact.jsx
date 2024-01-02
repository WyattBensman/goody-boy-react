import { NavBar } from "../components/menus/NavBar";
import { InquiryForm } from "../components/other/InquiryForm";
import { ContactLocationPage } from "../components/other/contact-location";

export function Contact() {
  return (
    <>
      <NavBar />
      <ContactLocationPage />
      <InquiryForm />
    </>
  );
}
