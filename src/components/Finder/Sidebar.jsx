import { BiChat } from "react-icons/bi";
import { FaBell, FaSearch } from "react-icons/fa";
import { FaChevronDown, FaChevronRight, FaGears } from "react-icons/fa6";
import { FiTable } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { MdOutlineHeadsetMic, MdSpaceDashboard } from "react-icons/md";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { useState } from "react";
import { TiCalendar } from "react-icons/ti";


const Sidebar = () => {

  const [open, setOpen] = useState(true);
  const [subMenus, setSubMenus] = useState({
    calendar: false,
    support: false,
    tables: false,
    analytics: false,
  });

  const toggleSubMenu = (menu) => {
    setSubMenus((prev) => ({
      ...prev, [menu]: !prev[menu],
    }));
  };

  const Menus = [
    { title: "Accounting", icon: <MdSpaceDashboard  style={{color:'red-200'}}/> },
    { title: "software", icon: <BiChat />, gap: true, subMenu: ["Requested Messages", "Unread Messages", "All Messages"], key: "inbox" },
    { title: "Mathematics", icon: <TiCalendar /> },
    { title: "Data science", icon: <FiTable /> },
    { title: "Engineering", icon: <GoGraph /> },
    { title: "Writing", icon: <div className="text-green"><MdOutlineHeadsetMic /> </div>},
    { title: "Escrow", icon: <FaGears />, subMenu: ["General", "Security", "Notifications"], key: "settings" },
     { title: "Dashboard", icon: <MdSpaceDashboard /> },
    { title: "Inbox", icon: <BiChat />, gap: true, subMenu: ["Requested Messages", "Unread Messages", "All Messages"], key: "inbox" },
    { title: "Calendar", icon: <TiCalendar /> },
    { title: "Tables", icon: <FiTable /> },
    { title: "Analytics", icon: <GoGraph /> },
    { title: "Support", icon: <MdOutlineHeadsetMic /> },
    { title: "Setting", icon: <FaGears />, subMenu: ["General", "Security", "Notifications"], key: "settings" },
    { title: "Account", icon: <GoGraph /> },
    
  ];

  return (
    
    <div className="flex  h-[1000px]    sticky max-sm:hidden ">
      {/* Sidebar section */}
      <div className={`${open ? "w-50 p-1" : "w-20 p-1"} rounded-xl  sticky  bg-green-500  pt-8 relative duration-300 ease-in-out`}>
        {/* Toggle button sections */}
        <div className={`absolute cursor-pointer -right-4 top-9 w-8 h-8 p-0.5 bg-green border-zinc-50 border-2 rounded-full text-xl flex  ${!open && "rotate-180"} transition-all ease-in-out duration-300`}
          onClick={() => setOpen(!open)}
        >
          {open ?
            <TbLayoutSidebarLeftExpand /> :
            <TbLayoutSidebarLeftCollapse />}
        </div>

        {/* Logo and title section */}
        <div className="flex gap-x-4">
          <img src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_640.png" alt="logo" className={`w-10 h-10 rounded-full object-cover object-center cursor-pointer ease-in-out duration-3 ${open && "rotate-[360deg]"}`} />

          <h1 className={`  rounded-full   text-zinc-50 origin-left font-semibold text-xl duration-200 ease-in-out ${!open && "scale-0"}`}>
            Menu
          </h1>
        </div>

        {/* Sidebar Navbar Items section */}
        <ul className="pt-6 space-y-0.5">
          {Menus.map((Menu, index) => (
            <li key={index} className={`flex flex-col rounded-md py-3 px-4 cursor-pointer hover:text-white text-zinc-50 hover:bg-red-100/50  transition-all ease-in-out duration-300 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-zinc-800/40"}`}>
              <div className="flex  justify-between gap-x-4" onClick={() => toggleSubMenu(Menu.key)}>
                <div className="flex gap-2">
                  <span className="text-lg">
                    {Menu.icon}
                  </span>
                  <span className={`${!open && "hidden"} origin-left ease-in-out duration-300`}>
                    {Menu.title}
                  </span>
                </div>

                {Menu.subMenu && (
                  <span
                    className={`ml-auto cursor-pointer text-sm ${subMenus[Menu.key] ? "rotate-360" : ""} transition-transform ease-in-out duration-300 ${!open ? "hidden" : ""}`}>
                    {subMenus[Menu.key] ?
                      <FaChevronDown /> : <FaChevronRight />}
                  </span>
                )}

              </div>

              {/* Sidebar submenus NAvbar ITems */}
              {Menu.subMenu && subMenus[Menu.key] && (
                <ul className="pl-3 pt-4 text-zinc-300">
                  {Menu.subMenu.map((subMenu, subIndex) => (
                    <li key={subIndex} className="text-sm flex gap-x-2 py-3 px-2 hover:bg-zinc-800 rounded-lg">
                      <span className="text-zinc-4">
                        <FaChevronRight className="text-xs" />
                      </span>
                      {subMenu}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Dashboard Layout section */}
     
        {/* Dashboard contents */}
       
      </div>
    
    
  );
};


export default Sidebar;