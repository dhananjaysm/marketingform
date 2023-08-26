import {  useState } from "react";
import { useAuthStore } from "../context/authStore";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { user, signout } = useAuthStore();
  let navigate = useNavigate();
  const navigation = [
    {
      href: "/dashboard",
      name: "Submissions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
          />
        </svg>
      ),
    },
  ];

  const navsFooter = [
    {
      onClick: undefined as (() => void) | undefined,
      name: "Settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  // const profileRef = useRef();

  const [isProfileActive, setIsProfileActive] = useState(false);

  // useEffect(() => {
  //   const handleProfile = (e: any) => {
  //     // if (profileRef.current && !profileRef.current.contains(e.target)) setIsProfileActive(false)
  //   };
  //   document.addEventListener("click", handleProfile);
  // }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 hidden w-full h-full space-y-8 bg-white border-r sm:block sm:w-80">
        <div className="flex flex-col h-full px-4">
          <div className="flex items-center h-20 pl-2">
            <div className="flex items-center w-full gap-x-4">
              <img
                src="https://www.kindpng.com/picc/m/722-7221920_placeholder-profile-image-placeholder-png-transparent-png.png"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="block text-sm font-semibold text-gray-700">
                  {user?.toLocaleUpperCase()}
                </span>
              </div>
              <div className="relative flex-1 text-right">
                <button
                  className="p-1.5 rounded-md text-gray-500 hover:bg-gray-50 active:bg-gray-100"
                  onClick={() => setIsProfileActive(!isProfileActive)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isProfileActive ? (
                  <div className="absolute right-0 z-10 w-64 text-sm text-gray-600 bg-white border rounded-lg shadow-md top-12">
                    <div className="p-2 text-left">
                      <span className="block p-2 text-gray-500/80">
                        Profile
                      </span>

                      <button
                        onClick={() => signout(() => navigate("/"))}
                        className="block w-full p-2 text-left duration-150 rounded-md hover:bg-gray-50 active:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="overflow-auto">
            <ul className="flex-1 text-sm font-medium">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="flex items-center p-2 text-gray-600 duration-150 rounded-lg gap-x-2 hover:bg-gray-50 active:bg-gray-100"
                  >
                    <div className="text-gray-500">{item.icon}</div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2 mt-2 border-t">
              <ul className="text-sm font-medium">
                {navsFooter.map((item, idx) => (
                  <li key={idx}>
                    <button
                      disabled
                      title="Button is disabled"
                      onClick={item.onClick}
                      className="flex items-center p-2 text-gray-600 duration-150 rounded-lg cursor-not-allowed gap-x-2 hover:bg-gray-50 active:bg-gray-100"
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
