import Image from "next/image";
import Logo from "@/../public/Logo.png";

const SideBar: React.FC = () => {
  return (
    <aside className="p-5 w-[41.6%] min-h-240 h-screen">
      <div className="h-full w-full p-10 rounded-xl bg-[url('/Login-and-Signup-Illustration-Image.svg')] bg-cover bg-top bg-no-repeat flex flex-col justify-between">
        <Image src={Logo} alt="Logo" className="object-cover" />
        <div className="text-white flex flex-col gap-6 bg-[#0307126e] p-2 rounded-xl">
          <h1 className="text-preset-1">
            Keep track of your money and save for your future
          </h1>
          <p className="text-preset-4">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </div>
    </aside>
  );
};
export default SideBar;
