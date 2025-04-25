import Link from "next/link";
import Input from "../Input";

const LoginForm = () => {
  return (
    <section className="w-[58.4%] min-h-240 h-screen text-Grey-900 py-8 px-10 flex justify-center items-center ">
      <form className="rounded-xl bg-White p-8 min-w-140">
        <h2 className="text-preset-1 mb-8">Sign Up</h2>
        <div id="register-fields" className="flex flex-col gap-4 mb-8">
          <Input labelText="Email" type="email" name="email" required />
          <Input
            labelText="Password"
            type="password"
            name="password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-Grey-900 text-White w-full p-4 rounded-lg text-preset-4 cursor-pointer text-center mb-8"
        >
          Login
        </button>
        <p className="text-center text-preset-4 text-Grey-500">
          Need to create an account?{" "}
          <Link href="/" className="text-Grey-900 underline text-preset-4-bold">
            Sign Up
          </Link>
        </p>
      </form>
    </section>
  );
};

export default LoginForm;
