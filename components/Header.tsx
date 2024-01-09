"use client";
import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className=" bg-[#003b95]">
      <nav
        className=" flex mx-auto max-w-7xl items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex flex-1">
          {" "}
          <Link href="/" className="-m-1.5 p-1.5">
            <span className=" sr-only">Booking.com</span>
            <img
              className=" h-14 w-auto"
              src="https://www.workingmums.co.uk/wp-content/uploads/2023/11/Booking_Com_Logotype_Aug2020_White_Blue-BG.png"
              alt=""
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className=" inline-flex  items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            {" "}
            <span className=" sr-only">Open Main Menu</span>
            <Bars3Icon className=" h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
