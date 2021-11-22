import React from "react";
import { BriefcaseIcon, DocumentTextIcon } from "@heroicons/react/solid";

export default function Resume() {
    return (
        <section id="resume">
          <div className="container px-5 py-10 mx-auto text-center">
            <BriefcaseIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
              Resume
            </h1>
                  <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                    <p className="leading-relaxed mb-6">
                        You can find a copy of my resume here:
                    </p>
                    <div className="inline-flex items-center">
                    <DocumentTextIcon className="w-10 inline-block mb-4" />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-white">
                        <a href="https://drive.google.com/open?id=10I1auVGFLiIiLNe4rDECmS062aly3GHZ&authuser=chuckstephens2076%40gmail.com&usp=drive_fs">Chuck Stephens Resume</a>
                        </span>
                      </span>
                    </div>
                  
                
            </div>
          
            </div>
        </section>
      );
}