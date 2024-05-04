import * as React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const alertVariants = cva('relative w-full rounded-lg border p-4', {
  variants: {
    variant: {
      default: 'bg-background',
      info: 'border-blue-500 text-blue-800 bg-blue-100',
      warning: 'border-yellow-400 text-yellow-800 bg-yellow-100',
      success: 'border-green-500 text-green-800 bg-green-100',
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
      className={cn('absolute top-2 left-1 m-1', className)}
      aria-hidden="true"
      {...props}
    >
      {children}
    </div>
  );
});

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription, AlertIcon };
