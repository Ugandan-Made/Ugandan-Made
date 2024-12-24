import Link from "next/link";

export default function Contribute() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Contribute to Made in Uganda</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-3">How to Contribute</h2>
        <p className="mb-4">
          We welcome contributions from all Ugandan developers! Here&apos;s how
          you can get involved:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Fork the Made in Uganda repository on GitHub.</li>
          <li>Clone your forked repository to your local machine.</li>
          <li>Create a new branch for your contribution.</li>
          <li>Make your changes, following our contribution guidelines.</li>
          <li>Commit your changes and push to your fork.</li>
          <li>Open a pull request to the main Made in Uganda repository.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Project Requirements</h2>
        <p className="mb-4">
          To be featured on Made in Uganda, your project should meet the
          following criteria:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>The project must be created by a Ugandan developer or team.</li>
          <li>The project should have at least 15 stars on GitHub.</li>
          <li>The project should be open-source with a clear license.</li>
          <li>
            The project should be actively maintained (last update within the
            past 6 months).
          </li>
          <li>
            The project should have clear documentation and a README file.
          </li>
          <li>
            The project should solve a real problem or provide value to users.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Contribution Guidelines</h2>
        <p className="mb-4">
          Please review our detailed contribution guidelines before submitting
          your project or making changes:
        </p>
        <Link
          href="https://github.com/madeinuganda/madeinuganda.dev/blob/main/CONTRIBUTE.md"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-500 transition duration-300 inline-block"
        >
          View Contribution Guidelines
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Need Help?</h2>
        <p>
          If you have any questions or need assistance, please don&apos;t
          hesitate to reach out to our community on GitHub or via email at
          contribute@madeinuganda.dev.
        </p>
      </section>
    </div>
  );
}
