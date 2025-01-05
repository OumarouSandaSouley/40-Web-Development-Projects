import { Facebook, Twitter } from "lucide-react";
import home from "../assets/home.png";
import me from '../assets/me.png'
import myself from '../assets/myself.jpg'
import { socialMedias } from "../constant";

const Home = () => {
  return (
    <section className="w-full h-full bg-white px-4 py-6">
      <div className="flex justify-center mb-4">
        <img src={myself} alt="Home" className="w-[200px] h-[200px] rounded-full resize" />
      </div>
      <h2 className="text-3xl font-bold text-center">
        Salut !!! c'est <br />
        <span className="text-primary">Oumarou Sanda Souley</span>
      </h2>
      <p className="text-sm font-mono my-4 text-center">
        Self-Taught Web and Mobile Developer from Cameroon.
      </p>
      <div className="mt-6 grid grid-cols-5 max-w-xs sm:max-w-sm md:max-w-md gap-4 mx-auto ">
        {socialMedias.map((social, index) => (
          <div
            key={index}
            className="flex justify-center items-center shadow-md p-2 rounded-md border-2 border-white hover:border-primary hover:shadow-primary transition duration-200 ease-in-out"
          >
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              <img src={social.icon} alt={social.name} className="w-10 h-10" />
            </a>
          </div>
        ))}
      </div>
      <p className="text-md mt-6 text-center leading-relaxed font-light px-4">
        I discovered my passion for programming in 2015 and have since dedicated
        myself to learning and growing as a developer. Now I'm a skilled web and
        mobile developer with a strong focus on JavaScript.
      </p>
    </section>
  );
};

export default Home;
