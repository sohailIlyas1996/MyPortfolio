import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

function App() {
  const projects = [
    {
      title: "Prayer Times App",
      description: "A Mobile application built with React native",
      image: "/images/prayerapp.png",
      technologies: ["React Native", "Expo", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/sohaililyas/Prayer-Times-App",
      live: "https://play.google.com/store/apps/details?id=com.sohaililyas.prayertimes",
    },
    {
      title: "Genius Shield",
      description: "A web application built with Next.js and Tailwind CSS",
      image: "/images/genuineshield.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      live: "https://geniun-g6g717zlt-sohaililyas1996s-projects.vercel.app/",
    },
    {
      title: "Movie App",
      description: "A web application built with React.js and Tailwind CSS",
      image: "/images/movie.png",
      technologies: ["React", "API", "TypeScript", "Firebase"],
      live: "https://tm-asusvvdi7-sohaililyas1996s-projects.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen w-screen flex flex-col bg-[#0C0C0C] font-sans">
      {/* Navigation */}
      <nav className="w-full bg-[#0C0C0C]/90 backdrop-blur-sm z-50">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-[#00B4DB]">
              Sohail Ilyas
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-300 hover:text-[#00B4DB] transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-gray-300 hover:text-[#00B4DB] transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-[#00B4DB] transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-[#00B4DB] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full py-20 px-6 bg-gradient-to-b from-[#0C0C0C] via-[#1A1A1A] to-[#0C0C0C]">
          <div className="w-full max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[#00B4DB] shadow-lg relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B4DB] to-[#0099BC] opacity-20"></div>
                <img
                  src="/images/mypic.jpeg"
                  alt="Sohail Ilyas"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-6xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-[#00B4DB] to-[#0099BC]">
                Software Developer
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Passionate about building innovative solutions and creating
                impactful software experiences.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-[#00B4DB] to-[#0099BC] text-white rounded-lg hover:from-[#0099BC] hover:to-[#00B4DB] transition-all duration-300 shadow-lg hover:shadow-[#00B4DB]/20"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 bg-transparent text-[#00B4DB] border-2 border-[#00B4DB] rounded-lg hover:bg-[#00B4DB]/10 transition-all duration-300 shadow-lg hover:shadow-[#00B4DB]/20"
                >
                  View Projects
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full py-20 bg-[#1A1A1A] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00B4DB]/5 to-transparent"></div>
          <div className="container mx-auto max-w-4xl px-6 relative">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-gray-300 mb-4">
                  I'm a software developer with a strong foundation in web
                  development and a passion for creating efficient, scalable
                  solutions. With experience in both frontend and backend
                  technologies, I strive to build applications that make a
                  difference.
                </p>
                <p className="text-gray-300">
                  My journey in software development has equipped me with
                  expertise in modern web technologies and a keen eye for
                  creating user-friendly interfaces.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-green-500 p-6 rounded-lg shadow-lg border border-[#2D2D2D] hover:border-[#00B4DB] transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-[#00B4DB]">
                    Frontend
                  </h3>
                  <p className="text-gray-300">
                    React, TypeScript, Tailwind CSS
                  </p>
                </div>
                <div className="bg-pink-500 p-6 rounded-lg shadow-lg border border-[#2D2D2D] hover:border-[#00B4DB] transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-[#00B4DB]">
                    Backend
                  </h3>
                  <p className="text-gray-300">Node.js, Python, SQL</p>
                </div>
                <div className="bg-pink-500 p-6 rounded-lg shadow-lg border border-[#2D2D2D] hover:border-[#00B4DB] transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-[#00B4DB]">
                    Tools
                  </h3>
                  <p className="text-gray-300">Git, Docker, AWS</p>
                </div>
                <div className=" bg-green-500 p-6 rounded-lg shadow-lg border border-[#2D2D2D] hover:border-[#00B4DB] transition-colors duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-[#00B4DB]">
                    Soft Skills
                  </h3>
                  <p className="text-gray-300">
                    Problem Solving, Communication
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="w-full py-20 bg-[#0C0C0C] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tl from-[#00B4DB]/5 to-transparent"></div>
          <div className="w-full max-w-7xl mx-auto px-6 relative">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2D2D2D] hover:border-[#00B4DB] group"
                >
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00B4DB]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#00B4DB] transition-colors"
                      >
                        <FaExternalLinkAlt size={24} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#00B4DB]">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#0C0C0C] text-sm rounded-full text-[#00B4DB] border border-[#2D2D2D] hover:border-[#00B4DB] transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="w-full py-20 bg-[#1A1A1A] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00B4DB]/5 to-transparent"></div>
          <div className="w-full max-w-7xl mx-auto px-6 relative">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Experience
            </h2>
            <div className="space-y-8">
              {/* Elizabeth School of London */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#0C0C0C] p-8 rounded-lg shadow-lg border border-[#2D2D2D] hover:border-[#00B4DB] transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-[#00B4DB]">
                    Associate Lecturer
                  </h3>
                  <span className="text-gray-400">Sep 2024 - Present</span>
                </div>
                <p className="text-gray-300 mb-2">Elizabeth School of London</p>
                <p className="text-gray-400 mb-4">Full-time · On-site</p>
                <p className="text-gray-300">Module leader</p>
              </motion.div>

              {/* Interdigital Limited */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#0C0C0C] p-8 rounded-lg shadow-lg border border-[#2D2D2D] hover:border-[#00B4DB] transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-[#00B4DB]">
                    Software Engineer
                  </h3>
                  <span className="text-gray-400">Apr 2024 - Aug 2024</span>
                </div>
                <p className="text-gray-300 mb-2">Interdigital Limited</p>
                <p className="text-gray-400 mb-4">Part-time · Remote</p>
                <p className="text-gray-400 mb-4">
                  Leamington Spa, United Kingdom
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Develop and maintain web applications using React and its
                    frameworks, particularly Next.js
                  </li>
                  <li>
                    Architect, implement, and optimize user interfaces for
                    seamless experiences across devices and browsers
                  </li>
                  <li>
                    Design and develop mobile apps using Flutter for Android and
                    iOS platforms
                  </li>
                  <li>
                    Utilize Flutter's capabilities for cross-platform
                    development, maximizing code reuse
                  </li>
                  <li>
                    Contribute to backend development using Node.js and Golang
                  </li>
                  <li>
                    Craft APIs, implement business logic, and manage data
                    persistence
                  </li>
                  <li>
                    Participate in the full software development lifecycle
                  </li>
                </ul>
              </motion.div>

              {/* Upwork */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#0C0C0C] p-8 rounded-lg shadow-lg border border-[#2D2D2D] hover:border-[#00B4DB] transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-[#00B4DB]">
                    Web Developer
                  </h3>
                  <span className="text-gray-400">Feb 2022 - Jun 2022</span>
                </div>
                <p className="text-gray-300 mb-2">Upwork</p>
                <p className="text-gray-400">Freelance · Remote</p>
              </motion.div>

              {/* CUSIT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#0C0C0C] p-8 rounded-lg shadow-lg border border-[#2D2D2D] hover:border-[#00B4DB] transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-[#00B4DB]">
                    Lab Engineer
                  </h3>
                  <span className="text-gray-400">Sep 2020 - Oct 2021</span>
                </div>
                <p className="text-gray-300 mb-2">
                  City University of Science and Information Technology
                </p>
                <p className="text-gray-400 mb-4">Full-time</p>
                <p className="text-gray-400">
                  Peshawar, Khyber Pakhtunkhwa, Pakistan
                </p>
                <p className="text-gray-300 mt-2">Skills: Agile Development</p>
              </motion.div>

              {/* Frontend Web Developer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#0C0C0C] p-8 rounded-lg shadow-lg border border-[#2D2D2D] hover:border-[#00B4DB] transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-[#00B4DB]">
                    Frontend Web Developer
                  </h3>
                  <span className="text-gray-400">Feb 2021 - Jul 2021</span>
                </div>
                <p className="text-gray-300 mb-2">Freelance</p>
                <p className="text-gray-400">Remote</p>
              </motion.div>

              {/* Android App Developer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#0C0C0C] p-8 rounded-lg shadow-lg border border-[#2D2D2D] hover:border-[#00B4DB] transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-[#00B4DB]">
                    Android App Developer
                  </h3>
                  <span className="text-gray-400">Aug 2015</span>
                </div>
                <p className="text-gray-300 mb-2">PlaYsTorE</p>
                <p className="text-gray-400">Pakistan</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-20 bg-[#0C0C0C] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tl from-[#00B4DB]/5 to-transparent"></div>
          <div className="w-full max-w-7xl mx-auto px-6 relative">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Get in Touch
            </h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/sohail-ilyas-6569b2161/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00B4DB] transition-colors duration-200"
                >
                  <FaLinkedin size={32} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00B4DB] transition-colors duration-200"
                >
                  <FaGithub size={32} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-[#0C0C0C] border-t border-[#2D2D2D]">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center text-gray-400">
            <p>© 2024 Sohail Ilyas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
