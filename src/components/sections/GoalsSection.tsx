"use client"

import { Server, Cloud, Activity, Code } from "lucide-react"

export default function GoalsSection() {
  return (
    <section id="goals" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Looking <span className="text-gray-600 dark:text-gray-400">Ahead</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              My next steps in professional growth and the technologies I'm mastering to deliver greater value
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {/* Deepen Spring & Java Backend Expertise */}
            <div className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-gray-900 mx-auto mb-4 shadow-lg transition-all duration-300">
                  <Server className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Deepen Spring & Java Expertise
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Build and deploy production-ready backend services using Spring Boot, Spring Security, and Spring Cloud.
                </p>
              </div>
            </div>
            {/* Master Cloud & Deployment Practices */}
            <div className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-700 dark:bg-gray-300 rounded-full flex items-center justify-center text-white dark:text-gray-900 mx-auto mb-4 shadow-lg transition-all duration-300">
                  <Cloud className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Master Cloud & Deployment Practices</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Learn cloud platforms (AWS/Azure) and CI/CD workflows to deploy applications reliably with modern DevOps practices.
                </p>
              </div>
            </div>
            {/* System Design & Scalability */}
            <div className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-600 dark:bg-gray-400 rounded-full flex items-center justify-center text-white dark:text-gray-900 mx-auto mb-4 shadow-lg transition-all duration-300">
                  <Activity className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">System Design & Scalability</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Study caching, concurrency, load balancing and distributed systems to architect reliable, scalable real-world solutions.
                </p>
              </div>
            </div>
            {/* Open-Source Contributions */}
            <div className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 dark:bg-gray-200 rounded-full flex items-center justify-center text-white dark:text-gray-900 mx-auto mb-4 shadow-lg transition-all duration-300">
                  <Code className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Open-Source Contributions</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Contribute to Java libraries and Spring community projects to sharpen my skills and give back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 