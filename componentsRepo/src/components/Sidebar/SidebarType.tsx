import { LucideIcon } from 'lucide-react';

export type styleProps = {
    textColor?: `text-${string}`,
    textColorHover?: `hover:${string}`,
    bgColor?: `bg-${string}`,
    bgSelectedPathColor?: `bg-${string}`,
    textSelectedPathColor?: `text-${string}`,
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

export type SideBarOptions = {
    name: string;
    href: string;
    icon: LucideIcon;
};
export type SideLinkProps = SideBarOptions & {
    fields?: SideLinkProps[]
}

export type SideBarLinkProps = {
    option: SideLinkProps;
    style?: styleProps;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    subSelected: string;
    setSubSelected: React.Dispatch<React.SetStateAction<string>>;
};