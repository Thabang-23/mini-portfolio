import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Thabang.
                <br className="hidden lg:inline-block" />
                Thank you for visiting my page. About me:
              </h1>
              <p className="mb-8 leading-relaxed">
                I have a bachelor's degree in Information Technology and 
                Fundamental Computer Science. I graduated in July 2021. My
                studies were completed in the National Research Lobachevsky
                State University of Nizhny Novgorod, Russia.
                
              </p>
              
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="my photo"
                src="./photo.jpg"
              />
            </div>
            
          </div>
        </section>
      );
}