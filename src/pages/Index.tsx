import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

interface PortfolioState {
  services: Service[];
  projects: Project[];
  testimonials: Testimonial[];
  blogPosts: BlogPost[];
  stats: {
    projectsCompleted: number;
    happyClients: number;
    rating: number;
    yearsExperience: number;
  };
}

const initialState: PortfolioState = {
  services: [
    {
      id: "1",
      title: "Website Development",
      description:
        "Creating responsive and modern websites using latest technologies.",
      icon: "Code",
    },
    {
      id: "2",
      title: "Frontend Development",
      description:
        "Building interactive user interfaces with React, Vue, and modern frameworks.",
      icon: "Monitor",
    },
  ],
  projects: [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: "2",
      title: "Task Management App",
      description: "Collaborative task management application",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Firebase", "Vuetify"],
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "John Doe",
      role: "Product Manager",
      company: "Tech Corp",
      content:
        "Excellent work quality and attention to detail. Highly recommended!",
      avatar: "/placeholder.svg",
    },
  ],
  blogPosts: [
    {
      id: "1",
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies in web development.",
      image: "/placeholder.svg",
      date: "2024-01-15",
      readTime: "5 min read",
    },
  ],
  stats: {
    projectsCompleted: 230,
    happyClients: 40,
    rating: 4.8,
    yearsExperience: 2,
  },
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    updateStats: (
      state,
      action: PayloadAction<Partial<PortfolioState["stats"]>>
    ) => {
      state.stats = { ...state.stats, ...action.payload };
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    addTestimonial: (state, action: PayloadAction<Testimonial>) => {
      state.testimonials.push(action.payload);
    },
    addBlogPost: (state, action: PayloadAction<BlogPost>) => {
      state.blogPosts.push(action.payload);
    },
  },
});

export const { updateStats, addProject, addTestimonial, addBlogPost } =
  portfolioSlice.actions;
export default portfolioSlice.reducer;
