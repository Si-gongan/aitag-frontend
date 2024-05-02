import { createPortal } from 'react-dom';
import ActionButtonGray from '../button/ActionButtonGray';
import ActionButton from '../button/ActionButton';

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
      <div className="flex flex-col items-center gap-80 pt-60 pb-40 w-700 z-modal bg-white shadow-2xl rounded-4">
        <div className="flex flex-col gap-40 text-grey/7 text-center text-18">
          <h2 className="text-26 font-bold">{title}</h2>
          <div className="flex flex-col">
            {description}
            <span>{addDescription}</span>
          </div>
        </div>
        <div className="flex gap-30">
          <ActionButtonGray text={leftButtonText} size="w-233 h-54" onClick={onCancle ? onCancle : onClose} />
          <ActionButton text={rightButtonText} size="w-233 h-54" onClick={onClick ? onClick : onClose} />
        </div>
      </div>
    </div>,
    document.body
  );
}
