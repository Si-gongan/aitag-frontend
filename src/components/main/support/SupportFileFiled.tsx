interface SupportFileFiledProps {
  name: string;
  label: string;
  description?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SupportFileFiled({ name, label, description, onChange }: SupportFileFiledProps) {
  return (
    <div className="flex gap-24 items-center">
      <h3 className="text-grey/6 font-bold w-58">{label}</h3>
      <div className="flex flex-col gap-8 w-500">
        <label
          htmlFor={name}
          className="flex justify-center items-center w-147 h-30 text-grey/4 font-medium rounded-4 border-1 border-grey/4 cursor-pointer text-12">
          파일첨부
        </label>
        <input type="file" id={name} name={name} className="hidden" multiple onChange={onChange} />
        {description && (
          <p className="block text-12 text-grey/6">파일명은 -,_를 제외한 특수문자는 허용되지 않습니다.</p>
        )}
      </div>
    </div>
  );
}
