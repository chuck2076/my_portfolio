import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";

export default function Resume() {
    return (
        <section id="resume">
          <div className="container px-5 py-10 mx-auto text-center">
            <BriefcaseIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
              Resume
            </h1>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-4 sm:mb-2 -mx-2">
                <div className="p-4 md:w-1/2 w-full">
                  <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                    <p className="leading-relaxed mb-6">
                        You can find a copy of my resume here:
                    </p>
                    <div className="inline-flex items-center">

                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-white">
                        <a href="https://docs.google.com/document/d/1mCXgqQdmYU8_8ZoPV9ybpq_qxc6RKvma_MbI-eBpBso/edit?usp=sharing">Chuck Stephens Resume</a>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
            </div>
          
            </div>
        </section>
      );
}