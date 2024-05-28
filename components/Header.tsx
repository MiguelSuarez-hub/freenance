"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useSession } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import { Loader2 } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const { session, isLoaded } = useSession();

  return (
    <>
      <header
        className={`h-14 w-full py-3 px-5 flex items-center justify-between bg-[#182524] ${
          session?.user && "md:justify-end"
        }`}
      >
        {!isLoaded ? (
          <Loader2 className="animate-spin text-muted-foreground" />
        ) : session?.user ? (
          <Navigation />
        ) : (
          <Image
            width={150}
            height={36}
            src="./logo.svg"
            alt="Logo Freenance"
          />
        )}
        <div>
          {!isLoaded ? (
            <Loader2 className="animate-spin text-muted-foreground" />
          ) : session?.user ? (
            <UserButton />
          ) : (
            <Button
              className="text-white text-lg font-semibold"
              variant="ghost"
              onClick={() => router.push("/sign-in")}
            >
              Sign in
            </Button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
