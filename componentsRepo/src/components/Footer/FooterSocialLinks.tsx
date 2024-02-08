interface SocialLink {
  name: string;
  url: string;
  iconSrc: string;
}
interface SocialLinksProps {
  links: SocialLink[];
}
const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <ul className='flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start'>
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            rel='noopener noreferrer'
            target='_blank'
            className='text-teal-500 transition hover:text-teal-500/75'
          >
            <span className='sr-only'>{link.name}</span>
            <img className='w-8' src={link.iconSrc} alt={`${link.name} Icon`} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
