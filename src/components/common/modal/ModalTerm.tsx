import { createPortal } from 'react-dom';

interface ModalTermProps {
  onClose: () => void;
}

export default function ModalTerm({ onClose }: ModalTermProps) {
  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-3/4 h-3/4 p-4 rounded-md shadow-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <iframe
          src="../../../assets/terms.hwp"
          title="서비스 이용 약관"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>,
    document.body
  );
}