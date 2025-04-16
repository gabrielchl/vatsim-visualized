import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetTitle } from "@/components/ui/sheet";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VATSIM Visualized",
  description: "Visualize live and historic data from VATSIM",
};

const links = [
  {href: '/', label: 'Map'},
  {href: '/live-stats', label: 'Live Stats'},
  {href: '/historic-stats', label: 'Historic Stats'},
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased min-h-screen`}
      >
        <div className="flex flex-row gap-1 items-center py-2 px-6">
          <Link href="/" className="mr-1 flex flex-row items-center gap-1"><img className="h-8 inline" src="/logo.svg" height="32" width="auto" alt="VATSIM Visualized logo"/>VATSIM Visualized</Link>
          <Sheet>
            <SheetTrigger asChild><Button variant="outline" className="sm:hidden ml-auto"><Menu /></Button></SheetTrigger>
            <SheetContent>
              <SheetTitle hidden>Navigation menu</SheetTitle>
              <div className="flex flex-col gap-4 mx-4 mt-8 text-md font-semibold">
                {links.map(({href, label}) => (
                  <SheetClose key={label} asChild>
                    <Link href={href}>
                      {label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <NavigationMenu className="hidden sm:block">
            <NavigationMenuList>
              {links.map(({href, label}) => (
                <NavigationMenuItem key={label}>
                  <NavigationMenuLink asChild>
                    <Link href={href}>
                      {label}
                    </Link>
                  </NavigationMenuLink>
              </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {children}
        <div className="py-1 px-6 text-sm text-gray-500">
          VATSIM Visualized by <a href="https://gabrielchl.dev/" className="text-blue-400 hover:underline">Gabriel Lee</a>, <a href="https://github.com/gabrielchl/vatsim-visualized" className="text-blue-400 hover:underline">Source code</a> :&#41;
        </div>
      </body>
    </html>
  );
}
