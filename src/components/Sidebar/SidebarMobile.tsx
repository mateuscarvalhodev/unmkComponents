"use client";

import { useState } from "react";
import { SideBarLink } from "./SidebarLink";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";

import { Menu, LogOut } from "lucide-react";
import { cn } from "../../lib/utils";

type MobileSideBarProps = {
  Logo: string;
  sidebarOptions: { name: string, href: string, icon: any }[];
  signOut: () => void;
  style?: any;
}


export default function SideBarMobile({ Logo, sidebarOptions, style, signOut }: MobileSideBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className=' md:hidden outline-none' onClick={() => setIsOpen(true)}>
          <Menu />
        </SheetTrigger>
        <SheetContent side='left' className="bg-red-500">
          <SheetHeader>
            <SheetTitle>
              <img src={Logo} alt='logo' width={40} />
            </SheetTitle>
            <SheetDescription>
              <ul>
                {sidebarOptions.map((option) => (
                  <SideBarLink option={option} key={option.name} style={style} />
                ))}
              </ul>
            </SheetDescription>
          </SheetHeader>
            <a className={
              cn(
                style?.textColor
                  ? `text-${style.textColor} hover:text-[${style.textColorHover}]`
                  : "text-white hover:text-zinc-200"
                , "flex gap-3 items-center px-2 py-2 rounded-md space-x-3 cursor-pointer"
              )
            }><LogOut color={style?.textColor} onClick={() => {
              signOut();
            }
            } />Sair</a>
        </SheetContent>
      </Sheet>

    </div>
  )
}