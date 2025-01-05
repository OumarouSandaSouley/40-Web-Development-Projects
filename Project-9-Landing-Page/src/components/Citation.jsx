import claudel1 from "../assets/images/claudel1.jpg";

const Citation = () => {
  return (
    <div className="w-full max-w-[600px] shadow-sm shadow-primary px-3 py-4 rounded-md bg-white z-20 relative">
      <div className="grid sm:grid-cols-12 items-start gap-4">
        <div className="flex items-center sm:col-span-4 max-sm:justify-center">
          <img src={claudel1} className="w-32" alt="" />
        </div>
        <div className="flex flex-col sm:col-span-8">
          <p className="text-lg font-bold mb-3 font-kameron">
            Un Homme qui sait vendre pourra utiliser cette compétence dans tous
            les autres domaines de sa vie pour s’en sortir.
          </p>
          <span className="text-md italic text-gray-500">
            Dr. Claudel Noubissie
          </span>
        </div>
      </div>
    </div>
  );
};

export default Citation;
