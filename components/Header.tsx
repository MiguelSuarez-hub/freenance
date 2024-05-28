"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <header
        className={`h-14 w-full py-3 px-5 flex items-center bg-[#182524] justify-between`}
      >
        <Link href="/">
          <Image
            width={150}
            height={36}
            src="./logo.svg"
            alt="Logo Freenance"
          />
        </Link>
        <div>
          <Button className="text-white text-lg font-semibold" variant="ghost" onClick={()=>router.push('/sign-in')}>
            Sign in
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
