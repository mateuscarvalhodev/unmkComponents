import { Home, User, Settings } from "lucide-react";
import SidebarDesktop from "./SidebarDesktop";
import SideBarMobile from "./SidebarMobile";
import type { SideBarProps } from "./SidebarType";

const Sidebar = ({...props}: SideBarProps) => {

const sidebarOptions = props.sidebarOptions || [
  { name: 'Dashboard', href: '#', icon: Home, fields:[
    {
      name: 'Dashboard1', href: '#1', icon: Home,
    },
    {
      name: 'Dashboard2', href: '#2', icon: Home,
    },
    {
      name: 'Dashboard3', href: '#3', icon: Home,
    }
  ] },
  { name: 'Profile', href: '#', icon: User },
  { name: 'Settings', href: '#', icon: Settings, fields:[
    {
      name: 'Settings1', href: '#1', icon: Settings
    },
    {
      name: 'Settings2', href: '#2', icon: Settings
    },
    {
      name: 'Settings3', href: '#3', icon: Settings
    },
  ] }
];

const styleDesktop = {
  textColor: props.styleDesktop?.textColor || 'text-white',
  textColorHover: props.styleDesktop?.textColorHover || 'hover:text-zinc-200',
  bgColor: props.styleDesktop?.bgColor || 'bg-zinc-900',
  bgSelectedPathColor: props.styleDesktop?.bgSelectedPathColor || 'bg-zinc-600',
  textSelectedPathColor: props.styleDesktop?.textSelectedPathColor || 'text-blue-500'
};

const styleMobile = {
  textColor: props.styleMobile?.textColor || 'text-white',
  textColorHover: props.styleMobile?.textColorHover || 'hover:text-zinc-200',
  bgColor: props.styleMobile?.bgColor || 'bg-zinc-900',
  bgSelectedPathColor: props.styleMobile?.bgSelectedPathColor || 'bg-zinc-600',
  textSelectedPathColor: props.styleMobile?.textSelectedPathColor || 'text-blue-500'
};

const signOut = props.signOut || (() => { console.log('signOut') });

  return (

    <div className='absolute p-0 md:relative'>
      <SidebarDesktop Logo='vite.svg' sidebarOptions={sidebarOptions} signOut={signOut} style={styleDesktop} />
      <SideBarMobile Logo='vite.svg' sidebarOptions={sidebarOptions} signOut={signOut} style={styleMobile} />
    </div>
  )   
}

export default Sidebar;
