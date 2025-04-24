import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Layout from '../components/Layout'
import missionImg from '../public/mission.jpg'
import visionImg from '../public/vision.jpg'
import valuesImg from '../public/values.jpg'
import focusImg from '../public/focus.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
}


const focusAreas = [
  {
    title: 'Litigation & Dispute Resolution',
    description:
      'We handle complex litigation with a sharp focus on strategy, advocacy, and results. Our team represents clients across a wide range of civil, commercial, and constitutional matters.',
  },
  {
    title: 'Corporate & Commercial Law',
    description:
      'Our firm guides businesses through regulatory compliance, M&A transactions, governance, and commercial contracts, ensuring sustainable growth and legal assurance.',
  },
  {
    title: 'Intellectual Property & Technology',
    description:
      'We help startups and tech giants protect innovations, navigate digital regulations, and leverage intellectual property as strategic business assets.',
  },
  {
    title: 'Family Law & Social Justice',
    description:
      'With empathy and discretion, we advocate for families navigating sensitive legal issues such as divorce, custody, domestic violence, and inheritance.',
  },
]

const About = () => {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-garamond">About Us</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              At Lexora Legal, we are more than a law firm — we are a team of passionate advocates driven by excellence and justice.
            </p>
          </motion.div>

          {/* Mission - Vision - Values */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Our Mission',
                text: 'To provide strategic, client-centered legal solutions rooted in integrity, innovation, and professionalism.',
                image: missionImg,
              },
              {
                title: 'Our Vision',
                text: 'To be a transformative force in the legal industry by delivering legal services that empower individuals, businesses, and communities.',
                image: visionImg,
              },
              {
                title: 'Our Values',
                text: 'Integrity, Diligence, Excellence, Empathy, and Innovation form the pillars of everything we do.',
                image: valuesImg,
              },
            ].map((section, i) => (
              <motion.div
                key={section.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-52 relative">
                  <Image src={section.image} alt={section.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
                  <p className="mt-3 text-sm text-gray-600">{section.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Focus Areas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold text-gray-900 font-garamond mb-6">Our Focus Areas</h2>
            <div className="h-64 w-full relative rounded-2xl overflow-hidden shadow-md mb-10">
              <Image src={focusImg} alt="Our Practice" fill className="object-cover" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <h4 className="text-xl font-bold text-primary-300">{area.title}</h4>
                <p className="mt-2 text-sm text-gray-700">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
