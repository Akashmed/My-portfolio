export interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  github: string | null
  live: string | null
  featured: boolean
  privateRepo?: boolean
}

export const projects: Project[] = [
  {
    title: "SafePing",
    description:
      "One-click web app that connects users with nearby police, hospitals, and fire stations, enabling instant help requests and live tracking in Bangladesh.",
    tech: ["React", "Google Cloud", "Node", "Express", "MongoDB"],
    image: "/safeping.png",
    github: null,
    live: "https://safeping-97e2a.web.app",
    featured: true,
    privateRepo: true
  },
  {
    title: "LectureIQ",
    description: "AI based platform for helping students with lecture materials.",
    tech: ["LLM", "Python", "whisper", "Redis", "Pinecone", "Node", "MongoDB"],
    image: "/lectureiq.png",
    github: "https://github.com/Akashmed/lectureIQ-server",
    live: null,
    featured: true,
    privateRepo: false,
  },
  {
    title: "Smart Inventory & Supply Chain Management System",
    description: "A system to manage inventory and supply chain efficiently in a warehouse.",
    tech: ["Oracle SQL", "PL/SQL", "React", "Tailwind CSS"],
    image: "/inventory.png",
    github: "https://github.com/Akashmed/Smart-Inventory-And-Supply-Chain-Management-System",
    live: "https://smart-inventory-and-supply-chain-ma.vercel.app",
    featured: true,
    privateRepo: false,
  },
  {
    title: "Car Doctor",
    description: "Provides a range of car repair services, allowing clients to book appointments while admin manages approvals",
    tech: ["Next.js", "Tailwind CSS", "NextAuth", "JWT", "MongoDB"],
    image: "/cardoctor.png",
    github: "https://github.com/Akashmed/car-doctor-pro-NextJs",
    live: "https://car-doctor-pro-next-js-seven.vercel.app",
    featured: false,
  },
  {
    title: "Chattigo",
    description: "A real-time chat application that seamless user connection with privacy-protection.",
    tech: ["WebSocket", "CryptoJS", "React", "Tailwind CSS", "Node", "MongoDB"],
    image: "/go_realtime_chat.png",
    github: "https://github.com/Akashmed/chattigo-client",
    live: "https://chattigo-424c3.web.app",
    featured: false,
  },
] 