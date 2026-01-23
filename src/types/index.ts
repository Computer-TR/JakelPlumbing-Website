export interface Service {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  icon?: string
  image?: any
  features?: string[]
}

export interface Testimonial {
  _id: string
  name: string
  role?: string
  content: string
  rating: number
  image?: any
}

export interface Project {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  images?: any[]
  category?: string
  completedDate?: string
}

export interface TeamMember {
  _id: string
  name: string
  position: string
  bio?: string
  image?: any
  phone?: string
  email?: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: string
  emergencyPhone?: string
}