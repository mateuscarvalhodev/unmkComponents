import { LucideIcon } from 'lucide-react';

export type styleProps = {
    textColor: string | 'text-white',
    textColorHover?: string | 'text-zinc-200',
    bgColor?: string | 'bg-zinc-900',
    bgSelectedPathColor?: string | 'bg-zinc-600',
    textSelectedPathColor?: string | 'text-blue-500',
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