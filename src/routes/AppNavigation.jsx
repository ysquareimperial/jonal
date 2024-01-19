import { useRoutes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";
import AppIndex from "./AppIndex";
import Milestone from "../components/Milestone";
import Notes from "../components/Notes";
import Settings from "../components/Settings";
import Charts from "../components/Charts";
import Reports from "../components/Reports";
import TradingPlan from "../components/TradingPlan";
import MyCalendar from "../components/MyCalendar";
import Journal from "../components/Journal";

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <AppIndex />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <AppIndex /> },

        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/journal",
          element: <Journal />,
        },
        {
          path: "/calendar",
          element: <MyCalendar />,
        },
        {
          path: "/milestone",
          element: <Milestone />,
        },
        {
          path: "/reports",
          element: <Reports />,
        },
        {
          path: "/trading-plan",
          element: <TradingPlan />,
        },
        {
          path: "/notes",
          element: <Notes />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/charts",
          element: <Charts />,
        },
      ],
    },
    // {
    //   path: "/signup-message",
    //   element: <SignupMessage />,
    // },
    // {
    //   path: "/auth",
    //   element: <SignUpp />,
    // },
  ]);
  return element;
}
export default AppNavigation;
