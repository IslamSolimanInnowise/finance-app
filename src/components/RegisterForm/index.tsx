"use client";
import Link from "next/link";
import Input from "../Input";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/shadcn/components/ui/button";

const RegisterForm: React.FC = () => {
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formDataObject = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formDataObject.email,
        formDataObject.password
      );

      console.log(userCredential);

      alert(
        "Congratulations! You have successfully registered. \n Time to login ;)"
      );

      router.push("/login");
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
        onSubmit={handleSignUp}
      >
        <h2 className="text-preset-1 mb-8">Sign Up</h2>
        <div id="register-fields" className="flex flex-col gap-4 mb-8">
          <Input labelText="Email" type="email" name="email" required />
          <Input
            labelText="Create Password"
            type="password"
            name="password"
            required
          >
            <p className="text-preset-5 text-right text-Grey-500">
              Passwords must be at least 8 characters
            </p>
          </Input>
        </div>
        <Button>Create Account</Button>
        <p className="text-center text-preset-4 text-Grey-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-Grey-900 underline text-preset-4-bold"
          >
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};
export default RegisterForm;
