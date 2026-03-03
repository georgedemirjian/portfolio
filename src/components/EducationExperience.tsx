
import { motion } from "framer-motion"

const items = [
  {
    title: "University of California, Irvine",
    subtitle: "B.S. Computer Science | Minor in Management",
    date: "Sep 2022 - Dec 2025",
    bullets: [
      "Relevant Coursework: Data Management, Information Retrieval, Operating Systems, Mobile App Development, Embedded Software, Introduction to AI, Cryptography, IoT Software & Systems",
      "GPA: 3.558",
    ]
  },
  {
    title: "Undergraduate Learning Assistant",
    subtitle: "UCI Donald Bren School of Information and Computer Sciences",
    date: "March 2025 - June 2025",
    bullets: [
      "Provided guidance to 150+ students in ICS31: Introduction to Programming with Python.",
      "Supported the introduction of fundamental concepts and techniques for writing software in a high level programming language.",
      "Promoted active learning and peer collaboration through guided activities and code reviews.",
    ]
  },
  {
    title: "Assistant Manager",
    subtitle: "Villa George Enterprises LLC",
    date: "June 2025 - Sep 2025",
    bullets: [
      "Provided guidance to 150+ students in ICS31: Introduction to Programming with Python.",
      "Supported the introduction of fundamental concepts and techniques for writing software in a high level programming language.",
      "Promoted active learning and peer collaboration through guided activities and code reviews.",
    ]
  },
]

export const EducationExperience = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="min-h-screen flex justify-center px-4 sm:px-6 py-12 bg-base-200"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Education & Experience
        </h2>

        {items.map((item, i) => (
          <div key={i} className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold leading-snug">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-white/80 mt-0.5">
              {item.subtitle}
            </p>
            <p className="text-sm text-gray-500 mt-0.5 mb-3">
              {item.date}
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              {item.bullets.map((bullet, j) => (
                <li key={j} className="text-sm sm:text-base leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </motion.section>
  )
}