'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface MonthContextType {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
}

const MonthContext = createContext<MonthContextType | undefined>(undefined);

export function MonthProvider({ children }: { children: ReactNode }) {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5)); // Junho 2026

  return (
    <MonthContext.Provider value={{ currentDate, setCurrentDate }}>
      {children}
    </MonthContext.Provider>
  );
}

export function useMonth() {
  const context = useContext(MonthContext);
  if (!context) {
    throw new Error('useMonth must be used within a MonthProvider');
  }
  return context;
}
