import google from '../assets/images/google.png'

const GoogleSheet = () => {
  return (
    <section className="py-4 w-full relative">
      <div className="absolute top-10 left-10 max-sm:left-0 py-8 max-sm:z-5 z-10 ">
        <img src={google} className="w-16" alt="" />
      </div>
      <div className="z-4 relative">
        <h2 className="text-3xl font-bold text-center max-w-[600px] mx-auto mb-3 z-40 relative">
          L’application que je consulte le plus sur mon téléphone, c'est{" "}
          <span className="text-primary underline">Google Sheets.</span>
        </h2>
        <p className="text-xl leading-normal max-w-[800px] mx-auto text-justify">
          &emsp;Elle vient bien avant Facebook, WhatsApp, et toutes les autres.
          Car, chaque jour, je l’utilise des centaines de fois pour noter :{" "}
          <span className="text-gray-600">
            {" "}
            Mes nouvelles ventes, Consulter les ventes de mes équipes, Apprécier
            les performances commerciales de mes entreprises.
          </span>{" "}
          En attendant{" "}
          <a href="https://ww.facebook.com/100044170909313/posts/1142181013930918/?mibextid=rS40aB7S9Ucbxw6v" target='_blank' className="text-primary underline">
            ma propre application, en cours de développement.
          </a>
          <br />
          &emsp;Toutes ces informations fondamentales constituent pour moi, un
          puissant outil d’aide à la décision. Dans toutes mes entreprises, je
          valorise ceux qui savent vendre, et j’apprends à ceux qui ne savent
          pas le faire, comment procéder. Car, pour moi, apprendre à un Homme
          comment vendre, c’est l’aider, pour qu’il n’ait plus besoin de l’aide.
          Un Homme qui sait vendre pourra utiliser cette compétence dans tous
          les autres domaines de sa vie pour s’en sortir, sans plus avoir besoin
          de m’appeler ou faire référence à moi, même s’il ne souhaite plus que
          nous cheminions ensemble. La vente est un métier noble, respectable,
          rentable, à la limite jouissif.
        </p>
      </div>
    </section>
  );
}

export default GoogleSheet