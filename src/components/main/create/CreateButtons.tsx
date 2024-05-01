import ActionButton from '@/components/common/button/ActionButton';
import ActionButtonGray from '@/components/common/button/ActionButtonGray';

interface CreateButtonsProps {
  setProgressStage: React.Dispatch<React.SetStateAction<string>>;
}

export default function CreateButtons({ setProgressStage }: CreateButtonsProps) {
  return (
    <div className="flex gap-20 w-full">
      <ActionButtonGray text="AI 생성" size="h-54 w-1/2 text-15" />
      <ActionButton text="해설진 작성" size="h-54 w-1/2 text-15" onClick={() => setProgressStage('two')} />
    </div>
  );
}
