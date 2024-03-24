'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const LinkComponent = ({
  href,
  children,
  as: Component = 'Link',
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const modifiedChildren = React.Children.toArray(children).map(
    (child, index) => {
      // Check if the current child is the first one
      if (index === 0) {
        // Clone the first child and add the isHovered prop
        return React.cloneElement(child, { isHovered: isHovered, key: index }); // Add any additional props as needed here
      }
      // For other children, return them as they are
      return child;
    }
  );

  const ElementType = Component === 'Link' ? Link : Component;

  return (
    <Link
      href={href}
      className="flex gap-1 items-center group w-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {modifiedChildren}
    </Link>
  );
};

export default LinkComponent;
