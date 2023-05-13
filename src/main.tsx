import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClientContextProvider } from "./api/Client";

import { App } from "./App";
import "./index.css";
import { ContactPage } from "./pages/ContactPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { WorkshopPage } from "./pages/WorkshopPage";
import { APP_ROUTES } from "./utils";

const router = createBrowserRouter([
  {
    path: APP_ROUTES.root,
    element: <App />,
    children: [
      {
        index: true,
        element: <ProjectsPage />,
      },
      {
        path: APP_ROUTES.workshop,
        element: <WorkshopPage />,
      },
      {
        path: APP_ROUTES.contact,
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ClientContextProvider>
      <RouterProvider router={router} />
    </ClientContextProvider>
  </React.StrictMode>
);
