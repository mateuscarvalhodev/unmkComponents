"use client";

import { signOut } from "@/services/login";
import Ulogo from "@/assets/Ulogo.svg";
import SideBarMobile from "./SidebarDesktop";
import SideBarDesktop from "./SidebarMobile";
import { FileImage, Home, Mail, User, BarChart } from "lucide-react";
import type { styleProps } from "./SidebarType";

const Sidebar = () => { 
 
  const sidebarOptions = [
      { name: 'Inicio', href: '/agroArea', icon: Home},
      { name: 'Análise de sensores', href: '/agroArea/analytics', icon: FileImage },
      { name: 'Minha conta', href: '/agroArea/profile', icon: User},
      { name: 'Mensagens', href: '/agroArea/messages', icon: Mail},
      { name: 'Safras', href: '/agroArea/safraAnalytics', icon: BarChart}
  ];

const style : styleProps = {
  textColor: '',
  textColorHover: '',
  bgColor: '',
  bgSelectedPathColor: '',
  textSelectedPathColor: ''
}

  return (

    <div className='absolute p-0 md:relative'>

      <SideBarMobile Logo={Ulogo} style={style} sidebarOptions={sidebarOptions} signOut={signOut}  />
      <SideBarDesktop Logo={Ulogo} style={style} sidebarOptions={sidebarOptions} signOut={signOut} />
      
    </div >
  )
}

export default Sidebar;
