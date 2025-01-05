import { useState } from "react";
import { CardDemo } from "../components/ui/Card";
import Modal from "../components/ui/Modal";

const MySkills = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <section className="w-full h-full bg-white px-4 py-8 md:border-l-2">
      <h2 className="text-3xl font-bold text-center mb-2">My Skills</h2>
      <h3 className="text-xl font-bold text-center text-secondary mt-2">
        Technical Skills
      </h3>
      <div className="flex items-center justify-center mb-4">
        <CardDemo />
      </div>
      <h3 className="text-xl font-bold text-center text-secondary">
        Professional Skills
      </h3>
      <Modal open={open} />
      <div className="w-full flex items-center justify-center my-4">
        <button
          className="text-white px-4 bg-secondary py-3 text-xl rounded-md hover:opacity-90 cursor-pointer"
          onClick={() => handleOpen()}
        >
          See Professional Skills
        </button>
      </div>
    </section>
  );
};

export default MySkills;
