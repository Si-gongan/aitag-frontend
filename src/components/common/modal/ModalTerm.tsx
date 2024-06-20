import Image from 'next/image';
import { createPortal } from 'react-dom';
import { POLICY_SERVICE } from '@/utils/policy';
import ActionButton from '../button/ActionButton';

interface ModalTermProps {
  onClose: () => void;
}

export default function ModalTerm({ onClose }: ModalTermProps) {
  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 flex justify-center items-center h-full w-full bg-overlay z-overlay">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col items-center p-40 gap-40 z-modal bg-white shadow-2xl rounded-4 w-700 h-600">
        <h1 className="text-22 font-bold">에이택 웹사이트 이용약관</h1>
        <div className="flex flex-col gap-40 h-400 overflow-y-scroll scroll-block">
          <div className="flex flex-col gap-12 text-14">
            {POLICY_SERVICE.map((policy) => (
              <div key={policy.title}>
                <h3 className="font-bold mb-4">{policy.title}</h3>
                {policy.content.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <ActionButton text="확인" size="w-120 h-48 text-16" onClick={onClose} />
        <button className="absolute -right-52 top-0 w-48 h-48" onClick={onClose}>
          <Image fill src="/images/modal-close.svg" alt="모달창 닫기 버튼" />
        </button>
      </div>
    </div>,
    document.body
  );
}
