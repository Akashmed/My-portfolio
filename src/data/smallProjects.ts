export interface SmallProject {
  title: string
  description: string
  tech: string[]
  github: string
  icon: string
}

export const smallProjects: SmallProject[] = [
  {
    title: "Capstone Project",
    description: "A complete e-commerce backend system that handles product management, user authentication, and order processing.",
    tech: ["Java", "MySQL", "Spring Boot", "JPA", "REST APIs"],
    github: "https://github.com/Akashmed/spring-api-starter",
    icon: "ShoppingCart"
  },
  {
    title: "Authentication Service",
    description: "Authentication application built using the Next.js, allow users to register/sign-in and manage their account",
    tech: ["Next.js", "NextAuth", "Express.js", "JWT"],
    github: "https://github.com/Akashmed/nextJS-auth",
    icon: "Lock"
  },
  {
    title: "Hotel Reservation & Management system",
    description: "Terminal-based application that allows users to book and admins to manage reservations",
    tech: ["C++", "Structured Programming"],
    github: "https://github.com/Akashmed/Hotel-Reservation-And-Management",
    icon: "Hotel"
  },
  {
    title: "User Service",
    description: "A object-oriented backend application for managing users and products",
    tech: ["Java", "Spring Boot", "JPA", "MySQL"],
    github: "https://github.com/Akashmed/User-Service-Registration",
    icon: "Users"
  },
  {
    title: "Age Calculator",
    description: "A tool for calculating age based on the user's inputted birth date.",
    tech: ["C", "Structured Programming"],
    github: "https://github.com/Akashmed/Tools",
    icon: "Calculator"
  },
  {
    title: "HealthEase",
    description: "A platform that offers health care at home, connecting patients with healthcare professionals for convenient and quality care.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router"],
    github: "https://github.com/Akashmed/HealthEase-client",
    icon: "Heart"
  }
] 