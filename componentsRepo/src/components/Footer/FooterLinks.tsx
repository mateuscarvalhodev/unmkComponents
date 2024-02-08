import { ReactNode } from 'react';
interface Link {
  name: string;
  href: string;
  icon?: ReactNode;
}
interface FooterLinksProps {
  title: string;
  links: Link[];
}
const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <div className='text-center sm:text-left'>
      <p className='text-lg font-medium text-white'>{title}</p>
      <nav className='mt-8'>
        <ul className='space-y-4 text-sm'>
          {links.map((link, index) => (
            <li key={index} className='flex items-center gap-2'>
              {link.icon && <span className='w-5 h-5 text-white shrink-0 flex items-center justify-center'>{link.icon}</span>}
              <a className='text-white transition hover:text-white/75 flex items-center' href={link.href}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FooterLinks;
