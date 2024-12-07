import { Home, Briefcase, Search, Settings, User, Users } from "lucide-react";

const sidebarLinks = [
  { icon: Home, label: "Home", href: "/", iconColor: "blue" },
  { icon: Briefcase, label: "Timeline", href: "/timeline", iconColor: "green" },
  { icon: Search, label: "Search", href: "/search", iconColor: "red" },
  { icon: Settings, label: "Settings", href: "/settings", iconColor: "yellow" },
  { icon: User, label: "User", href: "/user", iconColor: "purple" },
  { icon: Users, label: "Teams", href: "/teams", iconColor: "orange" },
];

export default sidebarLinks;