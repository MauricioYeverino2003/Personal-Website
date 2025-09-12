"use client"
import { Mail, Github, ExternalLink, Download, Linkedin } from 'lucide-react'
import { Button } from 'src/components/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from 'src/components/Card';
import { Badge } from 'src/components/badge';
import { ImageWithFallback } from 'src/components/ImageWithFallback';
import Link from "next/link";

export default function Home() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Floras",
      period: "Summer 2025",
      description: "Developed React components and APIs for user dashboard, improving performance by 30%"
    }
  ];

  const projects = [
    {
      title: "LetsMeetAt",
      description: "A full-stack web application built with React, Node.js, and PostgreSQL",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      image: "projects/letsmeetat.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/*About me*/}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl lg:text-5xl">
                  Hi, I'm <span className="text-primary">Mauricio Yeverino</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Computer Science Student @ UC Berkeley & Aspiring Software Engineer
                </p>
              </div>
              <p className="text-lg text-muted-foreground max-w-lg">
                Passionate about building innovative web applications and solving complex problems through code.
                Currently pursuing my CS degree while gaining hands-on experience in full-stack development.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href={'https://www.linkedin.com/in/myeverino2003/'} target='_blank'>
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </Link>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <a href="/resume.pdf" download>
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="Personal.png"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Description */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm a dedicated computer science student with a passion for software engineering and web development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p>
                I’m a senior studying Computer Science at UC Berkeley. I build full-stack web apps and backend systems, 
                grounded in algorithms, data structures, and solid software engineering. I like shipping clean, reliable 
                features—from API design to polished UI.
              </p>
              <p>
                In my free time I really enjoy watching films, Reading, and listening to EDM, If you would like
                to know about my favorite films, books and songs feel free to check out my personal corner :)
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Java</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">Git</Badge>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="asjbdasb"
                alt="Coding workspace"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Experience</h2>
            <p className="text-muted-foreground">
              My journey in software development through internships and projects
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="text-lg">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Projects & Portfolio</h2>
            <p className="text-muted-foreground">
              Some of the projects I've worked on recently
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{project.title}</CardTitle>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume  */}
      <section id="resume" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl mb-4">Resume & CV</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download my latest resume to learn more about my education, experience, and skills.
          </p>
          <Button asChild size="lg" className="gap-2">
            <a href='/resume.pdf' download>
              <Download className="w-5 h-5" />
              Download Resume (PDF)
            </a>
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, projects, or just chatting about technology.
          </p>

          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="w-5 h-5" />
              mauricio_yeverino@berkeley.edu
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href={"https://github.com/MauricioYeverino2003"}>
                <Github className="w-5 h-5" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href={'https://www.linkedin.com/in/myeverino2003/'} target='_blank'>
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section >
    </div >
  );
}

