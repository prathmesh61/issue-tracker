"use client";

type Props = {
  type: string;
  lable: string;
  placeholder: string;
  setvalue: (value: string) => void;
};

function Input({ lable, placeholder, type, setvalue }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full ">
      <label className="text-md font-medium">{lable} :-</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => setvalue(e.target.value)}
        className="border-2 border-zinc-400 rounded-md text-sm shadow-md  p-2"
      />
    </div>
  );
}

export default Input;
