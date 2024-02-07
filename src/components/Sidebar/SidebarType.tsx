import { LucideIcon } from 'lucide-react';

export type styleProps = {
    textColor?: string,
    textColorHover?: string,
    bgColor?: string,
    bgSelectedPathColor?: string,
    textSelectedPathColor?: string,
};

export type SideBarOptions = {
    name: string;
    href: string;
    icon: any;
};

export type SideBarProps = {
  Logo: string;
  sidebarOptions: SideBarOptions[];
  signOut: () => void;
  className?: string;
  style?: styleProps;
}

export type SideBarLinkProps = {
    option: { name: string; href: string; icon: LucideIcon };
    style?: styleProps;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
};