import React from "react";
import profile from "../images/profile.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsJournal } from "react-icons/bs";
import { IoCalendarClearOutline } from "react-icons/io5";
import { PiChartScatter } from "react-icons/pi";
import { LuPencilLine } from "react-icons/lu";
import { GoMilestone } from "react-icons/go";
import { TbReportAnalytics } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { GrPlan } from "react-icons/gr";    
export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const Menus = [
    {
      name: "Dashboard",
      route: "/dashboard",
      icon: <AiOutlineDashboard size="1.3rem" />,
    },
    {
      name: "Journal",
      route: "/journal",
      icon: <BsJournal size="1.3rem" />,
    },
    {
      name: "Calender",
      route: "/calendar",
      icon: <IoCalendarClearOutline size="1.3rem" />,
    },
    {
      name: "Charts",
      route: "/charts",
      icon: <PiChartScatter size="1.3rem" />,
    },
    {
      name: "Notes",
      route: "/notes",
      icon: <LuPencilLine size="1.3rem" />,
    },
    {
      name: "Milestone",
      route: "/milestone",
      icon: <GoMilestone size="1.3rem" />,
    },
    {
      name: "Trading plan",
      route: "/trading-plan",
      icon: <GrPlan size="1.3rem" />,
    },
    {
      name: "Reports",
      route: "/reports",
      icon: <TbReportAnalytics size="1.3rem" />,
    },
    {
      name: "Settings",
      route: "/settings",
      icon: <IoSettingsOutline size="1.3rem" />,
    },
  ];
  return (
    <div className="sidebar_col">
      <div className="p-3">
        <div className="sidebar_user_div d-flex gap-2 p-2 align-items-center">
          <div>
            <img src={profile} style={{ width: 50 }} />
          </div>
          <div>
            <p className="m-0" style={{ fontWeight: "bold", fontSize: 13 }}>
              Abubakar Yakasai
            </p>
            <p className="m-0 text-secondary" style={{ fontSize: 13 }}>
              admin
            </p>
          </div>
        </div>
      </div>
      {Menus.map((item, index) => (
        <div
          onClick={() => navigate(item.route)}
          className={` d-flex  align-items-center gap-3 side_bar_menu ${
            location.pathname === item.route && "active_side_bar_menu"
          }`}
        >
          {item.icon} <p className="m-0">{item.name}</p>
        </div>
      ))}
      {/*  */}
    </div>
  );
}
