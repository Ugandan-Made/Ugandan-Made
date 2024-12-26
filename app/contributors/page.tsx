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
        Meet the talented developers, designers, and innovators shaping the
        future of open-source technology in Uganda. Join them and be part of
        this growing community!
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {contributors.map((contributor: any) => (
          <ContributorCard key={contributor.id} contributor={contributor} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700 mb-4">
          Want to see your name here? Contribute to Ugandan-Made and help shape
          the future of open-source technology in Uganda!
        </p>
        <a
          href="/contribute"
          className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition duration-300"
        >
          Contribute Now
        </a>
      </div>
    </div>
  );
}
