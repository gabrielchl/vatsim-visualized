import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <div className="flex flex-row gap-1 items-center py-2 px-6">
          <Link href="/" className="mr-4 flex flex-row items-center gap-1"><img className="h-8 inline" src="/logo.png" height="24" width="auto" alt="VATSIM Visualized logo"/>VATSIM Visualized</Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Map
                  </NavigationMenuLink>
                </Link>
                <Link href="/live-stats" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Live Stats
                  </NavigationMenuLink>
                </Link>
                <Link href="/historic-stats" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Historic Stats
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {children}
        <div className="py-1 px-6 text-sm text-gray-500">
          VATSIM Visualized by <a href="https://gabrielchl.dev/" className="text-blue-400 hover:underline">Gabriel Lee</a> :&#41;
        </div>
      </body>
    </html>
  );
}
