import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Chuck Stephens
                <br className="hidden lg:inline-block" />I am product focused.
              </h1>
              <p className="mb-8 leading-relaxed">
              Full stack web developer with marketing and entrepreneurial experience with a Bachelor’s in Advertising from the University of Texas and Certificate in Full Stack Web Development from the University of Texas.  

15+ years working with Wordpress, 2+ years working with JavaScript, React, Node, Express, MongoDB, GraphQL and MySQL. Currently working freelance on multiple projects including a MERN stack administrative application and a machine learning application using React. 

Successfully increased sales of multiple businesses through web design, digital marketing, SEO and budget and inventory tracking.
              </p>

            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-fit: scale-down object-center rounded"
                alt="hero"
                src="./profile2.jpg"
              />
            </div>
          </div>
        </section>
      );
}