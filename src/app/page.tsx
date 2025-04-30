"use client";
import { auth } from "@/firebase";
import { Button } from "@/shadcn/components/ui/button";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Clear the auth cookie
      document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      router.replace("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl">This is an authorized Dashboard</h1>
      <Button
        onClick={handleSignOut}
        className="bg-Secondary-Red hover:bg-opacity-90 transition-all duration-300"
      >
        Sign Out
      </Button>
    </div>
  );
};
export default Dashboard;
