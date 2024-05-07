import { createPortal } from 'react-dom';

export default function Modal({ onClose }) {
  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 flex justify-center items-center h-full w-full bg-overlay z-overlay">
      <div className="flex flex-col w-260 h-173 p-20 gap-16 z-modal bg-white shadow-2xl rounded-16"></div>
    </div>,
    document.body
  );
}
