import Image from 'next/image'

interface ContributorCardProps {
  contributor: {
    id: string
    name: string
    role: string
    image: string
    github: string
  }
}

export default function ContributorCard({ contributor }: ContributorCardProps) {
  return (
    <div className="border border-yellow-400 rounded-lg p-4 shadow-md bg-white">
      <div className="mb-4 relative h-40 w-40 mx-auto">
        <Image
          src={contributor.image}
          alt={contributor.name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">{contributor.name}</h3>
      <p className="text-gray-600 mb-4 text-center">{contributor.role}</p>
      <div className="text-center">
        <a
          href={contributor.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-500 transition duration-300"
        >
          GitHub Profile
        </a>
      </div>
    </div>
  )
}

