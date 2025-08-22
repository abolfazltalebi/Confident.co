import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
// import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div className="">
      {/* Main Content */}
      <main className=" bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header />

        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
