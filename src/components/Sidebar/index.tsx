"use client";

import Ulogo from "@/assets/Ulogo.svg";
import SideBarMobile from "./SidebarDesktop";
import SideBarDesktop from "./SidebarMobile";
import { FileImage, Home, Mail, User, BarChart } from "lucide-react";
import type { styleProps } from "./SidebarType";

const Sidebar = () => {
 
  const sidebarOptions = [
      { name: 'Inicio', href: '/agroArea', icon: <Home color="#3e9392"/>},
      { name: 'Análise de sensores', href: '/agroArea/analytics', icon: FileImage },
      { name: 'Minha conta', href: '/agroArea/profile', icon: User},
      { name: 'Mensagens', href: '/agroArea/messages', icon: Mail},
      { name: 'Safras', href: '/agroArea/safraAnalytics', icon: BarChart}
  ];

const style : styleProps = {
  textColor: '#da3b3b',
  textColorHover: '#807e7e',
  bgColor: '#3424',
  bgSelectedPathColor: '#566',
  textSelectedPathColor: '#8556'
}

function signOut(){
  console.log('signout')
}

  return (

    <div className='absolute p-0 md:relative bg-gray-500'>
      <SideBarMobile Logo={Ulogo} style={style} sidebarOptions={sidebarOptions} signOut={signOut}  />
      <SideBarDesktop Logo={Ulogo} style={style} sidebarOptions={sidebarOptions} signOut={signOut} />
    </div>
  )   
}

export default Sidebar;
