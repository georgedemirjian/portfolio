
import { motion } from "framer-motion"
import {
  FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaGithub, FaLinux, FaAws, FaRProject
} from "react-icons/fa"
import {
  SiTypescript, SiJavascript, SiCplusplus, SiC, SiMysql,
  SiTailwindcss, SiAngular, SiIonic, SiArduino
} from "react-icons/si"

const skillGroups = [
  {
    title: "Languages & Databases",
    skills: [
      { name: "Python",     icon: <FaPython /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "C++",        icon: <SiCplusplus /> },
      { name: "C",          icon: <SiC /> },
      { name: "Java",       icon: <FaJava /> },
      { name: "SQL",        icon: <SiMysql /> },
      { name: "R",          icon: <FaRProject />}
    ]
  },
  {
    title: "Web & Frontend",
    skills: [
      { name: "React",       icon: <FaReact /> },
      { name: "HTML",        icon: <FaHtml5 /> },
      { name: "CSS",         icon: <FaCss3Alt /> },
      { name: "Tailwind CSS",icon: <SiTailwindcss /> },
      { name: "Angular",     icon: <SiAngular /> },
      { name: "Ionic",       icon: <SiIonic /> },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "GitHub",  icon: <FaGithub /> },
      { name: "Linux",   icon: <FaLinux /> },
      { name: "Arduino", icon: <SiArduino /> },
      { name: "AWS (S3, EC2, VPC, RDS)", icon: <FaAws />},
    ]
  }
]

export const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="flex justify-center px-4 sm:px-6 py-12 bg-base-200"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Skills
        </h2>

        {/* Single col on mobile, 3 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-2xl p-5 sm:p-6 shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm sm:text-base rounded-full bg-slate-600 text-white hover:bg-slate-400 transition flex items-center gap-2"
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}