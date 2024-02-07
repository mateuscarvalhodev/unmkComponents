"use client";

import { useState } from "react";
import { SideBarLink } from "./SidebarLink";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/app/components/ui/sheet";

import { Menu, LogOut } from "lucide-react";

type MobileSideBarProps = {
    Logo: string;
    sidebarOptions: { name: string, href: string, icon: any }[];
    signOut: () => void;
    style?: any;
}


export default function SideBarMobile({Logo, sidebarOptions, signOut}: MobileSideBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    return (
      <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className=' md:hidden outline-none' onClick={() => setIsOpen(true)}>
          <Menu />
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>
              <Image src={Logo} alt='logo' width={40} />
            </SheetTitle>
            <SheetDescription>
              {sidebarOptions.map((option) => (
                <SideBarLink option={option} key={option.name} />
              ))}
            </SheetDescription>
          </SheetHeader>
          <h1>Sair<LogOut className='cursor-pointer' size={32} onClick={()=>{
            signOut();
            router.push('/login');
          }} /></h1>
        </SheetContent>
      </Sheet>    

      </div>
    )
}