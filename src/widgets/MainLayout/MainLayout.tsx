import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="min-h-96">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
