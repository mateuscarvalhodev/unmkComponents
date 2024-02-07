import SidebarDesktop from './components/Sidebar/SidebarDesktop'

import './App.css'
import SideBarMobile from './components/Sidebar/SidebarMobile'
import { Home, SettingsIcon, User } from 'lucide-react'

function App() {


  return (
    <>
      <div className='bg-red-300'>
        <SidebarDesktop Logo='vite.svg' sidebarOptions={
          [
            { name: 'Dashboard', href: '/dashboard', icon: Home },
            { name: 'Profile', href: '/profile', icon: User },
            { name: 'Settings', href: '/settings', icon: SettingsIcon },
          ]
        } signOut={
          () => { console.log('signOut') }
        } style={
          
          {
            textColor: 'white',
            textColorHover: 'zinc-200',
            bgColor: 'zinc-900',
            bgSelectedPathColor: 'zinc-600',
            textSelectedPathColor: 'white'
          }
        } />
        <SideBarMobile Logo='vite.svg' sidebarOptions={
          [
            { name: 'Dashboard', href: '/dashboard', icon: Home },
            { name: 'Profile', href: '/profile', icon: User },
            { name: 'Settings', href: '/settings', icon: SettingsIcon },
          ]
        } signOut={
          () => { console.log('signOut') }
        } style={
          
          {
            textColor: 'white',
            textColorHover: 'zinc-200',
            bgColor: 'zinc-900',
            bgSelectedPathColor: 'red-500',
            textSelectedPathColor: 'white'
          }
        }/>
      </div>
    </>
  )
}

export default App
