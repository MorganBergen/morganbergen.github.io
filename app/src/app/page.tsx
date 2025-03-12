import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContnet,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <Button variant="secondary">Click me</Button>


      </main>
    </div>
  );
}