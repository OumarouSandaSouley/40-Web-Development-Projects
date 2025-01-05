import { Award } from "lucide-react";
import claudel1 from "../assets/images/claudel2.jpg";

import { services } from "../constants";

const MyServices = () => {
  return (
    <section className="pt-72 pb-4 max-sm:pb-2 max-sm:py-32">
      <div className="w-full py-8 flex flex-col items-start gap-16 sm:flex-row max-sm:items-center">
        <div className="flex items-center">
          <img src={claudel1} className="max-w-72" alt="" />
        </div>
        <div className="flex items-start flex-col">
          <h3 className="text-2xl font-bold max-sm:text-center">
            Tous les jours, sur mes plateformes en ligne, je communique sur mes
            produits et services :
          </h3>
          <ul className="flex flex-col mt-4">
            {services.map((service, index) => {
              return (
                <li className="flex items-center gap-2" key={index}>
                  <Award color="#726004" strokeWidth={2} className="size-4" />
                  <h4 className="text-lg  text-dark">{service} </h4>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
