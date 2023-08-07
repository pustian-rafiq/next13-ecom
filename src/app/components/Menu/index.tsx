"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Cart from "../Cart";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/works" },
  { id: 4, title: "Contact", url: "/contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          width={20}
          height={20}
          alt=""
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          width={20}
          height={20}
          alt=""
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="bg-red-500 py-4 text-white flex flex-col absolute top-24 left-0 justify-center items-center gap-8 w-full h:[calc(100vh-6rem)]">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          <Link href={"/login"} onClick={() => setOpen(false)}>
            Login
          </Link>
          <Link href={"/cart"} onClick={() => setOpen(false)}>
            <Cart />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
