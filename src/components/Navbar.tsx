"use client";

import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconUser, IconDeviceLaptop, IconAddressBook} from "@tabler/icons-react";

function Navbar(){
    const navItems = [
        {
          name: "Home",
          section: "home",
          icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "About Me",
          section: "about",
          icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Projects",
          section: "projects",
          icon: (
            <IconDeviceLaptop className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
        {
          name: "Contact",
          section: "contact",
          icon: (
            <IconAddressBook className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
      ];
    return (<div className="relative  w-full">
        <FloatingNav navItems={navItems} />
      </div>)
}

export default Navbar;