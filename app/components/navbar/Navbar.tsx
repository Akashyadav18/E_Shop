import React from "react";
import Container from "../Container";
import Link from "next/link";
import { Redressed } from "next/font/google";

const redressed = Redressed({subsets: ["latin"], weight: ["400"]});

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-slate-200 z-10">
      <div className="py-4 border-b-2 border-b-slate-600">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className={`${redressed.className} font-bold text-2xl`}>E Shop</Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-4 md:gap-20">
              <div>Cart</div>
              <div>User Menu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
