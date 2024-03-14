import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Components/Landing";
import Dashboard from "./Components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <KindeProvider
      clientId="2fb229b1753d4c66be82cf94e6427334"
      domain="https://vexar.kinde.com"
      logoutUri="http://localhost:5173"
      redirectUri="http://localhost:5173/dashboard"
    >
      <RouterProvider router={router} />
    </KindeProvider>
  );
}

export default App;
