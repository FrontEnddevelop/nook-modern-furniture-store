import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import Navbar from "/Components/Navbar/Navbar.jsx"

export default function EmptyCart() {
  return (
    <>
    <Navbar/>
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="flex w-full max-w-50 flex-col items-center text-center text-[#1E1B18]">
        <ShoppingCart size={36} strokeWidth={1.5} />

        <h2 className="mt-8 text-xl">Your cart is empty</h2>

        <Link
          href="/"
          className="mt-8 flex h-[58px] w-full items-center justify-center whitespace-nowrap rounded-full bg-[#3a3631] px-8 text-base text-white transition hover:bg-black"
        >
          Continue shopping
        </Link>

        <div className="mt-20 w-full border-t border-neutral-200 pt-8 text-base leading-relaxed">
          <p>Have an account?</p>
          <p>
            <Link href="/account/login" className="underline">
              Log in
            </Link>{" "}
            to check out faster.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}