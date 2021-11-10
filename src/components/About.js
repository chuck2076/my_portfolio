import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Chuck Stephens
                <br className="hidden lg:inline-block" />I love to build practical apps.
              </h1>
              <p className="mb-8 leading-relaxed">
              Full stack web developer with marketing and entrepreneurial experience with a Bachelor’s in Advertising from the University of Texas and Certificate in Full Stack Web Development from the University of Texas.  

Strengths in managing teams, creating budgets, guiding UX/UI and code to meet client expectations, setting goals, and meeting deadlines.

Successfully increased sales of multiple businesses through web design, digital marketing, SEO and budget and inventory tracking. 

Excited to manage impactful web application projects by combining strong marketing and management background with full stack web development skills. Passionate about leveraging the strengths of individuals within web development teams to create meaningful web applications that are on-time, under budget and work seamlessly for the user.

              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./profile.jpg"
              />
            </div>
          </div>
        </section>
      );
}