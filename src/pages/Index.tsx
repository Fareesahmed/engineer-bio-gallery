
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Smartphone, Globe, Cpu, Palette } from "lucide-react";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack web application with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe API"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "IoT Monitoring System",
      description: "Real-time monitoring dashboard for IoT devices with data visualization and alert system. Built with Python, Flask, and MongoDB.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["Python", "Flask", "MongoDB", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Mobile Task Manager",
      description: "Cross-platform mobile application for task management with offline sync capabilities. Built with React Native and Firebase.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "AsyncStorage"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Machine Learning Pipeline",
      description: "Automated data processing and ML model training pipeline for predictive analytics. Deployed on AWS with Docker containers.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "AWS", "Docker"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const skills = [
    { category: "Frontend", icon: Globe, skills: [
      { name: "React/Next.js", level: 90 },
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 }
    ]},
    { category: "Backend", icon: Database, skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 92 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 }
    ]},
    { category: "Mobile", icon: Smartphone, skills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 70 },
      { name: "iOS Development", level: 65 },
      { name: "Android Development", level: 68 }
    ]},
    { category: "DevOps", icon: Cpu, skills: [
      { name: "Docker", level: 82 },
      { name: "AWS", level: 78 },
      { name: "CI/CD", level: 80 },
      { name: "Kubernetes", level: 70 }
    ]},
    { category: "Tools", icon: Code, skills: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 75 },
      { name: "Jira", level: 80 }
    ]},
    { category: "Design", icon: Palette, skills: [
      { name: "UI/UX Design", level: 75 },
      { name: "Prototyping", level: 70 },
      { name: "User Research", level: 65 },
      { name: "Wireframing", level: 80 }
    ]}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Full Stack Engineer
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Alex Thompson
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Passionate software engineer with 5+ years of experience building scalable web applications, 
                  mobile apps, and cloud solutions. I love turning complex problems into elegant, user-friendly solutions.
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop&crop=face" 
                  alt="Alex Thompson" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Available for hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/90 text-gray-800 hover:bg-white">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-white/90 text-gray-800 hover:bg-white">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My technical expertise spans across multiple domains, from frontend development to cloud infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory) => (
              <Card key={skillCategory.category} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <skillCategory.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{skillCategory.category}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {skillCategory.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a project in mind or just want to chat about technology, feel free to reach out.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              <Mail className="w-5 h-5 mr-2" />
              alex.thompson@email.com
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="lg">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Alex Thompson. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
