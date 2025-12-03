import { Code, Calendar, MapPin, Users, BookOpen } from "lucide-react";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 bg-background dark:bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Educational{" "}
              <span className="text-gray-600 dark:text-gray-400">
                Background
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              My academic journey and continuous learning path in computer
              science and engineering
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* University Education */}
            <div className="group h-full">
              <a
                href="https://www.linkedin.com/school/northernuniversitybd"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer border-transparent hover:-translate-y-1 flex flex-col">
                  <div className="flex items-start mb-4 relative z-10">
                    <div className="w-14 h-14 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-gray-900 mr-4 shadow-lg transition-all duration-300">
                      <BookOpen className="text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        Bachelor of Science (Honours)
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Computer Science & Engineering
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                        Northern University Bangladesh
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          2023 - Present
                        </span>
                        <span className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          Dhaka, Bangladesh
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 text-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold">
                          CGPA: 3.98/4.0 (current)
                        </span>
                        <span className="px-3 py-1 text-center bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm font-semibold">
                          Graduate 12/2026
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    Focused on modern computer science foundations including algorithms, data structures, object-oriented programming, software engineering, databases and system architecture. Developing real-world applications including an SOS emergency-response platform and a scalable inventory and supply-chain system.
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Courses:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        Object-Oriented Programming (Java & C++)
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        Compiler Design
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        Data Structures & Algorithms (C++)
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        Assembly Language Programming
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        Software Engineering & System Design
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        Database Management (Oracle SQL)
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Notable Achievements:
                    </p>
                    <ul className="space-y-1">
                      <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                        <span>
                          Awarded for SOS emergency-response application in project showcase competition
                        </span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                        <span>
                          Led a team to develop an Oracle-based system utilizing advanced PL/SQL.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </div>

            {/* High School Education */}
            <div className="group h-full">
              <a
                href="https://ssnic.edu.bd/ssnicweb"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer border-transparent hover:-translate-y-1 flex flex-col">
                  <div className="flex items-start mb-4 relative z-10">
                    <div className="w-14 h-14 bg-gray-700 dark:bg-gray-300 rounded-full flex items-center justify-center text-white dark:text-gray-900 mr-4 shadow-lg transition-all duration-300">
                      <Users className="text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        Higher Secondary Certificate (HSC)
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Science Group
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                        Shahid Syed Nazrul Islam College
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          2019 - 2021
                        </span>
                        <span className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          Mymensingh, Bangladesh
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold">
                          GPA: 5.0/5.0
                        </span>
                        <span className="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm font-semibold">
                          Graduated
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    Attended one of Mymensingh’s renowned colleges known for strong academic results and quality higher-secondary education. Built a solid foundation in mathematics, physics, and computer science—skills that later fueled my programming journey.
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Courses:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        Physics
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        Higher Mathematics
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        Chemistry
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                        ICT (Information & Communication Technology)
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Notable Achievements:
                    </p>
                    <ul className="space-y-1">
                      <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                        <span>
                          Achieved GPA 5.00
                        </span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                        <span>
                          Strong academic performance in STEM subjects
                        </span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                        <span>
                          Participated in programming and science-related activities during college
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
