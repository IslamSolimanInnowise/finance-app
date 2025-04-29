import RegisterForm from "@/components/RegisterForm";
import SideBar from "@/components/Sidebar";

const HomePage: React.FC = () => {
  return (
    <main className="bg-Beige-100 min-h-screen flex">
      <SideBar />
      <RegisterForm />
    </main>
  );
};
export default HomePage;
