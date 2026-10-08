"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/customers", label: "Customers" },
  { href: "/settings", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 border-r border-slate-300 bg-slate-100 p-4 text-slate-900">
      <nav className="flex flex-col gap-2" aria-label="Main navigation">
        {navItems.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={[
                "rounded px-3 py-2 font-medium transition-colors hover:bg-slate-300 hover:text-slate-950",
                isActive ? "bg-slate-300 text-slate-950" : "text-slate-900",
              ].join(" ")}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
