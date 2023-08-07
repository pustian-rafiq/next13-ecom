import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="flex gap-3">
      <Image src="/cart.png" alt="" height={20} width={20} />
      <Link href="/cart">Cart(3)</Link>
    </div>
  );
};

export default Cart;
