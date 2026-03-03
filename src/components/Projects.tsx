import { motion } from "framer-motion"

const projects = [
  {
    title: "IoT Smart Door with Cloud Logging",
    tech: "C++ | ESP32",
    date: "Nov 2025",
    bullets: [
      "Developed a motion activated smart door prototype using ESP32 to control an IR sensor, servo motor, and audiovisual alerts, achieving fully automated entry.",
      "Implemented WiFi connectivity to transmit real time entry logs to AWS, enabling remote monitoring and secure tracking through the cloud infrastructure.",
    ]
  },
  {
    title: "Embedded Voltmeter System",
    tech: "C | Arduino",
    date: "Jul 2025",
    bullets: [
      "Designed and implemented an embedded voltmeter using an ATmega32 microcontroller with ADC sampling and real time LCD display.",
      "Integrated keypad controls to toggle sampling, reset statistics, and switch display modes for instantaneous, max, min, and average voltages.",
    ]
  },
  {
    title: "Search Engine",
    tech: "Python",
    date: "Mar 2025",
    bullets: [
      "Developed a search engine handling around 55,000 web pages with <300ms response time.",
      "Built a web scraper using BeautifulSoup, an inverted index database, and implemented TF-IDF scores for accurate search ranking.",
    ]
  },
  {
    title: "Minesweeper AI",
    tech: "Python",
    date: "Nov 2024",
    bullets: [
      "Designed an AI agent to solve dynamically generated Minesweeper boards using probabilistic reasoning and constraint based logic.",
    ]
  },
]

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen flex justify-center px-4 sm:px-6 py-12 bg-slate-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Projects
        </h2>

        {projects.map((project, i) => (
          <div key={i} className="mb-8">
            {/* Title row, stacks on mobile, inline on sm+ */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-1">
              <h3 className="text-xl sm:text-2xl font-semibold">
                {project.title}
              </h3>
              <span className="text-sm sm:text-base text-white/70 whitespace-nowrap">
                {project.tech}
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-2">
              {project.date}
            </p>

            <ul className="list-disc pl-5 space-y-1.5">
              {project.bullets.map((bullet, j) => (
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