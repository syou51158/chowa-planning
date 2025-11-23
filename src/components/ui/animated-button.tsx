'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';
import { ReactNode, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

interface AnimatedButtonProps extends Omit<ButtonProps, 'children'> {
  children: ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'gradient' | 'glow';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  loading?: boolean;
  loadingText?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  ripple?: boolean;
  glow?: boolean;
  pulse?: boolean;
}

const buttonVariants = {
  default: {
    hover: {
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 17,
      },
    },
    tap: {
      scale: 0.98,
    },
  },
  gradient: {
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 17,
      },
    },
    tap: {
      scale: 0.95,
    },
  },
  glow: {
    hover: {
      scale: 1.02,
      boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 17,
      },
    },
    tap: {
      scale: 0.98,
    },
  },
};

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({
    children,
    className,
    variant = 'default',
    size = 'default',
    loading = false,
    loadingText = '読み込み中...',
    icon,
    iconPosition = 'left',
    ripple = true,
    glow = false,
    pulse = false,
    disabled,
    ...props
  }, ref) => {
    const isGradient = variant === 'gradient';
    const isGlow = variant === 'glow' || glow;
    const motionVariant = isGradient ? 'gradient' : isGlow ? 'glow' : 'default';

    const buttonContent = (
      <>
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            {loadingText}
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="mr-2"
              >
                {icon}
              </motion.span>
            )}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {children}
            </motion.span>
            {icon && iconPosition === 'right' && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="ml-2"
              >
                {icon}
              </motion.span>
            )}
          </>
        )}
      </>
    );

    return (
      <motion.div
        className="relative inline-block"
        variants={buttonVariants[motionVariant]}
        whileHover={!disabled && !loading ? 'hover' : undefined}
        whileTap={!disabled && !loading ? 'tap' : undefined}
      >
        {pulse && (
          <motion.div
            className="absolute inset-0 rounded-xl bg-brand-forest/20"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}

        <Button
          ref={ref}
          variant={isGradient || isGlow ? 'default' : variant}
          size={size}
          disabled={disabled || loading}
          className={cn(
            'relative overflow-hidden transition-all duration-300',
            isGradient && [
              'bg-gradient-to-r from-brand-primary to-brand-secondary',
              'hover:from-brand-secondary hover:to-brand-primary',
              'text-white border-2 border-brand-primary/20 shadow-lg',
            ],
            isGlow && [
              'bg-brand-accent text-white border-2 border-brand-accent/20',
              'shadow-lg hover:shadow-brand-accent/25',
            ],
            ripple && 'group',
            className
          )}
          {...props}
        >
          {ripple && (
            <motion.span
              className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-active:scale-100"
              initial={{ scale: 0, opacity: 0 }}
              whileTap={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}

          <span className="relative z-10 flex items-center justify-center">
            {buttonContent}
          </span>
        </Button>
      </motion.div>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

// プリセットボタンコンポーネント
interface CTAButtonProps extends Omit<AnimatedButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export function CTAButton({ variant = 'primary', ...props }: CTAButtonProps) {
  const buttonVariant = variant === 'primary' ? 'gradient' : variant === 'secondary' ? 'glow' : 'outline';

  return (
    <AnimatedButton
      variant={buttonVariant}
      size="lg"
      glow={variant === 'primary'}
      ripple
      {...props}
    />
  );
}

interface FloatingActionButtonProps extends Omit<AnimatedButtonProps, 'variant' | 'size'> {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

export function FloatingActionButton({
  position = 'bottom-right',
  className,
  ...props
}: FloatingActionButtonProps) {
  const positionClasses = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-6 right-6',
    'top-left': 'fixed top-6 left-6',
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className={cn(positionClasses[position], 'z-50')}
    >
      <AnimatedButton
        variant="gradient"
        size="icon"
        className={cn(
          'w-14 h-14 rounded-full shadow-2xl border-2 border-brand-accent/20',
          'hover:shadow-brand-accent/30',
          className
        )}
        glow
        pulse
        {...props}
      />
    </motion.div>
  );
}

interface IconButtonProps extends Omit<AnimatedButtonProps, 'children'> {
  icon: ReactNode;
  tooltip?: string;
}

export function IconButton({ icon, tooltip, className, ...props }: IconButtonProps) {
  return (
    <div className="relative group">
      <AnimatedButton
        variant="ghost"
        size="icon"
        className={cn(
          'rounded-xl hover:bg-brand-steel/10 text-brand-steel border-2 border-transparent hover:border-brand-steel/20',
          className
        )}
        {...props}
      >
        {icon}
      </AnimatedButton>

      {tooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          whileHover={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-brand-steel text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg"
        >
          {tooltip}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-brand-steel" />
        </motion.div>
      )}
    </div>
  );
}

export { AnimatedButton, CTAButton };
export default AnimatedButton;