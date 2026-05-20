import { CircleAlert } from "lucide-react";

function InputContainer({ inputTitle, errorMsg, children }) {
  return (
    <div className="flex flex-col mb-7">
      <label htmlFor={inputTitle} className="font-semibold">
        {inputTitle}
      </label>
      {children}
      {errorMsg && (
        <div className="error-msg flex items-center gap-1 text-[14px] text-[#D80000] font-normal">
          <CircleAlert size={13} />
          <p>{errorMsg?.message}</p>
        </div>
      )}
    </div>
  );
}

export default InputContainer;
