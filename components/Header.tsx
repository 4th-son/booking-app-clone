"use client";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChatBubbleLeftIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/16/solid";
import { ChevronDownIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import { Fragment, useState } from "react";

const products = [
  {
    name: "Book a stay",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Book a flight",
    description: " Speak directly to your customers",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "contact our support team",
    description: "your customers data will be safe and secure",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
];

const callsToAction = [
  { name: "see demo booking", href: "#", icon: PlayCircleIcon },
  { name: "Contact support", href: "#", icon: PhoneIcon },
];
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
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Stays
              <ChevronDownIcon
                className=" h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter=" trasition ease-out duration-200"
              enterFrom=" opacity-0 translate-y-1"
              enterTo=" opacity-100 translate-y-0"
              leave=" transition ease-in duration-150"
              leaveFrom=" opacity-100 translate-y-0"
              leaveTo=" opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                    >
                      <div className=" h-11 w-11 flex-none flex items-center gap-x-6 rounded-lg p-4 bg-gray-50 hover:bg-gray-200">
                        <item.icon className=" h-6 w-6 text-[#013894]" />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-[#013894]"
                        >
                          {item.name}
                          <span className=" absolute inset-1" />
                        </a>
                        <p className=" mt-1 text-[#013894]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013894] hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 float-none text-[#013894]"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a href="#" className=" text-sm font-semibold leading-6 text-white">
            {" "}
            Flights
          </a>
          <a href="#" className=" text-sm font-semibold leading-6 text-white">
            {" "}
            Car Rentals
          </a>
          <a href="#" className=" text-sm font-semibold leading-6 text-white">
            {" "}
            Attraction
          </a>
          <a href="#" className=" text-sm font-semibold leading-6 text-white">
            {" "}
            Flight + Hotel
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className=" text-sm font-semibold leading-6 text-white">
            Login <span aria-hidden="true">&rrar;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
