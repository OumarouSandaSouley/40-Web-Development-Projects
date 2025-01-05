import React from "react";

const GitHubStats = () => {
  return (
    <div className="flex flex-col items-center space-y-4 mt-4">
      <div className="w-full grid sm:grid-cols-12 items-center gap-2">
        <div className="sm:col-span-8">
          <img
            src="https://github-readme-stats.vercel.app/api?username=OumarouSandaSouley&hide_border=false&include_all_commits=true&count_private=true"
            alt="GitHub Stats"
            className="w-full"
          />
        </div>
      </div>
      <img
        src="https://github-readme-streak-stats.herokuapp.com/?user=OumarouSandaSouley&hide_border=false"
        alt="GitHub Streak Stats"
        className="w-full"
      />
      <div className="">
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=OumarouSandaSouley&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
          className="w-full"
          alt="Top Languages"
        />
      </div>
    </div>
  );
};

export default GitHubStats;
