import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
export const sidebarData = [
    {
        title: "home",
        icon: <HomeIcon/>,
        link: "/home"
    },
    {
        title: "DashBoard",
        icon: <DashboardIcon/>,
        link: "/dashboard"
    },
    {
        title: "Investorys",
        icon: <InventoryRoundedIcon/>,
        link: "/inventory"
    },
]

