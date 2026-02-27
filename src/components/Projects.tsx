import React from 'react'
import { motion } from "framer-motion"

export const Projects = () => {
  return (
    
      
    <motion.section id="projects"
      className="min-h-screen flex justify-center px-6 py-12 bg-slate-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-3xl w-full">

        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-8 text-center">
          Projects
        </h2>

        {/* Education Block */}
        <div className="mb-5">
          <h3 className="text-2xl font-semibold">
            IoT Smart Door with Cloud Logging
            <span className="text-lg text-white float-end">
            C++ | ESP32 </span>
          </h3>
          
          <p className="text-sm text-gray-500 mb-1">
            Nov 2025
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Developed a motion activated smart door prototype using ESP32 to control an IR sensor, 
                servo motor, and audiovisual alerts, achieving fully automated entry.
            </li>
            <li>Implemented WiFi connectivity to transmit real time entry logs to AWS, enabling remote 
                monitoring and secure tracking through the cloud infrastructure.
            </li>
            
          </ul>
        </div>


        {/* Experience Block */}
        <div className="mb-5">
          <h3 className="text-2xl font-semibold">
            Embedded Voltmeter System
            <span className="text-lg text-white float-end">
            C | Arduino </span>
          </h3>
          <p className="text-sm text-gray-500 mb-1">
            Jul 2025
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Designed and implemented an embedded voltmeter using an ATmega32 microcontroller with ADC 
                sampling and real time LCD display.</li>
            <li>Integrated keypad controls to toggle sampling, reset statistics, and switch display modes for 
                instantaneous, max, min, and average voltages
            </li>
          </ul>

        </div>


        <div className="mb-5">
            <h3 className="text-2xl font-semibold">
            Search Engine
            <span className="text-lg text-white float-end">
            Python </span>
          </h3>
          <p className="text-sm text-gray-500 mb-1">
            Mar 2025
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Developed a search engine handling around 55,000 web pages with {"<"}300ms response time.</li>
            <li>Built a web scraper using BeautifulSoup, an inverted index database, and implemented 
            TF-IDF scores for accurate search ranking.</li>
          </ul>
        </div>

        <div className="mb-5">
            <h3 className="text-2xl font-semibold">
            Minesweeper AI
            <span className="text-lg text-white float-end">
            Python </span>
          </h3>
          <p className="text-sm text-gray-500 mb-1">
            Nov 2024
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Designed an AI agent to solve dynamically generated Minesweeper boards using probabilistic reasoning and constraint based logic.</li>
          </ul>
        </div>
      </div>
    </motion.section>

  )
}
