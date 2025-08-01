import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface KotlinIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  gradientStartColor?: string;
  gradientMiddleColor?: string;
  gradientEndColor?: string;
}

const KotlinIcon = forwardRef<SVGSVGElement, KotlinIconProps>(
  ({ 
    size = 24, 
    gradientStartColor = '#E44857', 
    gradientMiddleColor = '#C711E1',
    gradientEndColor = '#7F52FF',
    className, 
    ...props 
  }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 256 256"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
        className={cn('inline-block', className)}
        role="img"
        aria-label="Kotlin Programming Language"
        {...props}
      >
        <defs>
          <linearGradient 
            x1="99.991%" 
            y1="-.011%" 
            x2=".01%" 
            y2="100.01%" 
            id="kotlin__a"
          >
            <stop stopColor={gradientStartColor} offset=".344%"/>
            <stop stopColor={gradientMiddleColor} offset="46.89%"/>
            <stop stopColor={gradientEndColor} offset="100%"/>
          </linearGradient>
        </defs>
        <path 
          fill="url(#kotlin__a)" 
          d="M256 256H0V0h256L128 127.949z"
        />
      </svg>
    );
  }
);

KotlinIcon.displayName = 'KotlinIcon';

export default KotlinIcon;