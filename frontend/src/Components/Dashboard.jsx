import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Dashboard = () => {
  const { user, isAuthenticated, isLoading, logout } = useKindeAuth();
  if (isLoading) {
    return <p>Loading</p>;
  }
  if (!isAuthenticated) {
    return <div>ACCESS DENIED</div>;
  }
  console.log(user);

  return (
    <div className="flex w-[100vw] h-[100vh] bg-sky-400 justify-center text-bold text-3xl items-center gap-2">
      <div>Hi {user.given_name}!</div>
      <button
        onClick={() => logout()}
        className="bg-black p-2 font-bold rounded-md text-sm text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
