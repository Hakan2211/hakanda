'use client';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

function HoverCardWrapper({ trigger = '*', content }) {
  return (
    <HoverCard className="relative inline-block">
      <HoverCardTrigger
        asChild="span"
        className="cursor-pointer text-[var(--alert-bg-danger)] text-lg"
      >
        <span>{trigger}</span>
      </HoverCardTrigger>
      <HoverCardContent
        asChild="span"
        className="inline-block bg-[var(--popover)] opacity-95 text-[var(--popover-text)]"
      >
        <span>{content}</span>
      </HoverCardContent>
    </HoverCard>
  );
}

export default HoverCardWrapper;
