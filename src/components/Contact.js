import React from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
  
    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  
    function handleSubmit(e) {
      e.preventDefault();
   //   fetch("/", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //   body: encode({ "form-name": "contact", name, email, message }),
      // })
      //   .then(() => alert("Message sent!"))
      //   .catch((error) => alert(error));
      if (name === "") {
        console.log("name error ran")
        setName("Name is Required")
      }
      if (validateEmail(email) === false) {
        console.log("email error ran")
        setEmail("Email not valid")
      }
      if (message === ""){
        console.log("message error ran")
        setMessage("Not a valid message")
      }
      if (errorMessage) {
        console.log("error checker ran")
        console.log(errorMessage);
        return;
      }
      
        setName('');
        setEmail('');
        setMessage('');
    }
    
  return (
    <section id="contact" className="relative">
      <div className="container px-4 py-4 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-blue-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="bg-indigo-400 relative flex flex-wrap py-4 px-4 rounded shadow-md">
            <div className="lg:w-1/2 px-4">
              <h2 className="title-font font-semibold text-blue-900 tracking-widest ">
                GitHub:
              </h2>
              <p className="mt-1 text-white">
            <a href= "https://github.com/chuck2076">https://github.com/chuck2076</a>
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-blue-900 tracking-widest">
                Email:
              </h2>
              <a className="text-white leading-relaxed">
             <a href="mailto:chuckstephens2076@gmail.com">chuckstephens2076@gmail.com</a>
              </a>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-blue-900 tracking-widest">
              LinkedIn:
              </h2>
              <a className="text-white leading-relaxed">
             <a href="www.linkedin.com/in/chuckstephens2076">www.linkedin.com/in/chuckstephens2076</a>
              </a>
            </div>
          </div>
        </div>
        <form
          data-netlify="true"
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Let's Do This!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              require
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}