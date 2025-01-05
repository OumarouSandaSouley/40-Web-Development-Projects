import React from 'react'
import { FloatingDock } from '../components/ui/FloatingDock';

const ThankYou = () => {
  return (
    <section className="w-full h-full bg-white px-4 py-8 md:border-r-4 border-gray-800 flex items-center justify-center flex-col">
      <div className="flex flex-col">
        <h1 className="sm:text-7xl text-4xl text-secondary font-bold text-center leading-normal text-mono mb-2">
          Thank You !!!
        </h1>
        <p className="text-xl leading-normal font-light">
          Now what next ? Contact me in order to collaborate !
        </p>
        <div className="flex justify-center w-full py-3">
          <p className="text-xl py-3 px-3 my-4 text-center bg-transparent w-fit rounded-md  text-secondary">
            Contact Me
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <FloatingDock />
      </div>
    </section>
  );
}

export default ThankYou