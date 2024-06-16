interface TextInputFieldProps {
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInputField({ name, label, value, placeholder = '', onChange }: TextInputFieldProps) {
  return (
    <div className="flex gap-24 items-center text-12">
      <label htmlFor={name} className="text-grey/6 font-bold w-58">
        {label}
      </label>
      {value ? (
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          className="flex items-center w-427 h-28 rounded-4 border-1 border-grey/4 text-grey/7 px-10 focus:border-primary-500 focus:outline-none"
          onChange={onChange}
        />
      ) : (
        <input
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          className="flex items-center w-427 h-28 rounded-4 border-1 border-grey/4 text-grey/7 px-10 focus:border-primary-500 focus:outline-none"
          onChange={onChange}
        />
      )}
    </div>
  );
}
