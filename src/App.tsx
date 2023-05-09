import { Outlet } from "react-router-dom";

import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Nav } from "./layout/Nav";

export function App() {
  return (
    <Main>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </Main>
  );
}
