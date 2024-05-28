import React, { useContext } from "react";
import { SidebarContext } from "./Navigation";
import {
  HomeIcon,
  FileSpreadsheet,
  PiggyBank,
  Coins,
  CreditCard,
} from "lucide-react";
import Link from "next/link";

type ItemProps = {
  text: string;
  href: string;
  active?: boolean;
};

export function SidebarItem({ text, href, active }: ItemProps) {
  const expanded = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center justify-between h-11 py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-white to-[#E2F1E6] text-green-700"
            : "hover:bg-indigo-50 text-gray-600"
        }
        ${expanded ? "w-full" : "w-11"}
    `}
    >
      <Link
        href={href}
        className="w-full flex items-center justify-start gap-x-2"
      >
        {text === "Home" ? (
          <HomeIcon size={20} />
        ) : text === "Records" ? (
          <FileSpreadsheet size={20} />
        ) : text === "Savings" ? (
          <PiggyBank size={20} />
        ) : text === "Debts" ? (
          <Coins size={20} />
        ) : (
          <CreditCard size={20} />
        )}
        <p
          className={`overflow-hidden transition-all ${
            expanded ? "block" : "hidden"
          }`}
        >
          {text}
        </p>
      </Link>

      {!expanded && (
        <Link
          href={href}
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-gradient-to-tr from-white to-[#E2F1E6] text-green-700 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </Link>
      )}
    </li>
  );
}
