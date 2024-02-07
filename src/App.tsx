import SidebarDesktop from './components/Sidebar/SidebarDesktop'
import { User, Settings, Home } from 'lucide-react'

import './App.css'

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
            textColor: '',
            textColorHover: '',
            bgColor: '',
            bgSelectedPathColor: '',
            textSelectedPathColor: ''
          }
        }/>
      </div>
    </>
  )
}

export default App
