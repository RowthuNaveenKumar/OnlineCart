import Header from "../header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Sticky Header */}
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-6 animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
