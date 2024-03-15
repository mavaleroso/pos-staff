import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Sidebar = ({ children }: Props) => {
  return (
    <>
      <div data-theme="emerald" className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">{children}</div>
        <div className="drawer-side shadow-md">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 min-h-full bg-base-100 text-base-content">
            <li className="font-semibold bg-base-200 rounded-md">
              <a>Dashboard</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
