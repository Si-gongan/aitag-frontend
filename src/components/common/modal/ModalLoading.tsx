import { ReactNode } from 'react';

interface LoadingProps {
  children: ReactNode;
}

export default function ModalLoading({ children }: LoadingProps) {
  return (
    <div className="fixed bottom-24 right-24 flex justify-center items-center px-40 h-60 z-modal bg-primary-500 rounded-4 text-white font-bold">
      {children}
    </div>
  );
}
