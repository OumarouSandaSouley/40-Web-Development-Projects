import image from '../assets/image.png'
import claudel from '../assets/images/claudel.png'

const Hero = () => {
  return (
    <>
    <section className="w-full bg-transparent z-20 relative">
      <h1 className="text-7xl max-md:text-5xl font-bold leading-none mb-4 text-center">
        APPRENEZ À VENDRE, <br /> LAISSEZ LE JAMBO !{" "}
      </h1>
    </section>
    <div className="flex items-end justify-end w-full min-h-full absolute left-0 max-sm:-right-10 top-0 pt-16 z-10">
        <img src={claudel} className='max-w-[600px] scale-75 self-end' alt="" />
    </div>
    </>
  );
};

export default Hero;
