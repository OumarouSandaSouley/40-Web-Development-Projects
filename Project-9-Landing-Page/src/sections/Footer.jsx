import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-dark mt-4 px-4 text-gray-100">
      <p className="text-xl leading-normal">
        Cette landing Page a été concue dans le cadre du challenge 40 Projets de
        Developpement web. Elle présente la Claudel Noubissie Business Group du
        Dr. Claudel Noubissie en se basant sur l'un de ses posts Facebook. Ceci
        a été fait dans un but purement éducatif donc à but non lucratif.
      </p>
      <h5 className="text-xl text-center font-bold font-kameron my-3">
        Quelques liens utiles.
      </h5>
      <div className="mt-6 mb-2 w-full flex items-center gap-4 flex-wrap max-w-[900px] mx-auto">
        <div className="flex items-center">
          <a
            href="https://facebook.com/aajt.aajt.562"
            className="border-primary bg-transparent hover:text-primary  !border-none text-gray-400 underline font-extrabold font-kameron"
          >
            Profile Facebook de l'auteur &rarr;
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/OumarouSandaSouley"
            className="border-primary bg-transparent hover:text-primary  !border-none text-gray-400 underline font-extrabold font-kameron"
          >
            Profile GitHub de l'auteur &rarr;
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="https://facebook.com/drclaudelnoubissie"
            className="border-primary bg-transparent hover:text-primary  !border-none text-gray-400 underline font-extrabold font-kameron"
          >
            Profile Facebook du Dr. Claudel Noubissie &rarr;
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
