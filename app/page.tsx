import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { getGithubProjectsFromLocalReadme } from "./utils/github";

export default async function Home() {
  const projects = await getGithubProjectsFromLocalReadme();
  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="text-center py-12 sm:py-20 bg-yellow-400 rounded-lg text-gray-900">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Ugandan-Made</h1>
        <p className="text-xl sm:text-2xl mb-6 sm:mb-8">
          Showcasing Uganda&apos;s Tech Innovations to the World
        </p>
        <Link
          href="/projects"
          className="bg-gray-900 text-yellow-400 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition duration-300 text-base sm:text-lg font-semibold"
        >
          Explore Projects
        </Link>
      </section>

      <section className="bg-gray-100 p-6 sm:p-8 rounded-lg text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Call for Contributions
        </h2>
        <p className="text-lg mb-6">
          Are you or do you know of a developer creating innovative solutions in
          Uganda? Share your project and let&apos;s showcase Ugandan tech talent
          to the world!
        </p>
        <Link
          href="/contribute"
          className="bg-gray-900 text-yellow-400 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition duration-300 text-base sm:text-lg font-semibold"
        >
          Contribute Now
        </Link>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <Link
            href="/projects"
            className="text-yellow-600 hover:underline text-base sm:text-lg font-semibold"
          >
            View All Projects
          </Link>
        </div>
      </section>

      <section className="bg-gray-100 p-6 sm:p-12 rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
          Innovating for Uganda
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-gray-700">
              From the bustling streets of Kampala to the serene shores of Lake
              Victoria, Ugandan developers are crafting digital solutions that
              address local challenges and inspire global innovation.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              Ugandan-Made showcases the vibrant tech ecosystem emerging from
              the Pearl of Africa, connecting talented developers with
              opportunities to shine on the world stage.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
              Join the Movement
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Showcase your projects</li>
              <li>Collaborate with fellow innovators</li>
              <li>Access resources and mentorship</li>
              <li>Connect with potential users and investors</li>
            </ul>
            <Link
              href="/contributors"
              className="mt-6 inline-block bg-yellow-400 text-gray-900 px-4 sm:px-6 py-2 rounded hover:bg-yellow-500 transition duration-300"
            >
              Become a Contributor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
