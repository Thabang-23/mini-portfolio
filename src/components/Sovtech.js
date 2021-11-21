
import React from "react";

export default function Sovtech() {
    return (
        <section id="sovtech">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="laptopArt"
                src="./laptop2.png"
              />
          </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-8 px-24 flex flex-col md:items-end md:text-left mb-8 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Why I want to be a Dev at SovTech
              </h1>
              <p className="mb-8 leading-relaxed">
                SovTech is a world class company and there's an opportunity for
                career growth.
                Working for SovTech will give me the chance to learn from the
                best in the whole industry and receive the proper guidance I
                need. I will get the opportunity to create apps for large 
                corporations that real people and businesses will use, that
                is more fulfilling.
              </p>
              <div className="flex justify-center">
                
              </div>
            </div>
            
          </div>
        </section>
      );
}