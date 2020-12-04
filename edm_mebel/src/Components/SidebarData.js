import React from 'react'
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"


export const SidebarData=[
    {
        title:'Начало',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },

    {
        title:'Галерия',
        path:'/Gallery',
        icon:<FaIcons.FaImages />,
        cName:'nav-text'
    },

    {
        title:'За Нас',
        path:'/AboutUs',
        icon:<FaIcons.FaRegCalendarAlt/>,
        cName:'nav-text'
    },

    {
        title:'Контакти',
        path:'/Contacts',
        icon:<FaIcons.FaPhoneAlt/>,
        cName:'nav-text'
    }
]
