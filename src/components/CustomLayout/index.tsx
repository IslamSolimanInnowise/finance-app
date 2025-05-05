"use client";
import { auth } from "@/firebase";
import AuthSideBar from "@/components/AuthSideBar";
import SideBar from "@/components/Sidebar";
import { PropsWithChildren, useEffect, useState } from "react";
import { User } from "firebase/auth";

const CustomLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Add proper loading state
  }

  return (
    <main className="bg-Beige-100 min-h-screen flex">
      {user ? <AuthSideBar /> : <SideBar />}
      {children}
    </main>
  );
};

export default CustomLayout;
