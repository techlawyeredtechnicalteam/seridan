'use client'

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Image from 'next/image'
import hero from '../public/hero.jpeg'
import logo from '../public/logo.png'

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const focusAreas = [
  {
    title: "Corporate Law",
    description: "Comprehensive legal support for businesses, from formation to compliance and governance."
  },
  {
    title: "Real Estate",
    description: "Legal expertise in property transactions, leasing, development, and land disputes."
  },
  {
    title: "Litigation & Dispute Resolution",
    description: "Strategic representation in court and alternative dispute resolution methods."
  },
  {
    title: "Family Law",
    description: "Support for matters including divorce, child custody, and estate planning."
  },
  {
    title: "Intellectual Property",
    description: "Protecting innovations through trademarks, patents, copyrights, and trade secrets."
  },
  {
    title: "Tax & Finance",
    description: "Guidance on complex tax matters and financial structuring for individuals and businesses."
  }
];

// Reusable AnimatedCard component
function AnimatedCard({ title, description, delay }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-primary-200 hover:shadow-lg transition duration-300 ease-in-out"
    >
      <h4 className="text-xl font-garamond font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };


  return (
    <Layout>
      <div className="font-sans text-gray-800">
      {/* <Head>
        <title>Seridan Partners - Trusted Legal Advisors</title>
        <meta name="description" content="Top-tier legal services tailored to your business and personal needs." />
        <link rel="icon" href="../public/logo.png" />
      </Head> */}
        <main className="">
          {/* Hero Section */}
          <section className="relative h-screen w-full">
            <Image
              src={hero}
              alt="Seridan Partners Hero Image"
              fill
              priority
              className="object-cover object-center z-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-4xl font-garamond md:text-5xl font-bold mb-4">Trusted Legal Advisors</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Seridan Partners offers top-tier legal services tailored to your business and personal needs.</p>
              <a href="#contact" className="bg-white text-black border-yellow-500 border font-semibold py-3 px-6 rounded-full hover:bg-yellow-100 transition duration-300">
                Get in Touch
              </a>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 bg-gray-100 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src={logo}
                  alt="Seridan Partners Logo"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-3xl font-garamond font-bold mb-4">About Seridan Partners</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Seridan Partners, we pride ourselves on delivering strategic legal solutions
                with integrity, clarity, and dedication. Our seasoned attorneys work closely with
                clients across a wide range of industries.
              </p>
            </div>
          </section>
          <section className="bg-white flex flex-col lg:flex-row px-4">
            <div className="max-w-4xl bg-yellow-400 mx-auto text-center px-10 py-20">
              <h3 className="text-3xl font-garamond font-bold mb-4">Why Choose Us?</h3>
              {/* <h3 className="text-3xl font-bold mb-4 text-center">Our Mission</h3> */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
                Our mission is to provide exceptional legal services that empower our clients to
                navigate their legal challenges with confidence. We are committed to understanding
                our clients' needs and delivering tailored solutions that drive success.
              </p>
            </div>
            <div className="max-w-4xl mx-auto text-center px-10 py-20">
              <h3 className="text-3xl font-garamond font-bold mb-4">Our Values</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We believe in transparency, accountability, and a client-first approach. Our
                commitment to excellence drives us to achieve the best possible outcomes for our
                clients.
              </p>
            </div>
          </section>

          {/* Practice Areas */}
          <section id='practice-areas' className="bg-gray-900 text-white py-20 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-garamond md:text-5xl font-bold leading-tight">
                  What we <span className="text-primary-200 italic">focus</span> on
                </h2>
                <p className="text-gray-300 mt-4 max-w-xl mx-auto text-base">
                  Explore our core legal practice areas designed to provide expert solutions tailored to your needs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {focusAreas.map((area, idx) => (
                  <AnimatedCard
                    key={idx}
                    title={area.title}
                    description={area.description}
                    delay={idx * 0.2}
                  />
                ))}
              </div>
            </div>
          </section>
          {/* Testimonials */}
          <section className="bg-[#e7e3db] py-20 px-6 md:px-16 text-center">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-garamond md:text-5xl font-serif text-gray-900 mb-4">Testimonials from Clients</h2>
              <p className="text-lg text-gray-700 mb-12">An honest look into how we work</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Bukki Adegoke',
                    quote:
                      "Working with this team was seamless from start to finish. Their dedication and attention to detail made all the difference in our case."
                  },
                  {
                    name: 'Chinedu Silas',
                    quote:
                      "They truly listened to our needs and fought for the best outcome. We couldn’t have asked for a better legal partner."
                  },
                  {
                    name: 'Emmanuel Bukola',
                    quote:
                      "Professional, responsive, and trustworthy. I always felt confident that my case was in the best hands possible."
                  }
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 shadow-md rounded-lg flex flex-col justify-between h-full"
                  >
                    <div className="text-3xl text-gray-700 mb-4">“</div>
                    <p className="text-gray-800 text-sm mb-6 leading-relaxed">{testimonial.quote}</p>
                    <hr className="border-t border-gray-300 my-4" />
                    <p className="italic text-gray-800">- {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section id="contact" className="bg-[#222222] text-white py-24 px-4 text-center">
            <h3 className="text-3xl font-garamond font-bold mb-4">Let’s Discuss Your Case</h3>
            <p className="mb-6 max-w-xl mx-auto text-lg">Reach out to our team and get expert advice on how we can help with your legal challenges.</p>
            <a href="mailto:info@seridanpartners.com" className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300">
              Contact Us
            </a>
          </section>
          
        </main>
      </div>
    </Layout>
  )
}