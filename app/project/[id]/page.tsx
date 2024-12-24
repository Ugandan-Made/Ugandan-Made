// import { getProjectDetails } from '../../utils/github'
// import Link from 'next/link'

// export default async function ProjectPage({ params }: { params: { id: string } }) {
//   const project = await getProjectDetails(params.id)

//   if (!project) {
//     return <div>Project not found</div>
//   }

//   return (
//     <div>
//       <Link href="/" className="text-purple-600 hover:underline mb-4 inline-block">
//         &larr; Back to Projects
//       </Link>
//       <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
//       <p className="text-gray-600 mb-4">{project.description}</p>
//       <div className="mb-4">
//         <span className="font-semibold">Stars:</span> {project.stars}
//       </div>
//       <div className="mb-4">
//         <span className="font-semibold">GitHub URL:</span>{' '}
//         <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
//           {project.url}
//         </a>
//       </div>
//       <div>
//         <h3 className="text-xl font-semibold mb-2">README</h3>
//         <div className="prose" dangerouslySetInnerHTML={{ __html: project.readme }} />
//       </div>
//     </div>
//   )
// }
