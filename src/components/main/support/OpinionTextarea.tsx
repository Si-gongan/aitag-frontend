interface OpinionTextareaProps {
  name: string;
  label: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength: number;
  count: number;
}

export default function OpinionTextarea({
  name,
  label,
  placeholder = '',
  onChange,
  maxLength,
  count,
}: OpinionTextareaProps) {
  return (
    <div className="flex gap-24 text-12">
      <label htmlFor={name} className="text-grey/6 font-bold w-58">
        {label}
      </label>
      <div className="flex flex-col gap-7">
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          className="w-427 h-170 rounded-4 border-1 border-grey/4 text-grey/7 p-10 focus:border-primary-500 focus:outline-none resize-none placeholder:text-[#9A9A9A}"
          onChange={onChange}
        />
        <p className="text-10 text-grey/6">{count}자 입력 / 최대 1000자</p>
      </div>
    </div>
  );
}
