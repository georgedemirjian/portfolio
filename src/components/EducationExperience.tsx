import React from 'react'
import { motion } from "framer-motion"

export const EducationExperience = () => {
  return (
    <motion.section id="education"
      //className="min-h-screen py-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="min-h-screen flex justify-center px-6 py-12 bg-base-200"
    >
      <div className="max-w-3xl w-full">

        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-10 text-center">
          Education & Experience
        </h2>

        {/* Education Block */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">
            University of California, Irvine
          </h3>
          <p className="text-sm text-white">
            B.S. Computer Science | Minor in Management
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Sep 2022 – Dec 2025
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Relevant Coursework: Data Management, Information Retrieval, Operating Systems, 
            Mobile App Development, Embedded Software, Introduction to AI, Cryptography, IoT Software & Systems</li>
            <li>GPA: 3.558</li>
          </ul>
        </div>


        {/* Experience Block */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">
            Undergraduate Learning Assistant
          </h3>
          <p className="text-sm text-white">
            UCI Donald Bren School of Information and Computer Sciences
          </p>
          <p className="text-sm text-gray-500 mb-4">
            March 2025 – June 2025
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Provided guidance to 150+ students in ICS31: Introduction to Programming with Python.</li>
            <li>Supported the introduction of fundamental concepts and techniques for writing software in a high level programming language.</li>
            <li>Promoted active learning and peer collaboration through guided activities and code reviews.</li>
          </ul>

        </div>


        <div>
            <h3 className="text-2xl font-semibold">
            Assistant Manager
          </h3>
          <p className="text-sm text-white">
            Villa George Enterprises LLC
          </p>
          <p className="text-sm text-gray-500 mb-4">
            June 2025 – Sep 2025
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Provided guidance to 150+ students in ICS31: Introduction to Programming with Python.</li>
            <li>Supported the introduction of fundamental concepts and techniques for writing software in a high level programming language.</li>
            <li>Promoted active learning and peer collaboration through guided activities and code reviews.</li>
          </ul>
        </div>

      </div>
    </motion.section>
  )
}
