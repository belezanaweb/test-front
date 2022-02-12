import React, { createContext, useCallback, useState, useContext } from 'react';
import { v4 } from 'uuid';
import Toast from '../components/Toast';

import { ToastMessageState, ToastMessage, ToastContextData } from '../interfaces/ToastInterface';

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

function ToastProvider({ children }: any) {
  const [messages, setMessages] = useState<ToastMessageState[]>([]);

  const addToast = ({ type, title, description }: ToastMessage) => {
    const toast = {
      id: v4(),
      type,
      title,
      description
    };

    setMessages((state) => [...state, toast]);
  };

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}

      <Toast messages={messages} />
    </ToastContext.Provider>
  );
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastPRovider');
  }

  return context;
}

export { ToastProvider, useToast };
