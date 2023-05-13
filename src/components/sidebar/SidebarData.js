import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Menu",
    icon: <RiIcons.RiBarChartHorizontalFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Kategori",
        path: "/home",
      },
      {
        title: "Sub Kategori",
        path: "/home/sub-kategori",
      },
      {
        title: "Bibliografi",
        path: "/home/book-detail",
      },
      {
        title: "Daftar Isi",
        path: "/home/table-of-content",
      },
      {
        title: "Isi Konten",
        path: "/home/book-content",
      },
    ],
  },
  // {
  //   title: "Tambah",
  //   icon: <AiIcons.AiFillFileAdd />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: "Kategori Buku",
  //       path: "/tambah/kategori-buku",
  //     },
  //     {
  //       title: "Sub Kategori Buku",
  //       path: "/tambah/sub-kategori-buku",
  //     },
  //     {
  //       title: "Buku",
  //       path: "/tambah/buku",
  //     },
  //     {
  //       title: "Isi Konten Buku",
  //       path: "/tambah/konten-buku",
  //     },
  //   ],
  // },
  // {
  //   title: "Super Admin",
  //   icon: <RiIcons.RiUserFill />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  //   subNav: [
  //     {
  //       title: "User",
  //       path: "/home/users",
  //     },
  //   ],
  // },
  {
    title: "User",
    icon: <RiIcons.RiUserFill />,
    path: "/home/users",
  },
  {
    title: "Pengaturan",
    icon: <RiIcons.RiSettings5Line />,
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
