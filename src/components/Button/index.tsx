type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-Grey-900 text-White w-full p-4 rounded-lg text-preset-4 cursor-pointer text-center mb-8 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
