import { SideBarLink } from './SidebarLink';
import { cn } from '../../lib/utils';
import type { SideBarProps  } from './SidebarType';
import { LogOut } from 'lucide-react';
import { useState } from 'react';
import { User, Settings, Home } from 'lucide-react'



export default function SidebarDesktop(
    { Logo='vite.svg', 
    sidebarOptions=[
        { name: 'Dashboard', href: '#', icon: Home },
        { name: 'Profile', href: '#', icon: User },
        { name: 'Settings', href: '#', icon: Settings }
    ], 
    signOut=() => { console.log('signOut') }, 
    style={
        textColor: '',
        textColorHover: '',
        bgColor: '',
        bgSelectedPathColor: '',
        textSelectedPathColor: ''
    } }: SideBarProps) {

    const [selected, setSelected] = useState<string>('Início');
  return (
    <div className='hidden h-screen lg:fixed  lg:flex lg:w-72 lg:flex-col'>
      <div className={`flex-grow flex flex-col gap-y-5 overflow-y-auto
          ${style?.bgColor
          ? `bg-${style.bgColor}`
          : 'bg-zinc-900'} h-screen px-6 pb-4 border-r-2`}>
        <div className='flex h-36 shrink-0 items-center'>
          <img src={Logo} alt='logo' width={100} />
        </div>
        <nav className='flex flex-1 flex-col'>
          <ul role='list' className='flex flex-1 flex-col gap-y-7'>
            <li>
              <ul role='list' className='-mx-2 space-y-1'>
                {sidebarOptions.map((option) => (
                  <SideBarLink option={option} style={style} key={option.name} selected={selected} setSelected={setSelected}/>
                ))}
                <li>
                  <a className={
                    cn(
                      style?.textColor
                        ? `text-${style.textColor} hover:text-${style.textColorHover}`
                        : "text-red-500 hover:text-zinc-200"
                      , "flex gap-3 items-center px-2 py-2 rounded-md cursor-pointer"
                    )
                  }><LogOut className={`text-${style?.textColor}`} onClick={() => {
                    signOut();
                  }
                  } />Sair</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}