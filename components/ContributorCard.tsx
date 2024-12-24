import Image from "next/image";
import { Github } from "lucide-react";

interface ContributorCardProps {
  contributor: {
    id: string;
    login: string;
    avatar_url: string;
    contributions: number;
    html_url: string;
  };
}

export default function ContributorCard({ contributor }: ContributorCardProps) {
  return (
    <div className="border border-yellow-400 rounded-lg p-3 shadow-md bg-white text-center">
      <div className="mb-2 relative h-16 w-16 mx-auto">
        <Image
          src={contributor.avatar_url}
          alt={contributor.login}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h3 className="text-sm font-semibold mb-1 text-gray-800">
        {contributor.login}
      </h3>
      <p className="text-xs text-gray-600 mb-2">
        {contributor.contributions} contributions
      </p>
      <a
        href={contributor.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full bg-yellow-400 text-gray-900 px-2 py-1 rounded text-xs hover:bg-yellow-500 transition duration-300"
      >
        <Github size={12} className="mr-1" />
        GitHub
      </a>
    </div>
  );
}
