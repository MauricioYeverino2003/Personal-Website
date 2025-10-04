import React from 'react'

import { ImageWithFallback } from './ImageWithFallback'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card'
import { ExternalLink } from 'lucide-react'
import { Button } from './button'
import Link from 'next/link'
import { Badge } from './badge'
import { Project } from 'src/types/Project'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden">
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
          <Button asChild variant="ghost" size="sm" className="gap-1">
            {project.link && (<Link href={project.link}>
              <ExternalLink className="w-4 h-4" />
            </Link>
            )}
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
  )
}

export default ProjectCard