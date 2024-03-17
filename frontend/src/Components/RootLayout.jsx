import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react";

const RootLayout = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const searchHandler = async (req, res) => {};

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const { user, isAuthenticated, isLoading, logout } = useKindeAuth();
  if (isLoading) {
    return <p>Loading</p>;
  }
  if (!isAuthenticated) {
    return <div>ACCESS DENIED</div>;
  }
  console.log(user);
  return (
    <div className="w-[100vw] h-[100vh] relative">
      <div className="h-[12%] rounded-lg flex justify-between items-center">
        <div className="flex items-center font-serif text-red-400 h-[15%] w-auto ml-3">
          Eclipse
        </div>

        <div className="flex p-2 gap-2 h-[37%]  w-auto items-center bg-gray-300 ">
          <Link to={"/root/music/home"}>Music</Link>
          <Link to={"/root/video"}>Video</Link>
        </div>

        {/* Search part */}
        <div className="flex items-center h-[50%] w-[37%] rounded-xl bg-[#e9ecef] p-4 ">
          <button className="text-center" onClick={searchHandler}>
            <Search />
          </button>
          <input
            type="text"
            className="flex w-full focus:outline-none  "
            placeholder="Search music"
          />
        </div>

        {/* User part */}
        <div className="flex items-center justify-end mr-3">
          <div className="w-40">
            <button
              onClick={toggleDropdown}
              className="flex gap-3 items-center text-grey-200 font-medium text-sm text-center"
            >
              <img
                src={user.picture}
                alt="users pic"
                className="bg-cover h-[20%] w-[20%] rounded-[50%]"
              />
              <div className=" flex items-center">
                {user.given_name}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </div>
            </button>
            {dropdownOpen && (
              <div className="absolute z-10 right-24 top-[8%] w-auto bg-white divide-y divide-gray-100 rounded-lg shadow-lg">
                <ul>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                  </li>
                </ul>
                <button className="py-2 w-full" onClick={logout}>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </a>
                </button>
              </div>
            )}
          </div>
          <div className="h-[10%] w-[40%] text-sm text-center bg-red-300">
            mode
          </div>
        </div>
      </div>

      <div className="h-[88%] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
