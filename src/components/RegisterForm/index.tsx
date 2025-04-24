import Link from "next/link";
import Input from "../Input";

const RegisterForm: React.FC = () => {
  return (
    <section className="w-[58.4%] min-h-240 h-screen text-Grey-900 py-8 px-10 flex justify-center items-center ">
      <form className="rounded-xl bg-White p-8 min-w-140">
        <h2 className="text-preset-1 mb-8">Sign Up</h2>
        <div id="register-fields" className="flex flex-col gap-4 mb-8">
          <Input labelText="Name" name="name" required />
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
        <button
          type="submit"
          className="bg-Grey-900 text-White w-full p-4 rounded-lg text-preset-4 cursor-pointer text-center mb-8"
        >
          Create Account
        </button>
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
