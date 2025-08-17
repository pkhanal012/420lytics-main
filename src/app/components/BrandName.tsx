import React from 'react';

interface BrandNameProps {
  className?: string;
  variant?: 'standard' | 'ai';
}

export default function BrandName({ className = '', variant = 'standard' }: BrandNameProps) {
  if (variant === 'ai') {
    return (
              <span className={className}>
          420l<span className="text-green-400">Y</span>tics.ai
        </span>
    );
  }
  
      return (
      <span className={className}>
        420l<span className="text-green-400">Y</span>tics
      </span>
    );
} 