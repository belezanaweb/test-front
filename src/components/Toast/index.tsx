import React, { useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi';
import { useLocation } from 'react-router';
import { useTransition, animated, easings } from 'react-spring';
import { useToast } from '../../hooks/useToast';
import { ToastMessageState } from '../../interfaces/ToastInterface';

import { ToastContent } from './styles';

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />
};

interface ToastContainerProps {
  messages: ToastMessageState[];
}

export default function Toast({ messages }: ToastContainerProps) {
  const { removeToast } = useToast();

  useEffect(() => {
    messages.forEach((message: any) => {
      const messageId = message.id;
      setTimeout(() => removeToast(messageId), 2500);
    });
  }, [removeToast, messages]);

  const messagesWithtransitions = useTransition(messages, {
    from: { top: '-20%', opacity: 0 },
    enter: { top: '1rem', opacity: 1 },
    leave: { top: '-20%', opacity: 0 },
    config: { duration: 200, easing: easings.easeInOutQuart }
  });

  return messagesWithtransitions((styles, message) => (
    <ToastContent type={message.type} style={styles}>
      {icons.error}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </ToastContent>
  ));
}
