"use client";
import Link from "next/link";
import Input from "../Input";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

const LoginForm = () => {
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formDataObject = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formDataObject.email,
        formDataObject.password
      );

      console.log("current user is", auth.currentUser);

      // Get the ID token
      const idToken = await userCredential.user.getIdToken();

      // Set the auth cookie
      document.cookie = `auth=${idToken}; path=/; max-age=3600; secure; samesite=strict`;

      router.replace("/");
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <section className="w-[58.4%] min-h-240 h-screen text-Grey-900 py-8 px-10 flex justify-center items-center ">
      <form
        className="rounded-xl bg-White p-8 min-w-140"
        onSubmit={handleLogin}
      >
        <h2 className="text-preset-1 mb-8">Sign In</h2>
        <div id="register-fields" className="flex flex-col gap-4 mb-8">
          <Input labelText="Email" type="email" name="email" required />
          <Input
            labelText="Password"
            type="password"
            name="password"
            required
          />
        </div>
        <Button type="submit">Login</Button>
        <p className="text-center text-preset-4 text-Grey-500">
          Need to create an account?{" "}
          <Link
            href="/register"
            className="text-Grey-900 underline text-preset-4-bold"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </section>
  );
};

export default LoginForm;
