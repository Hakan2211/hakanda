import React from 'react';
import ArrowRight from '../icons/arrow-right';

function Listcomponent({ type = 'unordered', items }) {
  const ListWrapper = type === 'unordered' ? 'ul' : 'ol';

  const ListItem = ({ children, index }) => (
    <li
      style={{
        display: 'flex',
        alignItems: 'start',
      }}
    >
      {type === 'unordered' && (
        <ArrowRight className="shrink-0 translate-y-2" />
      )}
      {type === 'ordered' && <span className="ml-1">{index + 1}. </span>}
      <span style={{ marginLeft: type === 'unordered' ? '8px' : '12px' }}>
        {children}
      </span>
    </li>
  );

  return (
    <ListWrapper className="flex flex-col leading-[2.5] tracking-[0.5px] my-4">
      {items.map((item, index) => (
        <ListItem key={index} index={index}>
          {item}
        </ListItem>
      ))}
    </ListWrapper>
  );
}

export default Listcomponent;
