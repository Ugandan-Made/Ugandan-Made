/* eslint-disable @next/next/no-html-link-for-pages */
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 sm:p-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-yellow-400">
            Ugandan-Made
          </h3>
          <p className="text-sm sm:text-base">
            Showcasing the best tech innovations from Uganda to the world.
          </p>
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-semibold mb-4 text-yellow-400">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <a
                href="/"
                className="hover:text-yellow-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="hover:text-yellow-400 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contributors"
                className="hover:text-yellow-400 transition duration-300"
              >
                Contributors
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-yellow-400 transition duration-300"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-semibold mb-4 text-yellow-400">
            Connect
          </h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <a
                href="https://github.com/madeinuganda"
                className="hover:text-yellow-400 transition duration-300"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/madeinugandadev"
                className="hover:text-yellow-400 transition duration-300"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="mailto:info@madeinuganda.dev"
                className="hover:text-yellow-400 transition duration-300"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-sm sm:text-base">
        <p>&copy; 2024 Ugandan-Made. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
