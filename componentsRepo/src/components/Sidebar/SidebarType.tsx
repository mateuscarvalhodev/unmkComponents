import { LucideIcon } from 'lucide-react';

export type styleProps = {
    textColor?: `text-${string}` | undefined,
    textColorHover?: `hover:${string}` | undefined,
    bgColor?: `bg-${string}` | undefined,
    bgSelectedPathColor?: `bg-${string}` | undefined,
    textSelectedPathColor?: `text-${string}` | undefined,
};

export type SideBarOptions = {
    name: string;
    href: string;
    icon: any;
};

export type SideBarProps = {
  Logo?: string;
  sidebarOptions?: SideBarOptions[];
  signOut?: () => void;
  className?: string;
  styleDesktop?: styleProps;
  styleMobile?: styleProps;
};

export type SideBarDesktopProps = {
    Logo?: string;
    sidebarOptions?: SideBarOptions[];
    signOut?: () => void;
    className?: string;
    style?: styleProps;
};

export type SideBarMobileProps = {
    Logo?: string;
    sidebarOptions?: SideBarOptions[];
    signOut?: () => void;
    className?: string;
    style?: styleProps;
};

export type SideLinkProps = {
    name:string,
    href:string,
    icon: LucideIcon
    fields?: SideLinkProps[]
}

export type SideBarLinkProps = {
    option: SideLinkProps ;
    style?: styleProps;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    subSelected: string;
    setSubSelected: React.Dispatch<React.SetStateAction<string>>;
    // isOpen: string;
    // setIsOpen: React.Dispatch<React.SetStateAction<string>>;
    
};