import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import amara from '../public/amara.jpeg'
import sophia from '../public/sophia.jpeg'
import james from '../public/james.jpeg'
import david from '../public/david.jpeg'

const attorneys = [
  {
    name: 'Sophia Dada',
    title: 'Senior Partner',
    bio: 'Sophia has over 20 years of experience in corporate law, specializing in mergers and acquisitions.',
    image: sophia,
  },
  {
    name: 'James Olukayode',
    title: 'Litigation Expert',
    bio: 'James represents clients in complex civil litigation and arbitration across multiple jurisdictions.',
    image: james,
  },
  {
    name: 'Amara Yusuf',
    title: 'Family Law Specialist',
    bio: 'Amara is a compassionate advocate for clients in family law matters, including custody and divorce.',
    image: amara,
  },
  {
    name: 'David Chinonso',
    title: 'IP & Tech Law',
    bio: 'David helps innovators protect their IP and navigate the complex world of tech regulation.',
    image: david,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const Attorneys = () => {
  return (
    <Layout >
      <div className="bg-gray-100 min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-garamond text-gray-900 mb-4">
              Meet Our Attorneys
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A team of passionate legal professionals committed to excellence and justice.
            </p>
          </div>

          {/* Attorney Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {attorneys.map((attorney, i) => (
              <motion.div
                key={attorney.name}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="h-72 relative">
                  <Image
                    src={attorney.image}
                    alt={attorney.name}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{attorney.name}</h3>
                  <p className="text-sm text-primary-200 mt-1 italic">{attorney.title}</p>
                  <p className="text-gray-600 mt-4 text-sm">{attorney.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Attorneys
