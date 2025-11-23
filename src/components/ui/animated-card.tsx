'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ReactNode } from 'react';

interface AnimatedCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  className?: string;

  delay?: number;
  duration?: number;
  variant?: 'default' | 'hover-lift' | 'hover-glow' | 'hover-tilt';
}

const cardVariants = {
  default: {
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  },
  'hover-lift': {
    hover: {
      scale: 1.03,
      y: -10,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  },
  'hover-glow': {
    hover: {
      scale: 1.02,
      y: -5,
      boxShadow: '0 0 30px rgba(34, 197, 94, 0.3)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  },
  'hover-tilt': {
    hover: {
      scale: 1.02,
      rotateY: 5,
      rotateX: 5,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  },
};

export function AnimatedCard({
  children,
  className,

  delay = 0,
  duration = 0.6,
  variant = 'default',
  ...props
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={cardVariants[variant].hover}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
      className={cn('cursor-pointer', className)}
      {...props}
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
        {children}
      </Card>
    </motion.div>
  );
}

interface AnimatedCardHeaderProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconClassName?: string;
}

export function AnimatedCardHeader({
  children,
  className,
  icon,
  iconClassName,
}: AnimatedCardHeaderProps) {
  return (
    <CardHeader className={cn('pb-4', className)}>
      {icon && (
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className={cn(
            'w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center mb-4 shadow-lg border-2 border-brand-primary/20',
            iconClassName
          )}
        >
          {icon}
        </motion.div>
      )}
      {children}
    </CardHeader>
  );
}

interface AnimatedCardContentProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedCardContent({
  children,
  className,
}: AnimatedCardContentProps) {
  return (
    <CardContent className={cn('pt-0', className)}>
      {children}
    </CardContent>
  );
}

// プリセットカードコンポーネント
interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
  className?: string;
  delay?: number;
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  className,
  delay = 0,
}: ServiceCardProps) {
  return (
    <AnimatedCard
      variant="hover-lift"
      delay={delay}
      className={className}
    >
      <AnimatedCardHeader icon={icon}>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.2 }}
          className="text-xl font-bold text-brand-forest mb-2"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.3 }}
          className="text-brand-stone leading-relaxed"
        >
          {description}
        </motion.p>
      </AnimatedCardHeader>

      {features && (
        <AnimatedCardContent>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: delay + 0.4 }}
            className="space-y-2"
          >
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.5 + index * 0.1 }}
                className="flex items-center text-sm text-brand-stone"
              >
                <div className="w-1.5 h-1.5 bg-brand-sage rounded-full mr-3 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        </AnimatedCardContent>
      )}
    </AnimatedCard>
  );
}

interface ProjectCardProps {
  image?: string;
  title: string;
  category: string;
  description: string;
  year?: string;
  location?: string;
  className?: string;
  delay?: number;

}

export function ProjectCard({
  image,
  title,
  category,
  description,
  year,
  location,
  className,
  delay = 0,

}: ProjectCardProps) {
  return (
    <AnimatedCard
      variant="hover-glow"
      delay={delay}
      className={className}
    >
      {image && (
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      <AnimatedCardHeader>
        <div className="flex items-center justify-between mb-2">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.2 }}
            className="px-3 py-1 bg-brand-accent/20 text-brand-primary text-xs font-medium rounded-full border border-brand-accent/30"
          >
            {category}
          </motion.span>
          {year && (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: delay + 0.3 }}
              className="text-xs text-brand-concrete font-medium"
            >
              {year}
            </motion.span>
          )}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.4 }}
          className="text-lg font-bold text-brand-forest mb-2"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.5 }}
          className="text-sm text-brand-stone leading-relaxed mb-3"
        >
          {description}
        </motion.p>

        {location && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: delay + 0.6 }}
            className="text-xs text-brand-stone flex items-center"
          >
            <span className="w-1 h-1 bg-brand-sage rounded-full mr-2" />
            {location}
          </motion.p>
        )}
      </AnimatedCardHeader>
    </AnimatedCard>
  );
}