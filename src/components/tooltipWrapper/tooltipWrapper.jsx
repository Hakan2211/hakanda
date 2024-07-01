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
        <TooltipTrigger>{trigger}</TooltipTrigger>
        <CustomTooltipContent asChild>
          <span>{content}</span>
        </CustomTooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default TooltipWrapper;
