import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Tambah",
    icon: <AiIcons.AiFillFileAdd />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Kategori Buku",
        path: "/kategori-buku",
      },
      {
        title: "Sub Kategori Buku",
        path: "/sub-kategori-buku",
      },
      {
        title: "Buku",
        path: "/buku",
      },
      {
        title: "Isi Konten Buku",
        path: "/konten-buku",
      },
    ],
  },
  {
    title: "Logout",
    path: "/login",
    icon: <IoIcons.IoMdLogOut />,
  },
];

/**
 *  {
    title: "Overview",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Users",
        path: "/overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
 * 
 */
