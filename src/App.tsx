import SidebarDesktop from './components/Sidebar/SidebarDesktop'

import './App.css'

function App() {


  return (
    <>
      <div className='bg-red-300'>
        <SidebarDesktop Logo='vite.svg' sidebarOptions={
          [
            { name: 'Dashboard', href: '/dashboard', icon: 'Home' },
            { name: 'Profile', href: '/profile', icon: 'User' },
            { name: 'Settings', href: '/settings', icon: 'Settings' },
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
      </div>
    </>
  )
}

export default App
