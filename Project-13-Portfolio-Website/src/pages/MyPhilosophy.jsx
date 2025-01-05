import React from "react";
import { InfiniteMovingCards } from "../components/ui/InfiniteMovingCards";
import { workflow } from "../constant";
import { CheckCircle } from "lucide-react";

const MyPhilosophy = () => {
  return (
    <section className="w-full h-full bg-white px-4 py-6 sm:border-l-2">
      <h1 className="text-3xl font-bold text-center mb-6">My Philosophy</h1>
      <InfiniteMovingCards items={workflow} direction="left" speed="slow" />
      <div className="mt-8 text-center animate-fade-in-up">
        <CheckCircle className="mx-auto text-primary w-12 h-12 mb-4" />
        <p className="text-md leading-relaxed font-light px-4">
          My approach to web development is centered around a clear and
          structured workflow. From the initial requirement analysis to the
          final deployment, each step is carefully planned and executed. This
          ensures that every project not only meets but exceeds client
          expectations. By focusing on continuous improvement and gathering
          feedback, I strive to deliver high-quality, user-friendly
          applications. The process doesn't end at deployment; ongoing
          maintenance and enhancements are key to adapting to the ever-evolving
          digital landscape.
        </p>
      </div>
    </section>
  );
};

export default MyPhilosophy;
