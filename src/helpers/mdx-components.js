import AlertText from '@/components/AlertText/alertText';
import CodeSnippet from '@/components/CodeSnippet';
import TestComponent from '@/components/TestComponent/testComponent';

import BlogHeading from '@/components/blogheading/blogheading';

const COMPONENT_MAP = {
  pre: CodeSnippet,

  h1: (props) => <BlogHeading level={1} {...props} />,
  h2: (props) => <BlogHeading level={2} {...props} />,
  h3: (props) => <BlogHeading level={3} {...props} />,
  AlertText,
  TestComponent,
};

export default COMPONENT_MAP;
