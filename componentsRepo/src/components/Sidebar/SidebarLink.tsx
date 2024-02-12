import { useEffect, useState } from 'react';
import type { SideBarLinkProps } from './SidebarType';
import {ChevronDown, ChevronRight, ChevronUp} from 'lucide-react'

export function SideBarLink({ option, style, selected, setSelected, subSelected,setSubSelected}: SideBarLinkProps) {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(()=>{
    selected == option.name ?
    setIsOpen(true) :
    setIsOpen(false)
  }, [selected])

  return (
      <li className="list-none">
        <a
          href={!option.fields ? option.href : undefined}
          onClick={() => {
            selected == option.name && setIsOpen(!isOpen)
            setSelected(option.name)
          }}
          className={
            `flex gap-3 items-center px-2 py-2 cursor-pointer rounded-md space-x-3
              ${
                option.name == selected
                  ? `${style?.bgSelectedPathColor} ${style?.textSelectedPathColor}`
                  : `${style?.textColor} ${style?.textColorHover}`
              }
            `}>
            <option.icon
              className={`${style?.textColor} h-6 w-6`}
            />
            <span>{option.name}</span>
            {option.fields ?  isOpen ? <ChevronUp size={16}/> : <ChevronDown size={16}/> : <></>}
        </a>
        {option.fields && option.name == selected && isOpen &&
        <ul className='ml-10 flex flex-col mt-2'>
          {option.fields.map((field) => (
            <li key={field.name} className='flex items-center ' onClick={()=>setSubSelected(field.name)}>
              <a href={field.href} className={`flex items-center gap-4 items-center px-2 py-2 p-2 rounded-md ${
                field.name == subSelected
                  ? `${style?.bgSelectedPathColor} ${style?.textSelectedPathColor}`
                  : `${style?.textColor} ${style?.textColorHover}`
              }`}>
                <field.icon
                  className={`${style?.textColor} h-6 w-6`}
                />
                <span>{field.name}</span>
              </a>
            </li>
          ))}
        </ul>}
      </li>
  );
}
