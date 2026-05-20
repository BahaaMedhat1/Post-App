import { Check } from "lucide-react";

function SuccessMsg() {
  return (
    <div className="flex justify-center items-center gap-2 text-white bg-[#1A1A1A] py-2 w-[40%] rounded-md self-end mr-4 ">
      <Check className="text-green-500" />
      <p className="text-[14px] font-normal ">
        A new post has been successfully created!
      </p>
    </div>
  );
}

export default SuccessMsg;
