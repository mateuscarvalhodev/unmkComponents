import SidebarDesktop from './components/Sidebar/SidebarDesktop'
import { User, Settings, Home, SettingsIcon } from 'lucide-react'

import './App.css'
import SideBarMobile from './components/Sidebar/SidebarMobile'


function App() {


  return (
    <>
      <div className='bg-red-300'>
        <SidebarDesktop Logo='vite.svg' sidebarOptions={
          [
            { name: 'Dashboard', href: '#', icon: Home },
            { name: 'Profile', href: '#', icon: User },
            { name: 'Settings', href: '#', icon: Settings }
          ]
        } signOut={() => { console.log('signOut') }} style={
          {
            textColor: 'text-white',
            textColorHover: 'text-zinc-200',
            bgColor: 'bg-zinc-900',
            bgSelectedPathColor: 'bg-zinc-600',
            textSelectedPathColor: 'text-blue-500'
          }
        } />
        <SideBarMobile Logo='vite.svg' sidebarOptions={
          [
            { name: 'Dashboard', href: '#', icon: Home },
            { name: 'Profile', href: '#', icon: User },
            { name: 'Settings', href: '#', icon: SettingsIcon },
          ]
        } signOut={
          () => { console.log('signOut') }
        } style={
          
          {
            textColor: 'blue-500',
            textColorHover: 'zinc-200',
            bgColor: 'blue-300',
            bgSelectedPathColor: 'red-500',
            textSelectedPathColor: 'white'
          }
        }/>
      </div>
    </>
  )
}

export default App
