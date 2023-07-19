"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./dark-mode-toggle";

const navItems = {
  "/": {
    name: "home",
  },
  // "/tech-stack": {
  //   name: "tech",
  // },
  "/blog": {
    name: "blog",
  },
} as const;

export const PageHeader = () => {
  let pathname = usePathname() || "/";

  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <NavigationMenu className="py-8">
      <ModeToggle />
      <NavigationMenuList>
        {Object.entries(navItems).map(([path, { name }]) => (
          <NavigationMenuItem key={path}>
            <Link href={path} legacyBehavior passHref>
              <NavigationMenuLink
                active={pathname === path}
                className={cn(navigationMenuTriggerStyle(), {
                  "font-bold": pathname === path,
                })}
              >
                {name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
