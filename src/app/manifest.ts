import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Akash Ahmed - Full-Stack Developer Portfolio',
    short_name: 'Akash Ahmed',
    description: 'Full-Stack Developer specializing in React, Next.js, Node.js, and .NET. Computer Science student from Bangladesh.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/avatar.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}
