import { TOAST_INFO } from '@/utils/constants';
import Image from 'next/image';

interface ToastProps {
  type?: string; // danger, success, info
  text: string;
  size?: string;
  onClose?: () => void;
}

export default function Toast({ type = 'danger', text, size, onClose }: ToastProps) {
  const typeData = TOAST_INFO.find((info) => info.type === type);

  if (!typeData) return;

  return (
    <div
      className={`flex items-center justify-between px-15 rounded-t-0 rounded-b-6 ${typeData?.style} ${size ? size : 'h-53 w-full'}`}>
      <div className="flex items-center gap-11">
        <Image src={typeData.imageUrl} width={24} height={24} alt="경고 아이콘" />
        {text}
      </div>
      <Image src="/images/toast-close.svg" width={24} height={24} alt="닫힘 아이콘 버튼" onClick={onClose} />
    </div>
  );
}
