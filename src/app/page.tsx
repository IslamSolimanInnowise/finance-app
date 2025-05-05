import SignOutButton from "@/components/SignOutButton";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl">This is an authorized Dashboard</h1>
      <SignOutButton />
    </div>
  );
};
export default Dashboard;
