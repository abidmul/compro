import Link from "next/link";
import { FaKitchenSet } from "react-icons/fa6";


export default function Navbar() {
  return (
    <div className=" flex fixed z-[5]  navbar bg-gray-900 text-slate-50 p-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-400 rounded-box w-52"
          >
            <li>
              <Link href="/">HOME PAGE</Link>
            </li>
            <li>
              <Link href="/about_us">ABOUT US</Link>
            </li>
            <li>
              <Link href="/services">SERVICES</Link>
            </li>
            <li>
              <Link href="/teams">TEAMS</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><sup>Kit</sup>Mul</a>
        <FaKitchenSet className="w-10 h-10"/>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">HOME PAGE</Link>
          </li>
          <li>
            <Link href="/about_us">ABOUT US</Link>
          </li>
          <li>
            <Link href="/services">SERVICES</Link>
          </li>
          <li>
            <Link href="/teams">TEAMS</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="px-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-ghost w-full max-w-xs max-sm:max-md:hidden"
          />
        </div>
        <div className="max-sm:max-md:align-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
