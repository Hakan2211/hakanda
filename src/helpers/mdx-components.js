import dynamic from 'next/dynamic';

import AlertText from '@/components/AlertText/alertText';
import CodeSnippet from '@/components/CodeSnippet';
import BlogHeading from '@/components/blogheading/blogheading';
import Signature from '@/components/signature/signature';
import Textlink from '@/components/textlink/textlink';
import Twitterlink from '@/components/textlink/twitterlink';
import Listcomponent from '@/components/listcomponent/listcomponent';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import HoverCardWrapper from '@/components/hoverCardWrapper/hoverCardWrapper';
import TooltipWrapper from '@/components/tooltipWrapper/tooltipWrapper';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const FloatVolatilityCorrelation = dynamic(
  () =>
    import(
      '@/components/functionPlots/floatVolatilityCorrelation/floatVolatilityCorrelation'
    ),
  { ssr: false }
);

const InteractiveFloat = dynamic(
  () => import('@/components/interactiveFloat/interactiveFloat'),
  { ssr: false }
);

const COMPONENT_MAP = {
  pre: CodeSnippet,

  h1: (props) => <BlogHeading level={1} {...props} />,
  h2: (props) => <BlogHeading level={2} {...props} />,
  h3: (props) => <BlogHeading level={3} {...props} />,
  AlertText,
  Signature,
  Textlink,
  Twitterlink,
  Listcomponent,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  HoverCardWrapper,
  TooltipWrapper,
  FloatVolatilityCorrelation,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  InteractiveFloat,
};

export default COMPONENT_MAP;
