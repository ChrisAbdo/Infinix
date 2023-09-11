"use client";

import React from "react";
import AnimatedNumber from "./animated-number";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
  DoubleArrowUpIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const SOCIAL_LINKS = [
  { icon: GitHubLogoIcon, href: "https://www.github.com/chrisabdo" },
  { icon: TwitterLogoIcon, href: "https://www.twitter.com/abdo_eth" },
];

export default function LandingPage() {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const fetchCounter = async () => {
    const res = await fetch("/api/counter");
    const data = await res.json();
    setCount(data.value);
  };

  React.useEffect(() => {
    // Fetch the current value of the counter on component mount
    fetchCounter();

    // Fetch the counter value every second to keep it updated
    const intervalId = setInterval(fetchCounter, 1000);

    // Cleanup: Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="bg-background">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <h1 className="flex items-center text-xl font-light tracking-tight text-foreground">
              <DoubleArrowUpIcon className="h-[1.2rem] w-[1.2rem]" />
              Infinix
            </h1>
          </div>

          <div className="flex flex-1 justify-end space-x-2">
            {SOCIAL_LINKS.map(({ icon: Icon, href }) => (
              <Link
                href={href}
                key={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button size="icon" variant="outline">
                  <Icon className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </Link>
            ))}

            <ModeToggle />
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
              onClick={() => setOpen(!open)}
              className="relative rounded-full cursor-pointer px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-ring/10 hover:ring-ring/20 transition-all duration-200"
            >
              This is an experimental application.{" "}
              <span className="font-semibold text-foreground">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </div>

          <AlertDialog open={open} onOpenChange={() => setOpen(!open)}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Infinix</AlertDialogTitle>
                <AlertDialogDescription>
                  This is an application that will count every second of its
                  lifetime, as faithfully as the ancient storytellers of yore
                  who, by the glow of firelight, recounted tales that spanned
                  generations. Legend has it that this website shall continue
                  its tireless vigil until the end of digital days. Yet, be
                  warned, brave surfer of cyberspace: only two fates could halt
                  its noble quest — should the sacred domain name fade into the
                  annals of forgotten lore or the mighty kingdom of Vercel
                  crumble to pixels. Until such time, it counts, uninterrupted,
                  a testament to the enduring spirit of digital folklore.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <div className="text-center">
            {/* <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Infinix
            </h1> */}
            <h1 className="animate-torch select-none whitespace-nowrap bg-gradient-to-r from-background via-white to-background bg-[length:100px_30px] bg-clip-text bg-no-repeat text-lg font-bold uppercase text-transparent sm:bg-[length:200px_50px] sm:text-4xl">
              Infinix
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Time online &darr;
            </p>
            <div className="mt-2">
              <AnimatedNumber value={count} /> seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
