import ActionButtonGray from '../button/ActionButtonGray';
import ActionButtonSkyBlue from '../button/ActionButtonSkyBlue';

interface TextInputFieldProps {
  name: string;
  placeholder: string;
  buttonText: string;
}

export default function TextInputField({ name, placeholder, buttonText }: TextInputFieldProps) {
  return (
    <div className="flex flex-col gap-20">
      <label htmlFor={name} className="text-18 font-bold text-grey/7">
        URL 입력
      </label>
      <div className="flex gap-16">
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className="grow border-1 border-grey/4 rounded-4 h-54 px-24 focus:border-primary-500 
          text-grey/7 placeholder-text-grey/5"
        />
        <ActionButtonSkyBlue text={buttonText} size="h-54 w-150" />
      </div>
    </div>
  );
}
