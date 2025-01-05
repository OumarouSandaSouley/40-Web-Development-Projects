import React from 'react'
import Button from '../components/Button';

const FinalGo = () => {
  return (
    <section className="w-full">
      <p className="text-xl leading-normal text-justify max-w-[900px] mx-auto py-8">
        👥 Tu souhaites rejoindre mon groupe pour apprendre à vendre et saisir
        les opportunités ?<br />
        <br /> 👷🏽‍♂ Si oui, je te présente le Claudel NOUBISSIE BUSINESS GROUP
        (CNBG) devenu <span className="text-primary font-bold">UNIBRAIN</span> :
        un groupe dans lequel nous parlons opportunités, affaires,
        investissement et vente. <br />
        <br />
        💰L’accès coûte{" "}
        <span className="text-primary font-bold">
          10.000 FCFA (25€) par mois,
        </span>{" "}
        et vous devez payer au minimum 03 mois pour intégrer le groupe, qui
        comporte déjà près de 700 personnes ! <br />
        <br />
        💶 Lorsque vous payez directement 12 mois, vous avez l’opportunité de
        participer à l’investissement dans des projets communs. <br />
        <br />
        👥 C’est ENSEMBLE que nous pourrions bâtir une Afrique forte, en
        construisant des réseaux PUISSANTS... <br />
        <br />
        🖱 Si tu souhaites nous rejoindre, il te suffit de CLIQUER ICI 👉🏼{" "}
        <a
          href="https://forms.gle/xEpMonJyTEw4Dpqe6"
          className="border-primary bg-transparent hover:text-primary  !border-none text-dark underline font-extrabold font-kameron"
        >
          Rejoindre la CNBG &rarr;
        </a>
      </p>
      <h5 className="text-center text-4xl font-bold font-kameron">
        Dr Claudel NOUBISSIE
      </h5>

    </section>
  );
}

export default FinalGo