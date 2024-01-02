import { useState, useMemo } from "react";
import {
  checkName,
  checkEmail,
  checkPhone,
  checkDescription,
} from "./validators";

export function InquiryForm() {
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);

  const nameErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkName(name) : [];
  }, [isAfterFirstSubmit, name]);

  const emailErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkEmail(email) : [];
  }, [isAfterFirstSubmit, email]);

  const phoneErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkPhone(phone) : [];
  }, [isAfterFirstSubmit, phone]);

  const descriptionErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkDescription(description) : [];
  }, [isAfterFirstSubmit, description]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);

    const nameResults = checkName(name);
    const emailResults = checkEmail(email);
    const phoneResults = checkPhone(phone);
    const descriptionResults = checkDescription(description);

    if (
      nameResults.length === 0 &&
      emailResults.length === 0 &&
      phoneResults.length === 0 &&
      descriptionResults.length === 0
    ) {
      return setSubmitted(true);
    }
  }

  return (
    <section className="flex flex-col justify-center items-center my-20 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      {submitted === true ? (
        <h1 className="text-2xl text-center border border-blue-300 p-6 rounded">
          Inquiry recieved! We'll be in contact soon.
        </h1>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-wrap md:w-1/2 ">
          <h1 className="text-2xl text-left w-full mb-4">Inquiry Form</h1>
          <div className="w-2/3 pr-4">
            <label className="block mb-1 md:mb-0 pr-4" htmlFor="name">
              Full Name:
            </label>
            <input
              className="bg-gray-200 w-252 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            {nameErrors.length > 0 && (
              <div className="text-xs text-red-500 italic">
                {nameErrors.join(", ")}
              </div>
            )}
          </div>
          <div className="w-1/3">
            <label htmlFor="eventType">Event Type:</label>
            <select
              className="bg-gray-200 w-252 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="eventType"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            >
              <option value="">Select an event type</option>
              <option value="Birthday Party">Birthday Party</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Anniversary Celebration">
                Anniversary Celebration
              </option>
              <option value="Bachelor/Bachelorette Party">
                Bachelor/Bachelorette Party
              </option>
              <option value="Live Music Night">Live Music Night</option>
            </select>
          </div>
          <div className="w-1/2 pr-4 mt-2">
            <label className="block mb-1 md:mb-0 pr-4" htmlFor="name">
              Email:
            </label>
            <input
              className="bg-gray-200 w-252 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="name"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {emailErrors.length > 0 && (
              <div className="text-xs text-red-500 italic">
                {emailErrors.join(", ")}
              </div>
            )}
          </div>
          <div className="w-1/2 mt-2">
            <label className="block mb-1 md:mb-0 pr-4" htmlFor="name">
              Phone Number:
            </label>
            <input
              className="bg-gray-200 w-252 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="name"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
            {phoneErrors.length > 0 && (
              <div className="text-xs text-red-500 italic">
                {phoneErrors.join(", ")}
              </div>
            )}
          </div>
          <div className="w-full mt-2">
            <label htmlFor="name">Description:</label>
            <textarea
              className="col-3 bg-gray-200 w-252 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
              id="description"
              type="text"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            {descriptionErrors.length > 0 && (
              <div className="text-xs text-red-500 italic">
                {descriptionErrors.join(", ")}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="px-4 py-2 mt-2 bg-blue-500 hover:bg-blue-300 duration-200 rounded text-white font-medium"
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
}
