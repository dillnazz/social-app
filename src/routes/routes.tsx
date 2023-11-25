

import HomePage from "../pages/home/HomePage";
import MessagesPage from "../pages/messages/MessagesPage";
import SettingPage from "../pages/setting/SettingPage";
import { IRoute } from "./interface";


export const routes: IRoute []= [
  {
    path: "/home", element: <HomePage />
  },
  {
    path: "/message", element: <MessagesPage />
  },
  {
    path: "/setting", element: <SettingPage />
  }
]

