import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon: string;
  variant: "btn_dark_green";
};

const button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt="icon" width={20} height={20} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default button;
