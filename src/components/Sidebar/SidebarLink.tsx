import { cn } from "../../lib/utils";
import type { SideBarLinkProps } from "./SidebarType";

export function SideBarLink({ option, style, selected, setSelected }: SideBarLinkProps) {
  const {bgColor, bgSelectedPathColor, textColor, textColorHover, textSelectedPathColor} = style!

  return (
    <>
      <li className="list-none">
        <a
          href={option.href}
          onClick={() => setSelected(option.name)}
          className={cn(
            option.name == selected
              ? bgSelectedPathColor
                ? `bg-[${bgSelectedPathColor}]
                  ${
                    textSelectedPathColor
                      ? `text-[${textSelectedPathColor}]`
                      : "text-white"
                  }`
                : "bg-zinc-600 text-white"
              : textColor
              ? `text-[${textColor}] hover:text-[${textColorHover}]
                    ${
                      bgColor
                        ? `hover:bg-[${bgColor}]`
                        : `hover:bg-zinc-800`
                    }`
              : "text-white hover:text-zinc-200",
            "flex items-center px-2 py-2 rounded-md space-x-3"
          )}
        >
          <option.icon
            className={cn(
              textColor ? `text-[${textColor}]` : "text-white",
              "h-6 w-6"
            )}
          />
          <span>{option.name}</span>
        </a>
      </li>
    </>
  );
}
