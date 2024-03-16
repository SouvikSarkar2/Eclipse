import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Components/Landing";
import RootLayout from "./Components/RootLayout";
import {
  MusicLayout,
  Home,
  Album,
  Track,
  Genre,
  Artist,
} from "./Components/Music";
import Video from "./Components/Video/Video";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "root",
    element: <RootLayout />,
    children: [
      {
        path: "music",
        element: <MusicLayout />,
        children: [
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "album",
            element: <Album />,
          },
          {
            path: "track",
            element: <Track />,
          },
          {
            path: "genre",
            element: <Genre />,
          },
          {
            path: "artist",
            element: <Artist />,
          },
        ],
      },
      {
        path: "video",
        element: <Video />,
      },
    ],
  },
]);
function App() {
  return (
    <KindeProvider
      clientId="2fb229b1753d4c66be82cf94e6427334"
      domain="https://vexar.kinde.com"
      logoutUri="http://localhost:5173"
      redirectUri="http://localhost:5173/root/music/home"
    >
      <RouterProvider router={router} />
    </KindeProvider>
  );
}

export default App;
