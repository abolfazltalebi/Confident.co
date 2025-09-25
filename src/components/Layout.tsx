import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useLenis } from "../hooks/useLenis";

const Layout = () => {
  useLenis()
  return (
    <div className="">
      {/* Main Content */}
      <main className="">
        <Header />

        <div className="  bg-gradient-to-br from-blue-50 to-indigo-100 md:p-2 pb-1">
          <div className="container mx-auto">
            
          <Outlet />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
