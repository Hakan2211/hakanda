import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

function HoverCardWrapper({ trigger = '*', content }) {
  return (
    <span
      style={{
        display: 'inline',
        position: 'relative',
      }}
    >
      <HoverCard>
        <HoverCardTrigger
          className="cursor-pointer text-[var(--alert-bg-danger)] text-lg"
          //style={{ marginLeft: '2px', display: 'inline' }}
        >
          {trigger}
        </HoverCardTrigger>
        <HoverCardContent className="bg-[var(--popover)] opacity-95 text-[var(--popover-text)]">
          {content}
        </HoverCardContent>
      </HoverCard>
    </span>
  );
}

export default HoverCardWrapper;
