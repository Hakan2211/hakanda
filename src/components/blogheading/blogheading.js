import React from 'react';

const headingToId = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .trim();
};

const getNodeText = (children) => {
  try {
    if (typeof children === 'string') {
      return children;
    }
    if (Array.isArray(children)) {
      return children.map(getNodeText).join('');
    }
    if (React.isValidElement(children) && children.props) {
      return getNodeText(children.props.children);
    }
    return '';
  } catch (error) {
    console.error('Error processing MDX heading children:', error);
    return '';
  }
};

const BlogHeading = ({ level, className = '', children, ...delegated }) => {
  const Component = `h${level}`;
  const textContent = getNodeText(children);
  const id = headingToId(textContent) || 'unknown-heading';

  // Debugging log to check if IDs are generated correctly
  console.log(`Rendering heading: ${textContent}, ID: ${id}`);

  return (
    <Component id={id ?? 'unknown'} className={className} {...delegated}>
      {children}
    </Component>
  );
};

export default BlogHeading;
