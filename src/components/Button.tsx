import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon: string | undefined;
  variant: string;
  full?: boolean;
};

const button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && `w-full`
      }`}
    >
      {icon && <Image src={icon} alt="icon" width={20} height={20} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default button;
