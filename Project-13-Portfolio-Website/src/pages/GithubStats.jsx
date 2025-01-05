import React from "react";
import GitHubStats from "../components/GithubStats";

const GithubStatsSection = () => {
  return (
    <section className="w-full h-full bg-white px-4 py-3">
      <h3 className="text-3xl font-bold text-center mb-6">GitHub Stats</h3>
      <GitHubStats />
    </section>
  );
};

export default GithubStatsSection;
