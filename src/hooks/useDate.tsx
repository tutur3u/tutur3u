import { createContext, ReactNode, useContext, useState } from 'react';

export const DateContext = createContext({
  date: new Date(),
  isToday: () => true,
});

export const DateProvider = ({ children }: { children: ReactNode }) => {
  const [date, setDate] = useState(new Date());

  const isToday = () => {
    const today = new Date();
    return date?.toDateString() === today.toDateString();
  };

  const values = {
    date,
    isToday,
  };

  return (
    <DateContext.Provider values={values}>{children}</DateContext.Provider>
  );
};

export const useDay = () => {
  // Get the current context
  const context = useContext(DateContext);

  // Throw an error if context is not provided
  //? This will happen if the component is not wrapped in SidebarProvider
  if (context === undefined)
    throw new Error('useSidebar() must be used within a SidebarProvider.');

  return context;
};
