/**
 * Toast Helper Utilities
 * Replicates the custom toast functionality from Bubble workflows
 */

import { toast, ToastOptions } from 'react-toastify';
import { AlertType, ToastParams } from '../types';

const defaultDuration = 3000; // 3 seconds

/**
 * Show custom toast based on alert type
 * Replicates: "Alerts general" custom event from Bubble
 */
export const showAlert = ({
  title,
  content = '',
  time = defaultDuration,
  alertType = 'information',
  showOnLive = true,
}: ToastParams): void => {
  // Check if we should show the toast
  if (!showOnLive) {
    return;
  }

  const message = content || title;

  const baseOptions: ToastOptions = {
    position: 'top-center',
    autoClose: time || defaultDuration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  switch (alertType) {
    case 'error':
      toast.error(message, {
        ...baseOptions,
        style: {
          backgroundColor: '#FFFFFF',
          color: '#EF4444',
        },
        progressStyle: {
          backgroundColor: '#EF4444',
        },
      });
      break;

    case 'information':
      toast.info(message, {
        ...baseOptions,
        style: {
          backgroundColor: '#FFFFFF',
          color: '#3B82F6',
        },
        progressStyle: {
          backgroundColor: '#3B82F6',
        },
      });
      break;

    case 'warning':
      toast.warning(message, {
        ...baseOptions,
        style: {
          backgroundColor: '#FFFFFF',
          color: '#F6DA3B',
        },
        progressStyle: {
          backgroundColor: '#F6DA3B',
        },
      });
      break;

    case 'success':
      toast.success(message, {
        ...baseOptions,
        style: {
          backgroundColor: '#FFFFFF',
          color: '#22C55E',
        },
        progressStyle: {
          backgroundColor: '#22C55E',
        },
      });
      break;

    case 'empty':
    default:
      toast(message, {
        ...baseOptions,
        style: {
          backgroundColor: '#FFFFFF',
          color: '#454444',
        },
        progressStyle: {
          backgroundColor: '#3B82F6',
        },
      });
      break;
  }
};

/**
 * Show error toast
 */
export const showError = (title: string, content?: string, time?: number): void => {
  showAlert({
    title,
    content,
    time,
    alertType: 'error',
    showOnLive: true,
  });
};

/**
 * Show info toast
 */
export const showInfo = (title: string, content?: string, time?: number): void => {
  showAlert({
    title,
    content,
    time,
    alertType: 'information',
    showOnLive: true,
  });
};

/**
 * Show warning toast
 */
export const showWarning = (title: string, content?: string, time?: number): void => {
  showAlert({
    title,
    content,
    time,
    alertType: 'warning',
    showOnLive: true,
  });
};

/**
 * Show success toast
 */
export const showSuccess = (title: string, content?: string, time?: number): void => {
  showAlert({
    title,
    content,
    time,
    alertType: 'success',
    showOnLive: true,
  });
};
