import { createPortal } from 'react-dom';
import ActionButtonGray from '../button/ActionButtonGray';
import ActionButton from '../button/ActionButton';
import Image from 'next/image';

interface ModalChooseProps {
  title: string;
  description?: string;
  addDescription?: string;
  leftButtonText: string;
  rightButtonText: string;
  onClick?: () => void; // 확인 버튼 눌렀을때
  onCancle?: () => void; // 취소 버튼을 눌렀을때
  onClose: () => void; // 닫기
}

export default function ModalChoose({
  title,
  description,
  addDescription,
  leftButtonText,
  rightButtonText,
  onClick,
  onCancle,
  onClose,
}: ModalChooseProps) {
  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 flex justify-center items-center h-full w-full bg-overlay z-overlay">
      <div className="relative flex flex-col items-center gap-80 pt-60 pb-40 w-700 z-modal bg-white shadow-2xl rounded-4">
        <div className="flex flex-col gap-40 text-grey/7 text-center text-18">
          <h2 className="text-26 font-bold">{title}</h2>
          <div className="flex flex-col">
            {description}
            <span>{addDescription}</span>
          </div>
        </div>
        <div className="flex gap-30">
          <ActionButtonGray
            text={leftButtonText ? leftButtonText : '취소'}
            size="w-233 h-54"
            onClick={onCancle ? onCancle : onClose}
          />
          <ActionButton
            text={rightButtonText ? rightButtonText : '확인'}
            size="w-233 h-54"
            onClick={onClick ? onClick : onClose}
          />
        </div>
        <button className="absolute -right-52 top-0 w-48 h-48" onClick={onClose}>
          <Image fill src="/images/modal-close.svg" alt="모달창 닫기 버튼" />
        </button>
      </div>
    </div>,
    document.body
  );
}
