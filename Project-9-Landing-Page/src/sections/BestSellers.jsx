import claudel1 from "../assets/images/claudel5.jpg";

const BestSellers = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center max-w-[800px] mx-auto mb-3">
        Tous les meilleurs vendeurs de mes entreprises sont valorisés au MAXIMUM
      </h2>
      <div className="w-full grid sm:grid-cols-12 gap-16 py-8">
        <div className="flex items-center sm:col-span-4">
          <img src={claudel1} className="max-w-450" alt="" />
        </div>
        <div className="flex items-start flex-col sm:col-span-8">
          <ul className="">
            <li className="text-xl ">✔ Commissions importantes</li>
            <li className="text-xl ">✔ Primes importantes</li>
            <li className="text-xl ">✔ Prix chaque mois</li>
            <li className="text-xl ">✔ Voyage</li>
            <li className="text-xl ">✔ Nuit dans des Hôtels 5 étoiles</li>
            <li className="text-xl ">✔ Formation GRATUITE </li>
            <li className="text-xl ">✔ Voitures neuves</li>
            <li className="text-xl ">- Etc…</li>
          </ul>
          <p className="text-xl leading-normal my-2 text-justify">
            Je ne lésine sur AUCUN MOYEN pour valoriser tous ceux qui vendent,
            car mon objectif, est de pousser ces derniers à ne pas avoir honte
            de la vente, comme la plupart des autres personnes.
          </p>
          <p className="text-xl leading-normal my-2 text-justify">
            À travers mes actions, je leur montre que vendre permet de gagner de
            l’argent, beaucoup d’argent ! Je leur apprends à parler de chiffres
            sans avoir honte et chaque mois, j’affiche dans les locaux de
            l’entreprise, le classement des meilleurs vendeurs, avec les
            chiffres ! Chacun doit se sentir MAL lorsqu’il ne vend pas
            suffisamment, ou lorsque son chiffre d'affaires est faible.
          </p>
          <p className="text-xl leading-normal my-2 text-justify">
            Mais, cette procédure n’a pas pour objectif de les humilier et ils
            le savent, mais de leur faire comprendre que SEULE LA VENTE pourra
            leur permettre de s’en sortir dans un environnement aussi rude,
            complexe et compétitif. Ainsi, même s’ils ne travaillent plus dans
            une aventure commune à la mienne, ils pourront utiliser ces
            compétences dans leurs propres projets, facilement trouver un emploi
            ou développer leur carrière.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
