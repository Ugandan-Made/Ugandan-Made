import Image from "next/image";

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    description: string | null;
    stars: number;
    url: string;
    image: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-yellow-400 rounded-lg p-4 sm:p-6 shadow-md bg-white h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 line-clamp-1">
          {project.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 mr-2">
            <Image
              src={project.image}
              alt={project.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <span className="text-sm text-gray-600">⭐ {project.stars}</span>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base hover:bg-yellow-500 transition duration-300"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
