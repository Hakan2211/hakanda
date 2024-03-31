'use client';

import { createContext, useContext, useState } from 'react';

const PageTitleContext = createContext();

export function usePageTitle() {
  return useContext(PageTitleContext);
}

export function PageTitleProvider({ children }) {
  const [title, setTitle] = useState('');

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
}
