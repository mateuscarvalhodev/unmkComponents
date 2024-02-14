import unmkLogo from '../../assets/unmkLogo.png'
import Facebook from '../../assets/svg/Facebook.svg'
import Instagram from '../../assets/svg/Instagram.svg'
import Twitter from '../../assets/svg/Twitter.svg'
import LinkedinIcon from '../../assets/svg/LinkedinIcon.svg'
import Website from '../../assets/svg/Website.svg'
import FooterLinks from './FooterLinks';
import { MailCheck, MapPin, PhoneIncoming } from 'lucide-react'
import FooterLegal from './FooterRights'
import SocialLinks from './FooterSocialLinks'




const linksData = [
  {
    title: 'Sobre nós',
    links: [
      { name: 'Nossa história, missão e valores', href: 'https://www.unimake.com.br/#sobre' },
      { name: 'Trabalhe conosco', href: 'https://www.unimake.com.br/trabalhe-conosco' },
    ],
  },
  {
    title: 'Produtos',
    links: [
      { name: 'DANFE View', href: 'https://www.unimake.com.br/danfeview/' },
      { name: 'UniDANFE', href: 'https://www.unimake.com.br/produtos/unidanfe' },
      { name: 'UniNFe', href: 'https://unimake.com.br/uninfe/' },
      { name: 'Mais produtos', href: 'https://www.unimake.com.br/produtos' }
    ],
  },
  {
    title: 'Links de ajuda',
    links: [
      { name: 'FAQs', href: '/' },
      { name: 'Suporte', href: '/' },
      { name: 'Chat WPP', href: '/' }
    ],
  },
  {
    title: 'Contate-nos',
    links: [
      { name: 'Email', href: '/', icon: <MailCheck /> },
      { name: 'Telefone', href: '/', icon: <PhoneIncoming /> },
      { name: 'Localização', href: '/', icon: <MapPin /> }
    ],
  },
];

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/UnimakeSoftware', iconSrc: Facebook },
  { name: 'Instagram', url: 'https://www.instagram.com/unimake_software/', iconSrc: Instagram },
  { name: 'Twitter', url: 'https://twitter.com/Unimake', iconSrc: Twitter },
  { name: 'Linkedin', url: 'https://www.linkedin.com/company/unimake-software/mycompany/', iconSrc: LinkedinIcon },
  { name: 'Website', url: 'https://www.unimake.com.br/', iconSrc: Website },
];
export default function Footer() {
  return (
    <>

      <footer className='bg-gray-900'>
        <div className='max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            <div>
              <div className='flex justify-center text-teal-300 sm:justify-start'>
                <img src={unmkLogo} alt='Logo' />
              </div>

              <p
                className='max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left'
              >
                Unimake Software, transformando ideias em tecnologia.
              </p>

              <SocialLinks links={socialLinks} />

            </div>

            <div
              className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4'
            >
              {linksData.map((group, index) => (
                <FooterLinks key={index} title={group.title} links={group.links} />
              ))}
            </div>
          </div>

          <div className='pt-6 mt-12 border-t border-gray-800'>
            <FooterLegal />
          </div>
        </div>
      </footer >
    </>
  )
}