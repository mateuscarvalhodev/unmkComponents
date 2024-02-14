import { useState } from 'react';
import { LogOut } from 'lucide-react';
import { SideBarLink } from './SidebarLink';
import type { SideBarDesktopProps } from './SidebarType';

export default function SidebarDesktop(
  {
    Logo,
    sidebarOptions,
    signOut,
    style
  }: SideBarDesktopProps) {

  const [selected, setSelected] = useState<string>('');
  const [subSelected, setSubSelected] = useState('')

  console.log(selected)

  return (
    <div className='hidden h-screen lg:fixed lg:flex lg:w-72 lg:flex-col'>
      <div className={`flex-grow flex flex-col gap-y-5 ${style?.bgColor} overflow-y-auto h-screen px-6 pb-4 border-r-2`}>
        <div className='flex h-36 shrink-0 items-center'>
          <img src={Logo} alt='logo' width={100} />
        </div>
        <nav className='flex flex-1 flex-col'>
          <ul role='list' className='flex flex-1 flex-col gap-y-7'>
            <li>
              <ul role='list' className='-mx-2 space-y-1'>
                {sidebarOptions!.map((option) => (
                  <SideBarLink
                    subSelected={subSelected}
                    setSubSelected={setSubSelected}
                    option={option}
                    style={style}
                    key={option.name}
                    selected={selected}
                    setSelected={setSelected}
                  />
                ))}
                <li>
                  <a
                    onClick={() => {
                      signOut!();
                    }}
                    className={`${style?.textColor} hover:${style?.textColorHover} flex gap-6 items-center px-2 py-2 rounded-md cursor-pointer`}>
                    <LogOut className={`${style?.textColor}`} />
                    Sair
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}