import { Outlet } from "react-router-dom";

import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Nav } from "./layout/Nav";

import "yet-another-react-lightbox/styles.css";
import { useHandleRedirectTo } from "./utils";

export function App() {
  useHandleRedirectTo();
  return (
    <Main>
      <Nav />
      <Header />
      <div className="md:py-4">
        <Outlet />
      </div>
      <Footer />
    </Main>
  );
}
