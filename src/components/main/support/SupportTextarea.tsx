interface SupportTextareaProps {
  name: string;
  label: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function SupportTextarea({ name, label, placeholder = '', onChange }: SupportTextareaProps) {
  return (
    <div className="flex gap-24">
      <label htmlFor={name} className="text-grey/6 font-bold w-58">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className="w-500 h-200 rounded-4 border-1 border-grey/4 text-grey/7 p-10 focus:border-primary-500 focus:outline-none resize-none placeholder:text-[#9A9A9A}"
        onChange={onChange}
      />
    </div>
  );
}
