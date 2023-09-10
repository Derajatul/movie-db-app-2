"use client"

import { useState, createContext, useContext } from 'react';

export const QueryContext = createContext();

export const QueryProvider = ({ children }: {children: React.ReactNode}) => {
  const [query, setQuery] = useState('one piece');

  const handleSubmit = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <QueryContext.Provider value={{ query, handleSubmit }}>
      {children}
    </QueryContext.Provider>
  );
};

export const useQuery = () => {
  return useContext(QueryContext);
};
