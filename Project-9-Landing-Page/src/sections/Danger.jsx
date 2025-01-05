import React from "react";

const Danger = () => {
  return (
    <section className="w-full pb-4">
      <div className="flex items-center gap-8 shadow-primary shadow-sm px-4 py-3 rounded-md w-full max-w-[800px] mx-auto max-sm:flex-col">
        <div className="flex items-center">
          <p className="text-9xl">⛔</p>
        </div>
        <div className="">
          <p className="text-xl leading-normal text-justify">
            {" "}
            N’investissez JAMAIS une somme d’argent que vous n’êtes pas prêts à
            perdre, car AUCUN projet n’est sûr et surtout, ne jouez pas au JAMBO
            avec votre vie. Lorsque vous apprendrez à vendre, vous saurez
            désormais la différence entre un projet réel et le POKER.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Danger;
