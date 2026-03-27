type ButtonType = {
  title: string;
  variant?: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, variant = "default", ...props }: ButtonType) => {
  const buttonVariant = () => {
    if (variant === "default") {
      return "w-full cursor-pointer rounded-md border-2 border-[#C92A0e] bg-[#C92A0e] py-2 text-sm font-bold text-white";
    } else if (variant === "outline") {
      return "w-full cursor-pointer rounded-md border-2 border-[#C92A0e] bg-[white] py-2 text-sm font-bold text-[#C92A0e]";
    }
  };

  return (
    <button {...props} className={buttonVariant()}>
      {title}
    </button>
  );
};

export default Button;
