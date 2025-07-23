import { CalendarDays, Settings, Bell, } from 'lucide-react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { MdSpaceDashboard } from 'react-icons/md'
import {Link } from 'react-router-dom'

const Navbar = ({toggleSidebar}) => { 
  return (
    <nav className="fixed w-full z-999 bg-[#fdfdfd]"> 
      <div className='p-[20px] shadow-md'>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-5">
            <button onClick={toggleSidebar}> <HiOutlineMenuAlt2 className='text-3xl sm:hidden'/> </button>
            <Link className='flex items-center gap-3'> 
              <MdSpaceDashboard className='text-2xl text-blue-700  '/> 
             <div className='flex flex-col'>
               <span className='text-base font-semibold whitespace-normal text-blue-700'>9jafarmers </span>
                <span className='text-base font-semibold  whitespace-normal text-blue-700'>Weather </span>
             </div>
            </Link>
          </div>

          <div className='flex items-center justify-center gap-2'>
            <button> <CalendarDays className='text-2xl'/> </button>
            <button> <Settings className='text-2xl'/></button>
            <button>  <Bell className='text-2xl'/></button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar         