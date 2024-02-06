"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type styleProps = {
  textColor?: string,
  textColorHover?: string,
  bgColor?: string,
  bgSelectedPathColor?: string,
  textSelectedPathColor?: string,
}

type SideBarLinkProps = {
  option: { name: string; href: string; icon: any };
  style?: styleProps;
};

export function SideBarLink({
  option,
  style,
}: SideBarLinkProps) {
  const pathname = usePathname();
  return (
    <li className="list-none">
      <Link
        href={option.href}
        className= {cn(
            option.href == pathname
              ? 
                style?.bgSelectedPathColor 
                  ? `bg-[${style.bgSelectedPathColor}]
                  ${style?.textSelectedPathColor 
                    ? `text-[${style.textSelectedPathColor}]`
                    : 'text-white' }`  
                : "bg-zinc-600 text-white"
              : style?.textColor
                ? `text-[${style.textColor}] hover:text-[${style.textColorHover}]
                    ${style?.bgColor ? `hover:bg-[${style.bgColor}]` : `hover:bg-zinc-800`}`
                : "text-white hover:text-zinc-200" 
            ,"flex items-center px-2 py-2 rounded-md space-x-3"
          )}
      > {/* Link fecha aqui!! */}
        {
          <option.icon className={cn(
              style?.textColor 
                ? `text-[${style.textColor}]`
                : "text-white"
            ,"h-6 w-6"
          )}
          />/*Icone da lista*/
        }
        <span>{option.name}</span>
      </Link>
    </li>
  );
}
