import { Home, Newspaper } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Hacker News",
    to: "/hacker-news",
    icon: <Newspaper className="h-4 w-4" />,
    page: <Index />,
  },
];