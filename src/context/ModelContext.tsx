"use client"

import { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../data/data';
import { users } from '../data/users';
import { AnimationKey } from '../components/BuchModel';

interface ModelContextType {
  selectedUser: User | null;
  selectedAnimation: AnimationKey | null;
  setSelectedUser: (user: User | null) => void;
  setSelectedAnimation: (animation: AnimationKey | null) => void;
}

const ModelContext = createContext<ModelContextType | undefined>(undefined);

export function ModelProvider({ children }: { children: ReactNode }) {
  const [selectedUser, setSelectedUser] = useState<User | null>(users.buch);
  const [selectedAnimation, setSelectedAnimation] = useState<string | null>(null);

  return (
    <ModelContext.Provider
      value={{
        selectedUser,
        selectedAnimation,
        setSelectedUser,
        setSelectedAnimation,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
}

export function useModel() {
  const context = useContext(ModelContext);

  if (context === undefined) {
    throw new Error('useModel must be used within a ModelProvider');
  }

  return context;
}
