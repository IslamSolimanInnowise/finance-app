import LoginForm from "@/components/LoginForm";
import SideBar from "@/components/Sidebar";

const LoginPage = () => {
  return (
    <main className="bg-Beige-100 min-h-screen flex">
      <SideBar />
      <LoginForm />
    </main>
  );
};
export default LoginPage;
