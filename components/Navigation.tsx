// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import Image from "next/image";
// import React, { createContext, useState } from "react";
// import { useMedia } from "react-use";
// import { Menu, ChevronLast, ChevronFirst } from "lucide-react";

// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
// import { SidebarItem } from "./SidebarItem";

// export const SidebarContext = createContext(false);

// const routes = [
//   {
//     href: "/",
//     label: "Home",
//   },
//   {
//     href: "/records",
//     label: "Records",
//   },
//   {
//     href: "/savings",
//     label: "Savings",
//   },
//   {
//     href: "/debts",
//     label: "Debts",
//   },
//   {
//     href: "/cards",
//     label: "Credit Cards",
//   },
// ];

// const Navigation = () => {
//   const [expanded, setExpanded] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   const router = useRouter();
//   const pathname = usePathname();
//   const isMobile = useMedia("(max-width: 767px)", false);

//   const onClick = (href: string) => {
//     router.push(href);
//     setIsOpen(false);
//   };

//   if (isMobile) {
//     return (
//       <Sheet open={isOpen} onOpenChange={setIsOpen}>
//         <SheetTrigger>
//           <Button
//             variant="outline"
//             size="sm"
//             className="font-normal bg-white/10 hover:bg-white/20 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
//           >
//             <Menu className="size-4" />
//           </Button>
//         </SheetTrigger>
//         <SheetContent side="left" className="px-4">
//           <nav className="flex flex-col gap-y-2 pt-6">
//             {routes.map((route) => (
//               <Button
//                 key={route.href}
//                 disabled={route.href === pathname}
//                 variant={route.href === pathname ? "secondary" : "ghost"}
//                 onClick={() => onClick(route.href)}
//                 className="text-black"
//               >
//                 {route.label}
//               </Button>
//             ))}
//           </nav>
//         </SheetContent>
//       </Sheet>
//     );
//   }

//   return (
//     <aside
//       className={`absolute top-0 left-0 z-10 hidden md:block h-screen ${
//         expanded ? "w-56" : " w-16"
//       }`}
//     >
//       <nav className="h-full flex flex-col bg-white border-r shadow-sm">
//         <div className="h-14 p-3 pb-2 flex justify-between items-center bg-[#182524]">
//           <Image
//             width={150}
//             height={44}
//             src="./logo.svg"
//             alt="Logo Freenance"
//             className={`overflow-hidden transition-all ${
//               expanded ? "flex" : "hidden"
//             }`}
//           />
//           <button
//             onClick={() => setExpanded((curr) => !curr)}
//             className="p-1.5 rounded-lg hover:bg-gray-100 text-green-700"
//           >
//             {expanded ? <ChevronFirst /> : <ChevronLast />}
//           </button>
//         </div>

//         <SidebarContext.Provider value={expanded}>
//           <ul
//             className={`flex flex-col justify-center items-center h-[calc(100%-56px)] ${
//               expanded && "px-3"
//             }`}
//           >
//             {routes.map((route) => (
//               <SidebarItem
//                 key={route.href}
//                 text={route.label}
//                 href={route.href}
//                 active={route.href === pathname}
//               />
//             ))}
//           </ul>
//         </SidebarContext.Provider>
//       </nav>
//     </aside>
//   );
// };

// export default Navigation;
