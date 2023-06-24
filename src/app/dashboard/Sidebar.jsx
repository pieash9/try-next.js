import NavLink from "@/components/NavLink";
import Link from "next/link";

const navLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/add-product",
    title: "Add Product",
  },
  {
    path: "/dashboard/manage-product",
    title: "Manage Product",
  },
  {
    path: "/",
    title: "Home",
  },
];

const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-between items-center mr-10">
      <h1 className="text-3xl font-semibold my-5 ">Dashboard</h1>
      <ul className="flex flex-col items-center gap-1">
        {navLinks.map(({ path, title }) => (
          <li  key={path}>
            <NavLink exact activeClassName="text-blue-500" href={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
