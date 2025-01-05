import React from "react";

const Story = () => {
  return (
    <section className="w-full">
      <p className="text-center text-lg font-semibold">
        Je n’ai pas honte de vendre mes produits et services.
      </p>
      <h2 className="text-3xl text-center font-bold">
        👷🏽 Je suis un <span className="text-primary">VENDEUR</span> et fière de
        l’être.
      </h2>
      <div className="max-w-[800px] mx-auto flex flex-col items-center  my-4">
        <p className="text-xl leading-normal text-justify">
          &emsp; Au quotidien, j’accompagne des jeunes à vendre des produits et
          services, tout en étant fier leur métier. J’assume, mon principal
          métier est: VENDEUR.
        </p>
        <p className="text-xl leading-normal self-start">
          {" "}
          &emsp; Les gens me qualifient de :
        </p>
        <ul className="my-1 list self-start">
          <li>
            <p className="text-xl font-semibold">Vendeur de livres; </p>
          </li>
          <li>
            <p className="text-xl font-semibold">Vendeur d’habits ; </p>
          </li>
          <li>
            <p className="text-xl font-semibold">Vendeur de formations ; </p>
          </li>
          <li>
            <p className="text-xl font-semibold">Vendeur de rêves ; </p>
          </li>
          <li>
            <p className="text-xl font-semibold">Vendeur d’illusions… </p>
          </li>
        </ul>
        <p className="text-xl leading-normal text-justify">
          En réalité, chaque fois qu’une personne me traite de vendeur de …, en
          pensant qu’il m’intrigue ou qu’il m'injurie, je jubile de joie. Parce
          que, même en me transmettant sa haine, cette personne reconnaît tout
          de même en moi, des compétences de vendeurs, et j’en suis ivre de
          joie, jusqu’à l’euphorie.
        </p>
      </div>
    </section>
  );
};

export default Story;
