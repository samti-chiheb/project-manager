import {
  AlertCircle,
  ShieldAlert,
  AlertTriangle,
  AlertOctagon,
  Layers3,
} from "lucide-react";

const BASE_URL = "/priority";

const priorityLinks = [
  {
    icon: AlertCircle,
    label: "Urgent",
    href: `${BASE_URL}/urgent`,
    description: "Tasks that require immediate attention",
  },
  {
    icon: ShieldAlert,
    label: "High",
    href: `${BASE_URL}/high`,
    description: "High priority tasks",
  },
  {
    icon: AlertTriangle,
    label: "Medium",
    href: `${BASE_URL}/medium`,
    description: "Medium priority tasks",
  },
  {
    icon: AlertOctagon,
    label: "Low",
    href: `${BASE_URL}/low`,
    description: "Low priority tasks",
  },
  {
    icon: Layers3,
    label: "Backlog",
    href: `${BASE_URL}/backlog`,
    description: "Tasks in the backlog",
  },
];

export default priorityLinks;