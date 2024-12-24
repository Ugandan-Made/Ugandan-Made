import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="text-center py-12 sm:py-20 bg-yellow-400 rounded-lg text-gray-900">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          About Made in Uganda
        </h1>
        <p className="text-xl sm:text-2xl mb-6">
          Showcasing Uganda&apos;s Tech Innovation to the World
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Made in Uganda is dedicated to showcasing the incredible tech talent
            and innovation emerging from Uganda. We aim to connect Ugandan
            developers with global opportunities and inspire the next generation
            of tech entrepreneurs in East Africa.
          </p>
        </div>
        <div className="relative h-64 sm:h-80">
          <Image
            src="https://media.istockphoto.com/id/1181808806/photo/uganda-flag-depth-of-field.jpg?s=612x612&w=0&k=20&c=rqoDoldfaJgEzkqM1ca0vc1H81v1dHTccFCtQ9dASoM="
            alt="Ugandan tech scene"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="bg-gray-100 p-6 sm:p-12 rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Uganda to the World
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Innovative Solutions
            </h3>
            <p className="text-gray-700">
              Ugandan developers are creating cutting-edge solutions to local
              and global challenges.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Growing Ecosystem
            </h3>
            <p className="text-gray-700">
              Uganda&apos;s tech ecosystem is rapidly expanding, with new
              startups and innovations emerging regularly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Global Impact
            </h3>
            <p className="text-gray-700">
              Ugandan-made technologies are making waves on the international
              stage, showcasing our talent to the world.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
          Join the Movement
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          Whether you&apos;re a developer, designer, or tech enthusiast,
          there&apos;s a place for you in the Made in Uganda community.
        </p>
        <Link
          href="/contributors"
          className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300 text-lg font-semibold"
        >
          Get Involved
        </Link>
      </section>
    </div>
  );
}
