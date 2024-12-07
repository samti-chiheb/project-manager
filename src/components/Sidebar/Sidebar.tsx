"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { ChevronDown, ChevronUp, LockIcon, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import SidebarLink from "./SidebarLinkItem";
import sidebarLinks from "./sidebarLinks";
import priorityLinks from "./priorityLinks";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}`;

  return (
    <div className={sidebarClassNames}>
      <div className="[h-100%] flex w-full flex-col justify-start ">
        {/* top logo  */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            PManager
          </div>
          {isSidebarCollapsed ? null : (
            <button
              className="py-3"
              onClick={() => {
                dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
              }}
            >
              <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white" />
            </button>
          )}
        </div>

        {/* team */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <div>
            <h3 className="text-md font-bold uppercase tracking-wide dark:text-gray-200">
              chiheb team
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>

        {/* navbar links  */}
        <nav className="z-10 w-full">
          {sidebarLinks.map(({ icon, label, href }) => (
            <SidebarLink key={href} icon={icon} label={label} href={href} />
          ))}
        </nav>

        {/* project links  */}
        <button
          className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
          onClick={() => {
            setShowProjects((prev) => !prev);
          }}
        >
          <span className="">Projects</span>
          {showProjects ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>

        {/* projects list  */}

        {/* priority links */}
        <button
          className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
          onClick={() => {
            setShowPriority((prev) => !prev);
          }}
        >
          <span className="">Priority</span>
          {showPriority ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        {showPriority &&
          priorityLinks.map(({ icon, label, href }) => (
            <SidebarLink key={href} icon={icon} label={label} href={href} />
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
