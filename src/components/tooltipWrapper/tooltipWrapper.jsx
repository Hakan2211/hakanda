'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  CustomTooltipContent,
} from '@/components/ui/tooltip';

import React from 'react';

const TooltipWrapper = ({ trigger = '*', content }) => {
  const triggerPosition =
    trigger === '?'
      ? '-translate-x-1 -translate-y-1'
      : 'translate-x-0 translate-y-0';
  return (
    <TooltipProvider>
      <Tooltip className="relative inline-block" delayDuration={300}>
        <TooltipTrigger
          className={`${triggerPosition} cursor-pointer text-[var(--alert-bg-danger)] text-base`}
        >
          <span>{trigger}</span>
        </TooltipTrigger>
        <TooltipContent className="inline-block bg-[var(--popover)] opacity-95 text-[var(--popover-text)]">
          <span>{content}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipWrapper;
