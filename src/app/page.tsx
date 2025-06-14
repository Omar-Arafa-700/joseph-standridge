import Image from "next/image";
import Link from "next/link";
import AnimatedBackground from "./components/AnimatedBackground";
import SkillIcon from "./components/SkillIcon";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <AnimatedBackground>
        <section className="relative flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left gap-8 md:gap-12 py-16 md:py-24 px-4 md:px-6">
          <div className="w-full md:w-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4 text-white">
              Hi, I'm Joseph Standridge
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0">
              Organizational Consultant, Data Analyst, and I/O Psychology Grad Student passionate about driving strategic growth and human performance.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-6 items-center">
              <Link
                href="https://www.linkedin.com/in/joseph-standridge-5ba6a62a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-medium px-4 py-2 md:py-3 rounded-full hover:bg-gray-200"
              >
                <Image
                  src="/images/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 hover:scale-110"
                />
              </Link>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-white sm:text-white items-center">
                <a href="tel:17069146371" className="text-lg md:text-xl font-medium text-white hover:text-gray-300 transition-colors">(706) 914-6371</a>
                <a href="mailto:josephstandridge@gmail.com" className="text-lg md:text-xl font-medium text-white hover:text-gray-300 transition-colors">josephstandridge@gmail.com</a>
              </div>
            </div>
          </div>
          <Image
            src="/images/joseph.jpg"
            alt="Joseph Standridge"
            width={200}
            height={200}
            className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
          />
        </section>
      </AnimatedBackground>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 px-4 md:px-6 bg-white dark:bg-gray-900 text-center sm:text-left">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
            I'm an I/O Psychology Master's student at Valdosta State University with hands-on consulting experience. I've worked across logistics, leadership, and data strategy, and am currently interning at Vivrato while consulting with Azalea Consulting Services.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-gray-900 dark:text-white">Skills & Tools</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 justify-items-center">
            <SkillIcon src="/images/excel.svg" alt="Excel" name="Microsoft Excel" />
            <SkillIcon src="/images/python.svg" alt="Python" name="Python" />
            <SkillIcon src="/images/rstudio.svg" alt="R" name="R Studio" />
            <SkillIcon src="/images/sql.svg" alt="SQL" name="SQL" />
            <SkillIcon src="/images/powerbi.svg" alt="Power BI" name="Power BI" />
            <SkillIcon src="/images/consulting.svg" alt="Consulting" name="Consulting" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-20 px-4 md:px-6 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-gray-900 dark:text-white text-center">Experience</h2>
          <div className="space-y-8">
            {/* Vivrato */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Intern</h3>
                  <p className="text-gray-600 dark:text-gray-300">Vivrato · Internship</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Mar 2025 - Present · 4 mos</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">United States · Remote</p>
                  <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Assisting in data analysis and research projects to support organizational development initiatives
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Contributing to the development and implementation of employee engagement strategies
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Supporting the creation of training materials and program documentation
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Azalea Consulting */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Organizational Development Consultant</h3>
                  <p className="text-gray-600 dark:text-gray-300">Azalea Consulting Services · Full-time</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Aug 2024 - Present · 11 mos</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Valdosta, Georgia, United States</p>
                  <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Conducting organizational assessments and developing strategic improvement plans
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Designing and implementing leadership development programs and team-building initiatives
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Facilitating workshops and training sessions focused on organizational effectiveness
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Analyzing workplace culture and recommending strategies for improvement
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Valdosta State University */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Program Director</h3>
                  <p className="text-gray-600 dark:text-gray-300">Valdosta State University · Full-time</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Jul 2021 - Present · 4 yrs</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Valdosta, Georgia, United States · Hybrid</p>
                  <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Led a team of 20-30 professionals focusing on team development, program enhancement, event organization, and strategic execution.
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Overseer of program activities, strategic planning, and program direction, ensuring quality delivery, tracking of key data metrics, and reports on projected program trajectory.
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Supervised, trained, and approved personnel decisions while cultivating a welcoming, efficient, workplace culture that encouraged collaboration and tracked satisfaction.
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Created and maintained key partnerships, including contract negotiation, project rollouts, and large-scale collaborative events (200+).
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Produced social media campaigns including trailers, production team oversight, and interactive activities reaching hundreds of thousands of individuals.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Total Quality Logistics */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Logistics Account Executive</h3>
                  <p className="text-gray-600 dark:text-gray-300">Total Quality Logistics · Full-time</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Jul 2023 - Jun 2024 · 1 yr</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">New Orleans, Louisiana, United States · Hybrid</p>
                  <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Maintained multi-million-dollar accounts organizing logistic requests, guaranteeing client satisfaction, and securing domestic and international freight transfers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-black text-gray-400 text-sm">
        © 2025 Joseph Standridge. All rights reserved.
      </footer>
    </div>
  );
}
