import logo from "../assets/logo.jpg";
import Button from "../components/Button";

const Banner = () => {
  return (
    <section className="w-full py-12 shadow-sm shadow-primary px-3 rounded-md sm:w-2/3 sm:mx-auto my-8 ">
      <h4 className="text-lg uppercase font-bold text-center mb-4">
        Rejoindre la Claudel Noubissie Business Group
      </h4>
      <div className="grid sm:grid-cols-12 items-start gap-4 w-full">
        <div className="sm:col-span-4">
          <img src={logo} className="w-full" alt="" />
        </div>
        <div className="sm:col-span-8">
          <p className="text-xl text-justify leading-normal">
            &emsp;À l’intérieur, au-delà du réseautage, des opportunités et des
            affaires que nous faisons ensemble, je partage chaque matin, une
            chronique vidéo pour vous permettre d’apprendre à vendre et
            développer des stratégies pour mieux développer vos activités. En
            plus, qu’importe votre métier, vous pouvez vendre en plus de votre
            activité principale, surtout à l'aide du numérique.
          </p>
          <div className="mx-auto w-full flex items-center justify-center mt-4">
            <a
              href="https://forms.gle/xEpMonJyTEw4Dpqe6"
              className="text-center"
              target="_blank"
            >
              <Button
                title="Nous rejoindre maintenant &rarr;"
                className="bg-primary hover:opacity-90 text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
