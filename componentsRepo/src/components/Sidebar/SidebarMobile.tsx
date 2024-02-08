import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../components/ui/sheet';
import { Menu, LogOut } from 'lucide-react';
import { SideBarLink } from './SidebarLink';
import { SideBarMobileProps } from './SidebarType';


export default function SideBarMobile({ 
  Logo, 
  sidebarOptions,
  style, 
  signOut }: SideBarMobileProps) {

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>('Início');

  return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className='lg:hidden outline-none' onClick={() => setIsOpen(true)}>
          <Menu />
        </SheetTrigger>
        <SheetContent side='left' className={`${style?.bgColor} ${style?.textColor}`}>
          <SheetHeader>
            <SheetTitle>
              <img src={Logo} alt='logo' width={40} />
            </SheetTitle>
            <SheetDescription>
              <ul>
                {sidebarOptions!.map((option) => (
                  <SideBarLink option={option} key={option.name} style={style} selected={selected} setSelected={setSelected}/>
                ))}
              </ul>
            </SheetDescription>
          </SheetHeader>
            <a className={`
              ${style?.textColor} ${style?.textColorHover}
              flex gap-3 items-center px-2 py-2 rounded-md space-x-3 cursor-pointer
              `}>
              <LogOut className={`${style?.textColor}`} onClick={() => {
                signOut!();
              }
              } />
              Sair
            </a>
        </SheetContent>
      </Sheet>
  )
}