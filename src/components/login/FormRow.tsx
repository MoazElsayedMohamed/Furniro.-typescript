import React from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface FormProps {
  id: string;
  type: string;
  label: string;
  onClick: () => void;
  showPassword: boolean;
  placeholder: string;
  inputName: string;
  minLength: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

const FormRow: React.FC<FormProps> = ({
  id,
  type,
  label,
  onClick,
  showPassword,
  placeholder,
  inputName,
  register,
}) => {
  return (
    <div className="mb-8 max-tablet:mb-4 max-phone2:mb-2">
      <div className="flex items-center justify-between ">
        <label
          htmlFor={id}
          className="text-[#666666] max-mdScreen:text-sm max-phone2:text-xs"
        >
          {label}
        </label>
        {id === "password" && (
          <div className="flex items-center gap-2">
            {showPassword ? (
              <IoMdEyeOff className="text-xl" />
            ) : (
              <IoMdEye className="text-xl" />
            )}
            <p
              className="text-[#666666CC] font-normal text-lg text-gray-500 cursor-pointer max-mdScreen:text-base max-phone2:text-sm"
              onClick={onClick}
            >
              {showPassword ? "hide" : "show"}
            </p>
          </div>
        )}
      </div>
      <input
        type={type}
        id={id}
        className="block h-16 border border-[#66666659] w-full rounded-xl outline-none p-4 my-4 max-bgScreen:my-2 max-mdScreen:h-14 max-tablet:h-12 max-tablet:my-1 max-phone2:text-xs max-phone2:h-10"
        placeholder={placeholder}
        {...register(inputName)}
      />
    </div>
  );
};

export default FormRow;
