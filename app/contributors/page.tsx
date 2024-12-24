import { sampleContributors } from '../data/sampleContributors'
import ContributorCard from '../../components/ContributorCard'

export default function Contributors() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Contributors</h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-700">
        Meet the talented individuals behind Made in Uganda. These developers, designers, and innovators are shaping the future of technology in Uganda and beyond.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sampleContributors.map((contributor) => (
          <ContributorCard key={contributor.id} contributor={contributor} />
        ))}
      </div>
    </div>
  )
}

