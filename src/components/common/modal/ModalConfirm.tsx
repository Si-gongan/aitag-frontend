import Image from 'next/image';
import { createPortal } from 'react-dom';
import ActionButtonGray from '../button/ActionButtonGray';
import { useRouter } from 'next/navigation';

interface ModalConfirm {
  title: string;
  description?: string;
  style?: string; // width, height 등
  buttonText?: string;
  onClick?: () => void;
  onClose?: () => void;
}

export default function ModalConfirm({ title, description, style, buttonText, onClick, onClose }: ModalConfirm) {
  const router = useRouter();
  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 flex justify-center items-center h-full w-full bg-overlay z-overlay">
      <div
        onClick={(event) => event.stopPropagation()}
        className={`relative flex flex-col items-center pt-70 pb-60 gap-40 z-modal bg-white shadow-2xl rounded-4 ${
          style ? style : 'w-700'
        }`}>
        <Image src="/images/Icon-check.svg" alt="체크 아이콘" width={100} height={100} />
        <div className="flex flex-col gap-14 text-grey/7 text-center">
          <h2 className="text-27 font-bold text-center">{title}</h2>
          {description}
        </div>
        <ActionButtonGray
          text={buttonText ? buttonText : '확인'}
          size="w-275 h-70 text-17"
          onClick={onClick ? onClick : onClose}
        />
        <button className="absolute -right-52 top-0 w-48 h-48" onClick={onClose}>
          <Image fill src="/images/modal-close.svg" alt="모달창 닫기 버튼" />
        </button>
      </div>
    </div>,
    document.body
  );
}
