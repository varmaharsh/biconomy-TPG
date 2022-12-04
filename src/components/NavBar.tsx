import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../pages/profile";
import SecHandStore from "../pages/secondHandStore";
import "../styles/index.css";

const NavBar = ({ loggedIn }: { loggedIn: boolean }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState("app");
  const handleProfileClick = () => {
    navigate(`/profile`);
    //setPage("profile");
  };
  return page.includes("profile") ? (
    <Profile />
  ) : page.includes("secHandStore") ? (
    <SecHandStore />
  ) : (
    <div className="w-full h-20 flex flex-row justify-between p-2 bg-white align-middle shadow-sm">
      <div className="container m-auto px-4 py-2 flex justify-between items-center">
        <span className="text-2xl font-bold"></span>
        {!loggedIn ? null : (
          <div className="flex flex-row items-center">
            {/* <p className="text-2xl font-bold">{`${address.slice(
              0,
              6
            )}......${address.slice(-4)}`}</p> */}

            <button
              className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-8"
              onClick={() => {
                navigate("/secHandStore");
                //setPage("secHandStore");
              }}
              // size="large"
            >
              Second Hand Store
            </button>
            <button
              onClick={handleProfileClick}
              type="button"
              className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              {/* <Avatar sx={{ bgcolor: blue[500] }} variant="rounded"> */}
              Ox...
              {/* </Avatar> */}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
