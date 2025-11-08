import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-4 py-4">
        <div className="flex gap-6">
          <LeftSidebar />
          <Outlet />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;