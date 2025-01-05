import claudel1 from "../assets/images/claudel4.jpg";

const Selling = () => {
  return (
    <section className="w-full py-8">
      <div className="grid gap-16 py-8 sm:grid-cols-12 items-start">
        <div className="sm:col-span-8">
          <h2 className="text-4xl font-bold">
            Est-ce que la vente est facile ?
          </h2>
          <p className="text-2xl font-bold text-primary uppercase mb-2">
            Pas du tout !{" "}
          </p>
          <p className="text-xl leading-normal mb-4 text-justify">
            Les autres vont vous humilier, ils vont vous traiter, comme ils me
            traitent de :{" "}
            <span className="text-gray-600">
              Vendeurs de rêves , Vendeurs d’illusions , Vendeurs de livres ,
              Vendeurs d’habits , Un médecin qui passe son temps à vendre,
              quelle médiocrité ! Etc.
            </span>
          </p>
          <h4 className="text-2xl font-bold text-primary">
            Mais, vous devez en être FIERS !
          </h4>
          <p className="text-xl leading-normal text-justify">
            Vous devez être fiers de travailler chaque jour, pour gagner
            DIGNEMENT votre vie, car beaucoup de personnes ne peuvent pas s’en
            vanter. N’ayez AUCUNE condescendance vis-à-vis des autres, soyez
            humbles et laissez-les vous insulter, vous êtes sur le bon chemin.
          </p>
          <p className="text-xl leading-normal text-justify">
            N’ayez AUCUNE condescendance vis-à-vis des autres, soyez humbles et
            laissez-les vous insulter, vous êtes sur le bon chemin. Ceux qui ne
            savent pas vendre, ou qui trouvent que la vente est une activité
            humiliante, finiront par devenir des :{" "}
            <span className="text-gray-800">
              Escroc , Corrupteurs , Voleurs , Chercheur de liberté financière,
            </span>{" "}
            en investissant dans des projets, qui vont les rendre riches... Et
            nous savons tous comment cela finira. Ils ne savent pas vendre, donc
            OBLIGÉS de voler au quotidien pour s'en sortir. Ils ont honte de se
            présenter comme des vendeurs, donc OBLIGÉS d'arnaquer pour se
            maintenir.
          </p>
        </div>
        <div className="flex items-center sm:col-span-4">
          <img src={claudel1} className="max-w-450" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Selling;
