/* eslint-disable no-unused-vars */
export interface ToastMessageState {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

export interface ToastMessage {
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

export interface ToastContextData {
  addToast(message: ToastMessage): void;
  removeToast(id: string): void;
}
