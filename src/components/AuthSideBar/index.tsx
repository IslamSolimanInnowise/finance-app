import Image from "next/image";
import Logo from "@/../public/Logo.png";
const AuthSideBar: React.FC = () => {
  return (
    <aside className="min-h-full bg-Grey-900 w-75 border-r-[1px] rounded-r-2xl text-Grey-300 pr-6 pb-6">
      <header className="h-[101.76px] flex items-center justify-start pl-8 mb-6">
        <Image src={Logo} alt="Logo" className="object-cover" />
      </header>
      <nav>
        <ul></ul>
      </nav>
    </aside>
  );
};
export default AuthSideBar;
