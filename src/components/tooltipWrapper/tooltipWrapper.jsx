'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  CustomTooltipContent,
} from '@/components/ui/tooltip';

import React from 'react';

function TooltipWrapper({ trigger = '*', content }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="-translate-y-1 -translate-x-1 cursor-pointer text-[var(--alert-bg-danger)] text-base">
          {trigger}
        </TooltipTrigger>
        <TooltipContent className="inline-block bg-[var(--popover)] opacity-95 text-[var(--popover-text)]">
          <span>{content}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default TooltipWrapper;
