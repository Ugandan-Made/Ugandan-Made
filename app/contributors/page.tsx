/* eslint-disable @typescript-eslint/no-explicit-any */
// import { sampleContributors } from "../data/sampleContributors";
import ContributorCard from "../../components/ContributorCard";
import getGithubContributors from "../utils/getGithubContributors";

export default async function Contributors() {
  // Fetch contributors from remote github
  const contributors = await getGithubContributors();

  // console.log("Contributors:", contributors);

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Our Contributors
      </h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-700">
        Meet the talented individuals who have contributed to Ugandan-Made.
        These developers, designers, and innovators are shaping the future of
        technology in Uganda and beyond.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {contributors.map((contributor: any) => (
          <ContributorCard key={contributor.id} contributor={contributor} />
        ))}
      </div>
    </div>
  );
}
