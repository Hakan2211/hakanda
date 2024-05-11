import dynamic from 'next/dynamic';

import AlertText from '@/components/AlertText/alertText';
import CodeSnippet from '@/components/CodeSnippet';
import BlogHeading from '@/components/blogheading/blogheading';
import Signature from '@/components/signature/signature';
import Textlink from '@/components/textlink/textlink';
import Twitterlink from '@/components/textlink/twitterlink';
import Listcomponent from '@/components/listcomponent/listcomponent';

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
};

export default COMPONENT_MAP;
