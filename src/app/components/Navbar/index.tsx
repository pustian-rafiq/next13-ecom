import Image from "next/image";
import Link from "next/link";
import Cart from "../Cart";
import Menu from "../Menu";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase lg:px-20 xl:px-40">
      {/* Left Link */}
      <div className="hidden md:flex gap-4 flex-1 ">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* Logo */}
      <div className="flex-1 md:text-center font-bold">
        <Link href={"/"}>Massimo</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 456 78</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <Cart />
      </div>
    </div>
  );
};

export default Navbar;
