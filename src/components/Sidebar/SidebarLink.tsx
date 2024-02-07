import { useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

type styleProps = {
  textColor?: string;
  textColorHover?: string;
  bgColor?: string;
  bgSelectedPathColor?: string;
  textSelectedPathColor?: string;
};

type SideBarLinkProps = {
  option: { name: string; href: string; icon: any };
  style?: styleProps;
};

export function SideBarLink({ option, style }: SideBarLinkProps) {
  const {bgColor, bgSelectedPathColor, textColor, textColorHover, textSelectedPathColor} = style!

  console.log(option.icon)

  return (
      <li className="list-none">
        <a
          href={option.href}
          className={cn(
            option.href == pathname
              ? bgSelectedPathColor
                ? `bg-[${bgSelectedPathColor}]
                  ${
                    textSelectedPathColor
                      ? `text-${textSelectedPathColor}`
                      : "text-red-500"
                  }`
                : "bg-zinc-600 text-red-500"
              : textColor
              ? `text-${textColor} hover:text-${textColorHover}
                    ${
                      bgColor
                        ? `hover:bg-[${bgColor}]`
                        : `hover:bg-zinc-800`
                    }`
              : "text-red-500 hover:text-zinc-200",
            "flex items-center px-2 py-2 rounded-md space-x-3"
          )}
        >
          <option.icon
            className={cn(
              textColor ? `text-${textColor}` : "text-red-500",
              "h-6 w-6"
            )}
          />

          <span>{option.name}</span>
        </a>
      </li>
  );
}
