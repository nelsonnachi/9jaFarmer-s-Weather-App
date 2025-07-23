import  { useState } from "react";
import { Outlet } from "react-router";
import { menuItems } from '../Data/Data';
import { Link } from 'react-router-dom';
import Menu from "../Components/Menu";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



const Layout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

    return (
      <div className="main">
        <Navbar toggleSidebar={toggleSidebar}/>
        <div className="flex">
          <div className="menuContainer sm:w-0 md:w-64 h-[90] bg-[#fdfdfd] shadow-md ">
            <div className='hidden md:block md:fixed h-full px-3 pb-4 overflow-y-auto'>
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
            <Menu className='fixed' isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
          </div>
          <div className="menucontent w-screen py-1.5 px-5">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
}

export default Layout