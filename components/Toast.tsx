import React, { useEffect } from 'react';

export type ToastType = 'info' | 'error' | 'success' | 'warning';

type Props = {
  message: string;
  type: ToastType;
  isVisible: boolean;
  onClose: () => void;
};

export const Toast: React.FC<Props> = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(onClose, 4000);
      return () => clearTimeout(t);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const bg = type === 'error' ? 'bg-rose-500' : type === 'success' ? 'bg-emerald-500' : 'bg-indigo-600';

  return (
    <div className={`fixed right-4 bottom-6 px-4 py-2 text-white rounded shadow ${bg}`}>
      <div className="flex items-center gap-3">
        <div className="font-medium">{message}</div>
        <button onClick={onClose} className="opacity-80">✕</button>
      </div>
    </div>
  );
};

export default Toast;
