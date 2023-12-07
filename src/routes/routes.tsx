
import HomePage from "../utils/pages/home/HomePage";
import MessagesPage from "../utils/pages/messages/MessagesPage";
import SettingPage from "../utils/pages/setting/SettingPage";
import { IRoute } from "./interface";

export const routes: IRoute[] = [
  {
    path: "/", element: <HomePage />
  },
  {
    path: "/message", element: <MessagesPage />
  },
  {
    path: "/setting", element: <SettingPage />
  }
]

