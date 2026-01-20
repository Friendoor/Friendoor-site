import { Project, Service, NavItem, Client } from './types';

export const AGENCY_NAME = "奮鬥一族";
export const AGENCY_TAGLINE = "Visual Storytelling for the Bold";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Clients', href: '#clients' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Lenovo Product Launch Highlight",
    category: "Videography",
    image: "https://i.vimeocdn.com/video/620577562-fe8682b23a85ba5cbd9389796cc38347ed6aaabd7d81f0590041275319fffdbd-d_960x540?&r=pad&region=us",
    videoUrl: "https://vimeo.com/204119161",
    size: "large"
  },
  {
    id: 2,
    title: "HKTVMall WEet Market Express",
    category: "Videography",
    image: "https://i.vimeocdn.com/video/1710198101-006fa5e8820a8ef22b77244010c1369cd8c7cfb62d5d3919d737dd4a75be7c74-d_960x540?&r=pad&region=us",
    videoUrl: "https://vimeo.com/854276742",
    size: "medium"
  },
  {
    id: 3,
    title: "MLB Fashion Show & Party",
    category: "Videography",
    image: "https://i.vimeocdn.com/video/743075754-f957e6d010a310d039e8023d52b9a48252322547335382be7725ac1752e464f6-d_960x540?&r=pad&region=us",
    videoUrl: "https://vimeo.com/303959331",
    size: "medium"
  },
  {
    id: 4,
    title: "英國保誠保險「遠」系列-親情篇",
    category: "Videography",
    image: "https://i.vimeocdn.com/video/735688471-2a4f9976cdb5341f768d71009b1f98eaa00dbe3467fe46631081e22383e7c4db-d_960x540?&r=pad&region=us",
    videoUrl: "https://vimeo.com/297893793",
    size: "large"
  },
  {
    id: 5,
    title: "Louis Vuitton Annual Dinner 2016 Highlight",
    category: "Videography",
    image: "https://i.vimeocdn.com/video/620578794-56e897c6f7bc82a0007a97baae148f350621c7752f635e2c0a044926298293dc-d_960x540?&r=pad&region=us",
    videoUrl: "https://vimeo.com/204118985",
    size: "medium"
  },
  {
    id: 6,
    title: "HKJC VR Promotion Video",
    category: "Videography",
    image: "https://i.vimeocdn.com/video/743089768-3e13bcf1070832506d176aed9095aa1890e035ecd24f28725169ad198cd916b4-d_960x540?&r=pad&region=us",
    videoUrl: "https://vimeo.com/303971101",
    size: "large"
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Photography",
    description: "Capturing moments that define brands and tell stories.",
    icon: "Camera"
  },
  {
    id: 2,
    title: "Videography",
    description: "Cinematic production for commercials, music videos, and social.",
    icon: "Video"
  },
  {
    id: 3,
    title: "Art Direction",
    description: "Guiding the visual language of your campaign from concept to execution.",
    icon: "PenTool"
  },
  {
    id: 4,
    title: "Digital Strategy",
    description: "Data-driven creative distribution to reach your audience.",
    icon: "Share2"
  }
];

export const CLIENTS: Client[] = [
  { id: 1, name: "Bct", logo: "https://www.bcthk.com/content/dam/bcthk-sites/image/general/logo-2024.png" },
  { id: 2, name: "SunLife", logo: "https://1000logos.net/wp-content/uploads/2022/09/Sun-Life-Financial-Logo.png" },
  { id: 3, name: "FWD", logo: "https://brandlogos.net/wp-content/uploads/2022/09/fwd_group-logo_brandlogos.net_86mrt.png" },
  { id: 4, name: "Prudential", logo: "https://1000logos.net/wp-content/uploads/2020/09/Prudential-Logo-2001.png" },
  { id: 5, name: "HKDI", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgYDu8ZEtA5CnsZmn_789DyESrFXO_OFicw&s" },
  { id: 6, name: "LVMH", logo: "https://1000logos.net/wp-content/uploads/2020/10/LVMH-logo.jpg" },
  { id: 7, name: "HKTV", logo: "https://wondermami.com.hk/wp-content/uploads/2019/03/hktv-mall-logo.png" },
  { id: 8, name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Lenovo_Global_Corporate_Logo.png" },
];