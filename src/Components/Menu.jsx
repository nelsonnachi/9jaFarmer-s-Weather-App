import React from 'react'
import { menuItems } from '../Data/Data';
import { Link } from 'react-router-dom';

const Menu = ({isSidebarOpen, setIsSidebarOpen}) => {
  return (
    <aside className={`md:w-0 fixed left-0 z-40 h-full bg-white border-r border-gray-200 shadow-lg transition-transform duration-300 ease-out
    ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full'} 
    md:translate-x-0`}>
    <div className='h-full px-3 pb-4 overflow-y-auto'>
      <ul className='space-y-2 font-medium pt-28'>
        {menuItems.map(item => {
          const Icon = item.icon;
          return (
            <li key={item.id} className='pb-5'>
              <Link  onClick={() => setIsSidebarOpen(false)} to={item.href} className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100'>
                <Icon className="w-5 h-5 text-blue-600" />
                <span className='ml-3'>{item.label}</span>
              </Link>
            </li>
        )})}
      </ul>
    </div>
  </aside>
  )
}

export default Menu