"use client";

import { logout } from "@/app/services/authentication/api";
import { AlignJustify } from "lucide-react";
import { useRouter } from "next/navigation";
//@ts-ignore
import store from "store";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      store.clearAll();
      router.push("/login");
    } catch (error) {
      console.log("Error logout", error);
    }
  };

  return (
    <>
      <div data-theme="emerald" className="navbar bg-base-200 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">UltimatePOS</a>
          <label htmlFor="my-drawer-2" className="btn bt-sm btn-ghost drawer-button lg:hidden">
            <AlignJustify />
          </label>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
