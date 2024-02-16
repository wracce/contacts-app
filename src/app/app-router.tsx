import { createBrowserRouter } from "react-router-dom";

import { LoginPage } from "@pages/login";
import { ContactsPage } from "@pages/contacts";

import { appLayout } from "./app-layout";


export const appRouter = createBrowserRouter([
    {
      element: appLayout,
      children: [
        {path: 'login', element: <LoginPage/>},
        {path: 'contacts', element: <ContactsPage/>}
      ]
    },
  ]);

