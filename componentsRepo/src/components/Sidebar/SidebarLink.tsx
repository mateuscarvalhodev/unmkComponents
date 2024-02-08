<<<<<<< HEAD
import type { SideBarLinkProps } from './SidebarType';

export function SideBarLink({ option, style, selected, setSelected }: SideBarLinkProps) {

  return (
      <li className="list-none">
        <a
          href={option.href}
          onClick={() => setSelected(option.name)}
          className={
            `flex gap-3 items-center px-2 py-2 rounded-md space-x-3
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
        </a>
      </li>
  );
}
=======
import type { SideBarLinkProps } from './SidebarType';

export function SideBarLink({ option, style, selected, setSelected }: SideBarLinkProps) {

  return (
      <li className="list-none">
        <a
          href={option.href}
          onClick={() => setSelected(option.name)}
          className={
            `flex gap-3 items-center px-2 py-2 rounded-md space-x-3
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
        </a>
      </li>
  );
}
>>>>>>> b8ef41e21d74dd576337f8ee14dfc46e66fb3210
