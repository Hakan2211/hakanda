import * as React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const alertVariants = cva('relative w-full rounded-lg border p-4', {
  variants: {
    variant: {
      default: 'bg-background',
      info: 'border-[var(--alert-info-border)] text-[var(--text-color-primary-800)] bg-[var(--alert-info)]',
      warning:
        'border-[var(--alert-warning-border)] text-[var(--text-color-primary-800)] bg-[var(--alert-warning)]',
      success:
        'border-[var(--alert-success-border)] text-[var(--text-color-primary-800)] bg-[var(--alert-success)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Alert = React.forwardRef(
  ({ children, className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  )
);
Alert.displayName = 'Alert';

const AlertIcon = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('absolute -top-5 -right-5', className)}
      aria-hidden="true"
      {...props}
    >
      {children}
    </div>
  );
});
const AlertLabel = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('absolute -top-8 right-0', className)}
        aria-hidden="true"
        {...props}
      >
        {children}
      </div>
    );
  }
);

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      'mb-2 font-medium text-xl leading-none tracking-wide',
      className
    )}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-sm leading-[1.9]', className)}
      {...props}
    >
      {children}
    </div>
  )
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription, AlertIcon, AlertLabel };
