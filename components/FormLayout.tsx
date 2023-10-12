import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import DropDown from "@/components/common/DropDown";
type Props = {};

const FormLayout = (props: Props) => {
  return (
    <form className="flex flex-col items-start gap-8 mt-10 w-[500px]">
      <Input
        lable="Title"
        placeholder="give title for bug..."
        type="text"
        componentType
      />
      <Input
        lable="Description"
        placeholder="give detail description for bug..."
        type="text"
        componentType={false}
      />
      <DropDown />
      <Input
        lable="Link"
        placeholder="www.buglink.com"
        type="text"
        componentType
      />
      <Button text="Continue..." type="submit" />
    </form>
  );
};

export default FormLayout;
