'use client';

import { motion } from 'framer-motion';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedButton, CTAButton } from '@/components/ui/animated-button';
import { AnimatedCard } from '@/components/ui/animated-card';
import { SectionTransition, StaggerContainer, StaggerItem } from '@/components/ui/page-transition';
import { ArrowRight, Calendar, MapPin, HardHat, ExternalLink, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/data';

interface ProjectsGridProps {
  projects: Project[];
  showAll?: boolean;
  title?: string;
  description?: string;
}

const ProjectsGrid = ({
  projects,
  showAll = false,
  title = "主要実績",
  description = "これまでに手がけた代表的なプロジェクトをご紹介します。"
}: ProjectsGridProps) => {
  const displayProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-brand-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTransition>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-forest mb-4 sm:mb-6 px-4 sm:px-0">
              {title}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-brand-forest to-brand-sage mx-auto rounded-full mb-6"
            />
            <p className="text-base sm:text-lg text-brand-steel max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              {description}
            </p>
          </div>
        </SectionTransition>

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {displayProjects.map((project) => (
            <StaggerItem key={project.id}>
              <AnimatedCard
                variant="hover-lift"
                className="h-full group cursor-pointer"
                onClick={() => window.location.href = `/projects/${project.id}`}
              >
                {/* Project Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <HardHat className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-brand-forest/80 via-transparent to-transparent flex items-end justify-center pb-4"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <ExternalLink className="h-6 w-6 text-white" />
                    </motion.div>
                  </motion.div>
                  <div className="absolute top-4 left-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge className="bg-brand-forest text-white shadow-lg">
                        {project.category}
                      </Badge>
                    </motion.div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/95 text-brand-steel font-medium">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3 px-4 sm:px-6">
                  <CardTitle className="text-lg sm:text-xl font-bold text-brand-forest group-hover:text-brand-sage transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-brand-steel line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 px-4 sm:px-6">
                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    {project.location && (
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-sm text-brand-steel transition-colors group-hover:text-brand-forest"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{project.location}</span>
                      </motion.div>
                    )}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-sm text-brand-steel transition-colors group-hover:text-brand-forest"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{project.year}年</span>
                    </motion.div>
                    {project.client && (
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-start text-sm text-brand-steel transition-colors group-hover:text-brand-forest"
                      >
                        <Users className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="break-words">クライアント: {project.client}</span>
                      </motion.div>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Link href={`/projects/${project.id}`} onClick={(e) => e.stopPropagation()}>
                    <AnimatedButton
                      variant="outline"
                      className="w-full border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-white group/btn"
                      icon={<ArrowRight className="h-4 w-4" />}
                      iconPosition="right"
                    >
                      詳細を見る
                    </AnimatedButton>
                  </Link>
                </CardContent>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        {!showAll && projects.length > 6 && (
          <SectionTransition delay={0.3}>
            <div className="text-center">
              <Link href="/projects">
                <CTAButton
                  variant="primary"
                  icon={<ArrowRight className="h-5 w-5" />}
                  iconPosition="right"
                >
                  すべての実績を見る
                </CTAButton>
              </Link>
            </div>
          </SectionTransition>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;