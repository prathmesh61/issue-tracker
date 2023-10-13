"use client";

type Props = {
  lable: string;
  placeholder: string;
  setvalue: (value: string) => void;
};

const Textarea = ({ lable, placeholder, setvalue }: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full ">
      <label htmlFor="description" className="text-md font-medium">
        {lable} :-
      </label>
      <textarea
        rows={5}
        cols={50}
        name="description"
        onChange={(e) => setvalue(e.target.value)}
        placeholder={placeholder}
        className="border-2 border-zinc-400 rounded-md text-sm shadow-md p-2"
      />
    </div>
  );
};

export default Textarea;
