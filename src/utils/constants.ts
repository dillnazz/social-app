import HomeIcon from "../assets/svg/Home.svg?react"
import MessageIcon from "../assets/svg/Message.svg?react";
import SettingIcon from "../assets/svg/Setting.svg?react";

export interface IMenuType {
	title: string;
	icon: string;
	path: string;
}

export const sidebarMenu: IMenuType[] = [
	{
		title: "Главная",
		icon: HomeIcon,
		path: "/home",
	},
	{
		title: "Сообщения",
		icon: MessageIcon,
		path: "/message",
	},
	{
		title: "Настройки",
		icon: SettingIcon,
		path: "/setting",
	},
];
