import { Outlet } from "react-router-dom";

import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Nav } from "./layout/Nav";

export function App() {
  return (
    <Main>
      <Nav />
      <Header />
      <div className="py-6">
        <Outlet />
      </div>
      <Footer />
    </Main>
  );
}
